import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";

interface CheckOutReminderProps {
  guestFirstName: string;
  propertyName: string;
  checkOut: string;
  bookingNumber: string;
}

export function CheckOutReminder({ guestFirstName, propertyName, checkOut, bookingNumber }: CheckOutReminderProps) {
  return (
    <EmailLayout preview={`Check-out heute – ${propertyName}`}>
      <Text style={heading}>Check-out heute</Text>
      <Text style={text}>Hallo {guestFirstName},</Text>
      <Text style={text}>
        wir hoffen, Sie hatten einen wundervollen Aufenthalt auf dem <strong>{propertyName}</strong>!
      </Text>
      <Text style={text}>
        Bitte denken Sie daran, dass der Check-out heute bis <strong>11:00 Uhr</strong> erfolgen sollte.
      </Text>

      <Section style={infoBox}>
        <Text style={infoTitle}>Vor dem Verlassen</Text>
        <Text style={infoText}>Bitte stellen Sie sicher, dass:</Text>
        <Text style={infoText}>• Alle Fenster und Türen geschlossen sind</Text>
        <Text style={infoText}>• Die Heizung/Klimaanlage ausgeschaltet ist</Text>
        <Text style={infoText}>• Geschirr abgespült wurde</Text>
        <Text style={infoText}>• Müll in den vorgesehenen Behältern entsorgt wurde</Text>
        <Text style={infoText}>• Der Schlüssel am vereinbarten Ort hinterlegt wird</Text>
      </Section>

      <Text style={text}>
        Vielen Dank und eine gute Heimreise!
      </Text>
      <Text style={text}>Herzliche Grüße,<br />Ihr Luxus Hausboote Berlin Team</Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const infoBox = { backgroundColor: "#fff7ed", borderRadius: "8px", padding: "16px", marginTop: "12px", border: "1px solid #fed7aa" };
const infoTitle = { fontSize: "13px", fontWeight: "bold" as const, color: "#c2410c", margin: "0 0 8px 0" };
const infoText = { fontSize: "13px", color: "#374151", lineHeight: "22px", margin: "0" };

export default CheckOutReminder;
