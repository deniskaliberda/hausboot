import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import {
  ArrowRight,
  Flame,
  Snowflake,
  Sun,
  Droplets,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sauna auf dem Hausboot — Wellness & Entspannung auf der Dahme",
  description:
    "Private finnische Sauna direkt auf dem Wasser in Berlin-Schmoeckwitz. Seeblick, Dahme-Zugang, komplette Privatsphaere. Vergleich mit Vabali & Liquidrom.",
  keywords: [
    "Sauna Hausboot",
    "Wellness Berlin",
    "Finnische Sauna Berlin",
    "Hausboot Winter",
    "Sauna am Wasser Berlin",
    "Private Sauna Berlin",
  ],
  openGraph: {
    title: "Sauna auf dem Hausboot — Wellness & Entspannung auf der Dahme",
    description:
      "Finnische Sauna mit Seeblick, direktem Wasserzugang und absoluter Privatsphaere auf dem Hausboot in Schmoeckwitz.",
    images: [
      {
        url: "/images/properties/luxus-hausboot-dahme/sauna.jpg",
        width: 1200,
        height: 630,
        alt: "Finnische Sauna mit Panoramafenster und Blick auf die Dahme im Luxus-Hausboot Berlin-Schmoeckwitz",
      },
    ],
  },
};

const relatedPosts = getRelatedPosts("sauna-hausboot-wellness", 2);

