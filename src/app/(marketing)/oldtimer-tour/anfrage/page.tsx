import type { Metadata } from "next";
import { InquiryForm } from "@/components/oldtimer/InquiryForm";

export const metadata: Metadata = {
  title: "Anfrage – Oldtimer Tour mit Hausbootübernachtung",
  description:
    "Stellen Sie eine unverbindliche Anfrage für unsere Oldtimer Tour mit Hausbootübernachtung in Berlin-Schmöckwitz.",
};

export default function AnfragePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold sm:text-4xl">
          Anfrage stellen
        </h1>
        <p className="mt-4 text-muted-foreground">
          Füllen Sie das folgende Formular aus. Wir melden uns schnellstmöglich
          mit einem individuellen Angebot bei Ihnen.
        </p>
      </div>

      <div className="mt-10">
        <InquiryForm />
      </div>
    </div>
  );
}
