import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

const IMAGES_BASE = "/images/properties/luxus-hausboot-dahme";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background image */}
      <Image
        src={`${IMAGES_BASE}/exterior-seeblick.jpg`}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1229]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1229] via-transparent to-[#0b1229]/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Anchor className="mx-auto h-10 w-10 text-[#c4956a]/60" />
          <h2 className="mt-8 font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl lg:text-5xl">
            Bereit für Ihr Abenteuer
            <br />
            auf dem Wasser?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-[#f5f0e8]/65 leading-relaxed">
            Buchen Sie jetzt Ihr einzigartiges Hausboot-Erlebnis in
            Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – alles inklusive.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/buchen"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-[#c4956a] px-10 text-base font-semibold text-[#0b1229] shadow-lg shadow-[#c4956a]/20 hover:bg-[#e8c9a8]"
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
              Fragen? Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
