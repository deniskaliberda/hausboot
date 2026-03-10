import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/client";
import { getPropertyBySlug } from "@/lib/data/properties";
import { calculateBookingPrice } from "@/lib/utils/pricing";
import { bookingFormSchema } from "@/lib/utils/validation";
import { SITE_URL, STRIPE_CHECKOUT_EXPIRY_SECONDS } from "@/lib/utils/constants";

/**
 * POST /api/stripe/checkout
 *
 * Creates a Stripe Checkout Session for a houseboat booking.
 * Receives booking form data, validates it, calculates price, and redirects to Stripe.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Find property by ID (we get propertyId from the form)
    const allProperties = (await import("@/lib/data/properties")).getAllProperties();
    const property = allProperties.find((p) => p.id === body.propertyId);

    if (!property) {
      return NextResponse.json(
        { error: "Hausboot nicht gefunden" },
        { status: 404 }
      );
    }

    // Validate form data
    const result = bookingFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Ungültige Formulardaten", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // Calculate price
    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const pricing = calculateBookingPrice(
      checkIn,
      checkOut,
      property.base_price_per_night,
      property.cleaning_fee
    );

    if (pricing.nights < property.min_nights) {
      return NextResponse.json(
        { error: `Mindestaufenthalt: ${property.min_nights} Nächte` },
        { status: 400 }
      );
    }

    // TODO: Check availability against Supabase blocked_dates

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "de",
      payment_method_types: ["card", "giropay", "sofort"],
      expires_at: Math.floor(Date.now() / 1000) + STRIPE_CHECKOUT_EXPIRY_SECONDS,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: property.name,
              description: `${pricing.nights} Nächte · ${data.checkIn} bis ${data.checkOut}`,
              images: property.property_images
                .filter((img) => img.is_hero)
                .map((img) => `${SITE_URL}${img.url}`),
            },
            unit_amount: pricing.subtotal,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Endreinigung",
              description: "Einmalige Reinigungsgebühr",
            },
            unit_amount: pricing.cleaningFee,
          },
          quantity: 1,
        },
      ],
      customer_email: data.email,
      metadata: {
        property_id: property.id,
        property_slug: property.slug,
        check_in: data.checkIn,
        check_out: data.checkOut,
        nights: pricing.nights.toString(),
        num_adults: data.numAdults.toString(),
        num_children: data.numChildren.toString(),
        guest_first_name: data.firstName,
        guest_last_name: data.lastName,
        guest_email: data.email,
        guest_phone: data.phone,
        guest_address: data.addressLine1,
        guest_postal_code: data.postalCode,
        guest_city: data.city,
        guest_country: data.country,
        special_requests: data.specialRequests || "",
        price_per_night: pricing.pricePerNight.toString(),
        subtotal: pricing.subtotal.toString(),
        cleaning_fee: pricing.cleaningFee.toString(),
        total_price: pricing.totalPrice.toString(),
      },
      success_url: `${SITE_URL}/hausboote/${property.slug}/buchen/bestaetigung?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/hausboote/${property.slug}/buchen?cancelled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session" },
      { status: 500 }
    );
  }
}
