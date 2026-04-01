import Link from "next/link";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060d24] text-[#dce1ff]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Anchor className="h-5 w-5 text-[#c4956a]" />
              <span className="font-serif text-lg font-bold tracking-tight text-[#f5f0e8]">
                Luxus Hausboot
              </span>
            </Link>
            <p className="text-sm text-[#8b92b0] leading-relaxed">
              Ihr schwimmendes Zuhause an der Dahme.
              <br />
              Einzigartiges Luxus-Hausboot in Berlin-Schmöckwitz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-label)] text-xs font-semibold uppercase tracking-[0.2em] text-[#c4956a]">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#8b92b0]">
              <li>
                <Link href="/buchen" className="transition-colors hover:text-[#f5f0e8]">
                  Jetzt buchen
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#f5f0e8]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="transition-colors hover:text-[#f5f0e8]">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#f5f0e8]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-label)] text-xs font-semibold uppercase tracking-[0.2em] text-[#c4956a]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-[#8b92b0]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#4a7c72]" />
                Berlin-Schmöckwitz
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#4a7c72]" />
                <a href="mailto:info@urlaubsbleibe.de" className="transition-colors hover:text-[#f5f0e8]">
                  info@urlaubsbleibe.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#4a7c72]" />
                <a href="tel:+491725642200" className="transition-colors hover:text-[#f5f0e8]">
                  +49 172 5642200
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-label)] text-xs font-semibold uppercase tracking-[0.2em] text-[#c4956a]">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm text-[#8b92b0]">
              <li>
                <Link href="/impressum" className="transition-colors hover:text-[#f5f0e8]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="transition-colors hover:text-[#f5f0e8]">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="transition-colors hover:text-[#f5f0e8]">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/widerrufsbelehrung" className="transition-colors hover:text-[#f5f0e8]">
                  Widerrufsbelehrung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copper accent */}
        <div className="mt-12 border-t border-[#c4956a]/10 pt-8 text-center text-sm text-[#8b92b0]/60">
          <p>&copy; {new Date().getFullYear()} Luxus Hausboot Berlin-Schmöckwitz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
