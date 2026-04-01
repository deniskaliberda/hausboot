import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import {
  ArrowRight,
  Clock,
  MapPin,
  Utensils,
  Waves,
  Calendar,
  Train,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Schmöckwitz entdecken — Berlins bestgehütetes Geheimnis am Wasser",
  description:
    "650 Jahre Geschichte, Tram 68 und Natur pur: Schmöckwitz in Berlin-Köpenick mit Badestelle, Restaurants am See und Events. Ihr Guide für 2025.",
  keywords: [
    "Schmöckwitz Ausflugsziele",
    "Schmöckwitz Berlin",
    "Dahme Berlin",
    "Tram 68 Berlin",
    "Schmöckwitz Badestelle",
    "Seddinsee",
  ],
  openGraph: {
    title:
      "Schmöckwitz entdecken — Berlins bestgehütetes Geheimnis am Wasser",
    description:
      "650 Jahre Geschichte, Tram 68 und Natur pur: Schmöckwitz in Berlin-Köpenick mit Badestelle, Restaurants am See und Events.",
    images: [
      {
        url: "/images/properties/luxus-hausboot-dahme/exterior-seeblick.jpg",
        width: 1200,
        height: 630,
        alt: "Panoramablick auf die Dahme in Berlin-Schmöckwitz mit Hausbooten und grünem Ufer",
      },
    ],
  },
};

