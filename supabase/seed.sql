-- Seed: Erstes Hausboot aus dem Airbnb-Listing
INSERT INTO properties (
  slug,
  name,
  short_description,
  description,
  max_guests,
  bedrooms,
  bathrooms,
  address,
  city,
  district,
  latitude,
  longitude,
  base_price_per_night,
  cleaning_fee,
  min_nights,
  max_nights,
  amenities,
  airbnb_listing_url,
  meta_title,
  meta_description
) VALUES (
  'luxus-hausboot-dahme',
  'Luxus Hausboot mit Sauna, WLAN und Kamin',
  'Einzigartiges Urlaubserlebnis direkt auf der Dahme – mit Sauna, Kamin und Dachterrasse.',
  E'Erleben Sie eine erholsame Auszeit mitten in der Hauptstadt, aber doch fernab vom Trubel. Unser Luxus-Hausboot liegt idyllisch am Ufer der Dahme in Berlin-Schmöckwitz und bietet Platz für bis zu 8 Personen.\n\nDas Hausboot verbindet modernen Komfort mit einem einzigartigen Naturerlebnis. Genießen Sie den freien Blick auf die Dahme, entspannen Sie in der finnischen Sauna oder am Kamin und lassen Sie den Tag auf der großzügigen Dachterrasse mit Sonnendeck ausklingen.\n\nDie voll ausgestattete Küche lädt zum gemeinsamen Kochen ein, und vom Boot aus können Sie direkt ins Wasser springen. SUP-Boards und Fahrräder stehen Ihnen kostenlos zur Verfügung.\n\nIn unmittelbarer Nähe finden Sie Einkaufsmöglichkeiten, einen Bäcker und ausgezeichnete Restaurants. Parkplätze stehen direkt im Hafen bereit.',
  8,
  3,
  2,
  'Hafen Schmöckwitz, Berlin',
  'Berlin',
  'Schmöckwitz',
  52.3792,
  13.6486,
  35000, -- 350,00 EUR pro Nacht
  15000, -- 150,00 EUR Reinigungsgebühr
  2,
  30,
  '["sauna", "kamin", "wifi", "kueche", "grill", "dachterrasse", "sup", "fahrraeder", "badezimmer", "wasser", "parkplatz"]',
  'https://www.airbnb.de/rooms/1568082071593446331',
  'Luxus Hausboot Berlin-Schmöckwitz – Sauna, Kamin & Dahme-Blick',
  'Übernachten Sie auf unserem einzigartigen Luxus-Hausboot in Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse, SUP-Boards – direkt am Wasser. Bis zu 8 Gäste.'
);
