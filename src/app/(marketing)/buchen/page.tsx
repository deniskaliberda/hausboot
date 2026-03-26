import type { Metadata } from "next";
import { PROPERTY } from "@/lib/data/properties";
import { SmoobuCalendar } from "@/components/booking/SmoobuCalendar";
import { BookingInquiryForm } from "@/components/booking/BookingInquiryForm";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/lib/utils/currency";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jetzt buchen",
  description: `${PROPERTY.name} in ${PROPERTY.district} – Prüfen Sie die Verfügbarkeit und senden Sie Ihre Anfrage. Ab ${(PROPERTY.base_price_per_night / 100).toFixed(0)} €/Nacht.`,
};

export default function BuchenPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6")}
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Zurück zur Startseite
      </Link>

      <h1 className="font-serif text-3xl font-bold">Verfügbarkeit & Anfrage</h1>
      <p className="mt-2 text-muted-foreground">
        Prüfen Sie die Verfügbarkeit im Kalender und senden Sie uns
        Ihre unverbindliche Buchungsanfrage.
      </p>

      {/* Pricing info */}
      <div className="mt-6 rounded-lg border bg-muted/30 p-4 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span><strong>{formatEuro(PROPERTY.base_price_per_night)}</strong> / Nacht</span>
          <span>Reinigung: <strong>{formatEuro(PROPERTY.cleaning_fee)}</strong></span>
          <span>Wäsche: <strong>{formatEuro(PROPERTY.laundry_fee_per_person)}</strong> / Person</span>
          <span>Mind. {PROPERTY.min_nights} Nächte</span>
        </div>
      </div>

      {/* Availability Calendar */}
      <div className="mt-8">
        <h2 className="font-serif text-xl font-semibold">Verfügbarkeit</h2>
        <div className="mt-4 overflow-hidden rounded-xl border bg-card p-4">
          <SmoobuCalendar />
        </div>
      </div>

      <Separator className="my-10" />

      {/* Inquiry Form */}
      <div>
        <h2 className="font-serif text-xl font-semibold">Buchungsanfrage</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <div className="mt-6">
          <BookingInquiryForm />
        </div>
      </div>
    </div>
  );
}
