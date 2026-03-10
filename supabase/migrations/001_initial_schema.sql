-- =============================================
-- Hausboot-Vermietung Database Schema
-- =============================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================
-- 1. Properties (Hausboote)
-- =============================================
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  max_guests INTEGER NOT NULL DEFAULT 8,
  bedrooms INTEGER NOT NULL DEFAULT 3,
  bathrooms INTEGER NOT NULL DEFAULT 2,
  address TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT 'Berlin',
  district TEXT NOT NULL DEFAULT 'Schmöckwitz',
  latitude DECIMAL(10, 7),
  longitude DECIMAL(10, 7),
  base_price_per_night INTEGER NOT NULL,
  cleaning_fee INTEGER NOT NULL DEFAULT 0,
  min_nights INTEGER NOT NULL DEFAULT 2,
  max_nights INTEGER NOT NULL DEFAULT 30,
  amenities JSONB NOT NULL DEFAULT '[]',
  airbnb_ical_url TEXT,
  airbnb_listing_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =============================================
-- 2. Property Images
-- =============================================
CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_hero BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_property_images_property ON property_images(property_id, sort_order);

-- =============================================
-- 3. Seasonal Pricing
-- =============================================
CREATE TABLE seasonal_pricing (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price_per_night INTEGER NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_seasonal_pricing_dates ON seasonal_pricing(property_id, start_date, end_date);

-- =============================================
-- 4. Blocked Dates
-- =============================================
CREATE TABLE blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason TEXT NOT NULL DEFAULT 'manual',
  airbnb_event_uid TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_blocked_dates_range ON blocked_dates(property_id, start_date, end_date);

-- =============================================
-- 5. Guests
-- =============================================
CREATE TABLE guests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  postal_code TEXT,
  city TEXT,
  country TEXT NOT NULL DEFAULT 'DE',
  locale TEXT NOT NULL DEFAULT 'de',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX idx_guests_email ON guests(email);

-- =============================================
-- 6. Bookings
-- =============================================
CREATE TYPE booking_status AS ENUM (
  'pending',
  'confirmed',
  'cancelled',
  'refunded',
  'completed',
  'no_show'
);

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number TEXT UNIQUE,
  property_id UUID NOT NULL REFERENCES properties(id),
  guest_id UUID NOT NULL REFERENCES guests(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  nights INTEGER GENERATED ALWAYS AS (check_out - check_in) STORED,
  num_adults INTEGER NOT NULL DEFAULT 1,
  num_children INTEGER NOT NULL DEFAULT 0,
  total_guests INTEGER GENERATED ALWAYS AS (num_adults + num_children) STORED,
  price_per_night INTEGER NOT NULL,
  subtotal INTEGER NOT NULL,
  cleaning_fee INTEGER NOT NULL DEFAULT 0,
  total_price INTEGER NOT NULL,
  stripe_checkout_session_id TEXT,
  stripe_payment_intent_id TEXT,
  paid_at TIMESTAMPTZ,
  status booking_status NOT NULL DEFAULT 'pending',
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  refund_amount INTEGER,
  special_requests TEXT,
  internal_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT valid_dates CHECK (check_out > check_in),
  CONSTRAINT valid_guests CHECK (num_adults >= 1)
);

CREATE INDEX idx_bookings_dates ON bookings(property_id, check_in, check_out);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_guest ON bookings(guest_id);
CREATE INDEX idx_bookings_stripe ON bookings(stripe_checkout_session_id);

-- Booking number auto-generation
CREATE OR REPLACE FUNCTION generate_booking_number()
RETURNS TRIGGER AS $$
DECLARE
  year_part TEXT;
  seq_num INTEGER;
BEGIN
  year_part := to_char(now(), 'YYYY');
  SELECT COALESCE(MAX(
    CAST(SPLIT_PART(booking_number, '-', 3) AS INTEGER)
  ), 0) + 1 INTO seq_num
  FROM bookings
  WHERE booking_number LIKE 'HB-' || year_part || '-%';

  NEW.booking_number := 'HB-' || year_part || '-' || LPAD(seq_num::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_booking_number
  BEFORE INSERT ON bookings
  FOR EACH ROW
  WHEN (NEW.booking_number IS NULL)
  EXECUTE FUNCTION generate_booking_number();

-- =============================================
-- 7. Inquiries (Oldtimer Tour)
-- =============================================
CREATE TYPE inquiry_status AS ENUM (
  'new',
  'contacted',
  'quoted',
  'confirmed',
  'declined',
  'completed'
);

CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_number TEXT UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  event_type TEXT NOT NULL,
  preferred_date DATE,
  alternative_date DATE,
  num_guests INTEGER NOT NULL,
  message TEXT NOT NULL,
  status inquiry_status NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  quoted_price INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Inquiry number auto-generation
CREATE OR REPLACE FUNCTION generate_inquiry_number()
RETURNS TRIGGER AS $$
DECLARE
  year_part TEXT;
  seq_num INTEGER;
BEGIN
  year_part := to_char(now(), 'YYYY');
  SELECT COALESCE(MAX(
    CAST(SPLIT_PART(inquiry_number, '-', 3) AS INTEGER)
  ), 0) + 1 INTO seq_num
  FROM inquiries
  WHERE inquiry_number LIKE 'OT-' || year_part || '-%';

  NEW.inquiry_number := 'OT-' || year_part || '-' || LPAD(seq_num::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_inquiry_number
  BEFORE INSERT ON inquiries
  FOR EACH ROW
  WHEN (NEW.inquiry_number IS NULL)
  EXECUTE FUNCTION generate_inquiry_number();

-- =============================================
-- 8. Cleaning Notifications
-- =============================================
CREATE TYPE cleaning_status AS ENUM (
  'pending',
  'notified',
  'confirmed',
  'completed',
  'issue_reported'
);

CREATE TABLE cleaning_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  staff_name TEXT NOT NULL,
  staff_email TEXT NOT NULL,
  cleaning_date DATE NOT NULL,
  cleaning_time TIME DEFAULT '11:00',
  status cleaning_status NOT NULL DEFAULT 'pending',
  notified_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  confirmation_token UUID DEFAULT gen_random_uuid(),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_cleaning_date ON cleaning_notifications(cleaning_date, status);
CREATE INDEX idx_cleaning_token ON cleaning_notifications(confirmation_token);

-- =============================================
-- 9. Email Log
-- =============================================
CREATE TABLE email_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  inquiry_id UUID REFERENCES inquiries(id),
  to_email TEXT NOT NULL,
  template_name TEXT NOT NULL,
  subject TEXT NOT NULL,
  resend_id TEXT,
  status TEXT NOT NULL DEFAULT 'sent',
  error_message TEXT,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_email_log_booking ON email_log(booking_id);

-- =============================================
-- 10. Admin Users (extends Supabase Auth)
-- =============================================
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =============================================
-- 11. Updated_at trigger function
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON properties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_blocked_dates_updated_at BEFORE UPDATE ON blocked_dates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_guests_updated_at BEFORE UPDATE ON guests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_cleaning_updated_at BEFORE UPDATE ON cleaning_notifications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =============================================
-- 12. Row Level Security
-- =============================================

-- Properties: public read for active, admin full access
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view active properties" ON properties
  FOR SELECT USING (is_active = true);
CREATE POLICY "Admins manage properties" ON properties
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Property images: public read, admin write
ALTER TABLE property_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view images" ON property_images
  FOR SELECT USING (true);
CREATE POLICY "Admins manage images" ON property_images
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Seasonal pricing: public read, admin write
ALTER TABLE seasonal_pricing ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view pricing" ON seasonal_pricing
  FOR SELECT USING (true);
CREATE POLICY "Admins manage pricing" ON seasonal_pricing
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Blocked dates: public read, admin write
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view blocked dates" ON blocked_dates
  FOR SELECT USING (true);
CREATE POLICY "Admins manage blocked dates" ON blocked_dates
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Bookings: admin only (public creates via API with service role)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage bookings" ON bookings
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Guests: admin only
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage guests" ON guests
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Inquiries: admin only
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage inquiries" ON inquiries
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Cleaning notifications: admin only
ALTER TABLE cleaning_notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage cleaning" ON cleaning_notifications
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Email log: admin only
ALTER TABLE email_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view email log" ON email_log
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));

-- Admin users: admin only
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage admin users" ON admin_users
  FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
