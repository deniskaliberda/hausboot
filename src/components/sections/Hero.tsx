import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Users, Flame, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const IMAGES_BASE = "/images/properties/luxus-hausboot-dahme";

const highlights = [
  {
    icon: Users,
    title: "Bis zu 8 Gäste",
    description: "4 Schlafzimmer, 2 Bäder",
  },
  {
    icon: Flame,
    title: "Finnische Sauna",
    description: "Entspannung mit Seeblick",
  },
  {
    icon: Sun,
    title: "Kamin & Dachterrasse",
    description: "Panoramablick über die Dahme",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="relative min-h-screen">
        <Image
          src={`${IMAGES_BASE}/exterior-seeblick.jpg`}
          alt="Luxus-Hausboot an der Dahme mit weitem Blick über den See"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1229]/70 via-[#0b1229]/40 to-[#0b1229]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1229]/50 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">
          {/* Location badge */}
          <p className="mb-6 font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
            Berlin-Schmöckwitz · An der Dahme
          </p>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-[#f5f0e8] sm:text-6xl lg:text-7xl xl:text-8xl">
            Ihr schwimmendes
            <br />
            Zuhause
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base text-[#f5f0e8]/70 leading-relaxed sm:text-lg">
            Einzigartiges Luxus-Hausboot mit Sauna, Kamin und Dachterrasse –
            fernab vom Trubel und doch mitten in Berlin.
          </p>

          {/* Price badge */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-3xl font-bold text-[#f5f0e8]">ab 350 €</span>
            <span className="text-[#f5f0e8]/60">/ Nacht</span>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/buchen"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-[#c4956a] px-10 text-base font-semibold text-[#0b1229] shadow-lg shadow-[#c4956a]/20 hover:bg-[#e8c9a8] hover:shadow-[#c4956a]/30"
              )}
            >
              Jetzt buchen
            </Link>
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-[#f5f0e8]/20 px-8 text-base text-[#f5f0e8] hover:bg-[#f5f0e8]/10"
              )}
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="h-10 w-6 rounded-full border-2 border-[#f5f0e8]/20 p-1">
              <div className="mx-auto h-2.5 w-1 rounded-full bg-[#c4956a]" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating highlight cards overlapping hero bottom */}
      <div className="relative z-20 mx-auto -mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#141a32]/80 px-6 py-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c4956a]/10">
                <item.icon className="h-5 w-5 text-[#c4956a]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#f5f0e8]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-[#8b92b0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
