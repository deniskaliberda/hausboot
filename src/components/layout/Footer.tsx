import Link from "next/link";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Anchor className="h-5 w-5" />
              <span className="font-serif text-lg font-bold tracking-tight">
                Luxus Hausboot
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/65 leading-relaxed">
              Einzigartiges Luxus-Hausboot in Berlin-Schmöckwitz.
              Direkt am Wasser der Dahme.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li>
                <Link href="/buchen" className="transition-colors hover:text-primary-foreground">
                  Jetzt buchen
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="transition-colors hover:text-primary-foreground">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Kontakt</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Berlin-Schmöckwitz
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@urlaubsbleibe.de" className="transition-colors hover:text-primary-foreground">
                  info@urlaubsbleibe.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+491725642200" className="transition-colors hover:text-primary-foreground">
                  +49 172 5642200
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Rechtliches</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li>
                <Link href="/impressum" className="transition-colors hover:text-primary-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="transition-colors hover:text-primary-foreground">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="transition-colors hover:text-primary-foreground">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/widerrufsbelehrung" className="transition-colors hover:text-primary-foreground">
                  Widerrufsbelehrung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Luxus Hausboot Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
