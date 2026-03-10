import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getAllProperties } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Unsere Hausboote",
  description:
    "Entdecken Sie unsere Luxus-Hausboote in Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – direkt am Wasser buchen.",
};

export default function HausbootePage() {
  const properties = getAllProperties();

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">
          Unsere Hausboote
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Wählen Sie Ihr Traumhausboot für einen unvergesslichen Aufenthalt
          auf dem Wasser in Berlin-Schmöckwitz.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, i) => (
          <PropertyCard
            key={property.id}
            property={property}
            badge={i === 0 ? "Beliebt" : undefined}
          />
        ))}

        {/* Placeholder for more boats */}
        <Card className="flex items-center justify-center border-dashed p-12 text-center">
          <div>
            <p className="font-serif text-lg font-semibold text-muted-foreground">
              Weitere Hausboote
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Bald verfügbar
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
