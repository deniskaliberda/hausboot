import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Leaf, Utensils, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

const IMAGES_BASE = "/images/properties/luxus-hausboot-dahme";

const features = [
  {
    icon: Leaf,
    title: "Naturverbunden",
    description: "Direkt am Wasser der Dahme, umgeben von Natur",
  },
  {
    icon: Utensils,
    title: "Voll ausgestattet",
    description: "Küche, Bad, Sauna und Kamin inklusive",
  },
  {
    icon: PawPrint,
    title: "Haustierfreundlich",
    description: "Ihr vierbeiniger Begleiter ist willkommen",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Split image hero */}
      <div className="relative min-h-[70vh] lg:min-h-[75vh]">
        {/* Two-image grid */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <Image
              src={`${IMAGES_BASE}/essbereich.jpg`}
              alt="Gemütlicher Essbereich mit Holztisch und Panoramafenster zum See"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/25 lg:to-black/10" />
          </div>
          <div className="relative hidden overflow-hidden lg:block">
            <Image
              src={`${IMAGES_BASE}/exterior-seeblick.jpg`}
              alt="Blick vom Hausboot auf die Dahme mit weiter Seenlandschaft"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-black/10" />
          </div>
        </div>

        {/* Hero content overlay */}
        <div className="relative z-10 flex min-h-[70vh] items-center lg:min-h-[75vh]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Berlin-Schmöckwitz · An der Dahme
              </p>

              <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Ihr schwimmendes
                <br />
                Zuhause erwartet Sie
              </h1>

              <p className="mt-5 max-w-md text-base text-white/75 leading-relaxed sm:text-lg">
                Einzigartiges Luxus-Hausboot mit Sauna, Kamin und Dachterrasse –
                fernab vom Trubel und doch mitten in Berlin.
              </p>

              <div className="mt-8">
                <Link
                  href="/buchen"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-8 text-base shadow-lg"
                  )}
                >
                  Jetzt buchen
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Feature cards below hero — inspired by Stitch */}
      <div className="relative z-20 mx-auto -mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-card px-5 py-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
