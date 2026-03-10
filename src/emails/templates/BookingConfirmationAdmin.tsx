import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { BookingSummary } from "../components/BookingSummary";

interface BookingConfirmationAdminProps {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  numAdults: number;
  numChildren: number;
  subtotal: string;
  cleaningFee: string;
  totalPrice: string;
  bookingNumber: string;
  specialRequests?: string;
}

export function BookingConfirmationAdmin(props: BookingConfirmationAdminProps) {
  return (
    <EmailLayout preview={`Neue Buchung: ${props.bookingNumber} – ${props.guestName}`}>
      <Text style={heading}>Neue Buchung eingegangen!</Text>

      <Section style={guestBox}>
        <Text style={label}>Gast</Text>
        <Text style={value}>{props.guestName}</Text>
        <Text style={value}>{props.guestEmail}</Text>
        <Text style={value}>{props.guestPhone}</Text>
      </Section>

      <BookingSummary
        propertyName={props.propertyName}
        checkIn={props.checkIn}
        checkOut={props.checkOut}
        nights={props.nights}
        numAdults={props.numAdults}
        numChildren={props.numChildren}
        subtotal={props.subtotal}
        cleaningFee={props.cleaningFee}
        totalPrice={props.totalPrice}
        bookingNumber={props.bookingNumber}
        specialRequests={props.specialRequests}
      />

      <Text style={text}>
        Die Reinigungsbenachrichtigung wurde automatisch versendet.
      </Text>
    </EmailLayout>
  );
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  fontFamily: "Georgia, serif",
  margin: "0 0 16px 0",
};

const text = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "16px 0 0 0",
};

const guestBox = {
  backgroundColor: "#eff6ff",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  border: "1px solid #dbeafe",
};

const label = {
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const value = {
  fontSize: "14px",
  color: "#111827",
  margin: "0 0 2px 0",
};

export default BookingConfirmationAdmin;
