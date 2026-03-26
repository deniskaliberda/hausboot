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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Alles inklusive
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Ausstattung &amp; Annehmlichkeiten
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Alles, was Sie für einen perfekten Aufenthalt brauchen
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="group flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 transition-colors group-hover:bg-primary/15">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 text-sm font-semibold">{amenity.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
