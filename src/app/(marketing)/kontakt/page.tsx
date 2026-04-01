import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">Kontakt</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Haben Sie Fragen zu unserem Hausboot oder möchten Sie
          Ihren Aufenthalt planen? Wir freuen uns auf Ihre Nachricht.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 text-primary" />
            <CardTitle className="font-serif">E-Mail</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="mailto:info@urlaubsbleibe.de"
              className="text-primary hover:underline"
            >
              info@urlaubsbleibe.de
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Wir antworten in der Regel innerhalb von 24 Stunden.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 text-primary" />
            <CardTitle className="font-serif">Telefon</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="tel:+491725642200"
              className="text-primary hover:underline"
            >
              +49 172 5642200
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Mo–Fr: 9:00–18:00 Uhr
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <MapPin className="h-8 w-8 text-primary" />
            <CardTitle className="font-serif">Standort</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Hafen Schmöckwitz</p>
            <p>Berlin-Schmöckwitz</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Parkplätze direkt im Hafen verfügbar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
