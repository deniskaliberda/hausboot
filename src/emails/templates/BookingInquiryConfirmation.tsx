import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface BookingInquiryConfirmationProps {
  firstName: string;
  inquiryNumber: string;
  checkIn: string;
  checkOut: string;
  numGuests: number;
}

export function BookingInquiryConfirmation({
  firstName,
  inquiryNumber,
  checkIn,
  checkOut,
  numGuests,
}: BookingInquiryConfirmationProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Ihre Buchungsanfrage ${inquiryNumber} wurde empfangen`}>
      <Text style={heading}>Buchungsanfrage eingegangen</Text>
      <Text style={text}>Hallo {firstName},</Text>
      <Text style={text}>
        vielen Dank für Ihre Anfrage für unser Luxus-Hausboot an der Dahme!
        Wir haben Ihre Anfrage unter der Nummer <strong>{inquiryNumber}</strong> registriert.
      </Text>
      <Text style={text}>
        <strong>Anreise:</strong> {checkIn}<br />
        <strong>Abreise:</strong> {checkOut}<br />
        <strong>Gäste:</strong> {numGuests}
      </Text>
      <Text style={text}>
        Wir prüfen die Verfügbarkeit und melden uns innerhalb von 24 Stunden bei Ihnen.
      </Text>
      <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
        <EmailButton href={baseUrl}>Zur Webseite</EmailButton>
      </Section>
      <Text style={text}>Herzliche Grüße,<br />Ihr Urlaubsbleibe Team</Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };

export default BookingInquiryConfirmation;
