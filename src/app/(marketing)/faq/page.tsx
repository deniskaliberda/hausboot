import type { Metadata } from "next";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ – Häufig gestellte Fragen",
};

const faqs = [
  {
    question: "Wie viele Gäste passen auf ein Hausboot?",
    answer:
      "Unser Luxus-Hausboot bietet Platz für bis zu 8 Personen mit 3 Schlafzimmern und 2 Badezimmern.",
  },
  {
    question: "Gibt es eine Mindestaufenthaltsdauer?",
    answer: "Ja, die Mindestaufenthaltsdauer beträgt 2 Nächte.",
  },
  {
    question: "Wann ist Check-in und Check-out?",
    answer: "Check-in ist ab 15:00 Uhr, Check-out bis 11:00 Uhr. Abweichende Zeiten sind nach Absprache möglich.",
  },
  {
    question: "Ist die Sauna im Preis inbegriffen?",
    answer: "Ja, die Nutzung der finnischen Sauna ist im Übernachtungspreis enthalten.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer: "Ja, Parkplätze stehen direkt im Hafen kostenlos zur Verfügung.",
  },
  {
    question: "Kann man direkt vom Hausboot aus ins Wasser?",
    answer:
      "Ja! Das Hausboot hat einen direkten Wasserzugang. Sie können direkt vom Boot in die Dahme springen. SUP-Boards sind ebenfalls inklusive.",
  },
  {
    question: "Wie kann ich stornieren?",
    answer:
      "Stornierungen sind bis 30 Tage vor Anreise kostenlos. Zwischen 15–29 Tagen erstatten wir 50%. Weniger als 15 Tage vor Anreise ist keine Erstattung möglich. Details finden Sie in unseren AGB.",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer: "Wir akzeptieren Kreditkarten, Giropay, SEPA-Lastschrift und Sofortüberweisung über unseren sicheren Zahlungsdienstleister Stripe.",
  },
  {
    question: "Sind Haustiere erlaubt?",
    answer: "Bitte kontaktieren Sie uns vorab, um dies zu besprechen. In der Regel sind Haustiere nach Absprache willkommen.",
  },
  {
    question: "Gibt es Einkaufsmöglichkeiten in der Nähe?",
    answer: "Ja, Supermärkte und ein Bäcker befinden sich in unmittelbarer Nähe. Auch sehr gute Restaurants sind fußläufig erreichbar.",
  },
];

export default function FAQPage() {
  return (
    <>
    <FAQJsonLd faqs={faqs} />
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">
          Häufig gestellte Fragen
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Antworten auf die wichtigsten Fragen zu unseren Hausbooten
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl divide-y">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <p className="mt-2 text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
