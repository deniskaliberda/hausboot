import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Car,
  Anchor,
  Users,
  Thermometer,
  Flame,
  Sun,
  ChefHat,
  Waves,
  Bike,
  MapPin,
  ShoppingBag,
  UtensilsCrossed,
  ParkingCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Oldtimer Tour mit Hausbootübernachtung",
  description:
    "Exklusive Oldtimer-Tour mit Übernachtung auf einem Luxus-Hausboot in Berlin-Schmöckwitz. Für Gruppen, Firmen und private Events.",
};

const ausstattung = [
  { icon: Thermometer, label: "Sauna" },
  { icon: Flame, label: "Kamin" },
  { icon: Sun, label: "Dachterrasse mit Sonnendeck" },
  { icon: ChefHat, label: "Voll ausgestattete Küche" },
  { icon: Waves, label: "SUP-Boards inklusive" },
  { icon: Bike, label: "Fahrräder für Ausflüge" },
];

const umgebung = [
  { icon: ShoppingBag, label: "Einkaufsmöglichkeiten und Bäcker in unmittelbarer Nähe" },
  { icon: UtensilsCrossed, label: "Sehr gute Restaurants fußläufig erreichbar" },
  { icon: ParkingCircle, label: "Parkmöglichkeiten direkt im Hafen" },
];

export default function OldtimerTourPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur">
              <Car className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Exklusives Erlebnis</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Oldtimer Tour mit{" "}
              <span className="text-primary">Hausbootübernachtung</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Kombinieren Sie eine exklusive Oldtimer-Ausfahrt mit einer Übernachtung
              auf einem hochwertigen Hausboot in Berlin-Schmöckwitz. Ein besonderes
              Event für Gruppen, Freunde oder Firmen.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/oldtimer-tour/anfrage"
                className={cn(buttonVariants({ size: "lg" }), "text-base")}
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Konzept */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">Das Konzept</Badge>
              <h2 className="font-serif text-3xl font-bold">
                Fahrspaß trifft Erholung am Wasser
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Die Tour führt mit Oldtimern nach Berlin-Schmöckwitz. Dort
                  erwartet Sie die Übernachtung auf einem komfortablen Hausboot
                  mit freiem Blick auf die Dahme.
                </p>
                <p>
                  Das Hausboot bietet Platz für bis zu 8 Personen und vereint
                  modernen Luxus mit dem einzigartigen Erlebnis, direkt auf dem
                  Wasser zu wohnen.
                </p>
                <p>
                  Ideal für kleine Gruppen, Firmenevents oder private Feiern –
                  ein Erlebnis, das in Erinnerung bleibt.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Oldtimer-Ausfahrt</span>
                </div>
                <span className="text-muted-foreground">+</span>
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                  <Anchor className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Hausboot-Übernachtung</span>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Car className="mx-auto h-12 w-12" />
                  <p className="mt-2 text-sm">Oldtimer Bild</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ausstattung */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold">
              Ausstattung des Hausboots
            </h2>
            <p className="mt-4 text-muted-foreground">
              <Users className="mr-1 inline h-4 w-4" />
              Platz für bis zu 8 Personen · 2 Badezimmer · Grill
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {ausstattung.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm"
              >
                <item.icon className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-background p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">
              <strong>Weitere Highlights:</strong> Direkter Zugang zum Wasser
              (Baden direkt vom Boot möglich), 2 Badezimmer, Grill auf der Dachterrasse
            </p>
          </div>
        </div>
      </section>

      {/* Lage */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold">Lage & Umgebung</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {umgebung.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border p-4"
              >
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold">
            Interesse geweckt?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Senden Sie uns eine unverbindliche Anfrage – wir erstellen Ihnen
            ein individuelles Angebot.
          </p>
          <Link
            href="/oldtimer-tour/anfrage"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "mt-8 text-base"
            )}
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}
