import Image from "next/image";
import { MapPin, ShoppingBag, UtensilsCrossed, ParkingCircle } from "lucide-react";

const IMAGES_BASE = "/images/properties/luxus-hausboot-dahme";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Einkaufsmöglichkeiten",
    description: "Supermärkte und Bäcker in unmittelbarer Nähe",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Ausgezeichnete Restaurants fußläufig erreichbar",
  },
  {
    icon: ParkingCircle,
    title: "Parkplätze",
    description: "Direkt im Hafen verfügbar",
  },
  {
    icon: MapPin,
    title: "Lage",
    description: "Idyllisch an der Dahme in Berlin-Schmöckwitz",
  },
];

export function LocationSection() {
  return (
    <section className="bg-sand/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Standort
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Berlin-Schmöckwitz
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Unser Hausboot liegt im idyllischen Schmöckwitz, einem der
              schönsten Ortsteile Berlins. Umgeben von Wasser und Natur, und
              dennoch bestens angebunden an die Hauptstadt.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Die Dahme bietet hier weite Wasserflächen zum Entspannen,
              Paddeln und Baden. In der Umgebung finden Sie alles für den
              täglichen Bedarf sowie hervorragende Restaurants.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`${IMAGES_BASE}/dachterrasse-kamin.jpg`}
              alt="Dachterrasse mit rustikalem Kamin und Blick auf den See"
              width={700}
              height={500}
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
