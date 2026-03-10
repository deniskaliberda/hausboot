import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/lib/utils/button-variants";
import { Users, BedDouble, Bath, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/lib/utils/currency";
import { getHeroImage } from "@/lib/data/properties";
import type { PropertyWithImages } from "@/types/property";

interface PropertyCardProps {
  property: PropertyWithImages;
  badge?: string;
}

export function PropertyCard({ property, badge }: PropertyCardProps) {
  const heroImage = getHeroImage(property);

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/hausboote/${property.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {heroImage && (
            <Image
              src={heroImage.url}
              alt={heroImage.alt_text}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {badge && (
            <Badge className="absolute left-3 top-3">{badge}</Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-5">
        <Link href={`/hausboote/${property.slug}`}>
          <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-primary">
            {property.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">
          {property.district} · {property.short_description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {property.max_guests} Gäste
          </span>
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" /> {property.bedrooms} Schlafzimmer
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" /> {property.bathrooms} Bäder
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">
              {formatEuro(property.base_price_per_night)}
            </span>
            <span className="text-sm text-muted-foreground"> / Nacht</span>
          </div>
          <Link
            href={`/hausboote/${property.slug}`}
            className={cn(buttonVariants())}
          >
            Details <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
