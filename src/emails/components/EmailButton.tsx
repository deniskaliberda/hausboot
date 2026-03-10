import { Button } from "@react-email/components";

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function EmailButton({
  href,
  children,
  variant = "primary",
}: EmailButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Button
      href={href}
      style={{
        backgroundColor: isPrimary ? "#0D6E6E" : "#ffffff",
        borderRadius: "8px",
        color: isPrimary ? "#ffffff" : "#0D6E6E",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "none",
        textAlign: "center" as const,
        display: "inline-block",
        padding: "12px 24px",
        border: isPrimary ? "none" : "2px solid #0D6E6E",
      }}
    >
      {children}
    </Button>
  );
}
