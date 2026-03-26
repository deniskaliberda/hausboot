import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Hero } from "@/components/sections/Hero";
import { AmenitiesGrid } from "@/components/sections/AmenitiesGrid";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { PropertyJsonLd } from "@/components/seo/JsonLd";
import { PhotoGallery } from "@/components/property/PhotoGallery";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/lib/utils/currency";
import { PROPERTY, getGalleryImages } from "@/lib/data/properties";
import {
  Users,
  BedDouble,
  Bath,
  Thermometer,
  Flame,
  Sun,
} from "lucide-react";
import Link from "next/link";

const galleryImages = getGalleryImages(PROPERTY);

export default function HomePage() {
  return (
    <>
      <PropertyJsonLd property={PROPERTY} images={PROPERTY.property_images} />
      <Navbar />
      <main>
        <Hero />

        {/* Photo Gallery */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PhotoGallery images={galleryImages} propertyName={PROPERTY.name} />
          </div>
        </section>

        {/* Quick Stats + Description */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Quick stats */}
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <Users className="h-4 w-4" /> Bis zu {PROPERTY.max_guests} Gäste
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <BedDouble className="h-4 w-4" /> {PROPERTY.bedrooms} Schlafzimmer
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <Bath className="h-4 w-4" /> {PROPERTY.bathrooms} Badezimmer
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <Thermometer className="h-4 w-4" /> Finnische Sauna
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <Flame className="h-4 w-4" /> Kamin
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-4 py-2 text-sm">
                    <Sun className="h-4 w-4" /> Dachterrasse
                  </Badge>
                </div>

                <Separator className="my-8" />

                {/* Description */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold">
                    Über dieses Hausboot
                  </h2>
                  <div className="mt-4 space-y-4 text-muted-foreground">
                    {PROPERTY.description.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 rounded-xl border bg-card p-6 shadow-sm">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">
                      {formatEuro(PROPERTY.base_price_per_night)}
                    </span>
                    <span className="text-muted-foreground">/ Nacht</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    + {formatEuro(PROPERTY.cleaning_fee)} Reinigung (einmalig)
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    + {formatEuro(PROPERTY.laundry_fee_per_person)} Wäsche pro Person
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mindestaufenthalt: {PROPERTY.min_nights} Nächte
                  </p>

                  <Separator className="my-4" />

                  <Link
                    href="/buchen"
                    className={cn(buttonVariants({ size: "lg" }), "mt-4 w-full")}
                  >
                    Jetzt buchen
                  </Link>

                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Alle Preise inkl. MwSt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AmenitiesGrid />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
