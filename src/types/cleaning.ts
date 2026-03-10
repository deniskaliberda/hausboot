export type CleaningStatus =
  | "pending"
  | "notified"
  | "confirmed"
  | "completed"
  | "issue_reported";

export interface CleaningNotification {
  id: string;
  booking_id: string;
  staff_name: string;
  staff_email: string;
  cleaning_date: string;
  cleaning_time: string;
  status: CleaningStatus;
  notified_at: string | null;
  confirmed_at: string | null;
  completed_at: string | null;
  confirmation_token: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}
