import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Hero } from "@/components/sections/Hero";
import { PropertyShowcase } from "@/components/sections/PropertyShowcase";
import { AmenitiesGrid } from "@/components/sections/AmenitiesGrid";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Navbar />
      <main>
        <Hero />
        <PropertyShowcase />
        <AmenitiesGrid />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
