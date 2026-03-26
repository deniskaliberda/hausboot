import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buchungsbestätigung",
};

export default function BestatigungPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 font-serif text-3xl font-bold">
          Vielen Dank für Ihre Buchung!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ihre Buchung wurde erfolgreich abgeschlossen. Sie erhalten in Kürze
          eine Bestätigungs-E-Mail mit allen Details.
        </p>
      </div>

      <div className="mt-8 rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Wichtige Hinweise:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Check-in ab 15:00 Uhr, Check-out bis 11:00 Uhr</li>
          <li>Die genaue Anfahrtsbeschreibung erhalten Sie per E-Mail</li>
          <li>Parkplätze stehen kostenlos im Hafen zur Verfügung</li>
          <li>Bei Fragen kontaktieren Sie uns gerne per E-Mail</li>
        </ul>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/" className={cn(buttonVariants())}>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
