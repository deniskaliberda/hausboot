export type InquiryStatus =
  | "new"
  | "contacted"
  | "quoted"
  | "confirmed"
  | "declined"
  | "completed";

export type EventType = "corporate" | "private" | "group_tour";

export interface Inquiry {
  id: string;
  inquiry_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string | null;
  event_type: EventType;
  preferred_date: string | null;
  alternative_date: string | null;
  num_guests: number;
  message: string;
  status: InquiryStatus;
  admin_notes: string | null;
  quoted_price: number | null;
  created_at: string;
  updated_at: string;
}
