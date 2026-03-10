import { differenceInCalendarDays, eachDayOfInterval, format } from "date-fns";
import type { SeasonalPricing } from "@/types/property";

interface PriceCalculationResult {
  nights: number;
  pricePerNight: number;
  subtotal: number;
  cleaningFee: number;
  totalPrice: number;
  nightlyBreakdown: { date: string; price: number }[];
}

/**
 * Calculate the total price for a booking.
 * All prices are in EUR cents.
 */
export function calculateBookingPrice(
  checkIn: Date,
  checkOut: Date,
  basePricePerNight: number,
  cleaningFee: number,
  seasonalPricing: SeasonalPricing[] = []
): PriceCalculationResult {
  const nights = differenceInCalendarDays(checkOut, checkIn);

  if (nights <= 0) {
    return {
      nights: 0,
      pricePerNight: basePricePerNight,
      subtotal: 0,
      cleaningFee,
      totalPrice: cleaningFee,
      nightlyBreakdown: [],
    };
  }

  // Calculate price for each night (check-in day counts, check-out day doesn't)
  const stayDays = eachDayOfInterval({
    start: checkIn,
    end: new Date(checkOut.getTime() - 86400000), // exclude check-out day
  });

  const nightlyBreakdown = stayDays.map((day) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const seasonalRate = seasonalPricing.find(
      (sp) => dateStr >= sp.start_date && dateStr <= sp.end_date
    );
    return {
      date: dateStr,
      price: seasonalRate ? seasonalRate.price_per_night : basePricePerNight,
    };
  });

  const subtotal = nightlyBreakdown.reduce((sum, n) => sum + n.price, 0);
  const avgPricePerNight = Math.round(subtotal / nights);

  return {
    nights,
    pricePerNight: avgPricePerNight,
    subtotal,
    cleaningFee,
    totalPrice: subtotal + cleaningFee,
    nightlyBreakdown,
  };
}
