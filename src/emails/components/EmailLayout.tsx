import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="de">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>Luxus Hausboote Berlin</Text>
          </Section>

          {/* Content */}
          <Section style={content}>{children}</Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Luxus Hausboote Berlin · Berlin-Schmöckwitz
            </Text>
            <Text style={footerText}>
              <Link href={`${baseUrl}/impressum`} style={footerLink}>
                Impressum
              </Link>
              {" · "}
              <Link href={`${baseUrl}/datenschutz`} style={footerLink}>
                Datenschutz
              </Link>
              {" · "}
              <Link href={`${baseUrl}/kontakt`} style={footerLink}>
                Kontakt
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f6f6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "8px",
  overflow: "hidden" as const,
};

const header = {
  backgroundColor: "#0D6E6E",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const logo = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "bold" as const,
  margin: "0",
  fontFamily: "Georgia, serif",
};

const content = {
  padding: "32px",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "0",
};

const footer = {
  padding: "24px 32px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center" as const,
  margin: "0",
};

const footerLink = {
  color: "#0D6E6E",
  textDecoration: "underline",
};
