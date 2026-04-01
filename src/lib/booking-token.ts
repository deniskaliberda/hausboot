import { createHmac } from "crypto";

export interface BookingData {
  bookingNumber: string;
  checkIn: string;
  checkOut: string;
  numGuests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guestMessage: string;
}

const SECRET = process.env.BOOKING_SECRET || "hausboot-default-secret";

function sign(data: string): string {
  return createHmac("sha256", SECRET).update(data).digest("hex");
}

export function createBookingToken(data: BookingData): string {
  const payload = Buffer.from(JSON.stringify(data)).toString("base64url");
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifyBookingToken(token: string): BookingData | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payload, signature] = parts;
  const expectedSignature = sign(payload);

  if (signature !== expectedSignature) return null;

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return null;
  }
}
