import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/cron/reminders
 *
 * Vercel Cron job that runs daily at 8:00 AM (Europe/Berlin).
 * Sends:
 * - Check-in reminders (3 days before)
 * - Check-out reminders (morning of checkout day)
 * - Cleaning reminders (1 day before cleaning date)
 * - Review requests (2 days after check-out)
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

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  console.log(`Running reminder cron job for: ${todayStr}`);

  // TODO: When Supabase is connected:
  //
  // 1. Check-in reminders (3 days before)
  // const upcomingCheckIns = await supabase
  //   .from('bookings')
  //   .select('*, guests(*), properties(*)')
  //   .eq('status', 'confirmed')
  //   .eq('check_in', addDays(today, 3).toISOString().split('T')[0]);
  // for (const booking of upcomingCheckIns) {
  //   await sendCheckInReminder({ ... });
  // }
  //
  // 2. Check-out reminders (morning of)
  // const todayCheckOuts = await supabase
  //   .from('bookings')
  //   .select('*, guests(*), properties(*)')
  //   .eq('status', 'confirmed')
  //   .eq('check_out', todayStr);
  // for (const booking of todayCheckOuts) {
  //   await sendCheckOutReminder({ ... });
  // }
  //
  // 3. Cleaning reminders (unconfirmed, cleaning date = tomorrow)
  // const tomorrowCleanings = await supabase
  //   .from('cleaning_notifications')
  //   .select('*, bookings(*, properties(*))')
  //   .eq('status', 'notified')
  //   .eq('cleaning_date', addDays(today, 1).toISOString().split('T')[0]);
  // for (const cleaning of tomorrowCleanings) {
  //   await sendCleaningReminder({ ... });
  // }
  //
  // 4. Review requests (2 days after check-out)
  // const recentCheckOuts = await supabase
  //   .from('bookings')
  //   .select('*, guests(*), properties(*)')
  //   .eq('status', 'completed')
  //   .eq('check_out', subDays(today, 2).toISOString().split('T')[0]);
  // for (const booking of recentCheckOuts) {
  //   await sendReviewRequest({ ... });
  // }

  return NextResponse.json({
    success: true,
    date: todayStr,
    message: "Reminder cron completed (no DB connected yet)",
  });
}
