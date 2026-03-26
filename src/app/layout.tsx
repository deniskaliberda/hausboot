import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
