import { Text, Section } from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { EmailButton } from "../components/EmailButton";
import { BookingSummary } from "../components/BookingSummary";

interface BookingConfirmationGuestProps {
  guestFirstName: string;
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

export function BookingConfirmationGuest({
  guestFirstName,
  propertyName,
  checkIn,
  checkOut,
  nights,
  numAdults,
  numChildren,
  subtotal,
  cleaningFee,
  totalPrice,
  bookingNumber,
  specialRequests,
}: BookingConfirmationGuestProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

  return (
    <EmailLayout preview={`Buchungsbestätigung ${bookingNumber} – ${propertyName}`}>
      <Text style={heading}>Buchungsbestätigung</Text>

      <Text style={text}>
        Hallo {guestFirstName},
      </Text>
      <Text style={text}>
        vielen Dank für Ihre Buchung! Wir freuen uns, Sie bei uns begrüßen zu
        dürfen. Hier sind Ihre Buchungsdetails:
      </Text>

      <BookingSummary
        propertyName={propertyName}
        checkIn={checkIn}
        checkOut={checkOut}
        nights={nights}
        numAdults={numAdults}
        numChildren={numChildren}
        subtotal={subtotal}
        cleaningFee={cleaningFee}
        totalPrice={totalPrice}
        bookingNumber={bookingNumber}
        specialRequests={specialRequests}
      />

      <Section style={infoBox}>
        <Text style={infoTitle}>Check-in / Check-out</Text>
        <Text style={infoText}>Check-in: ab 15:00 Uhr</Text>
        <Text style={infoText}>Check-out: bis 11:00 Uhr</Text>
        <Text style={infoText}>
          Die genaue Anfahrtsbeschreibung und den Schlüsselcode erhalten Sie
          3 Tage vor Anreise per E-Mail.
        </Text>
      </Section>

      <Section style={infoBox}>
        <Text style={infoTitle}>Parkplatz</Text>
        <Text style={infoText}>
          Kostenlose Parkplätze stehen direkt im Sportboothafen Schmöckwitz zur
          Verfügung.
        </Text>
      </Section>

      <Section style={{ textAlign: "center" as const, marginTop: "24px" }}>
        <EmailButton href={baseUrl}>Zur Webseite</EmailButton>
      </Section>

      <Text style={text}>
        Bei Fragen stehen wir Ihnen jederzeit zur Verfügung.
      </Text>
      <Text style={text}>
        Herzliche Grüße,
        <br />
        Ihr Luxus Hausboote Berlin Team
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
  lineHeight: "24px",
  color: "#374151",
  margin: "0 0 16px 0",
};

const infoBox = {
  backgroundColor: "#f0fdfa",
  borderRadius: "8px",
  padding: "16px",
  marginTop: "16px",
  border: "1px solid #ccfbf1",
};

const infoTitle = {
  fontSize: "13px",
  fontWeight: "bold" as const,
  color: "#0D6E6E",
  margin: "0 0 8px 0",
};

const infoText = {
  fontSize: "13px",
  color: "#374151",
  lineHeight: "20px",
  margin: "0 0 4px 0",
};

export default BookingConfirmationGuest;
