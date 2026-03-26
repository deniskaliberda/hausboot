"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Loader2,
  CalendarDays,
  User,
  Mail,
  Phone,
  Users,
  MessageSquare,
  Moon,
} from "lucide-react";
import { de } from "react-day-picker/locale";
import { addDays, isBefore, startOfDay, format } from "date-fns";
import { de as deLocale } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { formatEuro } from "@/lib/utils/currency";
import { PROPERTY } from "@/lib/data/properties";
import Link from "next/link";

interface BookingInquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numGuests: string;
  message: string;
  acceptDatenschutz: boolean;
}

export function BookingInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [dateError, setDateError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInquiryFormValues>();

  const today = startOfDay(new Date());

  const handleDateSelect = (newRange: DateRange | undefined) => {
    setDateError(null);
    if (!newRange) {
      setDateRange(undefined);
      return;
    }
    if (newRange.from && newRange.to) {
      const minCheckout = addDays(newRange.from, PROPERTY.min_nights);
      if (isBefore(newRange.to, minCheckout)) {
        setDateRange({ from: newRange.from, to: minCheckout });
        return;
      }
    }
    setDateRange(newRange);
  };

  const nights =
    dateRange?.from && dateRange?.to
      ? Math.round(
          (dateRange.to.getTime() - dateRange.from.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const priceEstimate = useMemo(() => {
    if (nights <= 0) return null;
    const subtotal = nights * PROPERTY.base_price_per_night;
    const cleaning = PROPERTY.cleaning_fee;
    return { subtotal, cleaning, nights };
  }, [nights]);

  async function onSubmit(data: BookingInquiryFormValues) {
    if (!dateRange?.from || !dateRange?.to) {
      setDateError("Bitte Anreise- und Abreisedatum wählen");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/booking-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          checkIn: format(dateRange.from, "yyyy-MM-dd"),
          checkOut: format(dateRange.to, "yyyy-MM-dd"),
          numGuests: parseInt(data.numGuests) || 1,
          acceptDatenschutz: true,
          message: data.message || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      setSubmitted(true);
    } catch {
      alert("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border bg-card p-10 text-center shadow-sm">
        <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
        <h2 className="mt-5 font-serif text-2xl font-bold">
          Vielen Dank für Ihre Anfrage!
        </h2>
        <p className="mt-3 text-muted-foreground">
          Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich
          bei Ihnen zurück.
        </p>
        <Link href="/">
          <Button variant="outline" className="mt-6">
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border bg-card shadow-sm"
    >
      {/* Date Selection */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Reisezeitraum</span>
        </div>

        <div className="mt-4 flex justify-center">
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
        </div>

        {/* Date feedback */}
        <div className="mt-3 text-center text-sm">
          {dateRange?.from && dateRange?.to ? (
            <p className="flex items-center justify-center gap-2 font-medium text-foreground">
              <Moon className="h-4 w-4 text-primary" />
              {format(dateRange.from, "d. MMM", { locale: deLocale })} –{" "}
              {format(dateRange.to, "d. MMM yyyy", { locale: deLocale })} ·{" "}
              {nights} {nights === 1 ? "Nacht" : "Nächte"}
            </p>
          ) : dateRange?.from ? (
            <p className="text-muted-foreground">
              Abreisedatum wählen (mind. {PROPERTY.min_nights} Nächte)
            </p>
          ) : (
            <p className="text-muted-foreground">
              Anreisedatum im Kalender wählen
            </p>
          )}
          {dateError && (
            <p className="mt-1 text-sm text-destructive">{dateError}</p>
          )}
        </div>
      </div>

      {/* Price Estimate */}
      {priceEstimate && (
        <div className="mx-6 rounded-lg bg-muted/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Geschätzte Kosten
          </p>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {priceEstimate.nights} Nächte ×{" "}
                {formatEuro(PROPERTY.base_price_per_night)}
              </span>
              <span>{formatEuro(priceEstimate.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reinigung</span>
              <span>{formatEuro(priceEstimate.cleaning)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Wäsche ({formatEuro(PROPERTY.laundry_fee_per_person)}/Person)
              </span>
              <span className="text-muted-foreground">je nach Gästeanzahl</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Ab</span>
              <span>
                {formatEuro(priceEstimate.subtotal + priceEstimate.cleaning)}
              </span>
            </div>
          </div>
        </div>
      )}

      <Separator className="my-0" />

      {/* Guest & Contact Details */}
      <div className="space-y-5 p-6">
        {/* Guests */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Gäste</span>
          </div>
          <div className="mt-3">
            <Label htmlFor="numGuests">Anzahl der Gäste *</Label>
            <Input
              id="numGuests"
              type="number"
              min="1"
              max="8"
              className="mt-1.5"
              {...register("numGuests", {
                required: "Bitte Gästeanzahl eingeben",
              })}
              placeholder="z.B. 4"
            />
            {errors.numGuests && (
              <p className="mt-1 text-sm text-destructive">
                {errors.numGuests.message}
              </p>
            )}
          </div>
        </div>

        <Separator />

        {/* Personal info */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Kontaktdaten</span>
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">Vorname *</Label>
              <Input
                id="firstName"
                {...register("firstName", {
                  required: "Bitte Vorname eingeben",
                })}
                placeholder="Max"
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Nachname *</Label>
              <Input
                id="lastName"
                {...register("lastName", {
                  required: "Bitte Nachname eingeben",
                })}
                placeholder="Mustermann"
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> E-Mail *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Bitte E-Mail eingeben" })}
                placeholder="max@beispiel.de"
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> Telefon *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Bitte Telefonnummer eingeben",
                })}
                placeholder="+49 ..."
              />
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <Separator />

        {/* Message */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>Nachricht (optional)</span>
          </div>
          <Textarea
            id="message"
            rows={3}
            className="mt-3"
            {...register("message")}
            placeholder="Besondere Wünsche, Fragen, Anlass..."
          />
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="acceptDatenschutz"
            className="mt-1"
            {...register("acceptDatenschutz", {
              required: "Sie müssen die Datenschutzerklärung akzeptieren",
            })}
          />
          <Label htmlFor="acceptDatenschutz" className="text-sm font-normal">
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="text-primary underline"
              target="_blank"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
          </Label>
        </div>
        {errors.acceptDatenschutz && (
          <p className="text-sm text-destructive">
            {errors.acceptDatenschutz.message}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            "Unverbindlich anfragen"
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          * Pflichtfelder. Wir antworten in der Regel innerhalb von 24 Stunden.
        </p>
      </div>
    </form>
  );
}
