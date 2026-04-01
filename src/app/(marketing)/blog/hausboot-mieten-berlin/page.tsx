import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import {
  Users,
  BedDouble,
  Bath,
  Thermometer,
  Flame,
  Sun,
  Bike,
  Wifi,
  Car,
  Waves,
  ChefHat,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Hausboot mieten in Berlin — Luxus-Urlaub auf der Dahme in Schmöckwitz",
  description:
    "Luxus-Hausboot mit Sauna, Kamin & Dachterrasse in Berlin-Schmöckwitz mieten. Bis zu 8 Gäste, ab 350 €/Nacht. Jetzt unverbindlich anfragen.",
  keywords: [
    "Hausboot mieten Berlin",
    "Hausboot Übernachtung Berlin",
    "Luxus Hausboot Berlin",
    "Hausboot Schmöckwitz",
    "Hausboot mit Sauna Berlin",
  ],
  openGraph: {
    title:
      "Hausboot mieten in Berlin — Luxus-Urlaub auf der Dahme in Schmöckwitz",
    description:
      "Luxus-Hausboot mit Sauna, Kamin & Dachterrasse in Berlin-Schmöckwitz mieten. Bis zu 8 Gäste, ab 350 €/Nacht.",
    images: ["/images/properties/luxus-hausboot-dahme/essbereich.jpg"],
    type: "article",
  },
};

const relatedPosts = getRelatedPosts("hausboot-mieten-berlin", 3);

const amenities = [
  { icon: Thermometer, label: "Finnische Sauna", detail: "inkl. Brennholz" },
  { icon: Flame, label: "Pellet-Kaminofen", detail: "ab Herbst 2026" },
  { icon: ChefHat, label: "Voll ausgestattete Küche", detail: "Backofen, Spülmaschine" },
  { icon: Bath, label: "2 Badezimmer", detail: "Dusche & WC" },
  { icon: Wifi, label: "Kostenloses WLAN", detail: "Highspeed" },
  { icon: Sun, label: "Dachterrasse", detail: "mit Sonnendeck" },
  { icon: Waves, label: "1 SUP-Board", detail: "inkl. Paddel" },
  { icon: Bike, label: "2 Fahrräder", detail: "für Ausflüge" },
  { icon: Waves, label: "Direkter Wasserzugang", detail: "Badeleiter" },
  { icon: Car, label: "Parkplatz", detail: "im Hafen" },
];

