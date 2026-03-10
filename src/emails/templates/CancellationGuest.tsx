import { Text } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface CancellationGuestProps {
  guestFirstName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  bookingNumber: string;
  refundAmount?: string;
}

export function CancellationGuest({
  guestFirstName,
  propertyName,
  checkIn,
  checkOut,
  bookingNumber,
  refundAmount,
}: CancellationGuestProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Stornierung ${bookingNumber} – ${propertyName}`}>
      <Text style={heading}>Buchung storniert</Text>

      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        Ihre Buchung <strong>{bookingNumber}</strong> für das{" "}
        <strong>{propertyName}</strong> ({checkIn} – {checkOut}) wurde
        storniert.
      </Text>

      {refundAmount && (
        <Text style={text}>
          Eine Erstattung über <strong>{refundAmount}</strong> wird in den
          nächsten 5–10 Werktagen auf Ihr Zahlungsmittel zurückgebucht.
        </Text>
      )}

      <Text style={text}>
        Wir bedauern, dass Sie nicht kommen können. Falls Sie zu einem anderen
        Zeitpunkt buchen möchten, freuen wir uns auf Ihre erneute Anfrage.
      </Text>

      <EmailButton href={`${baseUrl}/hausboote`}>Neuen Termin finden</EmailButton>

      <Text style={text}>
        Herzliche Grüße,
        <br />
        Ihr Luxus Hausboote Berlin Team
      </Text>
    </EmailLayout>
  );
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  fontFamily: "Georgia, serif",
  margin: "0 0 16px 0",
};

const text = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#374151",
  margin: "0 0 16px 0",
};

export default CancellationGuest;
