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
    default: "Luxus Hausboote Berlin – Übernachtung mit Sauna & Kamin",
    template: "%s | Luxus Hausboote Berlin",
  },
  description:
    "Einzigartige Luxus-Hausboote in Berlin-Schmöckwitz. Sauna, Kamin, Dachterrasse – direkt am Wasser der Dahme. Jetzt buchen!",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Luxus Hausboote Berlin",
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
