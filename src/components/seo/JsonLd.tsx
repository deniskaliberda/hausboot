import type { Property, PropertyImage } from "@/types/property";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface JsonLdProps {
  type: "Organization" | "LodgingBusiness" | "Product" | "FAQPage";
  data?: unknown;
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Luxus Hausboote Berlin",
    description:
      "Einzigartige Luxus-Hausboote in Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – direkt am Wasser der Dahme.",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3889,
      longitude: 13.6425,
    },
    priceRange: "€€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function PropertyJsonLd({
  property,
  images,
}: {
  property: Property;
  images: PropertyImage[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.short_description,
    url: `${BASE_URL}/hausboote/${property.slug}`,
    image: images.filter((i) => i.is_hero).map((i) => `${BASE_URL}${i.url}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.latitude,
      longitude: property.longitude,
    },
    amenityFeature: property.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    numberOfRooms: property.bedrooms,
    petsAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "10:00",
    priceRange: `ab ${(property.base_price_per_night / 100).toFixed(0)}€ pro Nacht`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
