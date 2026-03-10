import { Section, Text, Hr, Row, Column } from "@react-email/components";

interface BookingSummaryProps {
  propertyName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  numAdults: number;
  numChildren: number;
  subtotal: string;
  cleaningFee: string;
  totalPrice: string;
  bookingNumber?: string;
  specialRequests?: string;
}

export function BookingSummary({
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
}: BookingSummaryProps) {
  return (
    <Section style={card}>
      {bookingNumber && (
        <Text style={bookingNumberStyle}>
          Buchungsnummer: {bookingNumber}
        </Text>
      )}

      <Text style={sectionTitle}>Hausboot</Text>
      <Text style={value}>{propertyName}</Text>

      <Hr style={divider} />

      <Text style={sectionTitle}>Reisezeitraum</Text>
      <Text style={value}>
        {checkIn} – {checkOut} ({nights} {nights === 1 ? "Nacht" : "Nächte"})
      </Text>

      <Hr style={divider} />

      <Text style={sectionTitle}>Gäste</Text>
      <Text style={value}>
        {numAdults} Erwachsene{numChildren > 0 ? `, ${numChildren} Kinder` : ""}
      </Text>

      <Hr style={divider} />

      <Text style={sectionTitle}>Preisübersicht</Text>
      <Row>
        <Column>
          <Text style={lineItem}>{nights} Nächte</Text>
        </Column>
        <Column align="right">
          <Text style={lineItem}>{subtotal}</Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text style={lineItem}>Endreinigung</Text>
        </Column>
        <Column align="right">
          <Text style={lineItem}>{cleaningFee}</Text>
        </Column>
      </Row>
      <Hr style={divider} />
      <Row>
        <Column>
          <Text style={totalLabel}>Gesamt</Text>
        </Column>
        <Column align="right">
          <Text style={totalValue}>{totalPrice}</Text>
        </Column>
      </Row>

      {specialRequests && (
        <>
          <Hr style={divider} />
          <Text style={sectionTitle}>Sonderwünsche</Text>
          <Text style={value}>{specialRequests}</Text>
        </>
      )}
    </Section>
  );
}

const card = {
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  padding: "20px",
  border: "1px solid #e5e7eb",
};

const bookingNumberStyle = {
  fontSize: "14px",
  fontWeight: "bold" as const,
  color: "#0D6E6E",
  margin: "0 0 16px 0",
};

const sectionTitle = {
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px 0",
};

const value = {
  fontSize: "14px",
  color: "#111827",
  margin: "0 0 4px 0",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "12px 0",
};

const lineItem = {
  fontSize: "14px",
  color: "#4b5563",
  margin: "2px 0",
};

const totalLabel = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "4px 0",
};

const totalValue = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#0D6E6E",
  margin: "4px 0",
};
