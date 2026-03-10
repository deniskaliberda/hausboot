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
} from "lucide-react";

const amenities = [
  { icon: Thermometer, label: "Finnische Sauna", description: "Mit Blick aufs Wasser" },
  { icon: Flame, label: "Kamin", description: "Gemütliche Abende" },
  { icon: Wifi, label: "WLAN", description: "Kostenloses High-Speed" },
  { icon: ChefHat, label: "Voll ausgestattete Küche", description: "Zum gemeinsamen Kochen" },
  { icon: Beef, label: "Grill", description: "Auf der Dachterrasse" },
  { icon: Sun, label: "Dachterrasse", description: "Mit Sonnendeck" },
  { icon: Waves, label: "SUP-Boards", description: "Inklusive" },
  { icon: Bike, label: "Fahrräder", description: "Für Ausflüge" },
  { icon: Bath, label: "2 Badezimmer", description: "Modern ausgestattet" },
  { icon: Droplets, label: "Direkter Wasserzugang", description: "Baden vom Boot" },
  { icon: ParkingCircle, label: "Parkplatz", description: "Direkt im Hafen" },
];

export function AmenitiesGrid() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Ausstattung & Annehmlichkeiten
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Alles, was Sie für einen perfekten Aufenthalt brauchen
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <amenity.icon className="h-8 w-8 text-primary" />
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
