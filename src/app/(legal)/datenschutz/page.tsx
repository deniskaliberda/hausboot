import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <div className="prose prose-neutral max-w-none">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Datenschutz auf einen Blick</h2>

      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können.
      </p>

      <h3>Datenerfassung auf dieser Website</h3>
      <p>
        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
        91789, USA gehostet. Vercel verarbeitet dabei personenbezogene Daten
        in unserem Auftrag. Details finden Sie in der Datenschutzerklärung von
        Vercel.
      </p>

      <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

      <h3>Datenschutz</h3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>

      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
        Marko Pfaff, Alte Straße 28, 04651 Bad Lausick, E-Mail: info@urlaubsbleibe.de, Telefon: +49 172 5642200
      </p>

      <h2>4. Datenerfassung auf dieser Website</h2>

      <h3>Cookies</h3>
      <p>
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
        Webbrowser auf Ihrem Endgerät speichert. Wir verwenden technisch
        notwendige Cookies, die für den Betrieb der Website erforderlich sind.
        Analyse-Cookies werden nur nach Ihrer ausdrücklichen Einwilligung
        gesetzt.
      </p>

      <h3>Kontaktformular / Buchungsformular</h3>
      <p>
        Wenn Sie uns per Kontaktformular oder Buchungsformular Anfragen
        zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage und
        für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
        wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2>5. Zahlungsdienstleister</h2>

      <h3>Stripe</h3>
      <p>
        Für die Zahlungsabwicklung nutzen wir Stripe Payments Europe, Ltd.,
        1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland.
        Bei der Buchung werden Ihre Zahlungsdaten direkt von Stripe verarbeitet.
        Details finden Sie in der Datenschutzerklärung von Stripe:{" "}
        <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
          https://stripe.com/de/privacy
        </a>
      </p>

      <h2>6. E-Mail-Versand</h2>

      <h3>Resend</h3>
      <p>
        Für den Versand transaktionaler E-Mails (Buchungsbestätigungen,
        Stornierungen) nutzen wir Resend, Inc. Die Verarbeitung erfolgt auf
        Grundlage unseres berechtigten Interesses an der zuverlässigen
        Zustellung von E-Mails (Art. 6 Abs. 1 lit. f DSGVO) bzw. zur
        Erfüllung des Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
      </p>

      <h2>7. Datenbank</h2>

      <h3>Supabase</h3>
      <p>
        Wir verwenden Supabase (Supabase, Inc.) als Datenbankanbieter. Ihre
        Buchungs- und Kontaktdaten werden dort gespeichert. Mit Supabase
        besteht ein Auftragsverarbeitungsvertrag.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
        gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
        und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
        zum Thema personenbezogene Daten können Sie sich jederzeit an uns
        wenden.
      </p>

      <h2>9. Schriftarten</h2>
      <p>
        Diese Website nutzt selbst gehostete Schriftarten. Es werden keine
        Verbindungen zu externen Servern (z.B. Google Fonts) hergestellt.
        Die Schriftdateien werden direkt von unserem Server geladen.
      </p>
    </div>
  );
}
