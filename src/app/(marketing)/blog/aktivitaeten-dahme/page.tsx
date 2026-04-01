import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import { ArrowRight, MapPin, Bike, Fish, Waves, Footprints, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Paddeln, Radfahren, Wandern — Aktivitaeten rund um die Dahme",
  description:
    "SUP, Kajak, Dahmeradweg, Wandern am Schmoeckwitzer Werder und Angeln: Die besten Aktivitaeten rund um die Dahme fuer Ihren Hausboot-Urlaub in Berlin.",
  keywords: [
    "Dahme Paddeln",
    "SUP Berlin",
    "Dahmeradweg",
    "Wanderung Schmoeckwitzer Werder",
    "Aktivitaeten Dahme",
    "Kajak Berlin",
    "Radfahren Berlin Suedosten",
  ],
  openGraph: {
    title: "Paddeln, Radfahren, Wandern — Aktivitaeten rund um die Dahme",
    description:
      "SUP, Kajak, Dahmeradweg und mehr: Die besten Outdoor-Aktivitaeten fuer Ihren Hausboot-Urlaub in Schmoeckwitz.",
    images: [
      {
        url: "/images/properties/luxus-hausboot-dahme/dachterrasse-kamin.jpg",
        width: 1200,
        height: 630,
        alt: "Dachterrasse des Luxus-Hausboots mit Blick auf die Dahme bei Sonnenuntergang",
      },
    ],
  },
};

const relatedPosts = getRelatedPosts("aktivitaeten-dahme", 2);

