"use client";

import { useState, useMemo } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { bookingFormSchema, type BookingFormData } from "@/lib/utils/validation";
import { calculateBookingPrice } from "@/lib/utils/pricing";
import { createCheckoutSession } from "@/lib/actions/booking";
import { PriceSummary } from "./PriceSummary";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { de } from "react-day-picker/locale";
import { format, addDays, startOfDay, isBefore } from "date-fns";
import { de as dateFnsDe } from "date-fns/locale";
import { CalendarDays, Loader2, CreditCard, AlertCircle } from "lucide-react";
import Link from "next/link";
import type { DateRange } from "react-day-picker";
import type { PropertyWithImages } from "@/types/property";

interface BookingFormProps {
  property: PropertyWithImages;
  initialCheckIn?: string;
  initialCheckOut?: string;
  cancelled?: boolean;
}

export function BookingForm({
  property,
  initialCheckIn,
  initialCheckOut,
  cancelled,
}: BookingFormProps) {
  const today = startOfDay(new Date());

  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    if (initialCheckIn && initialCheckOut) {
      return {
        from: new Date(initialCheckIn),
        to: new Date(initialCheckOut),
      };
    }
    return undefined;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const pricing = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return null;
    return calculateBookingPrice(
      dateRange.from,
      dateRange.to,
      property.base_price_per_night,
      property.cleaning_fee
    );
  }, [dateRange, property.base_price_per_night, property.cleaning_fee]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: standardSchemaResolver(bookingFormSchema) as Resolver<BookingFormData>,
    defaultValues: {
      propertyId: property.id,
      checkIn: initialCheckIn || "",
      checkOut: initialCheckOut || "",
      numAdults: 2,
      numChildren: 0,
      country: "DE",
      acceptAgb: false as unknown as true,
      acceptDatenschutz: false as unknown as true,
    },
  });

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range) {
      setDateRange(undefined);
      setValue("checkIn", "");
      setValue("checkOut", "");
      return;
    }

    // Enforce minimum nights
    if (range.from && range.to) {
      const minCheckout = addDays(range.from, property.min_nights);
      if (isBefore(range.to, minCheckout)) {
        range = { from: range.from, to: minCheckout };
      }
    }

    setDateRange(range);
    if (range.from) {
      setValue("checkIn", format(range.from, "yyyy-MM-dd"));
    }
    if (range.to) {
      setValue("checkOut", format(range.to, "yyyy-MM-dd"));
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await createCheckoutSession(data);

    if (result.error) {
      setSubmitError(result.error);
      setIsSubmitting(false);
      return;
    }

    if (result.url) {
      window.location.href = result.url;
    }
  };

  const checkInStr = watch("checkIn");
  const checkOutStr = watch("checkOut");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {cancelled && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>Die Zahlung wurde abgebrochen. Bitte versuchen Sie es erneut.</p>
        </div>
      )}

      {/* Step 1: Date Selection */}
      <div>
        <h2 className="flex items-center gap-2 font-serif text-xl font-semibold">
          <CalendarDays className="h-5 w-5 text-primary" />
          1. Reisedaten
        </h2>
        <div className="mt-4">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={handleDateSelect}
            locale={de}
            disabled={[{ before: today }]}
            numberOfMonths={2}
            showOutsideDays={false}
            className="rounded-lg border p-3"
          />
          {dateRange?.from && dateRange?.to && (
            <div className="mt-3 flex items-center gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Check-in: </span>
                <span className="font-medium">
                  {format(dateRange.from, "dd. MMMM yyyy", { locale: dateFnsDe })}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Check-out: </span>
                <span className="font-medium">
                  {format(dateRange.to, "dd. MMMM yyyy", { locale: dateFnsDe })}
                </span>
              </div>
            </div>
          )}
          {(errors.checkIn || errors.checkOut) && (
            <p className="mt-2 text-sm text-destructive">
              Bitte wählen Sie Check-in und Check-out Datum
            </p>
          )}
        </div>
      </div>

      <Separator />

      {/* Step 2: Guest Count */}
      <div>
        <h2 className="font-serif text-xl font-semibold">2. Gäste</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="numAdults">Erwachsene</Label>
            <Input
              id="numAdults"
              type="number"
              min={1}
              max={property.max_guests}
              {...register("numAdults", { valueAsNumber: true })}
            />
            {errors.numAdults && (
              <p className="mt-1 text-sm text-destructive">{errors.numAdults.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="numChildren">Kinder</Label>
            <Input
              id="numChildren"
              type="number"
              min={0}
              max={property.max_guests - 1}
              {...register("numChildren", { valueAsNumber: true })}
            />
            {errors.numChildren && (
              <p className="mt-1 text-sm text-destructive">{errors.numChildren.message}</p>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Max. {property.max_guests} Gäste insgesamt
        </p>
      </div>

      <Separator />

      {/* Step 3: Personal Details */}
      <div>
        <h2 className="font-serif text-xl font-semibold">3. Persönliche Daten</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">Vorname *</Label>
            <Input id="firstName" {...register("firstName")} />
            {errors.firstName && (
              <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Nachname *</Label>
            <Input id="lastName" {...register("lastName")} />
            {errors.lastName && (
              <p className="mt-1 text-sm text-destructive">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">E-Mail *</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Telefon *</Label>
            <Input id="phone" type="tel" {...register("phone")} />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      <Separator />

      {/* Step 4: Address */}
      <div>
        <h2 className="font-serif text-xl font-semibold">4. Rechnungsadresse</h2>
        <div className="mt-4 space-y-4">
          <div>
            <Label htmlFor="addressLine1">Straße und Hausnummer *</Label>
            <Input id="addressLine1" {...register("addressLine1")} />
            {errors.addressLine1 && (
              <p className="mt-1 text-sm text-destructive">{errors.addressLine1.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="addressLine2">Adresszusatz</Label>
            <Input id="addressLine2" {...register("addressLine2")} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <Label htmlFor="postalCode">PLZ *</Label>
              <Input id="postalCode" {...register("postalCode")} />
              {errors.postalCode && (
                <p className="mt-1 text-sm text-destructive">{errors.postalCode.message}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="city">Stadt *</Label>
              <Input id="city" {...register("city")} />
              {errors.city && (
                <p className="mt-1 text-sm text-destructive">{errors.city.message}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="country">Land</Label>
            <select
              id="country"
              {...register("country")}
              className="flex h-8 w-full rounded-lg border border-border bg-background px-2.5 text-sm transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="DE">Deutschland</option>
              <option value="AT">Österreich</option>
              <option value="CH">Schweiz</option>
              <option value="NL">Niederlande</option>
              <option value="PL">Polen</option>
              <option value="CZ">Tschechien</option>
              <option value="DK">Dänemark</option>
            </select>
          </div>
        </div>
      </div>

      <Separator />

      {/* Step 5: Special Requests */}
      <div>
        <h2 className="font-serif text-xl font-semibold">5. Sonderwünsche</h2>
        <div className="mt-4">
          <Textarea
            id="specialRequests"
            placeholder="Haben Sie besondere Wünsche? (z.B. früher Check-in, Kinderbett, etc.)"
            rows={3}
            {...register("specialRequests")}
          />
        </div>
      </div>

      <Separator />

      {/* Price Summary */}
      {pricing && (
        <PriceSummary
          nights={pricing.nights}
          pricePerNight={pricing.pricePerNight}
          subtotal={pricing.subtotal}
          cleaningFee={pricing.cleaningFee}
          totalPrice={pricing.totalPrice}
        />
      )}

      {/* Terms */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            {...register("acceptAgb")}
            className="mt-0.5 h-4 w-4 rounded border-border"
          />
          <span>
            Ich akzeptiere die{" "}
            <Link href="/agb" target="_blank" className="text-primary underline">
              AGB
            </Link>{" "}
            und die{" "}
            <Link href="/widerrufsbelehrung" target="_blank" className="text-primary underline">
              Widerrufsbelehrung
            </Link>
            . *
          </span>
        </label>
        {errors.acceptAgb && (
          <p className="text-sm text-destructive">{errors.acceptAgb.message}</p>
        )}

        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            {...register("acceptDatenschutz")}
            className="mt-0.5 h-4 w-4 rounded border-border"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" target="_blank" className="text-primary underline">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zu. *
          </span>
        </label>
        {errors.acceptDatenschutz && (
          <p className="text-sm text-destructive">{errors.acceptDatenschutz.message}</p>
        )}
      </div>

      {/* Submit */}
      {submitError && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full text-base"
        disabled={isSubmitting || !checkInStr || !checkOutStr}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Weiterleitung zu Stripe...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            {pricing
              ? `Jetzt ${(pricing.totalPrice / 100).toFixed(2).replace(".", ",")} € bezahlen`
              : "Weiter zur Zahlung"}
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Sie werden sicher zu Stripe weitergeleitet. Ihre Daten werden verschlüsselt übertragen.
      </p>

      {/* Hidden fields */}
      <input type="hidden" {...register("propertyId")} />
      <input type="hidden" {...register("checkIn")} />
      <input type="hidden" {...register("checkOut")} />
    </form>
  );
}
