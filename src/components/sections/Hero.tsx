import Link from "next/link";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Waves, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur">
            <Waves className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Berlin-Schmöckwitz · Direkt an der Dahme</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Luxus-Hausboote{" "}
            <span className="text-primary">in Berlin</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Erleben Sie einzigartige Übernachtungen auf dem Wasser.
            Sauna, Kamin, Dachterrasse – fernab vom Trubel und doch mitten in der Hauptstadt.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hausboote"
              className={cn(buttonVariants({ size: "lg" }), "text-base")}
            >
              Hausboote entdecken
            </Link>
            <Link
              href="/oldtimer-tour"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base")}
            >
              Oldtimer Tour Erlebnis
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>Bis zu 8 Gäste</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>Finnische Sauna</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>Direkt am Wasser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
