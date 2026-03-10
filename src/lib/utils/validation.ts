import { z } from "zod/v4";

export const bookingFormSchema = z.object({
  propertyId: z.string().uuid(),
  checkIn: z.string().date(),
  checkOut: z.string().date(),
  numAdults: z.number().int().min(1).max(8),
  numChildren: z.number().int().min(0).max(7),
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Bitte geben Sie eine gültige Telefonnummer ein"),
  addressLine1: z.string().min(3, "Bitte geben Sie Ihre Adresse ein"),
  addressLine2: z.string().optional(),
  postalCode: z.string().min(4, "Bitte geben Sie Ihre Postleitzahl ein"),
  city: z.string().min(2, "Bitte geben Sie Ihre Stadt ein"),
  country: z.string().min(2).default("DE"),
  specialRequests: z.string().optional(),
  acceptAgb: z.literal(true, {
    error: "Sie müssen die AGB akzeptieren",
  }),
  acceptDatenschutz: z.literal(true, {
    error: "Sie müssen die Datenschutzerklärung akzeptieren",
  }),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const inquiryFormSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Bitte geben Sie eine gültige Telefonnummer ein"),
  company: z.string().optional(),
  eventType: z.enum(["corporate", "private", "group_tour"]),
  preferredDate: z.string().date().optional(),
  alternativeDate: z.string().date().optional(),
  numGuests: z.number().int().min(1).max(20),
  message: z.string().min(10, "Bitte beschreiben Sie Ihre Anfrage (mind. 10 Zeichen)"),
  acceptDatenschutz: z.literal(true, {
    error: "Sie müssen die Datenschutzerklärung akzeptieren",
  }),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  acceptDatenschutz: z.literal(true, {
    error: "Sie müssen die Datenschutzerklärung akzeptieren",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
