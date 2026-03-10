import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Thermometer,
  Flame,
  Wifi,
  ChefHat,
  Beef,
  Sun,
  Waves,
  Bike,
  Bath,
  Droplets,
  ParkingCircle,
  Users,
  BedDouble,
  MapPin,
} from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { formatEuro } from "@/lib/utils/currency";
import Link from "next/link";
import { getPropertyBySlug, getGalleryImages, getAllProperties } from "@/lib/data/properties";
import { PhotoGallery } from "@/components/property/PhotoGallery";
import { AvailabilityCalendar } from "@/components/booking/AvailabilityCalendar";
import { PropertyJsonLd } from "@/components/seo/JsonLd";

const amenityConfig: Record<string, { icon: typeof Thermometer; label: string }> = {
  sauna: { icon: Thermometer, label: "Finnische Sauna" },
  kamin: { icon: Flame, label: "Kamin" },
  wifi: { icon: Wifi, label: "WLAN" },
  kueche: { icon: ChefHat, label: "Voll ausgestattete Küche" },
  grill: { icon: Beef, label: "Grill" },
  dachterrasse: { icon: Sun, label: "Dachterrasse & Sonnendeck" },
  sup: { icon: Waves, label: "SUP-Boards inklusive" },
  fahrraeder: { icon: Bike, label: "Fahrräder" },
  badezimmer: { icon: Bath, label: "2 Badezimmer" },
  wasser: { icon: Droplets, label: "Direkter Wasserzugang" },
  parkplatz: { icon: ParkingCircle, label: "Parkplatz im Hafen" },
};

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: property.meta_title || property.name,
    description: property.meta_description || property.short_description,
  };
}

export default async function HausbootDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const galleryImages = getGalleryImages(property);

  return (
    <>
    <PropertyJsonLd property={property} images={property.property_images} />
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold sm:text-4xl">
          {property.name}
        </h1>
        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{property.district}</span>
        </div>
      </div>

      {/* Photo gallery */}
      <div className="mt-6">
        <PhotoGallery images={galleryImages} propertyName={property.name} />
      </div>

      {/* Content grid */}
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Quick stats */}
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="gap-1 px-3 py-2 text-sm">
              <Users className="h-4 w-4" /> Bis zu {property.max_guests} Gäste
            </Badge>
            <Badge variant="secondary" className="gap-1 px-3 py-2 text-sm">
              <BedDouble className="h-4 w-4" /> {property.bedrooms} Schlafzimmer
            </Badge>
            <Badge variant="secondary" className="gap-1 px-3 py-2 text-sm">
              <Bath className="h-4 w-4" /> {property.bathrooms} Badezimmer
            </Badge>
          </div>

          <Separator className="my-6" />

          {/* Description */}
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              Über dieses Hausboot
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {property.description.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Amenities */}
          <div>
            <h2 className="font-serif text-2xl font-semibold">Ausstattung</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {property.amenities.map((key) => {
                const config = amenityConfig[key];
                if (!config) return null;
                const Icon = config.icon;
                return (
                  <div key={key} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">{config.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Location */}
          <div>
            <h2 className="font-serif text-2xl font-semibold">Standort</h2>
            <p className="mt-4 text-muted-foreground">
              {property.address}, {property.district}, {property.city}
            </p>
            <div className="mt-4 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Kartenansicht wird nach Domain-Einrichtung integriert
              </div>
            </div>
          </div>
        </div>

        {/* Booking sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">
                {formatEuro(property.base_price_per_night)}
              </span>
              <span className="text-muted-foreground">/ Nacht</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              + {formatEuro(property.cleaning_fee)} Reinigungsgebühr (einmalig)
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Mindestaufenthalt: {property.min_nights} Nächte
            </p>

            <Separator className="my-4" />

            {/* Calendar */}
            <AvailabilityCalendar
              propertyId={property.id}
              minNights={property.min_nights}
            />

            <Link
              href={`/hausboote/${property.slug}/buchen`}
              className={cn(buttonVariants({ size: "lg" }), "mt-4 w-full")}
            >
              Jetzt buchen
            </Link>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Sichere Zahlung über Stripe. Alle Preise inkl. MwSt.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
