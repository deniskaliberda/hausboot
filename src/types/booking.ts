export type BookingStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "refunded"
  | "completed"
  | "no_show";

export interface Guest {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  address_line1: string | null;
  address_line2: string | null;
  postal_code: string | null;
  city: string | null;
  country: string;
  locale: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  booking_number: string;
  property_id: string;
  guest_id: string;
  check_in: string;
  check_out: string;
  nights: number;
  num_adults: number;
  num_children: number;
  total_guests: number;
  price_per_night: number;
  subtotal: number;
  cleaning_fee: number;
  total_price: number;
  stripe_checkout_session_id: string | null;
  stripe_payment_intent_id: string | null;
  paid_at: string | null;
  status: BookingStatus;
  cancelled_at: string | null;
  cancellation_reason: string | null;
  refund_amount: number | null;
  special_requests: string | null;
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingWithGuest extends Booking {
  guests: Guest;
}

export interface BlockedDate {
  id: string;
  property_id: string;
  start_date: string;
  end_date: string;
  reason: "manual" | "airbnb_sync" | "maintenance" | "booking";
  airbnb_event_uid: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}
