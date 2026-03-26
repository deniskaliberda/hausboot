import type { Metadata } from "next";
import { PROPERTY } from "@/lib/data/properties";
import { BookingForm } from "@/components/booking/BookingForm";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jetzt buchen",
  description: `${PROPERTY.name} in ${PROPERTY.district} – Buchen Sie jetzt Ihr einzigartiges Hausboot-Erlebnis. Ab ${(PROPERTY.base_price_per_night / 100).toFixed(0)} €/Nacht.`,
};

export default async function BuchenPage({
  searchParams,
}: {
  searchParams: Promise<{ checkIn?: string; checkOut?: string; cancelled?: string }>;
}) {
  const { checkIn, checkOut, cancelled } = await searchParams;

  const heroImage =
    PROPERTY.property_images.find((img) => img.is_hero) ??
    PROPERTY.property_images[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6")}
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Zurück zur Startseite
      </Link>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Booking form */}
        <div className="lg:col-span-2">
          <h1 className="font-serif text-3xl font-bold">Buchung abschließen</h1>
          <p className="mt-2 text-muted-foreground">
            Füllen Sie das Formular aus und schließen Sie Ihre Buchung sicher
            über Stripe ab.
          </p>

          <div className="mt-8">
            <BookingForm
              property={PROPERTY}
              initialCheckIn={checkIn}
              initialCheckOut={checkOut}
              cancelled={cancelled === "true"}
            />
          </div>
        </div>

        {/* Sidebar - Property summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 overflow-hidden rounded-xl border bg-card shadow-sm">
            {heroImage && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt_text}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="font-serif text-lg font-semibold">
                {PROPERTY.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {PROPERTY.district}
              </p>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Bis zu {PROPERTY.max_guests} Gäste</p>
                <p>
                  {PROPERTY.bedrooms} Schlafzimmer · {PROPERTY.bathrooms} Bäder
                </p>
                <p>Finnische Sauna · Kamin · Dachterrasse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
