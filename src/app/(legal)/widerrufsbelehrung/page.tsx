import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
};

export default function WiderrufsbelehrungPage() {
  return (
    <div className="prose prose-neutral max-w-none">
      <h1>Widerrufsbelehrung</h1>

      <h2>Ausnahme vom Widerrufsrecht</h2>
      <p>
        Gemäß § 312g Abs. 2 Nr. 9 BGB besteht das Widerrufsrecht nicht bei
        Verträgen zur Erbringung von Dienstleistungen in den Bereichen
        Beherbergung zu anderen Zwecken als zu Wohnzwecken, wenn im Vertrag
        ein bestimmter Zeitpunkt oder Zeitraum vorgesehen ist.
      </p>

      <p>
        Da unsere Buchungen immer einen bestimmten Zeitraum (Check-in / Check-out)
        vorsehen, besteht <strong>kein gesetzliches Widerrufsrecht</strong> für
        gebuchte Übernachtungen auf unseren Hausbooten.
      </p>

      <h2>Stornierungsbedingungen</h2>
      <p>
        Ungeachtet des fehlenden Widerrufsrechts bieten wir Ihnen folgende
        freiwillige Stornierungsmöglichkeiten:
      </p>
      <ul>
        <li>
          <strong>Bis 30 Tage vor Anreise:</strong> Kostenlose Stornierung
          (volle Erstattung des gezahlten Betrags)
        </li>
        <li>
          <strong>15–29 Tage vor Anreise:</strong> Erstattung von 50% des
          Gesamtpreises
        </li>
        <li>
          <strong>Weniger als 15 Tage vor Anreise:</strong> Keine Erstattung
          möglich
        </li>
      </ul>

      <p>
        Die Stornierung muss schriftlich per E-Mail an info@urlaubsbleibe.de
        erfolgen. Maßgeblich ist das Datum des E-Mail-Eingangs.
      </p>

      <h2>Kontakt</h2>
      <p>
        Bei Fragen zu Stornierungen oder zur Widerrufsbelehrung wenden Sie
        sich bitte an:<br />
        E-Mail: info@urlaubsbleibe.de<br />
        Telefon: +49 172 5642200
      </p>

      <p className="text-sm text-muted-foreground">
        Stand: April 2026
      </p>
    </div>
  );
}