export default function AktivitaetenDahmePage() {
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
          <span>Aktivitaeten</span>
        </div>

        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Paddeln, Radfahren, Wandern — Aktivitaeten rund um die Dahme
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Aktualisiert am 1. April 2026 &middot; 9 Min. Lesezeit
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/images/properties/luxus-hausboot-dahme/dachterrasse-kamin.jpg"
            alt="Dachterrasse des Luxus-Hausboots in Berlin-Schmoeckwitz mit Blick ueber die Dahme und den Seddinsee"
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
          Die Dahme ist 95 Kilometer lang. Sie fliesst von Suedost-Brandenburg
          quer durch das Berliner Umland und muendet bei Koepenick in die Spree.
          Allein rund um Schmoeckwitz verbindet der Fluss vier Seen miteinander
          &mdash; Seddinsee, Langer See, Zeuthener See und Crossinsee.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Was bedeutet das fuer Sie? Egal ob Sie paddeln, wandern, radfahren
          oder einfach nur am Wasser sitzen wollen &mdash; die Gegend rund um
          unser Hausboot bietet alles. Und das ohne die Menschenmassen, die
          Sie von der Berliner Innenstadt kennen.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Dieser Guide fasst die besten Aktivitaeten zusammen: mit konkreten
          Adressen, Streckenlaengen und praktischen Tipps. Damit Sie Ihren
          Aufenthalt auf dem Wasser optimal nutzen koennen.
        </p>

        {/* Table of Contents */}
        <nav className="mt-10 rounded-xl border border-border/50 bg-card p-6">
          <p className="font-serif text-lg font-semibold">Inhalt</p>
          <ol className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#sup-kajak" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Waves className="h-4 w-4 shrink-0 text-primary" />
                SUP &amp; Kajak auf der Dahme
              </a>
            </li>
            <li>
              <a href="#wanderung" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Footprints className="h-4 w-4 shrink-0 text-primary" />
                Wanderung Schmoeckwitzer Werder
              </a>
            </li>
            <li>
              <a href="#radfahren" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Bike className="h-4 w-4 shrink-0 text-primary" />
                Radfahren &mdash; Dahmeradweg &amp; mehr
              </a>
            </li>
            <li>
              <a href="#angeln" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Fish className="h-4 w-4 shrink-0 text-primary" />
                Angeln am Seddinsee
              </a>
            </li>
            <li>
              <a href="#tagesausfluege" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Compass className="h-4 w-4 shrink-0 text-primary" />
                Tagesausfluege ab Schmoeckwitz
              </a>
            </li>
          </ol>
        </nav>

        {/* --- Section 1: SUP & Kajak --- */}
        <section id="sup-kajak" className="mt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Waves className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              SUP &amp; Kajak auf der Dahme
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Die Dahme gehoert zu den ruhigsten Paddelrevieren in der Region
            Berlin-Brandenburg. Kein Motorbootverkehr auf weiten Abschnitten,
            kaum Stroemung, klares Wasser. Perfekte Bedingungen fuer
            Stand-Up-Paddling und Kajak &mdash; auch fuer Anfaenger.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Kanu-Faehrallee-19 in Rauchfangswerder
          </h3>

          <p className="mt-4 leading-relaxed">
            Der groesste Verleih in der direkten Umgebung sitzt in
            Rauchfangswerder, etwa 10 Minuten mit dem Auto vom Hausboot
            entfernt. Die Flotte umfasst 23 Kajaks, 5 Canadier, SUP-Boards
            sowie Ruder- und Tretboote. Die Saison laeuft von Maerz bis
            November.
          </p>

          <div className="mt-4 rounded-xl bg-sand/60 p-5">
            <p className="text-sm font-semibold text-primary">
              Oeffnungszeiten Kanu-Faehrallee-19
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Mittwoch bis Freitag: 10:00 &ndash; 18:00 Uhr</li>
              <li>Samstag &amp; Sonntag: 10:00 &ndash; 19:00 Uhr</li>
              <li>Montag &amp; Dienstag: geschlossen</li>
            </ul>
          </div>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Bootsverleih am Waldhotel
          </h3>

          <p className="mt-4 leading-relaxed">
            Am Zeuthener See &mdash; der direkt an den Seddinsee anschliesst
            &mdash; bietet der Bootsverleih am Waldhotel ein breites
            Sortiment: Tretboote, Floesse, Motorboote, Kanus und SUP-Boards.
            Besonders praktisch fuer laengere Touren Richtung Koenigs
            Wusterhausen.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            SUP-Board inklusive beim Hausboot
          </h3>

          <p className="mt-4 leading-relaxed">
            Einen Verleih brauchen Sie eigentlich gar nicht: Bei Ihrem
            Aufenthalt auf unserem Hausboot ist ein SUP-Board inklusive. Direkt
            vom Steg aufs Wasser &mdash; ohne Anfahrt, ohne Reservierung. Der
            Seddinsee liegt buchstaeblich vor der Tuer.
          </p>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-semibold text-primary">Tipp</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Die fruehen Morgenstunden sind die beste Zeit fuers Paddeln. Das
              Wasser ist spiegelglatt, die Luft noch kuehl. Mit etwas Glueck
              sehen Sie Reiher und Eisvoegel am Ufer.
            </p>
          </div>
        </section>

        {/* --- Section 2: Wanderung Schmoeckwitzer Werder --- */}
        <section id="wanderung" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Footprints className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wanderung Schmoeckwitzer Werder &mdash; 14 km am Wasser
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Der Schmoeckwitzer Werder ist eine Halbinsel zwischen Seddinsee,
            Langem See, Zeuthener See und Crossinsee. Ein 14 Kilometer langer
            Rundweg fuehrt einmal komplett um die Halbinsel herum. Der Weg ist
            flach, gut begehbar und bietet immer wieder freie Blicke aufs
            Wasser.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Der klassische Rundweg (14 km)
          </h3>

          <p className="mt-4 leading-relaxed">
            Startpunkt ist die Strassenbahnhaltestelle Schmoeckwitz (Tram 68).
            Von dort geht es entlang des suedlichen Ufers des Langen Sees,
            durch den Wald Richtung Zeuthener See und ueber die noerdliche
            Seite zurueck. Rechnen Sie mit etwa 3,5 bis 4 Stunden Gehzeit.
          </p>

          <p className="mt-4 leading-relaxed">
            Die Route fuehrt ueberwiegend durch Wald und ueber unbefestigte
            Wege. Festes Schuhwerk ist empfehlenswert, besonders nach Regen.
            Einkehrmoeglichkeiten gibt es in Schmoeckwitz selbst &mdash; am
            besten vor oder nach der Wanderung.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Langstrecke: Gruenau &ndash; Schmoeckwitz &ndash; Gosen (29 km)
          </h3>

          <p className="mt-4 leading-relaxed">
            Wer mehr will, kann die Strecke auf 29 Kilometer ausdehnen: von
            S-Bahnhof Gruenau ueber Schmoeckwitz bis nach Gosen am Seddinsee.
            Eine anspruchsvolle Tagestour, die durch abwechslungsreiche
            Landschaft fuehrt &mdash; Flussauen, Kiefernwald und stille
            Buchten.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl bg-sand/60">
            <div className="grid gap-px sm:grid-cols-3">
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">14 km</p>
                <p className="mt-1 text-sm text-muted-foreground">Rundweg</p>
              </div>
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">4 Seen</p>
                <p className="mt-1 text-sm text-muted-foreground">am Weg</p>
              </div>
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">~4 Std.</p>
                <p className="mt-1 text-sm text-muted-foreground">Gehzeit</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: Radfahren --- */}
        <section id="radfahren" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Bike className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Radfahren &mdash; Dahmeradweg und die besten Touren
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Die Region rund um die Dahme ist flach, gut ausgebaut und ideal
            zum Radfahren. Der bekannteste Radweg der Gegend ist der
            Dahmeradweg &mdash; aber es gibt noch mehr lohnende Strecken.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Dahmeradweg (96 km)
          </h3>

          <p className="mt-4 leading-relaxed">
            Der Dahmeradweg fuehrt auf 96 Kilometern von Golssen in
            Suedost-Brandenburg bis nach Berlin-Gruenau. Die Strecke ist
            durchgehend flach und familientauglich. Sie folgt dem Flusslauf
            der Dahme durch kleine Doerfer, Waeldchen und an mehreren Seen
            entlang.
          </p>

          <p className="mt-4 leading-relaxed">
            Von Schmoeckwitz aus koennen Sie bequem auf den letzten Abschnitt
            des Dahmeradwegs aufsteigen &mdash; Richtung Koenigs Wusterhausen
            (ca. 15 km suedlich) oder Richtung Gruenau (ca. 10 km noerdlich).
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Berliner Suedosten Radtour (67 km)
          </h3>

          <p className="mt-4 leading-relaxed">
            Ein grosser Loop durch den gruenen Suedosten Berlins: Start am
            Treptower Park, dann ueber den Mueggelsee zum Gosener Kanal,
            weiter zum Seddinsee und nach Schmoeckwitz. Von dort zurueck
            ueber den Langen See, die Dahme und die Spree. Insgesamt 67
            Kilometer, etwa 5,5 Stunden reine Fahrzeit.
          </p>

          <p className="mt-4 leading-relaxed">
            Die Tour eignet sich hervorragend als Tagesausflug. Sie koennen
            jederzeit in Schmoeckwitz starten oder enden &mdash; und den Rest
            des Tages auf dem Hausboot verbringen.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            7-Bruecken-Tour (39 km)
          </h3>

          <p className="mt-4 leading-relaxed">
            Eine kuerzere, aber abwechslungsreiche Tour ab Koenigs
            Wusterhausen. Die Route fuehrt ueber sieben Bruecken entlang der
            Dahme und durch die umliegenden Seen. 39 Kilometer, ueberwiegend
            flach, mit guter Beschilderung.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl bg-sand/60">
            <div className="grid gap-px sm:grid-cols-3">
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">96 km</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dahmeradweg
                </p>
              </div>
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">67 km</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Suedosten-Loop
                </p>
              </div>
              <div className="bg-card p-5 text-center">
                <p className="text-2xl font-bold text-primary">39 km</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  7-Bruecken-Tour
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-semibold text-primary">Tipp</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Kein eigenes Rad dabei? In Koepenick und Gruenau gibt es mehrere
              Fahrradverleihe. Alternativ finden Sie ueberall im Berliner
              Suedosten Leihraeder von nextbike und Lime.
            </p>
          </div>
        </section>

        {/* --- Section 4: Angeln --- */}
        <section id="angeln" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Fish className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Angeln am Seddinsee &mdash; was ist moeglich?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Der Seddinsee und die angrenzenden Gewaesser gehoeren zu den
            fischreichsten Seen im Berliner Suedosten. Hier tummeln sich Aal,
            Barsch, Hecht, Zander, Wels, Schleie und Karpfen &mdash; ein
            echtes Paradies fuer Angler.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">
            Angelkarten und Genehmigungen
          </h3>

          <p className="mt-4 leading-relaxed">
            Die Fischereirechte am Seddinsee liegen bei der Koepenicker
            Fischervereinigung. Tages-, Wochen- und Monatsangelkarten koennen
            Sie direkt bei der Vereinigung erwerben. Zusaetzlich brauchen Sie
            einen gueltigen Fischereischein oder einen
            Touristenfischereischein des Landes Brandenburg.
          </p>

          <p className="mt-4 leading-relaxed">
            Den Touristenfischereischein bekommen Sie unkompliziert bei der
            zustaendigen Fischereibehoerde. Er gilt 28 Tage, kostet rund 25
            Euro und erfordert keine Pruefung. Perfekt fuer Urlauber.
          </p>

          <div className="mt-6 rounded-xl bg-sand/60 p-5">
            <p className="text-sm font-semibold text-primary">
              Fischarten im Seddinsee
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Aal", "Barsch", "Hecht", "Zander", "Wels", "Schleie", "Karpfen"].map(
                (fish) => (
                  <span
                    key={fish}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {fish}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* --- Section 5: Tagesausfluege --- */}
        <section id="tagesausfluege" className="mt-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Compass className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Welche Tagesausfluege lohnen sich ab Schmoeckwitz?
            </h2>
          </div>

          <p className="mt-6 leading-relaxed">
            Schmoeckwitz liegt am suedoestlichen Rand Berlins &mdash; nah genug
            an der Stadt fuer spontane Ausfluege, weit genug entfernt fuer
            echte Ruhe. Hier sind die vier besten Ziele, die Sie bequem an
            einem Tag erreichen.
          </p>

          {/* Koepenick */}
          <h3 className="mt-8 font-serif text-xl font-semibold">
            Koepenick Altstadt &amp; Schloss
          </h3>

          <p className="mt-4 leading-relaxed">
            Koepenick gehoert zu den aeltesten Siedlungen Berlins &mdash; ueber
            800 Jahre Geschichte. Die Altstadt liegt malerisch auf einer Insel
            zwischen Dahme und Spree. Das barocke Schloss Koepenick wurde
            zwischen 1677 und 1682 erbaut und beherbergt heute das
            Kunstgewerbemuseum.
          </p>

          <p className="mt-4 leading-relaxed">
            Die beruehmteste Geschichte des Ortes? Der Hauptmann von Koepenick.
            1906 besetzte der Schuster Wilhelm Voigt in einer gestohlenen
            Hauptmannsuniform das Rathaus und beschlagnahmte die Stadtkasse.
            Eine Statue vor dem Rathaus erinnert bis heute daran.
          </p>

          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              Ca. 20 Minuten mit der Tram 68 + S-Bahn ab Schmoeckwitz
            </span>
          </div>

          {/* Mueggelsee */}
          <h3 className="mt-8 font-serif text-xl font-semibold">
            Mueggelsee &amp; Mueggelturm
          </h3>

          <p className="mt-4 leading-relaxed">
            Der Mueggelsee ist mit 743 Hektar Berlins groesster See. Am
            Suedufer liegt der Mueggelturm &mdash; ein 29 Meter hoher
            Aussichtsturm mit 126 Stufen. Von oben haben Sie einen
            Panoramablick ueber den See, die Mueggelspreeniederung und bei
            klarer Sicht bis zum Berliner Fernsehturm.
          </p>

          <p className="mt-4 leading-relaxed">
            Im Sommer ist der Mueggelsee ein beliebtes Badeziel. Mehrere
            Strandbaeder und Badestellen laden zum Schwimmen ein. Das
            Restaurant am Mueggelturm bietet gehobene Kueche mit Seeblick.
          </p>

          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Ca. 25 Minuten mit dem Auto ab Schmoeckwitz</span>
          </div>

          {/* Spreewald */}
          <h3 className="mt-8 font-serif text-xl font-semibold">
            Spreewald
          </h3>

          <p className="mt-4 leading-relaxed">
            Der Spreewald liegt 80 bis 100 Kilometer suedoestlich von
            Schmoeckwitz &mdash; etwa eine Stunde mit dem Auto. Das
            UNESCO-Biosphaerenreservat ist bekannt fuer seine verzweigten
            Wasserarme, die traditionellen Kahnfahrten und die Spreewaldgurke.
          </p>

          <p className="mt-4 leading-relaxed">
            Von Luebbenau oder Burg aus starten die meisten Kahnfahrten.
            Rechnen Sie mit 2 bis 3 Stunden fuer eine ausfuehrliche Tour.
            Danach lohnt sich ein Spaziergang durch die Altstadt von Luebbenau
            mit ihren Fachwerkhaeusern.
          </p>

          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Ca. 1 Stunde mit dem Auto (80&ndash;100 km)</span>
          </div>

          {/* Tropical Islands */}
          <h3 className="mt-8 font-serif text-xl font-semibold">
            Tropical Islands
          </h3>

          <p className="mt-4 leading-relaxed">
            Die groesste tropische Urlaubswelt Europas liegt etwa 50 Kilometer
            suedlich von Schmoeckwitz &mdash; rund 45 Minuten mit dem Auto.
            Die ehemalige Cargolifter-Halle beherbergt einen tropischen
            Regenwald, Wasserrutschen, einen Sandstrand und ein riesiges
            Schwimmbad.
          </p>

          <p className="mt-4 leading-relaxed">
            Besonders an Regentagen oder im Winter eine gute Alternative.
            Kinder lieben es. Erwachsene schalten im Spa-Bereich ab. Ein
            halber bis ganzer Tag ist schnell gefuellt.
          </p>

          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>Ca. 45 Minuten mit dem Auto (50 km)</span>
          </div>

          {/* Ueberblick */}
          <div className="mt-10 overflow-hidden rounded-xl border border-border/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-sand/60">
                  <th className="px-4 py-3 font-semibold">Ziel</th>
                  <th className="px-4 py-3 font-semibold">Entfernung</th>
                  <th className="px-4 py-3 font-semibold">Fahrzeit</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    Highlight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="px-4 py-3">Koepenick</td>
                  <td className="px-4 py-3">~10 km</td>
                  <td className="px-4 py-3">20 Min.</td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Altstadt, Schloss, Hauptmann
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Mueggelsee</td>
                  <td className="px-4 py-3">~15 km</td>
                  <td className="px-4 py-3">25 Min.</td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Mueggelturm, Baden, Restaurant
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Spreewald</td>
                  <td className="px-4 py-3">80&ndash;100 km</td>
                  <td className="px-4 py-3">~1 Std.</td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Kahnfahrten, Natur
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tropical Islands</td>
                  <td className="px-4 py-3">~50 km</td>
                  <td className="px-4 py-3">45 Min.</td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Tropenbad, Rutschen, Spa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Bereit fuer Ihr Abenteuer an der Dahme?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Paddeln, wandern, radfahren &mdash; und danach zurueck aufs
            Hausboot, Sauna anheizen und den Sonnenuntergang geniessen. Klingt
            gut? Dann sichern Sie sich jetzt Ihren Wunschtermin.
          </p>
          <Link
            href="/buchen"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Verfuegbarkeit pruefen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* --- Related Posts --- */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-bold">
              Das koennte Sie auch interessieren
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
