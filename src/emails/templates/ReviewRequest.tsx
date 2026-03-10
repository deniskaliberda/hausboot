import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface ReviewRequestProps {
  guestFirstName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
}

export function ReviewRequest({ guestFirstName, propertyName, checkIn, checkOut }: ReviewRequestProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Wie war Ihr Aufenthalt auf dem ${propertyName}?`}>
      <Text style={heading}>Wie war Ihr Aufenthalt?</Text>
      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        wir hoffen, Sie hatten eine wundervolle Zeit auf dem <strong>{propertyName}</strong> ({checkIn} – {checkOut}).
      </Text>
      <Text style={text}>
        Ihr Feedback ist uns sehr wichtig und hilft anderen Gästen bei ihrer Entscheidung. Wir würden uns freuen, wenn Sie sich einen Moment Zeit nehmen, um Ihren Aufenthalt zu bewerten.
      </Text>

      <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
        <EmailButton href={`${baseUrl}/kontakt`}>Bewertung abgeben</EmailButton>
      </Section>

      <Text style={text}>
        Vielen Dank! Wir freuen uns, Sie bald wieder bei uns begrüßen zu dürfen.
      </Text>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };

export default ReviewRequest;
