import { MapPin, ShoppingBag, UtensilsCrossed, ParkingCircle } from "lucide-react";

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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Berlin-Schmöckwitz
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Unser Hausboot liegt im idyllischen Schmöckwitz, einem der
              schönsten Ortsteile Berlins. Umgeben von Wasser und Natur, und
              dennoch bestens angebunden an die Hauptstadt.
            </p>
            <p className="mt-4 text-muted-foreground">
              Die Dahme bietet hier weite Wasserflächen zum Entspannen,
              Paddeln und Baden. In der Umgebung finden Sie alles für den
              täglichen Bedarf sowie hervorragende Restaurants.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            {/* Placeholder for map or location image */}
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12" />
                <p className="mt-2 text-sm">Karte / Standortbild</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
