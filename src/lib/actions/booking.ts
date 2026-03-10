"use server";

import { bookingFormSchema, type BookingFormData } from "@/lib/utils/validation";
import { SITE_URL } from "@/lib/utils/constants";

interface CheckoutResult {
  url?: string;
  error?: string;
}

/**
 * Server action to create a Stripe Checkout Session.
 * Called from the booking form after client-side validation.
 */
export async function createCheckoutSession(
  formData: BookingFormData
): Promise<CheckoutResult> {
  // Server-side validation
  const result = bookingFormSchema.safeParse(formData);
  if (!result.success) {
    return { error: "Ungültige Formulardaten. Bitte überprüfen Sie Ihre Eingaben." };
  }

  try {
    const response = await fetch(`${SITE_URL}/api/stripe/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || "Ein Fehler ist aufgetreten." };
    }

    return { url: data.url };
  } catch {
    return { error: "Verbindungsfehler. Bitte versuchen Sie es erneut." };
  }
}
