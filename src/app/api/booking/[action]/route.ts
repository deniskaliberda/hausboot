import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyBookingToken } from "@/lib/booking-token";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

type Props = {
  params: Promise<{ action: string }>;
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getNights(checkIn: string, checkOut: string): number {
  const a = new Date(checkIn);
  const b = new Date(checkOut);
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

export async function GET(request: Request, { params }: Props) {
  const { action } = await params;
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return new NextResponse(
      renderPage("Ungültiger Link", "Der Link enthält kein Token.", "#ef4444"),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  if (action !== "approve" && action !== "reject") {
    return new NextResponse(
      renderPage("Ungültige Aktion", "Nur 'approve' oder 'reject' sind erlaubt.", "#ef4444"),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const data = verifyBookingToken(token);
  if (!data) {
    return new NextResponse(
      renderPage("Ungültiger Token", "Der Link ist abgelaufen oder ungültig.", "#ef4444"),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const nights = getNights(data.checkIn, data.checkOut);

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Luxus Hausboot <buchung@urlaubsbleibe.de>";

    if (action === "approve") {
      await resend.emails.send({
        from: fromEmail,
        to: data.guestEmail,
        subject: `Buchungsbestätigung — Luxus Hausboot Berlin (${formatDate(data.checkIn)} - ${formatDate(data.checkOut)})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #22c55e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">Buchung bestätigt!</h1>
              <p style="margin: 8px 0 0; opacity: 0.9;">${data.bookingNumber}</p>
            </div>
            <div style="background: #f5f0ea; padding: 24px; border: 1px solid #e0d8cc; border-radius: 0 0 12px 12px;">
              <p>Liebe/r ${data.guestName},</p>
              <p>Ihre Buchung für das <strong>Luxus-Hausboot an der Dahme</strong> ist bestätigt!</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 6px 0; color: #666;">Buchungsnr.:</td><td style="padding: 6px 0; font-weight: 600;">${data.bookingNumber}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Anreise:</td><td style="padding: 6px 0; font-weight: 600;">${formatDate(data.checkIn)} (Check-in ab 15:00)</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Abreise:</td><td style="padding: 6px 0; font-weight: 600;">${formatDate(data.checkOut)} (Check-out bis 11:00)</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Nächte:</td><td style="padding: 6px 0;">${nights}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Gäste:</td><td style="padding: 6px 0;">${data.numGuests}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e0d8cc;">
                <p style="margin: 0; font-weight: 600;">Nächste Schritte:</p>
                <ol style="margin: 8px 0 0; padding-left: 20px; color: #666;">
                  <li>Wir melden uns in Kürze mit den Zahlungsdetails.</li>
                  <li>Nach Eingang der Anzahlung ist Ihre Buchung gesichert.</li>
                  <li>Vor Ihrer Anreise erhalten Sie die Zugangs- und Anfahrtsinformationen.</li>
                </ol>
              </div>
              <p style="margin-top: 24px; color: #666; font-size: 14px;">Bei Fragen antworten Sie einfach auf diese E-Mail oder rufen Sie an: +49 172 5642200<br><br>Herzliche Grüße,<br>Ihr Hausboot-Team</p>
            </div>
          </div>
        `,
      });
    } else {
      await resend.emails.send({
        from: fromEmail,
        to: data.guestEmail,
        subject: `Ihre Anfrage — Luxus Hausboot Berlin — Leider nicht verfügbar`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a4a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">Leider nicht verfügbar</h1>
            </div>
            <div style="background: #f5f0ea; padding: 24px; border: 1px solid #e0d8cc; border-radius: 0 0 12px 12px;">
              <p>Liebe/r ${data.guestName},</p>
              <p>vielen Dank für Ihr Interesse an unserem Luxus-Hausboot an der Dahme.</p>
              <p>Leider ist das Hausboot im gewünschten Zeitraum (<strong>${formatDate(data.checkIn)} – ${formatDate(data.checkOut)}</strong>) bereits belegt.</p>
              <p>Gerne können Sie auf unserer <a href="${BASE_URL}/buchen" style="color: #1a4a2e; font-weight: 600;">Buchungsseite</a> alternative Termine prüfen oder uns über das <a href="${BASE_URL}/kontakt" style="color: #1a4a2e; font-weight: 600;">Kontaktformular</a> erreichen.</p>
              <p style="margin-top: 24px; color: #666; font-size: 14px;">Herzliche Grüße,<br>Ihr Hausboot-Team</p>
            </div>
          </div>
        `,
      });
    }
  }

  const html =
    action === "approve"
      ? renderPage(
          "Buchung bestätigt",
          `Die Buchung ${data.bookingNumber} für ${data.guestName} (${formatDate(data.checkIn)} – ${formatDate(data.checkOut)}) wurde bestätigt. Der Gast wurde per E-Mail benachrichtigt.`,
          "#22c55e"
        )
      : renderPage(
          "Anfrage abgelehnt",
          `Die Anfrage von ${data.guestName} (${formatDate(data.checkIn)} – ${formatDate(data.checkOut)}) wurde abgelehnt. Der Gast wurde per E-Mail benachrichtigt.`,
          "#1a4a2e"
        );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function renderPage(title: string, message: string, color: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title></head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f0ea;">
    <div style="max-width: 480px; text-align: center; padding: 40px;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: ${color}; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center;">
        <span style="color: white; font-size: 32px;">${title.includes("bestätigt") ? "✓" : "✗"}</span>
      </div>
      <h1 style="font-size: 28px; margin: 0 0 16px; color: #1a1a1a;">${title}</h1>
      <p style="color: #666; line-height: 1.6;">${message}</p>
      <a href="${BASE_URL}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #1a4a2e; color: white; text-decoration: none; border-radius: 24px;">Zur Website</a>
    </div>
  </body></html>`;
}
