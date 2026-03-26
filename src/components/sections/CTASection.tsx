import Link from "next/link";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Anchor className="mx-auto h-10 w-10 opacity-60" />
          <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
            Bereit für Ihr Abenteuer
            <br />
            auf dem Wasser?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-primary-foreground/75 leading-relaxed">
            Buchen Sie jetzt Ihr einzigartiges Hausboot-Erlebnis in
            Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – alles inklusive.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/buchen"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "rounded-full px-8 text-base"
              )}
            >
              Jetzt buchen
            </Link>
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-primary-foreground/20 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
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
