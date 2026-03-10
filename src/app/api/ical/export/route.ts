import { NextRequest, NextResponse } from "next/server";
import { generateICal } from "@/lib/ical/generator";

/**
 * GET /api/ical/export?propertyId=1
 *
 * Generates an iCal feed for a property's confirmed bookings.
 * This URL is added to Airbnb's "Import Calendar" feature.
 */
export async function GET(request: NextRequest) {
  const propertyId = request.nextUrl.searchParams.get("propertyId");

  if (!propertyId) {
    return NextResponse.json(
      { error: "propertyId is required" },
      { status: 400 }
    );
  }

  // TODO: When Supabase is connected, fetch confirmed bookings for this property
  // const { data: bookings } = await supabase
  //   .from('bookings')
  //   .select('id, check_in, check_out, booking_number')
  //   .eq('property_id', propertyId)
  //   .in('status', ['confirmed', 'completed']);

  const events: { uid: string; startDate: string; endDate: string; summary: string }[] = [];

  // Convert bookings to iCal events
  // for (const booking of bookings) {
  //   events.push({
  //     uid: `booking-${booking.id}@luxus-hausboote.de`,
  //     startDate: booking.check_in,
  //     endDate: booking.check_out,
  //     summary: `Buchung ${booking.booking_number}`,
  //   });
  // }

  const ical = generateICal(events, "Luxus Hausboote Berlin");

  return new NextResponse(ical, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="hausboot-${propertyId}.ics"`,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
