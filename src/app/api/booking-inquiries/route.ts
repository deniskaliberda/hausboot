import { NextRequest, NextResponse } from "next/server";
import { bookingInquiryFormSchema } from "@/lib/utils/validation";
import { sendBookingInquiryEmails } from "@/lib/resend/send";

/**
 * POST /api/booking-inquiries
 *
 * Receives a houseboat booking inquiry, validates it,
 * and sends confirmation emails (guest + admin at info@urlaubsbleibe.de).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = bookingInquiryFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Ungültige Formulardaten", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // Generate inquiry number
    const year = new Date().getFullYear();
    const inquiryNumber = `HB-${year}-${String(Date.now()).slice(-4)}`;

    // Send confirmation emails
    try {
      await sendBookingInquiryEmails({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        numGuests: data.numGuests,
        message: data.message,
        inquiryNumber,
      });
    } catch (err) {
      console.error("Failed to send booking inquiry emails:", err);
    }

    return NextResponse.json({
      success: true,
      inquiryNumber,
      message: "Buchungsanfrage erfolgreich eingereicht",
    });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
