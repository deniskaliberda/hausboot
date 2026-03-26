import { Text } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface PaymentFailedProps {
  guestFirstName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
}

export function PaymentFailed({ guestFirstName, propertyName, checkIn, checkOut }: PaymentFailedProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Zahlung nicht abgeschlossen – ${propertyName}`}>
      <Text style={heading}>Zahlung nicht abgeschlossen</Text>
      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        Ihre Buchung für das <strong>{propertyName}</strong> ({checkIn} – {checkOut}) konnte leider nicht abgeschlossen werden, da die Zahlungssession abgelaufen ist.
      </Text>
      <Text style={text}>
        Keine Sorge – es wurde kein Betrag abgebucht. Sie können die Buchung jederzeit erneut versuchen:
      </Text>
      <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
        <EmailButton href={`${baseUrl}/buchen`}>Erneut buchen</EmailButton>
      </Section>
      <Text style={text}>
        Falls Sie Schwierigkeiten bei der Zahlung haben, kontaktieren Sie uns gerne.
      </Text>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

import { Section } from "@react-email/components";
const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };

export default PaymentFailed;
