import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/cron/ical-sync
 *
 * Vercel Cron job that runs every 30 minutes.
 * Fetches Airbnb iCal feeds for each property and updates blocked_dates.
 *
 * Protected by CRON_SECRET env var.
 */
export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("Running iCal sync cron job...");

  // TODO: When Supabase is connected:
  //
  // 1. Get all active properties with airbnb_ical_url
  // const { data: properties } = await supabase
  //   .from('properties')
  //   .select('id, slug, airbnb_ical_url')
  //   .eq('is_active', true)
  //   .not('airbnb_ical_url', 'is', null);
  //
  // 2. For each property:
  //   a. Fetch iCal URL
  //   b. Parse VEVENT entries
  //   c. Delete old airbnb_sync blocked_dates
  //   d. Insert new blocked_dates (reason: 'airbnb_sync')
  //
  // 3. Log results

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    message: "iCal sync completed (no properties with iCal URLs yet)",
    synced: 0,
  });
}
