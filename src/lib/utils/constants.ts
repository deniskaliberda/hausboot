export const SITE_NAME = "Luxus Hausboote Berlin";
export const SITE_DESCRIPTION =
  "Einzigartige Luxus-Hausboote in Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – direkt am Wasser. Jetzt buchen!";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
export const CLEANING_STAFF_EMAIL = process.env.CLEANING_STAFF_EMAIL || "";

export const BOOKING_PREFIX = "HB";
export const INQUIRY_PREFIX = "OT";

export const MIN_NIGHTS = 2;
export const MAX_NIGHTS = 30;
export const MAX_GUESTS = 8;

export const STRIPE_CHECKOUT_EXPIRY_SECONDS = 1800; // 30 minutes

export const ICAL_SYNC_INTERVAL_MINUTES = 30;

export const AMENITY_ICONS: Record<string, string> = {
  sauna: "Thermometer",
  kamin: "Flame",
  wifi: "Wifi",
  kueche: "ChefHat",
  grill: "Beef",
  dachterrasse: "Sun",
  sup: "Waves",
  fahrraeder: "Bike",
  badezimmer: "Bath",
  wasser: "Droplets",
  parkplatz: "ParkingCircle",
  fliegengitter: "ShieldCheck",
  pelletofen: "Flame",
};
