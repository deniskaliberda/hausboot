import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Hero } from "@/components/sections/Hero";
import { AmenitiesGrid } from "@/components/sections/AmenitiesGrid";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { PropertyJsonLd } from "@/components/seo/JsonLd";
import { PhotoGallery } from "@/components/property/PhotoGallery";
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
  Anchor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = getGalleryImages(PROPERTY);

const IMAGES_BASE = "/images/properties/luxus-hausboot-dahme";

const quickStats = [
  { icon: Users, label: `Bis zu ${PROPERTY.max_guests} Gäste` },
  { icon: BedDouble, label: `${PROPERTY.bedrooms} Schlafzimmer` },
  { icon: Bath, label: `${PROPERTY.bathrooms} Badezimmer` },
  { icon: Thermometer, label: "Finnische Sauna" },
  { icon: Flame, label: "Kamin" },
  { icon: Sun, label: "Dachterrasse" },
];

export default function HomePage() {
  return (
    <>
      <PropertyJsonLd property={PROPERTY} images={PROPERTY.property_images} />
      <Navbar />
      <main>
        <Hero />

        {/* Story + About the Boat — Dark section */}
        <section id="das-boot" className="bg-[#0b1229] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Our Story */}
              <div>
                <p className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
                  Über das Boot
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl lg:text-5xl">
                  Geschaffen für
                  <br />
                  Erholung
                </h2>
                <div className="mt-6 space-y-4 text-[#8b92b0] leading-relaxed">
                  <p>
                    Unser Luxus-Hausboot liegt idyllisch am Ufer der Dahme in
                    Berlin-Schmöckwitz und bietet Platz für bis zu 8 Personen.
                    Es verbindet modernen Komfort mit einem einzigartigen
                    Naturerlebnis.
                  </p>
                  <p>
                    Genießen Sie den freien Blick auf die Dahme, entspannen Sie
                    in der finnischen Sauna oder am Kamin und lassen Sie den Tag
                    auf der großzügigen Dachterrasse mit Sonnendeck ausklingen.
                  </p>
                </div>

                {/* Inline sauna image */}
                <div className="mt-8 overflow-hidden rounded-2xl">
                  <Image
                    src={`${IMAGES_BASE}/sauna.jpg`}
                    alt="Finnische Sauna mit Panoramablick auf den See"
                    width={600}
                    height={400}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>

              {/* About the Boat — Stats + Pricing */}
              <div>
                <p className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
                  Ausstattung
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl">
                  Details &amp; Preise
                </h2>

                {/* Stats grid */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#141a32] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c4956a]/10">
                        <stat.icon className="h-5 w-5 text-[#c4956a]" />
                      </div>
                      <span className="text-sm font-medium text-[#dce1ff]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing card */}
                <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#141a32] p-6 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Anchor className="h-5 w-5 text-[#c4956a]" />
                    <span className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.15em] text-[#8b92b0]">
                      Preise
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#f5f0e8]">
                      {formatEuro(PROPERTY.base_price_per_night)}
                    </span>
                    <span className="text-[#8b92b0]">/ Nacht</span>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-[#8b92b0]">
                    <p>+ {formatEuro(PROPERTY.cleaning_fee)} Reinigung (einmalig)</p>
                    <p>
                      + {formatEuro(PROPERTY.laundry_fee_per_person)} Wäsche pro
                      Person
                    </p>
                    <p>Mindestaufenthalt: {PROPERTY.min_nights} Nächte</p>
                  </div>

                  <Separator className="my-5 bg-white/[0.06]" />

                  <Link
                    href="/buchen"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full rounded-full bg-[#c4956a] text-[#0b1229] hover:bg-[#e8c9a8]"
                    )}
                  >
                    Verfügbarkeit prüfen
                  </Link>

                  <p className="mt-3 text-center text-xs text-[#8b92b0]/60">
                    Alle Preise inkl. MwSt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery — Light cream section */}
        <section id="galerie" className="bg-[#f5f0e8] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
                Impressionen
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#1a1a2e] sm:text-4xl lg:text-5xl">
                Einblicke in Ihr Hausboot
              </h2>
            </div>
            <PhotoGallery images={galleryImages} propertyName={PROPERTY.name} />
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
