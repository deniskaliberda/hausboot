import { NextRequest, NextResponse } from "next/server";
import { getPropertyBySlug } from "@/lib/data/properties";

/**
 * GET /api/availability?propertyId=1&checkIn=2026-06-01&checkOut=2026-06-05
 *
 * Returns availability status and price calculation for the requested dates.
 * Currently uses static data; will query Supabase blocked_dates + bookings later.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const propertyId = searchParams.get("propertyId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  if (!propertyId || !checkIn || !checkOut) {
    return NextResponse.json(
      { error: "propertyId, checkIn und checkOut sind erforderlich" },
      { status: 400 }
    );
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    return NextResponse.json(
      { error: "Ungültiges Datumsformat" },
      { status: 400 }
    );
  }

  if (checkInDate >= checkOutDate) {
    return NextResponse.json(
      { error: "Check-out muss nach Check-in liegen" },
      { status: 400 }
    );
  }

  // TODO: Replace with Supabase query when DB is connected
  // For now, return empty blocked dates (everything available)
  const blockedDates: string[] = [];

  // Check if any requested dates overlap with blocked dates
  const isAvailable = !blockedDates.some((blocked) => {
    const blockedDate = new Date(blocked);
    return blockedDate >= checkInDate && blockedDate < checkOutDate;
  });

  return NextResponse.json({
    available: isAvailable,
    blockedDates,
    propertyId,
    checkIn,
    checkOut,
  });
}
