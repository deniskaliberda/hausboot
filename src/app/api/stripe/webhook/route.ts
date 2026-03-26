import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/client";
import { sendBookingConfirmation, sendPaymentFailed } from "@/lib/resend/send";
import { PROPERTY } from "@/lib/data/properties";

/**
 * POST /api/stripe/webhook
 *
 * Handles Stripe webhook events, primarily checkout.session.completed.
 * On successful payment:
 * 1. Sends confirmation emails (guest + admin)
 * 2. TODO (Supabase): Create guest, booking, blocked_dates, cleaning notification
 */
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET not configured");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const metadata = session.metadata;

      if (!metadata?.property_id) {
        console.error("Webhook: Missing property_id in metadata");
        break;
      }

      console.log("Payment successful:", {
        propertyId: metadata.property_id,
        checkIn: metadata.check_in,
        checkOut: metadata.check_out,
        guestEmail: metadata.guest_email,
        totalPrice: metadata.total_price,
        sessionId: session.id,
      });

      // TODO: When Supabase is connected:
      // 1. Upsert guest record
      // 2. Create booking with auto-generated booking_number
      // 3. Create blocked_dates for the booked period
      // 4. Create cleaning notification

      // Generate a temporary booking number (will come from DB trigger later)
      const year = new Date().getFullYear();
      const tempNumber = `HB-${year}-${String(Date.now()).slice(-4)}`;

      // Send confirmation emails
      try {
        await sendBookingConfirmation({
          guestFirstName: metadata.guest_first_name || "",
          guestLastName: metadata.guest_last_name || "",
          guestEmail: metadata.guest_email || "",
          guestPhone: metadata.guest_phone || "",
          propertyName: PROPERTY.name,
          checkIn: metadata.check_in || "",
          checkOut: metadata.check_out || "",
          nights: parseInt(metadata.nights || "0"),
          numAdults: parseInt(metadata.num_adults || "0"),
          numChildren: parseInt(metadata.num_children || "0"),
          subtotal: parseInt(metadata.subtotal || "0"),
          cleaningFee: parseInt(metadata.cleaning_fee || "0"),
          totalPrice: parseInt(metadata.total_price || "0"),
          bookingNumber: tempNumber,
          specialRequests: metadata.special_requests || undefined,
        });
        console.log("Confirmation emails sent for:", tempNumber);
      } catch (err) {
        console.error("Failed to send confirmation emails:", err);
      }

      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object;
      const metadata = session.metadata;

      if (metadata?.guest_email && metadata?.guest_first_name) {
        try {
          await sendPaymentFailed({
            guestFirstName: metadata.guest_first_name,
            guestEmail: metadata.guest_email,
            propertyName: PROPERTY.name,
            checkIn: metadata.check_in || "",
            checkOut: metadata.check_out || "",
          });
          console.log("Payment failed email sent to:", metadata.guest_email);
        } catch (err) {
          console.error("Failed to send payment failed email:", err);
        }
      }

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
