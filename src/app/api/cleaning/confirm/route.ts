import { NextRequest, NextResponse } from "next/server";
import { sendCleaningConfirmedToAdmin } from "@/lib/resend/send";
import { SITE_URL } from "@/lib/utils/constants";

/**
 * GET /api/cleaning/confirm?token=xxx
 *
 * Called when cleaning staff clicks the confirmation link in their email.
 * Updates cleaning notification status and notifies admin.
 */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}?error=missing-token`);
  }

  // TODO: When Supabase is connected:
  // 1. Look up cleaning_notification by confirmation_token
  // 2. Update status from 'notified' to 'confirmed'
  // 3. Get booking details for admin notification

  // For now, send a test admin notification
  try {
    await sendCleaningConfirmedToAdmin({
      staffName: "Reinigungsteam",
      propertyName: "Luxus Hausboot",
      cleaningDate: new Date().toLocaleDateString("de-DE"),
      bookingNumber: "HB-2026-XXXX",
    });
  } catch (err) {
    console.error("Failed to send cleaning confirmed email:", err);
  }

  // Redirect to a simple confirmation page
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="de">
    <head><meta charset="utf-8"><title>Reinigung bestätigt</title>
    <style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f0fdfa;}
    .card{background:white;border-radius:12px;padding:48px;text-align:center;box-shadow:0 4px 6px rgba(0,0,0,0.1);max-width:400px;}
    h1{color:#0D6E6E;font-size:24px;margin:16px 0 8px;}
    p{color:#6b7280;font-size:14px;line-height:1.5;}</style></head>
    <body><div class="card">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0D6E6E" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <h1>Reinigung bestätigt!</h1>
    <p>Vielen Dank für Ihre Bestätigung. Der Vermieter wurde benachrichtigt.</p>
    </div></body></html>`,
    {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
