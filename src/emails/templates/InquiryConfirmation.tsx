import { Text } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface InquiryConfirmationProps {
  firstName: string;
  inquiryNumber: string;
  eventType: string;
  preferredDate?: string;
  numGuests: number;
}

export function InquiryConfirmation({ firstName, inquiryNumber, eventType, preferredDate, numGuests }: InquiryConfirmationProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Ihre Anfrage ${inquiryNumber} wurde empfangen`}>
      <Text style={heading}>Anfrage eingegangen</Text>
      <Text style={text}>Hallo {firstName},</Text>
      <Text style={text}>
        vielen Dank für Ihre Anfrage zur Oldtimer Tour mit Hausbootübernachtung!
        Wir haben Ihre Anfrage unter der Nummer <strong>{inquiryNumber}</strong> registriert.
      </Text>
      <Text style={text}>
        <strong>Veranstaltungsart:</strong> {eventType}<br />
        {preferredDate && <><strong>Wunschtermin:</strong> {preferredDate}<br /></>}
        <strong>Gäste:</strong> {numGuests}
      </Text>
      <Text style={text}>
        Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot bei Ihnen.
      </Text>
      <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
        <EmailButton href={`${baseUrl}/oldtimer-tour`}>Mehr über die Tour</EmailButton>
      </Section>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

import { Section } from "@react-email/components";
const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };

export default InquiryConfirmation;
