export interface Property {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  city: string;
  district: string;
  latitude: number | null;
  longitude: number | null;
  base_price_per_night: number;
  cleaning_fee: number;
  min_nights: number;
  max_nights: number;
  amenities: string[];
  airbnb_ical_url: string | null;
  airbnb_listing_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PropertyImage {
  id: string;
  property_id: string;
  url: string;
  alt_text: string;
  category: "exterior" | "bedroom" | "living" | "sauna" | "deck" | "view" | "kitchen" | "bathroom" | "general";
  sort_order: number;
  is_hero: boolean;
  created_at: string;
}

export interface SeasonalPricing {
  id: string;
  property_id: string;
  name: string;
  price_per_night: number;
  start_date: string;
  end_date: string;
  created_at: string;
}

export interface PropertyWithImages extends Property {
  property_images: PropertyImage[];
}
