import { getResend } from "./client";
import { ADMIN_EMAIL } from "@/lib/utils/constants";
import { formatEuro } from "@/lib/utils/currency";
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
import { InquiryConfirmation } from "@/emails/templates/InquiryConfirmation";
import { InquiryAdmin } from "@/emails/templates/InquiryAdmin";
import { BookingInquiryConfirmation } from "@/emails/templates/BookingInquiryConfirmation";
import { BookingInquiryAdmin } from "@/emails/templates/BookingInquiryAdmin";
import { PaymentFailed } from "@/emails/templates/PaymentFailed";
import { ReviewRequest } from "@/emails/templates/ReviewRequest";
import { createElement } from "react";

const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@luxus-hausboote.de";
const FROM_NAME = "Luxus Hausboote Berlin";

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

// --- Inquiry Emails ---

export async function sendInquiryEmails(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  eventType: string;
  preferredDate?: string;
  alternativeDate?: string;
  numGuests: number;
  message: string;
  inquiryNumber: string;
}) {
  return Promise.allSettled([
    send(
      data.email,
      `Ihre Anfrage ${data.inquiryNumber}`,
      createElement(InquiryConfirmation, {
        firstName: data.firstName,
        inquiryNumber: data.inquiryNumber,
        eventType: data.eventType,
        preferredDate: data.preferredDate,
        numGuests: data.numGuests,
      })
    ),
    ADMIN_EMAIL
      ? send(
          ADMIN_EMAIL,
          `Neue Anfrage: ${data.inquiryNumber}`,
          createElement(InquiryAdmin, {
            inquiryNumber: data.inquiryNumber,
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            company: data.company,
            eventType: data.eventType,
            preferredDate: data.preferredDate,
            alternativeDate: data.alternativeDate,
            numGuests: data.numGuests,
            message: data.message,
          })
        )
      : Promise.resolve({ success: true } as SendResult),
  ]);
}

// --- Booking Inquiry Emails ---

const BOOKING_INQUIRY_EMAIL = "info@urlaubsbleibe.de";

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
  return Promise.allSettled([
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
    send(
      BOOKING_INQUIRY_EMAIL,
      `Neue Buchungsanfrage: ${data.inquiryNumber}`,
      createElement(BookingInquiryAdmin, {
        inquiryNumber: data.inquiryNumber,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        numGuests: data.numGuests,
        message: data.message,
      })
    ),
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
