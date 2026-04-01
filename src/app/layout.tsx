import type { Metadata } from "next";
import { DM_Sans, Literata, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const literata = Literata({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Luxus Hausboot Berlin-Schmöckwitz | Sauna & Kamin | Jetzt buchen",
    template: "%s | Luxus Hausboot Berlin",
  },
  description:
    "Luxus-Hausboot an der Dahme in Berlin-Schmöckwitz: 4 Schlafzimmer, finnische Sauna, Kamin, Dachterrasse. Bis zu 8 Gäste. Ab 350 €/Nacht. Direkt buchen!",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Luxus Hausboot Berlin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${dmSans.variable} ${literata.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
