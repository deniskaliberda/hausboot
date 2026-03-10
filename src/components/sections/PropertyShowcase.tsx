import { Card } from "@/components/ui/card";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getAllProperties } from "@/lib/data/properties";

export function PropertyShowcase() {
  const properties = getAllProperties();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Unsere Hausboote
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Komfort und Natur vereint – direkt auf dem Wasser
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

          {/* Placeholder for future houseboats */}
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
    </section>
  );
}