export default function HausbootMietenBerlinPage() {
  return (
    <article className="pb-20">
      {/* Hero */}
      <header className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/properties/luxus-hausboot-dahme/essbereich.jpg"
            alt="Heller Essbereich im Luxus-Hausboot an der Dahme in Berlin-Schmöckwitz mit Blick aufs Wasser"
            width={1400}
            height={600}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-4 pb-10 sm:px-6">
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
              Unterkunft
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />8 Min. Lesezeit
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              1. April 2026
            </span>
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Hausboot mieten in Berlin — Luxus-Urlaub auf der Dahme in
            Schmöckwitz
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
        {/* Intro */}
        <section>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Berlin hat über 180 Kilometer Wasserstraßen, doch nur wenige Orte
            verbinden Großstadtnähe mit echter Ruhe am Wasser. Das
            Luxus-Hausboot in Schmöckwitz an der Dahme gehört dazu. Finnische
            Sauna, Kamin, Dachterrasse mit Sonnendeck und Platz für bis zu 8
            Gäste -- alles direkt am Wasser, 65 Minuten vom Alexanderplatz
            entfernt.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wer ein Hausboot in Berlin mieten möchte, stößt schnell auf die
            immer gleichen Angebote: kleine Boote ohne richtige Ausstattung oder
            Luxus-Yachten, die das Budget sprengen. Dieses Hausboot liegt
            dazwischen. Es bietet den Komfort einer Ferienwohnung -- mit vier
            Schlafzimmern, zwei Bädern und einer vollständigen Küche -- und
            dazu das Erlebnis, direkt auf dem Wasser zu wohnen.
          </p>
        </section>

        {/* TL;DR */}
        <div className="my-10 rounded-2xl border-l-4 border-primary bg-sand/60 p-6">
          <p className="font-semibold text-primary">Auf einen Blick</p>
          <p className="mt-2 text-muted-foreground">
            Das Luxus-Hausboot in Berlin-Schmöckwitz bietet finnische Sauna,
            Kamin, Dachterrasse und Platz für 8 Gäste ab 350 €/Nacht. Laut{" "}
            <a
              href="https://www.visitberlin.de"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitBerlin
            </a>{" "}
            verzeichnete die Stadt 2024 über 36 Millionen Übernachtungen --
            Unterkünfte am Wasser werden besonders stark nachgefragt.
            Mindestaufenthalt: 2 Nächte, unverbindliche Anfrage möglich.
          </p>
        </div>

        {/* Für wen */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Für wen ist das Hausboot perfekt?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Laut einer{" "}
            <a
              href="https://www.destatis.de"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Destatis-Erhebung (2024)
            </a>{" "}
            buchten 38 % aller Inlandsreisenden eine Ferienunterkunft mit
            Naturerlebnis. Das Hausboot vereint genau das: privater Rückzugsort
            am Wasser, ohne auf Komfort zu verzichten.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Familien mit Kindern
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Vier separate Schlafzimmer bieten genug Platz, damit niemand auf der
            Couch schlafen muss. Ein SUP-Board und zwei Fahrräder sind
            inklusive. In Laufweite gibt es einen Waldspielplatz, und die Dahme
            selbst ist flach genug zum Planschen. Kinder lieben das Abenteuer,
            auf einem echten Boot zu schlafen.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Freundesgruppen bis 8 Personen
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Die Dachterrasse mit Sonnendeck und Grill wird zum Mittelpunkt
            jedes Gruppenurlaubs. Abends in der Sauna aufwärmen, danach am Kamin
            zusammensitzen. Bei 350 € pro Nacht zahlt eine Gruppe von 8
            Personen weniger als 44 € pro Kopf -- günstiger als die meisten
            Berliner Hotels.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Paare auf der Suche nach Ruhe
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Schmöckwitz ist einer der ruhigsten Ortsteile Berlins. Kein
            Straßenlärm, kein Touristenandrang. Stattdessen: Sauna mit Blick
            aufs Wasser, Kaminabende und Sonnenaufgänge auf der Dachterrasse.
            Wer den Alltag komplett hinter sich lassen will, findet hier genau
            den richtigen Ort.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            JGA & besondere Anlässe
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ein Junggesellenabschied auf dem Hausboot? Das geht. Genug Platz
            für bis zu 8 Gäste, eine Sauna für den Wellness-Teil und eine
            Dachterrasse für die Feier. Die Lage abseits der Stadt sorgt dafür,
            dass niemand gestört wird -- weder die Gäste noch die Nachbarn.
          </p>
        </section>

        {/* Ausstattung */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Was bietet das Hausboot an Ausstattung?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine{" "}
            <a
              href="https://www.fewo-direkt.de"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              FeWo-direkt-Analyse (2024)
            </a>{" "}
            zeigt: Unterkünfte mit Sauna oder Whirlpool erzielen im Schnitt
            27 % mehr Buchungen als vergleichbare Objekte ohne
            Wellness-Ausstattung. Dieses Hausboot bietet beides -- und noch
            deutlich mehr.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-sand/60 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-xl font-semibold">
            Finnische Sauna mit eigenem Brennholz
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Die Sauna fasst bequem vier Personen und wird mit echtem Holz
            beheizt. Brennholz ist inklusive. Nach dem Saunagang geht es über
            die Badeleiter direkt ins Wasser der Dahme. Im Winter ein
            besonderes Erlebnis -- wenn der Dampf über dem kalten Wasser
            aufsteigt, vergisst man schnell, dass man in Berlin ist.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Dachterrasse mit Sonnendeck & Grill
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Die großzügige Dachterrasse bietet einen 360-Grad-Blick über die
            Dahme und die umliegenden Wälder. Liegestühle, ein Grill und genug
            Platz für alle Gäste machen sie zum Herzstück des Bootes. An
            warmen Abenden ist das hier der beste Platz in ganz Schmöckwitz.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Voll ausgestattete Küche
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Backofen, Spülmaschine, Kühlschrank mit Gefrierfach, Kaffeemaschine
            und alles, was man zum Kochen braucht. Wer nicht selbst kochen
            möchte: In Schmöckwitz gibt es mehrere Restaurants direkt am
            Wasser, erreichbar zu Fuß oder mit dem Fahrrad.
          </p>
        </section>

        {/* Lage */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Wo genau liegt das Hausboot in Berlin?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Berlin-Schmöckwitz liegt an der Dahme im Südosten der Stadt,
            umgeben von rund 17 km² Wasser- und Waldfläche (
            <a
              href="https://www.berlin.de/tourismus/"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              berlin.de
            </a>
            ). Der Ortsteil gehört zum Bezirk Treptow-Köpenick und zählt zu den
            grünsten Ecken der Hauptstadt.
          </p>

          <div className="mt-6 rounded-2xl bg-sand/60 p-6">
            <h3 className="font-serif text-lg font-semibold">
              Anreise auf einen Blick
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Ab Alexanderplatz</p>
                  <p className="text-sm text-muted-foreground">
                    Ca. 65 Minuten mit S-Bahn + Tram 68
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Ab Flughafen BER</p>
                  <p className="text-sm text-muted-foreground">
                    Ca. 20 Minuten mit dem Auto
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Tram 68</p>
                  <p className="text-sm text-muted-foreground">
                    Berlins schönste Straßenbahnstrecke -- direkt bis
                    Schmöckwitz
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Die Tram 68 verdient besondere Erwähnung. Sie fährt von der
            S-Bahn-Station Grünau direkt nach Schmöckwitz und überquert dabei
            mehrere Wasserläufe. Viele Berliner kennen diese Strecke als die
            schönste Straßenbahnfahrt der Stadt. Wer mit dem Auto kommt,
            parkt kostenlos direkt am Hafen.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Vor Ort gibt es alles, was man braucht: einen kleinen Supermarkt,
            Restaurants am Wasser, Fahrradverleihe und natürlich die Dahme
            selbst. Wer möchte, paddelt mit dem SUP-Board los und erkundet die
            umliegenden Seen. Oder macht einen Ausflug zum Müggelsee --
            Berlins größtem See, nur wenige Kilometer entfernt.
          </p>
        </section>

        {/* Preise */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Was kostet ein Aufenthalt auf dem Hausboot?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Laut{" "}
            <a
              href="https://www.hrs.de"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              HRS (2025)
            </a>{" "}
            liegt der durchschnittliche Hotelpreis in Berlin bei 128 € pro
            Nacht für ein Einzelzimmer. Das Hausboot bietet 4 Schlafzimmer und
            Platz für 8 Gäste ab 350 € pro Nacht -- also unter 44 € pro
            Person.
          </p>

          <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="font-serif text-lg font-semibold">Preisübersicht</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">Übernachtung</span>
                <span className="font-semibold">350 € / Nacht</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">
                  Endreinigung (einmalig)
                </span>
                <span className="font-semibold">125 €</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">
                  Wäschepaket pro Person
                </span>
                <span className="font-semibold">18 €</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Mindestaufenthalt</span>
                <span className="font-semibold">2 Nächte</span>
              </div>
            </div>
          </div>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Beispielrechnung: 3 Nächte, 6 Gäste
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            3 Nächte x 350 € = 1.050 € + 125 € Reinigung + 108 € Wäsche (6 x
            18 €) = insgesamt 1.283 €. Das sind rund 71 € pro Person für drei
            Nächte in einem Luxus-Hausboot mit Sauna und Dachterrasse. Versuchen
            Sie das mal in einem Berliner Boutique-Hotel.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Wie funktioniert die Buchung?
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Stellen Sie eine unverbindliche Anfrage über das Buchungsformular.
            Innerhalb von 24 Stunden erhalten Sie eine Bestätigung mit allen
            Details. Keine Vorkasse, kein Risiko. Erst nach Bestätigung wird
            die Anzahlung fällig. Stornierung ist bis 14 Tage vor Anreise
            kostenlos.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Häufige Fragen zum Hausboot
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Rund 67 % aller Reisenden informieren sich laut einer{" "}
            <a
              href="https://www.google.com/travel/about/"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google-Travel-Studie (2024)
            </a>{" "}
            vorab über FAQ-Bereiche, bevor sie buchen. Hier finden Sie die
            wichtigsten Antworten.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Wie viele Gäste dürfen auf das Hausboot?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Das Hausboot bietet Platz für maximal 8 Gäste in 4 separaten
                Schlafzimmern. Zwei Badezimmer sorgen dafür, dass es auch bei
                voller Belegung komfortabel bleibt. Kinder jeden Alters sind
                herzlich willkommen.
              </p>
            </div>

            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Sind Haustiere erlaubt?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ja, Haustiere sind nach Absprache willkommen. Bitte geben Sie
                bei der Buchungsanfrage an, ob und welches Tier Sie mitbringen
                möchten. Die Dahme und die umliegenden Wälder sind ideal für
                Spaziergänge mit Hund.
              </p>
            </div>

            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Wann ist Check-in und Check-out?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Check-in ist ab 15:00 Uhr, Check-out bis 11:00 Uhr. Bei
                Verfügbarkeit ist ein früher Check-in oder später Check-out nach
                Absprache möglich. Sie erhalten vorab alle Details per E-Mail.
              </p>
            </div>

            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Was ist im Preis inklusive?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Im Übernachtungspreis enthalten: WLAN, Sauna mit Brennholz,
                SUP-Board, 2 Fahrräder, Parkplatz, Küchenbenutzung und Zugang
                zur Dachterrasse. Endreinigung und Wäschepakete werden separat
                berechnet.
              </p>
            </div>

            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Gibt es WLAN auf dem Hausboot?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ja, kostenloses Highspeed-WLAN ist vorhanden. Die Verbindung
                ist stabil genug für Videoanrufe und Streaming. Wer möchte,
                kann also auch im Homeoffice vom Wasser aus arbeiten.
              </p>
            </div>

            <div className="rounded-xl bg-sand/60 p-6">
              <h3 className="font-serif text-lg font-semibold">
                Kann man in der Dahme schwimmen?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ja. Über die Badeleiter gelangen Sie direkt ins Wasser. Die
                Dahme hat an dieser Stelle sehr gute Wasserqualität -- laut{" "}
                <a
                  href="https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/"
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Berliner Lageso (2024)
                </a>{" "}
                durchgehend mit &quot;ausgezeichnet&quot; bewertet. Im Sommer ein
                absolutes Highlight.
              </p>
            </div>
          </div>
        </section>

        {/* Fazit */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Warum lohnt sich das Hausboot in Schmöckwitz?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Laut{" "}
            <a
              href="https://www.statista.com"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Statista (2024)
            </a>{" "}
            stieg die Nachfrage nach Ferienunterkünften am Wasser in
            Deutschland um 34 % im Vergleich zum Vorjahr. Dieses Hausboot
            verbindet, was die meisten Angebote nicht schaffen: echten Luxus
            und echte Natur, ohne weit reisen zu müssen.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Vier Schlafzimmer, zwei Bäder, eine finnische Sauna, ein Kamin
            und eine Dachterrasse -- das alles direkt am Wasser der Dahme, 20
            Minuten vom Flughafen BER und 65 Minuten vom Alexanderplatz
            entfernt. Ob Familienurlaub, Freundesausflug oder romantisches
            Wochenende: Das Hausboot in Schmöckwitz ist einer der ungewöhnlichsten
            Orte, an dem man in Berlin übernachten kann.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-serif text-2xl font-bold">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Prüfen Sie die Verfügbarkeit und sichern Sie sich Ihren Wunschtermin.
            Bestätigung innerhalb von 24 Stunden.
          </p>
          <Link
            href="/buchen"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Verfügbarkeit prüfen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold">
              Weitere Artikel
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-muted-foreground">
                      {post.category} &middot; {post.readingTime}
                    </span>
                    <h3 className="mt-1 font-serif text-base font-semibold leading-snug group-hover:text-primary">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
