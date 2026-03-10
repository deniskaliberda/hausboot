import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";

interface InquiryAdminProps {
  inquiryNumber: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  eventType: string;
  preferredDate?: string;
  alternativeDate?: string;
  numGuests: number;
  message: string;
}

export function InquiryAdmin(props: InquiryAdminProps) {
  return (
    <EmailLayout preview={`Neue Oldtimer-Anfrage: ${props.inquiryNumber} – ${props.name}`}>
      <Text style={heading}>Neue Oldtimer-Tour-Anfrage</Text>

      <Section style={card}>
        <Text style={label}>Anfragenummer</Text>
        <Text style={value}>{props.inquiryNumber}</Text>
        <Text style={label}>Name</Text>
        <Text style={value}>{props.name}</Text>
        <Text style={label}>E-Mail</Text>
        <Text style={value}>{props.email}</Text>
        <Text style={label}>Telefon</Text>
        <Text style={value}>{props.phone}</Text>
        {props.company && (<><Text style={label}>Firma</Text><Text style={value}>{props.company}</Text></>)}
        <Text style={label}>Art</Text>
        <Text style={value}>{props.eventType}</Text>
        {props.preferredDate && (<><Text style={label}>Wunschtermin</Text><Text style={value}>{props.preferredDate}</Text></>)}
        {props.alternativeDate && (<><Text style={label}>Alternativtermin</Text><Text style={value}>{props.alternativeDate}</Text></>)}
        <Text style={label}>Gäste</Text>
        <Text style={value}>{props.numGuests}</Text>
        <Text style={label}>Nachricht</Text>
        <Text style={value}>{props.message}</Text>
      </Section>
    </EmailLayout>
  );
}

const heading = { fontSize: "24px", fontWeight: "bold" as const, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 16px 0" };
const card = { backgroundColor: "#fefce8", borderRadius: "8px", padding: "16px", border: "1px solid #fef08a" };
const label = { fontSize: "12px", fontWeight: "600" as const, color: "#6b7280", textTransform: "uppercase" as const, margin: "8px 0 2px 0" };
const value = { fontSize: "14px", color: "#111827", margin: "0" };

export default InquiryAdmin;
