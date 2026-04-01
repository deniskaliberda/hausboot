import {
  Thermometer,
  Flame,
  Wifi,
  ChefHat,
  Beef,
  Sun,
  Waves,
  Bike,
  Bath,
  Droplets,
  ParkingCircle,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  { icon: Thermometer, label: "Finnische Sauna", description: "Brennholz wird gestellt" },
  { icon: Flame, label: "Kamin", description: "Gemütliche Abende" },
  { icon: Wifi, label: "WLAN", description: "Kostenloses High-Speed" },
  { icon: ChefHat, label: "Voll ausgestattete Küche", description: "Zum gemeinsamen Kochen" },
  { icon: Beef, label: "Grill", description: "Brennholz wird gestellt" },
  { icon: Sun, label: "Dachterrasse", description: "Mit Sonnendeck" },
  { icon: Waves, label: "1 SUP-Board", description: "Inklusive" },
  { icon: Bike, label: "2 Fahrräder", description: "Für Ausflüge" },
  { icon: Bath, label: "2 Badezimmer", description: "Modern ausgestattet" },
  { icon: Droplets, label: "Direkter Wasserzugang", description: "Baden vom Boot" },
  { icon: ParkingCircle, label: "Parkplatz", description: "Direkt im Hafen" },
  { icon: ShieldCheck, label: "Fliegengitter", description: "In allen Schlafzimmern" },
  { icon: Flame, label: "Pellet-Kaminofen", description: "Im Saloon (ab Herbst 2026)" },
];

export function AmenitiesGrid() {
  return (
    <section className="bg-[#0b1229] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-[family-name:var(--font-label)] text-xs font-medium uppercase tracking-[0.3em] text-[#c4956a]">
            Alles inklusive
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#f5f0e8] sm:text-4xl lg:text-5xl">
            Ausstattung &amp; Annehmlichkeiten
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#8b92b0]">
            Alles, was Sie für einen perfekten Aufenthalt brauchen
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="group flex flex-col items-center rounded-2xl border border-white/[0.06] bg-[#141a32] p-6 text-center transition-all hover:border-[#c4956a]/30 hover:shadow-lg hover:shadow-[#c4956a]/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c4956a]/10 transition-colors group-hover:bg-[#c4956a]/20">
                <amenity.icon className="h-6 w-6 text-[#c4956a]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#f5f0e8]">
                {amenity.label}
              </h3>
              <p className="mt-1 text-xs text-[#8b92b0]">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
