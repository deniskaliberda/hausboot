import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";

interface CancellationAdminProps {
  guestName: string;
  guestEmail: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  bookingNumber: string;
  cancellationReason?: string;
}

export function CancellationAdmin(props: CancellationAdminProps) {
  return (
    <EmailLayout preview={`Stornierung: ${props.bookingNumber} – ${props.guestName}`}>
      <Text style={heading}>Buchung storniert</Text>

      <Section style={card}>
        <Text style={label}>Buchung</Text>
        <Text style={value}>{props.bookingNumber}</Text>
        <Text style={label}>Gast</Text>
        <Text style={value}>{props.guestName} ({props.guestEmail})</Text>
        <Text style={label}>Hausboot</Text>
        <Text style={value}>{props.propertyName}</Text>
        <Text style={label}>Zeitraum</Text>
        <Text style={value}>{props.checkIn} – {props.checkOut}</Text>
        {props.cancellationReason && (
          <>
            <Text style={label}>Grund</Text>
            <Text style={value}>{props.cancellationReason}</Text>
          </>
        )}
      </Section>

      <Text style={note}>
        Die gesperrten Daten wurden automatisch freigegeben. Die
        Reinigungsbenachrichtigung wurde storniert.
      </Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const card = { backgroundColor: "#fef2f2", borderRadius: "8px", padding: "16px", border: "1px solid #fecaca" };
const label = { fontSize: "12px", fontWeight: "600" as const, color: "#6b7280", textTransform: "uppercase" as const, margin: "8px 0 2px 0" };
const value = { fontSize: "14px", color: "#111827", margin: "0" };
const note = { fontSize: "13px", color: "#6b7280", marginTop: "16px" };

export default CancellationAdmin;
