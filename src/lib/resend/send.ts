import { getResend } from "./client";
import { ADMIN_EMAIL } from "@/lib/utils/constants";
import { formatEuro } from "@/lib/utils/currency";
import { createBookingToken } from "@/lib/booking-token";
import { BookingConfirmationGuest } from "@/emails/templates/BookingConfirmationGuest";
import { BookingConfirmationAdmin } from "@/emails/templates/BookingConfirmationAdmin";
import { CancellationGuest } from "@/emails/templates/CancellationGuest";
import { CancellationAdmin } from "@/emails/templates/CancellationAdmin";
import { RefundGuest } from "@/emails/templates/RefundGuest";
import { CheckInReminder } from "@/emails/templates/CheckInReminder";
import { CheckOutReminder } from "@/emails/templates/CheckOutReminder";
import { CleaningAssignment } from "@/emails/templates/CleaningAssignment";
import { CleaningReminder } from "@/emails/templates/CleaningReminder";
import { CleaningConfirmed } from "@/emails/templates/CleaningConfirmed";
import { BookingInquiryConfirmation } from "@/emails/templates/BookingInquiryConfirmation";
import { PaymentFailed } from "@/emails/templates/PaymentFailed";
import { ReviewRequest } from "@/emails/templates/ReviewRequest";
import { createElement } from "react";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "buchung@urlaubsbleibe.de";
const FROM_NAME = "Luxus Hausboot Berlin";
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface SendResult {
  success: boolean;
  id?: string;
  error?: string;
}

async function send(
  to: string,
  subject: string,
  react: React.ReactElement
): Promise<SendResult> {
  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to,
      subject,
      react,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: String(err) };
  }
}

// --- Booking Emails ---

interface BookingEmailData {
  guestFirstName: string;
  guestLastName: string;
  guestEmail: string;
  guestPhone: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  numAdults: number;
  numChildren: number;
  subtotal: number;
  cleaningFee: number;
  totalPrice: number;
  bookingNumber: string;
  specialRequests?: string;
}

export async function sendBookingConfirmation(data: BookingEmailData) {
  const results = await Promise.allSettled([
    send(
      data.guestEmail,
      `Buchungsbestätigung ${data.bookingNumber}`,
      createElement(BookingConfirmationGuest, {
        guestFirstName: data.guestFirstName,
        propertyName: data.propertyName,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        nights: data.nights,
        numAdults: data.numAdults,
        numChildren: data.numChildren,
        subtotal: formatEuro(data.subtotal),
        cleaningFee: formatEuro(data.cleaningFee),
        totalPrice: formatEuro(data.totalPrice),
        bookingNumber: data.bookingNumber,
        specialRequests: data.specialRequests,
      })
    ),
    ADMIN_EMAIL
      ? send(
          ADMIN_EMAIL,
          `Neue Buchung: ${data.bookingNumber}`,
          createElement(BookingConfirmationAdmin, {
            guestName: `${data.guestFirstName} ${data.guestLastName}`,
            guestEmail: data.guestEmail,
            guestPhone: data.guestPhone,
            propertyName: data.propertyName,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
            nights: data.nights,
            numAdults: data.numAdults,
            numChildren: data.numChildren,
            subtotal: formatEuro(data.subtotal),
            cleaningFee: formatEuro(data.cleaningFee),
            totalPrice: formatEuro(data.totalPrice),
            bookingNumber: data.bookingNumber,
            specialRequests: data.specialRequests,
          })
        )
      : Promise.resolve({ success: true } as SendResult),
  ]);

  return results;
}

// --- Cancellation Emails ---

interface CancellationEmailData {
  guestFirstName: string;
  guestEmail: string;
  guestName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  bookingNumber: string;
  refundAmount?: number;
  cancellationReason?: string;
}

export async function sendCancellationEmails(data: CancellationEmailData) {
  return Promise.allSettled([
    send(
      data.guestEmail,
      `Stornierung ${data.bookingNumber}`,
      createElement(CancellationGuest, {
        guestFirstName: data.guestFirstName,
        propertyName: data.propertyName,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        bookingNumber: data.bookingNumber,
        refundAmount: data.refundAmount ? formatEuro(data.refundAmount) : undefined,
      })
    ),
    ADMIN_EMAIL
      ? send(
          ADMIN_EMAIL,
          `Stornierung: ${data.bookingNumber}`,
          createElement(CancellationAdmin, {
            guestName: data.guestName,
            guestEmail: data.guestEmail,
            propertyName: data.propertyName,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
            bookingNumber: data.bookingNumber,
            cancellationReason: data.cancellationReason,
          })
        )
      : Promise.resolve({ success: true } as SendResult),
  ]);
}

// --- Refund Email ---

export async function sendRefundEmail(data: {
  guestFirstName: string;
  guestEmail: string;
  bookingNumber: string;
  refundAmount: number;
  propertyName: string;
}) {
  return send(
    data.guestEmail,
    `Erstattung ${formatEuro(data.refundAmount)}`,
    createElement(RefundGuest, {
      guestFirstName: data.guestFirstName,
      bookingNumber: data.bookingNumber,
      refundAmount: formatEuro(data.refundAmount),
      propertyName: data.propertyName,
    })
  );
}

// --- Reminder Emails ---

export async function sendCheckInReminder(data: {
  guestFirstName: string;
  guestEmail: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  bookingNumber: string;
}) {
  return send(
    data.guestEmail,
    `Bald geht's los! Check-in am ${data.checkIn}`,
    createElement(CheckInReminder, data)
  );
}

