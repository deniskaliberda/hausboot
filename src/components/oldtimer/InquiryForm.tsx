"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

interface InquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  preferredDate: string;
  alternativeDate: string;
  numGuests: string;
  message: string;
  acceptDatenschutz: boolean;
}

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InquiryFormValues>();

  async function onSubmit(data: InquiryFormValues) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          numGuests: parseInt(data.numGuests) || 1,
          acceptDatenschutz: true,
          preferredDate: data.preferredDate || undefined,
          alternativeDate: data.alternativeDate || undefined,
          company: data.company || undefined,
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
          mit einem individuellen Angebot bei Ihnen.
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

      <div className="space-y-2">
        <Label htmlFor="company">Firma (optional)</Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Firmenname"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventType">Art der Veranstaltung *</Label>
        <select
          id="eventType"
          {...register("eventType", { required: "Bitte Art wählen" })}
          className="flex h-8 w-full items-center rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          defaultValue=""
        >
          <option value="" disabled>Bitte wählen</option>
          <option value="corporate">Firmenevent</option>
          <option value="private">Private Feier</option>
          <option value="group_tour">Gruppentour</option>
        </select>
        {errors.eventType && (
          <p className="text-sm text-destructive">{errors.eventType.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Wunschdatum</Label>
          <Input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="alternativeDate">Alternativdatum</Label>
          <Input
            id="alternativeDate"
            type="date"
            {...register("alternativeDate")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="numGuests">Anzahl der Gäste *</Label>
        <Input
          id="numGuests"
          type="number"
          min="1"
          max="20"
          {...register("numGuests", { required: "Bitte Gästeanzahl eingeben" })}
          placeholder="z.B. 6"
        />
        {errors.numGuests && (
          <p className="text-sm text-destructive">{errors.numGuests.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message", {
            required: "Bitte beschreiben Sie Ihre Anfrage",
            minLength: { value: 10, message: "Mindestens 10 Zeichen" },
          })}
          placeholder="Erzählen Sie uns von Ihrem geplanten Event..."
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
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