export default function SaunaHausbootPage() {
  return (
    <article className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Link
            href="/blog"
            className="transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <span>/</span>
          <span>Wellness</span>
        </div>

        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Sauna auf dem Hausboot — Wellness &amp; Entspannung auf der Dahme
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Aktualisiert am 1. April 2026 &middot; 6 Min. Lesezeit
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/images/properties/luxus-hausboot-dahme/sauna.jpg"
            alt="Finnische Sauna mit Panoramafenster und Blick auf den Seddinsee im Luxus-Hausboot Berlin-Schmoeckwitz"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto mt-12 max-w-3xl">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          Eine private finnische Sauna direkt auf dem Wasser. Panoramablick auf
          die Dahme. Direkter Sprung in den See nach dem Aufguss. Und das
          Ganze ohne Oeffnungszeiten, ohne Fremde, ohne Aufgusstimer.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Das ist kein Spa-Hotel. Das ist besser. Unser Luxus-Hausboot in
          Berlin-Schmoeckwitz hat eine vollwertige finnische Sauna an Bord
          &mdash; inklusive Brennholz, inklusive im Uebernachtungspreis,
          inklusive absoluter Privatsphaere.
        </p>

        {/* Table of Contents */}
        <nav className="mt-10 rounded-xl border border-border/50 bg-card p-6">
          <p className="font-serif text-lg font-semibold">Inhalt</p>
          <ol className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="#was-macht-besonders"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Droplets className="h-4 w-4 shrink-0 text-primary" />
                Was macht eine Sauna auf dem Wasser besonders?
              </a>
            </li>
            <li>
              <a
                href="#sommer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Sun className="h-4 w-4 shrink-0 text-primary" />
                Sauna im Sommer
              </a>
            </li>
            <li>
              <a
                href="#winter"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Snowflake className="h-4 w-4 shrink-0 text-primary" />
                Sauna im Winter
              </a>
            </li>
            <li>
              <a
                href="#vergleich"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Shield className="h-4 w-4 shrink-0 text-primary" />
                Vergleich: Private Sauna vs. oeffentliche Saunas
              </a>
            </li>
            <li>
              <a
                href="#warum-schmoeckwitz"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Flame className="h-4 w-4 shrink-0 text-primary" />
                Warum Schmoeckwitz der perfekte Ort ist
              </a>
            </li>
          </ol>
        </nav>

        {/* --- Section 1: Was macht besonders --- */}
        <section id="was-macht-besonders" className="mt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Droplets className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Was macht eine Sauna auf dem Wasser besonders?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Eine Sauna in einer Therme oder einem Spa ist eine Sache. Eine
            Sauna auf dem Wasser ist eine voellig andere. Der Unterschied liegt
            nicht nur in der Lage &mdash; er liegt im Erlebnis.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-sand/60 p-5">
              <p className="font-semibold text-primary">Panoramafenster</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Waehrend Sie schwitzen, schauen Sie direkt auf den Seddinsee.
                Kein Fliesenspiegel, keine Wand. Wasser, Baeume, Himmel.
              </p>
            </div>
            <div className="rounded-xl bg-sand/60 p-5">
              <p className="font-semibold text-primary">Direkter Seezugang</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tuer auf, drei Schritte, Sprung ins Wasser. Das
                Abkuehlbecken ist die Dahme selbst &mdash; kein Vergleich zu
                einem Tauchbecken.
              </p>
            </div>
            <div className="rounded-xl bg-sand/60 p-5">
              <p className="font-semibold text-primary">Komplette Privatsphaere</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Keine Oeffnungszeiten. Keine anderen Gaeste. Keine Regeln
                ausser Ihren eigenen. Sie bestimmen Temperatur, Aufguss und
                Tageszeit.
              </p>
            </div>
            <div className="rounded-xl bg-sand/60 p-5">
              <p className="font-semibold text-primary">Brennholz inklusive</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Brennholz wird gestellt. Einfach einheizen und warten, bis
                die richtige Temperatur erreicht ist. Keine Aufpreise, kein
                Stress.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 2: Sommer --- */}
        <section id="sommer" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Sun className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wie fuehlt sich die Sauna im Sommer an?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Im Hochsommer erreicht die Dahme Wassertemperaturen von 24 bis 26
            Grad. Die Sauna laeuft bei 80 bis 100 Grad. Der Kontrast ist
            sanfter als im Winter &mdash; aber nicht weniger wirkungsvoll.
          </p>

          <p className="mt-4 leading-relaxed">
            Der typische Sommerabend auf dem Hausboot sieht so aus: Sauna
            aufheizen, zwei bis drei Gaenge schwitzen. Dazwischen in die warme
            Dahme springen. Danach rauf auf die Dachterrasse, ein kaltes
            Getraenk, und den Sonnenuntergang ueber dem Seddinsee anschauen.
          </p>

          <p className="mt-4 leading-relaxed">
            Im Sommer koennen Sie die Sauna auch morgens nutzen &mdash; wenn
            der Nebel noch ueber dem See liegt und die Voegel gerade aufwachen.
            Ein stiller, fast meditativer Start in den Tag.
          </p>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-semibold text-primary">Sommer-Tipp</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Kombinieren Sie den Saunagang mit einer SUP-Tour bei
              Sonnenuntergang. Ein SUP-Board ist bei Ihrem Aufenthalt inklusive.
              Erst paddeln, dann schwitzen, dann ins Wasser. Besser wird es
              nicht.
            </p>
          </div>
        </section>

        {/* --- Section 3: Winter --- */}
        <section id="winter" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Snowflake className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Warum ist der Winter die beste Sauna-Jahreszeit?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Viele denken beim Hausboot automatisch an Sommer. Verstaendlich.
            Aber wer einmal im Winter auf dem Wasser war, weiss: Das ist die
            atmosphaerischste Jahreszeit auf einem Hausboot.
          </p>

          <p className="mt-4 leading-relaxed">
            Stellen Sie sich vor: Draussen Nebel ueber dem See. Stille. Keine
            Boote, keine Touristen. Nur das leise Knarzen des Hausboots am
            Steg. Drinnen laeuft die Sauna auf vollen Touren. 90 Grad. Der
            Aufguss zischt. Und dann &mdash; raus in die kalte Luft, rein ins
            eisige Wasser der Dahme.
          </p>

          <p className="mt-4 leading-relaxed">
            Der Kontrast ist brutal und befreiend zugleich. Ihr Koerper
            schuettet Endorphine aus. Die Haut kribbelt. Und wenn Sie dann
            zurueck ins Hausboot gehen, den Kamin anmachen und sich in eine
            Decke wickeln &mdash; dann verstehen Sie, warum Finnen so
            entspannt sind.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-sand/60 p-5">
              <Flame className="h-5 w-5 text-primary" />
              <p className="mt-2 font-semibold">Pellet-Kaminofen</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ab Herbst 2026 sorgt ein Pellet-Kaminofen im Wohnbereich fuer
                behagliche Waerme. Perfekte Ergaenzung zur Sauna.
              </p>
            </div>
            <div className="rounded-xl bg-sand/60 p-5">
              <Snowflake className="h-5 w-5 text-primary" />
              <p className="mt-2 font-semibold">Winterpreise</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Die Nebensaison von November bis Maerz bietet guenstigere
                Preise. Gleiches Hausboot, gleiche Sauna, weniger Gaeste in
                der Region.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 4: Vergleich --- */}
        <section id="vergleich" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Private Hausboot-Sauna vs. oeffentliche Saunas in Berlin
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Berlin hat grossartige Saunas. Vabali, Liquidrom, Stadtbad
            Neukoelln &mdash; alle haben ihre Berechtigung. Aber sie alle
            teilen ein Problem: Sie teilen die Sauna mit Fremden. Hier ein
            ehrlicher Vergleich.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-sand/60">
                  <th className="px-4 py-3 font-semibold">Kriterium</th>
                  <th className="px-4 py-3 font-semibold">Vabali</th>
                  <th className="px-4 py-3 font-semibold">Liquidrom</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    FINNFLOAT
                  </th>
                  <th className="px-4 py-3 font-semibold text-primary">
                    Hausboot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="px-4 py-3 font-medium">Preis</td>
                  <td className="px-4 py-3">ab 37 &euro;/Tag</td>
                  <td className="px-4 py-3">ab 25 &euro;</td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Tagesmiete
                  </td>
                  <td className="px-4 py-3 text-primary">inklusive</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Privatsphaere</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="hidden px-4 py-3 sm:table-cell">ja</td>
                  <td className="px-4 py-3 text-primary">ja, 24/7</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Seezugang</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="hidden px-4 py-3 sm:table-cell">ja</td>
                  <td className="px-4 py-3 text-primary">ja, direkt</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Oeffnungszeiten</td>
                  <td className="px-4 py-3">9&ndash;24 Uhr</td>
                  <td className="px-4 py-3">10&ndash;24 Uhr</td>
                  <td className="hidden px-4 py-3 sm:table-cell">flexibel</td>
                  <td className="px-4 py-3 text-primary">keine</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Aufguss</td>
                  <td className="px-4 py-3">nach Plan</td>
                  <td className="px-4 py-3">nach Plan</td>
                  <td className="hidden px-4 py-3 sm:table-cell">selbst</td>
                  <td className="px-4 py-3 text-primary">selbst</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Wartezeiten</td>
                  <td className="px-4 py-3">haeufig</td>
                  <td className="px-4 py-3">manchmal</td>
                  <td className="hidden px-4 py-3 sm:table-cell">keine</td>
                  <td className="px-4 py-3 text-primary">keine</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Uebernachtung</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="px-4 py-3">nein</td>
                  <td className="hidden px-4 py-3 sm:table-cell">nein</td>
                  <td className="px-4 py-3 text-primary">ja, bis 8 Gaeste</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 leading-relaxed">
            Vabali und Liquidrom sind toll fuer einen Nachmittag in der Stadt.
            Keine Frage. Aber wenn Sie echte Ruhe suchen, eigenen Aufguss
            machen wollen und danach in einen echten See springen moechten
            &mdash; dann gibt es keine bessere Option als eine private Sauna
            auf dem Wasser.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Was ist FINNFLOAT?
          </h3>

          <p className="mt-4 leading-relaxed">
            FINNFLOAT bietet Saunafloesse auf dem Mueggelsee zur Tagesmiete an.
            Ein gutes Konzept &mdash; aber Sie mieten nur die Sauna, nicht die
            Uebernachtung. Bei uns ist die Sauna Teil des Gesamterlebnisses:
            Sauna, Kamin, Dachterrasse, vier Schlafzimmer und zwei Baeder.
            Alles an einem Ort, fuer mehrere Tage.
          </p>
        </section>

        {/* --- Section 5: Warum Schmoeckwitz --- */}
        <section id="warum-schmoeckwitz" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Flame className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Warum ist Schmoeckwitz der perfekte Ort dafuer?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Berlin hat viele schoene Ecken am Wasser. Wannsee, Mueggelsee,
            Tegeler See. Aber Schmoeckwitz hat etwas, das die anderen nicht
            bieten: Stille.
          </p>

          <p className="mt-4 leading-relaxed">
            Kein Partyboot-Verkehr. Keine ueberfuellten Strande. Kein
            Restaurant-Gedraenge am Ufer. Schmoeckwitz ist immer noch ein
            ruhiger Vorort, der sich seinen doerflichen Charakter bewahrt hat.
            Und genau das macht ihn zum idealen Ort fuer ein Wellness-Erlebnis
            auf dem Wasser.
          </p>

          <p className="mt-4 leading-relaxed">
            Der Kontrast zum Berliner Grossstadtleben koennte nicht groesser
            sein. Morgens sitzen Sie auf der Dachterrasse und hoeren nichts
            ausser Vogelgezwitscher und dem leisen Plaetschern der Dahme. Und
            abends? Abends heizen Sie die Sauna an.
          </p>
        </section>

        {/* --- CTA --- */}
        <section className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Sauna, See und Stille &mdash; wann kommen Sie?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Finnische Sauna, direkter Seezugang, Kamin im Wohnbereich und
            absolute Privatsphaere. Bis zu 8 Gaeste. Sauna im Preis
            inklusive. Pruefen Sie jetzt die Verfuegbarkeit.
          </p>
          <Link
            href="/buchen"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Jetzt buchen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* --- Related Posts --- */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-bold">
              Weiterlesen
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={600}
                      height={338}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground">
                      {post.category} &middot; {post.readingTime}
                    </p>
                    <h3 className="mt-2 font-serif text-lg font-semibold leading-snug group-hover:text-primary">
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
