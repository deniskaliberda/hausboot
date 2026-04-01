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
    <section className="bg-[#f5f0e8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
              Standort
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#1a1a2e] sm:text-4xl lg:text-5xl">
              Berlin-Schmöckwitz
            </h2>
            <p className="mt-5 text-lg text-[#5a5a6e] leading-relaxed">
              Unser Hausboot liegt im idyllischen Schmöckwitz, einem der
              schönsten Ortsteile Berlins. Umgeben von Wasser und Natur, und
              dennoch bestens angebunden an die Hauptstadt.
            </p>
            <p className="mt-4 text-[#5a5a6e] leading-relaxed">
              Die Dahme bietet hier weite Wasserflächen zum Entspannen,
              Paddeln und Baden. In der Umgebung finden Sie alles für den
              täglichen Bedarf sowie hervorragende Restaurants.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1b3a4b]/10">
                    <item.icon className="h-5 w-5 text-[#1b3a4b]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1a1a2e]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#5a5a6e] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <Image
              src={`${IMAGES_BASE}/dachterrasse-kamin.jpg`}
              alt="Dachterrasse mit rustikalem Kamin und Blick auf den See"
              width={700}
              height={500}
              className="h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
