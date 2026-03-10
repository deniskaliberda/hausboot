import { Text } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";

interface RefundGuestProps {
  guestFirstName: string;
  bookingNumber: string;
  refundAmount: string;
  propertyName: string;
}

export function RefundGuest({ guestFirstName, bookingNumber, refundAmount, propertyName }: RefundGuestProps) {
  return (
    <EmailLayout preview={`Erstattung ${refundAmount} – ${bookingNumber}`}>
      <Text style={heading}>Erstattung verarbeitet</Text>
      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        die Erstattung für Ihre Buchung <strong>{bookingNumber}</strong> ({propertyName}) wurde verarbeitet.
      </Text>
      <Text style={highlight}>Erstattungsbetrag: {refundAmount}</Text>
      <Text style={text}>
        Der Betrag wird innerhalb von 5–10 Werktagen auf Ihr ursprüngliches Zahlungsmittel zurückgebucht.
      </Text>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const highlight = { fontSize: "18px", fontWeight: "bold" as const, color: "#0D6E6E", backgroundColor: "#f0fdfa", borderRadius: "8px", padding: "12px 16px", textAlign: "center" as const, margin: "16px 0" };

export default RefundGuest;
