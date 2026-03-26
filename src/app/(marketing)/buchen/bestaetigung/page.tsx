import type { Metadata } from "next";
import { CheckCircle, CalendarDays, MapPin, Users, Mail } from "lucide-react";
import { buttonVariants } from "@/lib/utils/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getStripe } from "@/lib/stripe/client";
import { formatEuro } from "@/lib/utils/currency";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Buchungsbestätigung",
};

async function getSessionDetails(sessionId: string) {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export default async function BestatigungPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  const session = session_id ? await getSessionDetails(session_id) : null;
  const metadata = session?.metadata;

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

      {metadata ? (
        <div className="mt-8 rounded-xl border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold">Buchungsdetails</h2>
          <Separator className="my-4" />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Hausboot</p>
                <p className="text-sm text-muted-foreground">
                  Luxus Hausboot an der Dahme
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Reisezeitraum</p>
                <p className="text-sm text-muted-foreground">
                  {metadata.check_in} bis {metadata.check_out} ({metadata.nights} Nächte)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Gäste</p>
                <p className="text-sm text-muted-foreground">
                  {metadata.num_adults} Erwachsene
                  {parseInt(metadata.num_children || "0") > 0 &&
                    `, ${metadata.num_children} Kinder`}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Bestätigung an</p>
                <p className="text-sm text-muted-foreground">
                  {metadata.guest_email}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {metadata.nights} Nächte
                </span>
                <span>{formatEuro(parseInt(metadata.subtotal || "0"))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Endreinigung</span>
                <span>{formatEuro(parseInt(metadata.cleaning_fee || "0"))}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span>Bezahlt</span>
                <span>{formatEuro(parseInt(metadata.total_price || "0"))}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-xl border bg-card p-6 text-center">
          <h2 className="font-semibold">Buchungsdetails</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {session_id
              ? "Die Buchungsdetails werden geladen. Bitte überprüfen Sie Ihre E-Mails."
              : "Keine Session-ID vorhanden. Bitte überprüfen Sie Ihre E-Mails für die Buchungsbestätigung."}
          </p>
        </div>
      )}

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
