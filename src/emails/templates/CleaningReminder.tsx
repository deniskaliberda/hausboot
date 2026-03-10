import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";

interface CleaningReminderProps {
  staffName: string;
  propertyName: string;
  cleaningDate: string;
  confirmationUrl: string;
}

export function CleaningReminder({ staffName, propertyName, cleaningDate, confirmationUrl }: CleaningReminderProps) {
  return (
    <EmailLayout preview={`Erinnerung: Reinigung ${propertyName} morgen`}>
      <Text style={heading}>Reinigungserinnerung</Text>
      <Text style={text}>Hallo {staffName},</Text>
      <Text style={text}>
        dies ist eine Erinnerung an Ihren Reinigungsauftrag für morgen:
      </Text>
      <Section style={card}>
        <Text style={label}>Hausboot</Text>
        <Text style={value}>{propertyName}</Text>
        <Text style={label}>Datum</Text>
        <Text style={value}>{cleaningDate}</Text>
      </Section>
      <Text style={text}>Falls noch nicht geschehen, bestätigen Sie bitte den Auftrag:</Text>
      <Section style={{ textAlign: "center" as const }}>
        <EmailButton href={confirmationUrl}>Reinigung bestätigen</EmailButton>
      </Section>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const text = { fontSize: "14px", lineHeight: "24px", color: "#374151", margin: "0 0 16px 0" };
const card = { backgroundColor: "#fff7ed", borderRadius: "8px", padding: "16px", border: "1px solid #fed7aa" };
const label = { fontSize: "12px", fontWeight: "600" as const, color: "#6b7280", textTransform: "uppercase" as const, margin: "8px 0 2px 0" };
const value = { fontSize: "14px", color: "#111827", margin: "0" };

export default CleaningReminder;
