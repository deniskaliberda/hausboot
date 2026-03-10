import Link from "next/link";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-primary">
                Luxus Hausboote
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Einzigartige Luxus-Hausboote in Berlin-Schmöckwitz.
              Direkt am Wasser der Dahme.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/hausboote" className="hover:text-foreground">
                  Hausboote
                </Link>
              </li>
              <li>
                <Link href="/oldtimer-tour" className="hover:text-foreground">
                  Oldtimer Tour
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-foreground">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Berlin-Schmöckwitz
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@example.de" className="hover:text-foreground">
                  info@example.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+49123456789" className="hover:text-foreground">
                  +49 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/impressum" className="hover:text-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-foreground">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-foreground">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/widerrufsbelehrung" className="hover:text-foreground">
                  Widerrufsbelehrung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Luxus Hausboote Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
