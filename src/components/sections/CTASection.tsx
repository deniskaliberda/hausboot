import Link from "next/link";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Anchor className="mx-auto h-10 w-10" />
        <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
          Bereit für Ihr Abenteuer auf dem Wasser?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Buchen Sie jetzt Ihr einzigartiges Hausboot-Erlebnis in Berlin-Schmöckwitz.
          Sauna, Kamin, Dachterrasse – alles inklusive.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/buchen"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "text-base"
            )}
          >
            Jetzt buchen
          </Link>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-primary-foreground/20 text-base text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            Fragen? Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  );
}
