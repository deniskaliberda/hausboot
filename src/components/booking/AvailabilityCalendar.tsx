"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { de } from "react-day-picker/locale";
import { addDays, isBefore, startOfDay } from "date-fns";
import type { DateRange } from "react-day-picker";

interface AvailabilityCalendarProps {
  propertyId: string;
  minNights: number;
  blockedDates?: Date[];
}

export function AvailabilityCalendar({
  minNights,
  blockedDates = [],
}: AvailabilityCalendarProps) {
  const [range, setRange] = useState<DateRange | undefined>();

  const today = startOfDay(new Date());

  const disabledDays = [
    { before: today },
    ...blockedDates.map((date) => startOfDay(date)),
  ];

  const handleSelect = (newRange: DateRange | undefined) => {
    if (!newRange) {
      setRange(undefined);
      return;
    }

    // If both dates selected and checkout is too close to checkin, adjust
    if (newRange.from && newRange.to) {
      const minCheckout = addDays(newRange.from, minNights);
      if (isBefore(newRange.to, minCheckout)) {
        setRange({ from: newRange.from, to: minCheckout });
        return;
      }
    }

    setRange(newRange);
  };

  const nights =
    range?.from && range?.to
      ? Math.round(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0;

  return (
    <div>
      <p className="mb-3 text-sm font-medium">Reisedaten wählen</p>
      <Calendar
        mode="range"
        selected={range}
        onSelect={handleSelect}
        locale={de}
        disabled={disabledDays}
        numberOfMonths={1}
        showOutsideDays={false}
        className="w-full rounded-lg border p-3"
      />
      {nights > 0 && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {nights} {nights === 1 ? "Nacht" : "Nächte"} ausgewählt
        </p>
      )}
      {range?.from && !range?.to && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Check-out wählen (min. {minNights} Nächte)
        </p>
      )}
    </div>
  );
}
