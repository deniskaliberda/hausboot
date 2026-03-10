import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
};

export default function AGBPage() {
  return (
    <div className="prose prose-neutral max-w-none">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle über unsere
        Website geschlossenen Beherbergungsverträge zwischen dem Gast und
        [Firmenname] (nachfolgend „Vermieter").
      </p>

      <h2>§ 2 Vertragsabschluss</h2>
      <p>
        Der Beherbergungsvertrag kommt durch die Buchung über unsere Website
        und die Bestätigung der Zahlung durch Stripe zustande. Mit Abschluss
        der Zahlung gilt die Buchung als verbindlich.
      </p>

      <h2>§ 3 Leistungen</h2>
      <p>
        Der Vermieter ist verpflichtet, das gebuchte Hausboot zum vereinbarten
        Zeitraum bereitzuhalten und die vereinbarten Leistungen zu erbringen.
        Der Gast ist verpflichtet, den vereinbarten Preis zu zahlen.
      </p>

      <h2>§ 4 Preise und Zahlungsbedingungen</h2>
      <p>
        Alle angegebenen Preise sind Endpreise und enthalten die gesetzliche
        Mehrwertsteuer. Die Reinigungsgebühr wird separat ausgewiesen.
        Die Zahlung erfolgt bei Buchung über den Zahlungsdienstleister Stripe.
      </p>

      <h2>§ 5 Check-in / Check-out</h2>
      <p>
        Check-in: ab 15:00 Uhr<br />
        Check-out: bis 11:00 Uhr<br />
        Abweichende Zeiten sind nach Absprache möglich.
      </p>

      <h2>§ 6 Stornierung und Rücktritt</h2>
      <p>
        Stornierungen sind zu folgenden Bedingungen möglich:
      </p>
      <ul>
        <li>Bis 30 Tage vor Anreise: kostenlose Stornierung (volle Erstattung)</li>
        <li>15–29 Tage vor Anreise: 50% des Gesamtpreises</li>
        <li>Weniger als 15 Tage vor Anreise: keine Erstattung</li>
      </ul>
      <p>
        Die Stornierung muss schriftlich per E-Mail erfolgen.
      </p>

      <h2>§ 7 Haftung</h2>
      <p>
        Der Vermieter haftet nicht für Schäden, die durch höhere Gewalt,
        Naturereignisse oder andere unvorhersehbare Umstände entstehen.
        Die Haftung des Vermieters für einfache Fahrlässigkeit ist auf den
        typischen, vorhersehbaren Schaden begrenzt.
      </p>

      <h2>§ 8 Hausordnung</h2>
      <p>
        Der Gast verpflichtet sich, das Hausboot pfleglich zu behandeln und
        die Hausordnung einzuhalten. Bei Verstößen behält sich der Vermieter
        das Recht vor, den Vertrag fristlos zu kündigen.
      </p>

      <h2>§ 9 Datenschutz</h2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in
        unserer Datenschutzerklärung.
      </p>

      <h2>§ 10 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
        Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der
        übrigen Bestimmungen unberührt.
      </p>

      <p className="text-sm text-muted-foreground">
        Stand: März 2026
      </p>
    </div>
  );
}
