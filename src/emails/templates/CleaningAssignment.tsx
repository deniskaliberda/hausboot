import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface CleaningAssignmentProps {
  staffName: string;
  propertyName: string;
  cleaningDate: string;
  checkOutTime: string;
  confirmationUrl: string;
  bookingNumber: string;
  guestName: string;
}

export function CleaningAssignment({
  staffName,
  propertyName,
  cleaningDate,
  checkOutTime,
  confirmationUrl,
  bookingNumber,
  guestName,
}: CleaningAssignmentProps) {
  return (
    <EmailLayout preview={`Reinigungsauftrag: ${propertyName} am ${cleaningDate}`}>
      <Text style={heading}>Neuer Reinigungsauftrag</Text>
      <Text style={text}>Hallo {staffName},</Text>
      <Text style={text}>
        es gibt einen neuen Reinigungsauftrag für Sie:
      </Text>

      <Section style={card}>
        <Text style={label}>Hausboot</Text>
        <Text style={value}>{propertyName}</Text>
        <Text style={label}>Reinigungsdatum</Text>
        <Text style={value}>{cleaningDate}</Text>
        <Text style={label}>Check-out des Gastes</Text>
        <Text style={value}>{checkOutTime}</Text>
        <Text style={label}>Buchung</Text>
        <Text style={value}>{bookingNumber} ({guestName})</Text>
      </Section>

      <Text style={text}>
        Bitte bestätigen Sie den Auftrag, indem Sie auf den Button klicken:
      </Text>

      <Section style={{ textAlign: "center" as const }}>
        <EmailButton href={confirmationUrl}>
          Reinigung bestätigen
        </EmailButton>
      </Section>

      <Text style={note}>
        Falls Sie den Termin nicht wahrnehmen können, melden Sie sich bitte
        umgehend.
      </Text>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const card = { backgroundColor: "#f9fafb", borderRadius: "8px", padding: "16px", border: "1px solid #e5e7eb" };
const label = { fontSize: "12px", fontWeight: "600" as const, color: "#6b7280", textTransform: "uppercase" as const, margin: "8px 0 2px 0" };
const value = { fontSize: "14px", color: "#111827", margin: "0" };
const note = { fontSize: "13px", color: "#6b7280", marginTop: "16px" };

export default CleaningAssignment;
