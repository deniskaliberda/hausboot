import { NextRequest, NextResponse } from "next/server";
import { inquiryFormSchema } from "@/lib/utils/validation";
import { sendInquiryEmails } from "@/lib/resend/send";

/**
 * POST /api/inquiries
 *
 * Receives an Oldtimer Tour inquiry, validates it,
 * stores it (TODO: Supabase), and sends confirmation emails.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = inquiryFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Ungültige Formulardaten", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // Generate temporary inquiry number (will come from DB trigger later)
    const year = new Date().getFullYear();
    const inquiryNumber = `OT-${year}-${String(Date.now()).slice(-4)}`;

    // TODO: When Supabase is connected:
    // const { data: inquiry } = await supabase
    //   .from('inquiries')
    //   .insert({
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     email: data.email,
    //     phone: data.phone,
    //     company: data.company,
    //     event_type: data.eventType,
    //     preferred_date: data.preferredDate,
    //     alternative_date: data.alternativeDate,
    //     num_guests: data.numGuests,
    //     message: data.message,
    //     status: 'new',
    //   })
    //   .select()
    //   .single();

    const eventTypeLabels: Record<string, string> = {
      corporate: "Firmenveranstaltung",
      private: "Private Feier",
      group_tour: "Gruppentour",
    };

    // Send confirmation emails
    try {
      await sendInquiryEmails({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        eventType: eventTypeLabels[data.eventType] || data.eventType,
        preferredDate: data.preferredDate,
        alternativeDate: data.alternativeDate,
        numGuests: data.numGuests,
        message: data.message,
        inquiryNumber,
      });
    } catch (err) {
      console.error("Failed to send inquiry emails:", err);
    }

    return NextResponse.json({
      success: true,
      inquiryNumber,
      message: "Anfrage erfolgreich eingereicht",
    });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