export default function SchmoeckwitzEntdeckenPage() {
  const relatedPosts = getRelatedPosts("schmoeckwitz-entdecken", 2);

  return (
    <article className="pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden sm:h-[60vh]">
        <Image
          src="/images/properties/luxus-hausboot-dahme/exterior-seeblick.jpg"
          alt="Panoramablick auf die Dahme in Berlin-Schmöckwitz mit Hausbooten und grünem Ufer im Sommer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-4 pb-10 text-white sm:px-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
              Reiseziel
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />7 Min. Lesezeit
            </span>
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Schmöckwitz entdecken — Berlins bestgehütetes Geheimnis am
            Wasser
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-foreground">
          Schmöckwitz liegt ganz im Südosten Berlins und ist komplett von
          Wasser umgeben. Dahme, Seddinsee, Zeuthener See, Große Krampe,
          Kleine Krampe und Krossinsee bilden eine natürliche Grenze um
          diesen 17,14 km&#178; großen Ortsteil von Treptow-Köpenick. Mit
          nur 4.487 Einwohnern gehört Schmöckwitz zu den ruhigsten Ecken
          der Hauptstadt.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          Wer Berlin abseits von Touristen-Hotspots erleben möchte, findet
          hier Wald, Wasser und eine 650-jährige Geschichte. Die Anreise
          mit der legendären Tram 68 ist dabei schon der halbe Ausflug.
          Dieser Guide zeigt alles, was Sie vor Ihrem Besuch wissen
          sollten.
        </p>

        {/* TL;DR */}
        <div className="mt-8 rounded-xl border border-primary/20 bg-forest-light p-6">
          <p className="font-serif text-lg font-semibold text-primary">
            Kurz & knapp
          </p>
          <p className="mt-2 text-foreground">
            Schmöckwitz ist ein 650 Jahre alter Berliner Ortsteil, komplett
            von sechs Gewässern umgeben. Die Tram 68 bringt Sie in 30
            Minuten ab S-Bahnhof Grünau hierher. Vor Ort erwarten Sie eine
            Badestelle mit ausgezeichneter Wasserqualität, Restaurants
            direkt am See und Berlins entspannteste Atmosphäre.
          </p>
        </div>

        {/* Geschichte */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Wie alt ist Schmöckwitz — und warum kennt es kaum jemand?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Schmöckwitz wurde erstmals 1375 im Landbuch Kaiser Karls IV.
            als &bdquo;Smewitz&ldquo; erwähnt — das macht den Ort über 650
            Jahre alt (
            <a
              href="https://www.berlin.de/ba-treptow-koepenick/"
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bezirksamt Treptow-Köpenick
            </a>
            ). Im Juli 2025 feierte die Gemeinde dieses Jubiläum mit einer
            ganzen Festwoche.
          </p>
          <p className="mt-4 text-muted-foreground">
            Der Name stammt vermutlich aus dem Slawischen und bedeutet so
            viel wie &bdquo;Ort an der Harzstelle&ldquo;. Über
            Jahrhunderte blieb Schmöckwitz ein Fischerdorf. Erst die
            Straßenbahn und der Bädertourismus Anfang des 20. Jahrhunderts
            brachten Berliner Ausflügler in die Gegend.
          </p>
          <p className="mt-4 text-muted-foreground">
            Heute lebt Schmöckwitz von genau dieser Unbekanntheit. Während
            der Müggelsee und Wannsee an Sommerwochenenden überlaufen sind,
            bleibt es hier ruhig. Kein Massentourismus, keine
            Hotelkomplexe — nur Wasser, Wald und Vogelgesang.
          </p>
        </section>

        {/* Anfahrt */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Train className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wie kommt man nach Schmöckwitz? Die Tram 68
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Die Tram 68 gilt als Berlins schönste Straßenbahnstrecke. Auf
            7,8 Kilometern fährt sie vom S-Bahnhof Grünau durch Wald und
            an Seen entlang bis zur Endhaltestelle Alt-Schmöckwitz (
            <a
              href="https://www.bvg.de/"
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              BVG
            </a>
            ). Die Strecke wurde am 9. März 1912 eröffnet — zunächst mit
            Benzol-Triebwagen, später elektrifiziert.
          </p>
          <p className="mt-4 text-muted-foreground">
            Ein besonderes Kapitel: Während der Olympischen Spiele 1936
            diente die Tram 68 als Shuttle zur Regattastrecke in
            Berlin-Grünau. Tausende Zuschauer fuhren damit zum
            Ruder-Wettbewerb.
          </p>
          <p className="mt-4 text-muted-foreground">
            2006 stand die Linie kurz vor der Stilllegung. Doch
            engagierter Bürgerprotest rettete sie — 2011 wurde die
            Weiterführung endgültig gesichert. Ein Glücksfall: Ohne die
            Tram 68 wäre Schmöckwitz deutlich schwerer erreichbar.
          </p>

          <div className="mt-6 rounded-xl bg-sand p-6">
            <p className="font-serif text-lg font-semibold">
              Anreise auf einen Blick
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <strong>Ab Alexanderplatz:</strong> S-Bahn bis Grünau,
                  dann Tram 68 — ca. 65-72 Minuten
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <strong>Ab Flughafen BER:</strong> ca. 20 Minuten mit
                  dem Auto über die A113
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <strong>Tram 68:</strong> Tarifbereich Berlin AB, normale
                  BVG-Fahrkarte gültig
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Essen & Trinken */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Utensils className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wo kann man in Schmöckwitz essen gehen?
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Schmöckwitz hat keine Restaurantmeile — dafür Lokale mit
            Charakter. Die Auswahl ist überschaubar, aber jedes einzelne
            lohnt den Besuch. Hier sind die drei besten Adressen in der
            Umgebung.
          </p>

          {/* Restaurant 1 */}
          <div className="mt-6 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-serif text-xl font-semibold">
              Restaurant Strandlust — Der Kaffeekahn
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Seddinpromenade 3A, 12527 Berlin
            </p>
            <p className="mt-3 text-muted-foreground">
              Das Herzstück ist der historische Dampfer
              &bdquo;Kaffeekahn&ldquo; von 1872. Seit 1927 liegt er fest
              vertäut auf dem Seddinsee und dient als Gastraum. Regionale
              Küche mit Fisch aus der Region, dazu ein Panoramablick über
              den See. Geöffnet Mittwoch bis Sonntag, 12 bis 20 Uhr.
            </p>
          </div>

          {/* Restaurant 2 */}
          <div className="mt-4 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-serif text-xl font-semibold">
              Waldhotel am See — Restaurant Biberblick
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Schmöckwitz, direkt am Zeuthener See
            </p>
            <p className="mt-3 text-muted-foreground">
              Das Waldhotel mit 41 Zimmern beherbergt das Restaurant
              Biberblick. Terrasse direkt am Zeuthener See, gutbürgerliche
              Küche und eine solide Weinkarte. Besonders schön an
              Sommerabenden, wenn die Sonne über dem See untergeht.
            </p>
          </div>

          {/* Restaurant 3 */}
          <div className="mt-4 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-serif text-xl font-semibold">
              Café Liebig
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Regattastraße 158, 12527 Berlin-Grünau
            </p>
            <p className="mt-3 text-muted-foreground">
              Technisch in Grünau, aber nur wenige Tram-Haltestellen
              entfernt. Café Liebig verbindet Galerie und Gastronomie. Die
              Karte wechselt saisonal, der Kuchen ist hausgemacht.
              Geöffnet Mittwoch bis Sonntag ab 11:30 Uhr.
            </p>
          </div>
        </section>

        {/* Badestelle */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Waves className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Kann man in Schmöckwitz baden? Die Badestelle an der Dahme
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Ja — und die Wasserqualität ist ausgezeichnet. Das Landesamt
            für Gesundheit und Soziales Berlin (
            <a
              href="https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/"
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LAGeSo
            </a>
            ) bewertet die Badestelle Schmöckwitz in der
            4-Jahres-Bewertung mit &bdquo;ausgezeichnet&ldquo;. Der
            Zugang ist kostenlos.
          </p>
          <p className="mt-4 text-muted-foreground">
            Direkt neben der Badestelle befindet sich ein Waldspielplatz —
            perfekt für Familien. Ein Holzschiff zum Klettern,
            Insekten-Wippen und ein Kletterturm mit Rutsche halten Kinder
            beschäftigt, während Eltern am Ufer entspannen.
          </p>

          <div className="mt-6 rounded-xl bg-sand p-6">
            <p className="font-serif text-lg font-semibold">
              So finden Sie die Badestelle
            </p>
            <p className="mt-2 text-muted-foreground">
              Mit der Tram 68 oder Bus 733/168 bis Haltestelle
              &bdquo;Alt-Schmöckwitz&ldquo;. Von dort sind es nur 50
              Meter über den &bdquo;Schwarzer Weg&ldquo; bis zum Wasser.
              Kein offizieller Parkplatz — Anreise mit ÖPNV empfohlen.
            </p>
          </div>

          <p className="mt-4 text-muted-foreground">
            Eine Sache sollten Sie wissen: Es gibt hier keinen Kiosk und
            keine Umkleidekabinen. Bringen Sie Getränke, Snacks und ein
            Handtuch mit. Genau das macht den Charme aus — keine
            Infrastruktur, keine Menschenmassen, einfach Natur.
          </p>
        </section>

        {/* Events */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Welche Events finden in Schmöckwitz und Köpenick statt?
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Der Bezirk Treptow-Köpenick hat einen überraschend vollen
            Veranstaltungskalender. Von Straßenfesten bis zum
            Boots-Korso: Hier sind die wichtigsten Events für Ihre
            Reiseplanung.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">
                  650 Jahre Schmöckwitz — Festwoche
                </h3>
                <span className="text-sm text-muted-foreground">
                  12.–20. Juli 2025
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Eine ganze Woche für das Jubiläum: das Karolinenhofer
                Sommerfest, ein Boots-Korso auf der Dahme und das 19.
                Inselfest. Das Highlight des Jahres für die Gemeinde.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">
                  Köpenicker Sommer
                </h3>
                <span className="text-sm text-muted-foreground">
                  Mitte Juni
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Das größte Stadtteilfest in Köpenick. Drei Bühnen, über
                200 Aussteller und ein Programm von Livemusik bis
                Kunsthandwerk. Rund um die Altstadt Köpenick.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">
                  Winzersommer Altstadt Köpenick
                </h3>
                <span className="text-sm text-muted-foreground">
                  August
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Wein, regionale Küche und Live-Musik in der historischen
                Altstadt. Ein entspannter Abend mit Blick auf die Dahme.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">
                  Köpenicker Whiskyfest
                </h3>
                <span className="text-sm text-muted-foreground">
                  September
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Für Whisky-Liebhaber: Tastings, Masterclasses und eine
                Auswahl internationaler Destillerien. Kleine, feine
                Veranstaltung.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold">
                  Herbstspektakel
                </h3>
                <span className="text-sm text-muted-foreground">
                  September / Oktober
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Der goldene Herbst am Wasser — Marktstände, Kürbisfest und
                Laternenumzüge. Besonders schön, wenn sich die Laubbäume
                an der Dahme verfärben.
              </p>
            </div>
          </div>
        </section>

        {/* Fazit + CTA */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Schmöckwitz erleben — am besten vom Wasser aus
          </h2>
          <p className="mt-4 text-muted-foreground">
            Schmöckwitz vereint das, was in Berlin selten zusammenkommt:
            Ruhe, Natur und Geschichte. Der Ortsteil liegt nur eine
            Stunde vom Alexanderplatz entfernt und fühlt sich trotzdem an
            wie ein anderes Land. Ob zum Baden, Essen oder einfach zum
            Durchatmen — Schmöckwitz belohnt jeden Besuch.
          </p>
          <p className="mt-4 text-muted-foreground">
            Und wer nicht nur einen Tag bleiben möchte? Direkt an der
            Dahme in Schmöckwitz liegt unser Luxus-Hausboot — mit
            finnischer Sauna, Kamin und Dachterrasse. Aufwachen auf dem
            Wasser, Kaffee mit Seeblick und abends den Sonnenuntergang
            über dem Seddinsee.
          </p>

          <div className="mt-8 rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <p className="font-serif text-2xl font-bold">
              Übernachten auf dem Wasser?
            </p>
            <p className="mt-2 opacity-90">
              Unser Luxus-Hausboot liegt direkt an der Dahme in
              Schmöckwitz. 4 Schlafzimmer, Sauna, Kamin — bis zu 8 Gäste.
            </p>
            <Link
              href="/buchen"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
            >
              Verfügbarkeit prüfen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Häufige Fragen zu Schmöckwitz
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold">
                Wie komme ich am besten nach Schmöckwitz?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Die schönste Route: S-Bahn bis Grünau, dann die Tram 68
                bis Alt-Schmöckwitz. Die Fahrt dauert ab Alexanderplatz
                etwa 65-72 Minuten. Vom Flughafen BER sind es nur 20
                Minuten mit dem Auto über die A113.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold">
                Ist die Badestelle in Schmöckwitz sicher?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ja. Das LAGeSo Berlin bewertet die Wasserqualität der
                Badestelle Schmöckwitz in der 4-Jahres-Bewertung als
                &bdquo;ausgezeichnet&ldquo;. Es handelt sich um eine
                offizielle Badestelle an der Dahme — unbewacht, aber
                regelmäßig geprüft.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold">
                Gibt es Restaurants direkt am Wasser?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ja. Das Restaurant Strandlust auf dem historischen
                Kaffeekahn von 1872 liegt direkt auf dem Seddinsee. Das
                Waldhotel am See bietet mit dem Restaurant Biberblick
                Terrassen-Gastronomie am Zeuthener See. Beide sind
                fußläufig oder per Tram erreichbar.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold">
                Lohnt sich Schmöckwitz auch im Winter?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Unbedingt. Die Landschaft ist im Winter besonders
                stimmungsvoll — Nebel über der Dahme, verschneite Wälder,
                Ruhe. Die Tram 68 fährt ganzjährig. Und wer auf unserem
                Hausboot übernachtet, kann den Kamin und die Sauna
                nutzen.
              </p>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-14 border-t border-border/50 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Weiterlesen
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold">
              Das könnte Sie auch interessieren
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
                    <span className="text-xs text-muted-foreground">
                      {post.category} · {post.readingTime}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug group-hover:text-primary">
                      {post.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                      Lesen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