export async function sendCheckOutReminder(data: {
  guestFirstName: string;
  guestEmail: string;
  propertyName: string;
  checkOut: string;
  bookingNumber: string;
}) {
  return send(
    data.guestEmail,
    `Check-out heute – ${data.propertyName}`,
    createElement(CheckOutReminder, data)
  );
}

// --- Cleaning Emails ---

export async function sendCleaningAssignment(data: {
  staffName: string;
  staffEmail: string;
  propertyName: string;
  cleaningDate: string;
  checkOutTime: string;
  confirmationUrl: string;
  bookingNumber: string;
  guestName: string;
}) {
  return send(
    data.staffEmail,
    `Reinigungsauftrag: ${data.propertyName} am ${data.cleaningDate}`,
    createElement(CleaningAssignment, data)
  );
}

export async function sendCleaningReminder(data: {
  staffName: string;
  staffEmail: string;
  propertyName: string;
  cleaningDate: string;
  confirmationUrl: string;
}) {
  return send(
    data.staffEmail,
    `Erinnerung: Reinigung ${data.propertyName} morgen`,
    createElement(CleaningReminder, data)
  );
}

export async function sendCleaningConfirmedToAdmin(data: {
  staffName: string;
  propertyName: string;
  cleaningDate: string;
  bookingNumber: string;
}) {
  if (!ADMIN_EMAIL) return { success: true };
  return send(
    ADMIN_EMAIL,
    `Reinigung bestätigt: ${data.propertyName}`,
    createElement(CleaningConfirmed, data)
  );
}

// --- Booking Inquiry Emails (with Approve/Reject flow) ---

const BOOKING_INQUIRY_EMAIL = "info@urlaubsbleibe.de";
const BOOKING_CC_EMAIL = "wieland.oswald@fahrzeugbau-pfaff.de";

export async function sendBookingInquiryEmails(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  numGuests: number;
  message?: string;
  inquiryNumber: string;
}) {
  // Generate approve/reject token
  const token = createBookingToken({
    bookingNumber: data.inquiryNumber,
    checkIn: data.checkIn,
    checkOut: data.checkOut,
    numGuests: data.numGuests,
    guestName: `${data.firstName} ${data.lastName}`,
    guestEmail: data.email,
    guestPhone: data.phone,
    guestMessage: data.message || "",
  });

  const approveUrl = `${BASE_URL}/api/booking/approve?token=${token}`;
  const rejectUrl = `${BASE_URL}/api/booking/reject?token=${token}`;

  // Admin email with approve/reject buttons (inline HTML)
  const adminHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a4a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">Neue Buchungsanfrage</h1>
        <p style="margin: 8px 0 0; opacity: 0.9;">${data.inquiryNumber}</p>
      </div>
      <div style="background: #f5f0ea; padding: 24px; border: 1px solid #e0d8cc; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666;">Name:</td><td style="padding: 6px 0; font-weight: 600;">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #1a4a2e;">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefon:</td><td style="padding: 6px 0;">${data.phone || "–"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Anreise:</td><td style="padding: 6px 0; font-weight: 600;">${data.checkIn}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Abreise:</td><td style="padding: 6px 0; font-weight: 600;">${data.checkOut}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Gäste:</td><td style="padding: 6px 0;">${data.numGuests}</td></tr>
        </table>
        ${data.message ? `<div style="margin-top: 16px; padding: 12px; background: white; border-radius: 8px; border: 1px solid #e0d8cc;"><p style="margin: 0; color: #666; font-size: 13px;">Nachricht:</p><p style="margin: 8px 0 0;">${data.message}</p></div>` : ""}
        <div style="margin-top: 24px; text-align: center;">
          <a href="${approveUrl}" style="display: inline-block; padding: 14px 32px; background: #22c55e; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin-right: 12px;">✓ Bestätigen</a>
          <a href="${rejectUrl}" style="display: inline-block; padding: 14px 32px; background: #ef4444; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">✗ Ablehnen</a>
        </div>
      </div>
    </div>
  `;

  const resend = getResend();

  return Promise.allSettled([
    // Guest confirmation (React template)
    send(
      data.email,
      `Ihre Buchungsanfrage ${data.inquiryNumber}`,
      createElement(BookingInquiryConfirmation, {
        firstName: data.firstName,
        inquiryNumber: data.inquiryNumber,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        numGuests: data.numGuests,
      })
    ),
    // Admin email with approve/reject (inline HTML)
    resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: BOOKING_INQUIRY_EMAIL,
      cc: BOOKING_CC_EMAIL,
      replyTo: data.email,
      subject: `Neue Buchungsanfrage: ${data.inquiryNumber} – ${data.firstName} ${data.lastName} (${data.checkIn} – ${data.checkOut})`,
      html: adminHtml,
    }),
  ]);
}

// --- Payment Failed ---

export async function sendPaymentFailed(data: {
  guestFirstName: string;
  guestEmail: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
}) {
  return send(
    data.guestEmail,
    `Zahlung nicht abgeschlossen – ${data.propertyName}`,
    createElement(PaymentFailed, data)
  );
}

// --- Review Request ---

export async function sendReviewRequest(data: {
  guestFirstName: string;
  guestEmail: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
}) {
  return send(
    data.guestEmail,
    `Wie war Ihr Aufenthalt auf dem ${data.propertyName}?`,
    createElement(ReviewRequest, data)
  );
}
