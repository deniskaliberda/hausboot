import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Waves, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROPERTY, getHeroImage } from "@/lib/data/properties";

const heroImage = getHeroImage(PROPERTY);

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      {heroImage && (
        <Image
          src={heroImage.url}
          alt={heroImage.alt_text}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Waves className="h-4 w-4 text-white" />
            <span className="text-white/90">Berlin-Schmöckwitz · Direkt an der Dahme</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Luxus-Hausboot{" "}
            <span className="text-primary">an der Dahme</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 sm:text-xl">
            Erleben Sie eine einzigartige Übernachtung auf dem Wasser.
            Sauna, Kamin, Dachterrasse – fernab vom Trubel und doch mitten in der Hauptstadt.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/buchen"
              className={cn(buttonVariants({ size: "lg" }), "text-base")}
            >
              Jetzt buchen
            </Link>
            <Link
              href="/oldtimer-tour"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-base text-white hover:bg-white/10"
              )}
            >
              Oldtimer Tour Erlebnis
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/80">
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
