import { formatEuro } from "@/lib/utils/currency";
import { Separator } from "@/components/ui/separator";

interface PriceSummaryProps {
  nights: number;
  pricePerNight: number;
  subtotal: number;
  cleaningFee: number;
  totalPrice: number;
}

export function PriceSummary({
  nights,
  pricePerNight,
  subtotal,
  cleaningFee,
  totalPrice,
}: PriceSummaryProps) {
  if (nights <= 0) return null;

  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <h3 className="font-semibold">Preisübersicht</h3>
      <div className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            {formatEuro(pricePerNight)} x {nights} {nights === 1 ? "Nacht" : "Nächte"}
          </span>
          <span>{formatEuro(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Endreinigung</span>
          <span>{formatEuro(cleaningFee)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold text-base">
          <span>Gesamt</span>
          <span>{formatEuro(totalPrice)}</span>
        </div>
        <p className="text-xs text-muted-foreground">Alle Preise inkl. MwSt.</p>
      </div>
    </div>
  );
}
