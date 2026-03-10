import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface CheckInReminderProps {
  guestFirstName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  bookingNumber: string;
}

export function CheckInReminder({ guestFirstName, propertyName, checkIn, checkOut, bookingNumber }: CheckInReminderProps) {
  return (
    <EmailLayout preview={`Bald geht's los! Check-in am ${checkIn}`}>
      <Text style={heading}>Ihr Aufenthalt steht bevor!</Text>
      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        in 3 Tagen ist es soweit – Ihr Aufenthalt auf dem <strong>{propertyName}</strong> beginnt!
      </Text>

      <Section style={infoBox}>
        <Text style={infoTitle}>Anreise-Informationen</Text>
        <Text style={infoText}><strong>Check-in:</strong> {checkIn} ab 15:00 Uhr</Text>
        <Text style={infoText}><strong>Check-out:</strong> {checkOut} bis 11:00 Uhr</Text>
        <Text style={infoText}><strong>Buchungsnummer:</strong> {bookingNumber}</Text>
      </Section>

      <Section style={infoBox}>
        <Text style={infoTitle}>Anfahrt</Text>
        <Text style={infoText}>Sportboothafen Schmöckwitz, Berlin-Schmöckwitz</Text>
        <Text style={infoText}>Kostenlose Parkplätze direkt im Hafen verfügbar.</Text>
        <Text style={infoText}>Den Schlüsselcode finden Sie am Hausboot vor Ort.</Text>
      </Section>

      <Section style={infoBox}>
        <Text style={infoTitle}>Was Sie erwartet</Text>
        <Text style={infoText}>Finnische Sauna · Kamin · Dachterrasse · SUP-Boards · Fahrräder</Text>
        <Text style={infoText}>Bettwäsche und Handtücher sind vorhanden.</Text>
      </Section>

      <Text style={text}>Wir wünschen Ihnen einen wundervollen Aufenthalt!</Text>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const infoBox = { backgroundColor: "#f0fdfa", borderRadius: "8px", padding: "16px", marginTop: "12px", border: "1px solid #ccfbf1" };
const infoTitle = { fontSize: "13px", fontWeight: "bold" as const, color: "#0D6E6E", margin: "0 0 8px 0" };
const infoText = { fontSize: "13px", color: "#374151", lineHeight: "20px", margin: "0 0 4px 0" };

export default CheckInReminder;
