import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";

interface CleaningConfirmedProps {
  staffName: string;
  propertyName: string;
  cleaningDate: string;
  bookingNumber: string;
}

export function CleaningConfirmed({ staffName, propertyName, cleaningDate, bookingNumber }: CleaningConfirmedProps) {
  return (
    <EmailLayout preview={`Reinigung bestätigt: ${propertyName} am ${cleaningDate}`}>
      <Text style={heading}>Reinigung bestätigt</Text>
      <Text style={text}>
        <strong>{staffName}</strong> hat die Reinigung bestätigt:
      </Text>
      <Section style={card}>
        <Text style={label}>Hausboot</Text>
        <Text style={value}>{propertyName}</Text>
        <Text style={label}>Datum</Text>
        <Text style={value}>{cleaningDate}</Text>
        <Text style={label}>Buchung</Text>
        <Text style={value}>{bookingNumber}</Text>
      </Section>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const card = { backgroundColor: "#f0fdf4", borderRadius: "8px", padding: "16px", border: "1px solid #bbf7d0" };
const label = { fontSize: "12px", fontWeight: "600" as const, color: "#6b7280", textTransform: "uppercase" as const, margin: "8px 0 2px 0" };
const value = { fontSize: "14px", color: "#111827", margin: "0" };

export default CleaningConfirmed;
