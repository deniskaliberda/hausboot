export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hausboot-mieten-berlin",
    title: "Hausboot mieten in Berlin — Luxus-Urlaub auf der Dahme in Schmöckwitz",
    description:
      "Einzigartiges Luxus-Hausboot mit Sauna, Kamin und Dachterrasse in Berlin-Schmöckwitz. Bis zu 8 Gäste, direkt am Wasser. Jetzt buchen!",
    image: "/images/properties/luxus-hausboot-dahme/essbereich.jpg",
    imageAlt: "Luxus-Hausboot an der Dahme in Berlin-Schmöckwitz",
    category: "Unterkunft",
    readingTime: "8 Min.",
    publishedAt: "2026-04-01",
    keywords: [
      "Hausboot mieten Berlin",
      "Hausboot Übernachtung Berlin",
      "Luxus Hausboot Berlin",
      "Hausboot Schmöckwitz",
    ],
  },
  {
    slug: "schmoeckwitz-entdecken",
    title: "Schmöckwitz entdecken — Berlins bestgehütetes Geheimnis am Wasser",
    description:
      "650 Jahre Geschichte, die schönste Straßenbahnstrecke Berlins und Natur pur: Warum Schmöckwitz der perfekte Ort für Ihren Urlaub ist.",
    image: "/images/properties/luxus-hausboot-dahme/exterior-seeblick.jpg",
    imageAlt: "Blick auf die Dahme in Berlin-Schmöckwitz",
    category: "Reiseziel",
    readingTime: "7 Min.",
    publishedAt: "2026-04-01",
    keywords: [
      "Schmöckwitz Ausflugsziele",
      "Schmöckwitz Berlin",
      "Dahme Berlin",
      "Tram 68 Berlin",
    ],
  },
  {
    slug: "aktivitaeten-dahme",
    title: "Paddeln, Radfahren, Wandern — Aktivitäten rund um die Dahme",
    description:
      "SUP auf der Dahme, Wandern am Schmöckwitzer Werder, Radfahren auf dem Dahmeradweg: Die besten Aktivitäten für Ihren Hausboot-Urlaub.",
    image: "/images/properties/luxus-hausboot-dahme/dachterrasse-kamin.jpg",
    imageAlt: "Dachterrasse mit Blick auf die Dahme",
    category: "Aktivitäten",
    readingTime: "9 Min.",
    publishedAt: "2026-04-01",
    keywords: [
      "Dahme Paddeln",
      "SUP Berlin",
      "Dahmeradweg",
      "Wanderung Schmöckwitzer Werder",
    ],
  },
  {
    slug: "sauna-hausboot-wellness",
    title: "Sauna auf dem Hausboot — Wellness & Entspannung auf der Dahme",
    description:
      "Finnische Sauna direkt auf dem Wasser: Warum eine private Hausboot-Sauna in Schmöckwitz das ultimative Wellness-Erlebnis ist.",
    image: "/images/properties/luxus-hausboot-dahme/sauna.jpg",
    imageAlt: "Finnische Sauna mit Panoramablick auf den See",
    category: "Wellness",
    readingTime: "6 Min.",
    publishedAt: "2026-04-01",
    keywords: [
      "Sauna Hausboot",
      "Wellness Berlin",
      "Finnische Sauna Berlin",
      "Hausboot Winter",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 2
): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}
