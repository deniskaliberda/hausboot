import type { PropertyWithImages } from "@/types/property";

/**
 * Static property data used until Supabase is connected.
 * Mirrors the DB schema so switching to dynamic data requires minimal changes.
 */

const PROPERTY_BASE_PATH = "/images/properties";

export const properties: PropertyWithImages[] = [
  {
    id: "1",
    slug: "luxus-hausboot-dahme",
    name: "Luxus Hausboot mit Sauna, WLAN und Kamin",
    short_description:
      "Einzigartiges Urlaubserlebnis direkt auf der Dahme in Berlin-Schmöckwitz",
    description: `Erleben Sie eine erholsame Auszeit mitten in der Hauptstadt, aber doch fernab vom Trubel. Unser Luxus-Hausboot liegt idyllisch am Ufer der Dahme in Berlin-Schmöckwitz und bietet Platz für bis zu 8 Personen.

Das Hausboot verbindet modernen Komfort mit einem einzigartigen Naturerlebnis. Genießen Sie den freien Blick auf die Dahme, entspannen Sie in der finnischen Sauna oder am Kamin und lassen Sie den Tag auf der großzügigen Dachterrasse mit Sonnendeck ausklingen.

Die voll ausgestattete Küche lädt zum gemeinsamen Kochen ein, und vom Boot aus können Sie direkt ins Wasser springen. Ein SUP-Board und 2 Fahrräder stehen Ihnen kostenlos zur Verfügung. Brennholz für Sauna und Grill wird bereitgestellt.

Ab Herbst 2026 erwartet Sie zusätzlich ein Pellet-Kaminofen im Saloon für noch gemütlichere Abende.

In unmittelbarer Nähe finden Sie Einkaufsmöglichkeiten, einen Bäcker und ausgezeichnete Restaurants. Parkplätze stehen direkt im Hafen bereit.`,
    max_guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    address: "Sportboothafen Schmöckwitz",
    city: "Berlin",
    district: "Berlin-Schmöckwitz",
    latitude: 52.3889,
    longitude: 13.6425,
    base_price_per_night: 35000,
    cleaning_fee: 15000,
    min_nights: 2,
    max_nights: 30,
    amenities: [
      "sauna",
      "kamin",
      "wifi",
      "kueche",
      "grill",
      "dachterrasse",
      "sup",
      "fahrraeder",
      "badezimmer",
      "wasser",
      "parkplatz",
      "fliegengitter",
      "pelletofen",
    ],
    airbnb_ical_url: null,
    airbnb_listing_url:
      "https://www.airbnb.de/rooms/1568082071593446331",
    meta_title: "Luxus Hausboot Berlin-Schmöckwitz | Sauna & Kamin | Jetzt buchen",
    meta_description:
      "Luxus-Hausboot an der Dahme: 4 Schlafzimmer, finnische Sauna, Kamin, Dachterrasse. Bis zu 8 Gäste. Ab 350 €/Nacht. Direkt buchen!",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-03-10T00:00:00Z",
    property_images: [
      {
        id: "img-01",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/essbereich.jpg`,
        alt_text: "Gemütlicher Essbereich mit Holztisch, gelben Stühlen und Panoramafenster zum See",
        category: "living",
        sort_order: 1,
        is_hero: true,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-02",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/exterior-seeblick.jpg`,
        alt_text: "Blick vom Hausboot auf die winterliche Dahme mit weiter Seenlandschaft",
        category: "exterior",
        sort_order: 2,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-03",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/sauna.jpg`,
        alt_text: "Finnische Sauna aus hellem Holz mit Panoramablick auf den See",
        category: "sauna",
        sort_order: 3,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-04",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-panorama.jpg`,
        alt_text: "Schlafzimmer mit teal-farbener Bettwäsche und Panoramafenster zum See",
        category: "bedroom",
        sort_order: 4,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-05",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/dachterrasse-kamin.jpg`,
        alt_text: "Dachterrasse mit rustikalem Kamin und Blick auf den zugefrorenen See",
        category: "deck",
        sort_order: 5,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-06",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-balkon.jpg`,
        alt_text: "Schlafzimmer mit teal Bett, Kupferkissen und bodentiefer Glastür zum Deck",
        category: "bedroom",
        sort_order: 6,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-07",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/wohnbereich-sofa.jpg`,
        alt_text: "Wohnbereich mit grauem Schlafsofa, teal Kissen und Blick auf den Hafen",
        category: "living",
        sort_order: 7,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-08",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-seeblick.jpg`,
        alt_text: "Schlafzimmer mit Doppelbett und breitem Fenster mit Seeblick",
        category: "bedroom",
        sort_order: 8,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-09",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/sauna-eingang.jpg`,
        alt_text: "Eingangsbereich mit Sauna-Glasfront, Schlafnische und Sweet-Home-Fußmatte",
        category: "sauna",
        sort_order: 9,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-10",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-dachfenster.jpg`,
        alt_text: "Schlafzimmer mit Doppelbett, Dachfenster und Panoramafenster",
        category: "bedroom",
        sort_order: 10,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-11",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-fenster.jpg`,
        alt_text: "Gemütliches Schlafzimmer mit teal Bettwäsche und Kupferkissen",
        category: "bedroom",
        sort_order: 11,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-12",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-deck.jpg`,
        alt_text: "Schlafnische mit teal Bezug und bodentiefer Glastür zum Wasser",
        category: "bedroom",
        sort_order: 12,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-13",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/schlafzimmer-bad.jpg`,
        alt_text: "Schlafzimmer mit Blick ins angrenzende Badezimmer",
        category: "bedroom",
        sort_order: 13,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-14",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/wohnbereich-sofa-2.jpg`,
        alt_text: "Wohnbereich mit Schlafsofa aus weiterer Perspektive",
        category: "living",
        sort_order: 14,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
      {
        id: "img-15",
        property_id: "1",
        url: `${PROPERTY_BASE_PATH}/luxus-hausboot-dahme/sauna-blick.jpg`,
        alt_text: "Blick aus dem Saunabereich durch Glastür auf den winterlichen See",
        category: "view",
        sort_order: 15,
        is_hero: false,
        created_at: "2026-01-01T00:00:00Z",
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): PropertyWithImages | undefined {
  return properties.find((p) => p.slug === slug && p.is_active);
}

export function getAllProperties(): PropertyWithImages[] {
  return properties.filter((p) => p.is_active);
}

export function getHeroImage(property: PropertyWithImages) {
  return (
    property.property_images.find((img) => img.is_hero) ??
    property.property_images[0]
  );
}

export function getGalleryImages(property: PropertyWithImages) {
  return [...property.property_images].sort((a, b) => a.sort_order - b.sort_order);
}
