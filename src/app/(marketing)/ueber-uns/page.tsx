import type { Metadata } from "next";
import { Anchor, Heart, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
};

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">Über uns</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Willkommen bei Luxus Hausboote Berlin – Ihrem Anbieter für
          einzigartige Übernachtungen auf dem Wasser in Berlin-Schmöckwitz.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Anchor className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-4 font-serif text-xl font-semibold">Unsere Vision</h2>
          <p className="mt-2 text-muted-foreground">
            Wir bieten unseren Gästen ein unvergleichliches Erlebnis auf dem
            Wasser – mit höchstem Komfort und direktem Naturzugang.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Heart className="h-7 w-7 text-accent" />
          </div>
          <h2 className="mt-4 font-serif text-xl font-semibold">Mit Liebe zum Detail</h2>
          <p className="mt-2 text-muted-foreground">
            Jedes unserer Hausboote ist liebevoll eingerichtet und bietet alles,
            was Sie für einen perfekten Aufenthalt brauchen.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-4 font-serif text-xl font-semibold">Vertrauen & Qualität</h2>
          <p className="mt-2 text-muted-foreground">
            Sichere Buchung, transparente Preise und persönlicher Service –
            von der Anfrage bis zum Check-out.
          </p>
        </div>
      </div>

      <div className="mt-20 rounded-xl bg-muted/50 p-8 md:p-12">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">
          Berlin-Schmöckwitz
        </h2>
        <p className="mt-4 text-muted-foreground">
          Schmöckwitz ist einer der schönsten und grünsten Ortsteile Berlins,
          gelegen an der Dahme im Südosten der Stadt. Hier verbinden sich
          Wasser, Wald und eine entspannte Atmosphäre zu einem einzigartigen
          Erholungsort – nur eine kurze Fahrt von der Berliner Innenstadt
          entfernt.
        </p>
        <p className="mt-4 text-muted-foreground">
          Die Gegend bietet zahlreiche Freizeitmöglichkeiten: Radfahren
          entlang der Dahme, Stand-Up-Paddling, Restaurants am Wasser und
          gemütliche Spaziergänge durch die Natur.
        </p>
      </div>
    </div>
  );
}
