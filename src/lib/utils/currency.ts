export function formatEuro(cents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

export function centsToEuro(cents: number): number {
  return cents / 100;
}

export function euroToCents(euro: number): number {
  return Math.round(euro * 100);
}
