"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

interface BookingInquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  numGuests: string;
  message: string;
  acceptDatenschutz: boolean;
}

export function BookingInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInquiryFormValues>();

  async function onSubmit(data: BookingInquiryFormValues) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/booking-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
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
      <div className="rounded-xl border bg-card p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h2 className="mt-4 font-serif text-2xl font-bold">
          Vielen Dank für Ihre Anfrage!
        </h2>
        <p className="mt-2 text-muted-foreground">
          Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich
          bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Vorname *</Label>
          <Input
            id="firstName"
            {...register("firstName", { required: "Bitte Vorname eingeben" })}
            placeholder="Max"
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nachname *</Label>
          <Input
            id="lastName"
            {...register("lastName", { required: "Bitte Nachname eingeben" })}
            placeholder="Mustermann"
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Bitte E-Mail eingeben" })}
            placeholder="max@beispiel.de"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "Bitte Telefonnummer eingeben" })}
            placeholder="+49 ..."
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="checkIn">Anreise *</Label>
          <Input
            id="checkIn"
            type="date"
            {...register("checkIn", { required: "Bitte Anreisedatum wählen" })}
          />
          {errors.checkIn && (
            <p className="text-sm text-destructive">{errors.checkIn.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="checkOut">Abreise *</Label>
          <Input
            id="checkOut"
            type="date"
            {...register("checkOut", { required: "Bitte Abreisedatum wählen" })}
          />
          {errors.checkOut && (
            <p className="text-sm text-destructive">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="numGuests">Anzahl der Gäste *</Label>
        <Input
          id="numGuests"
          type="number"
          min="1"
          max="8"
          {...register("numGuests", { required: "Bitte Gästeanzahl eingeben" })}
          placeholder="z.B. 4"
        />
        {errors.numGuests && (
          <p className="text-sm text-destructive">{errors.numGuests.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht (optional)</Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Besondere Wünsche, Fragen, Anlass..."
        />
      </div>

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
          <Link href="/datenschutz" className="text-primary underline" target="_blank">
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

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
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
    </form>
  );
}
