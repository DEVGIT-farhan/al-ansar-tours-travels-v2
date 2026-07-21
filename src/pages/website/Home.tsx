import { Hero, SearchSection } from "@/components/home";
import About from "@/components/home/about/About";
import SEO from "@/components/common/SEO";
import { ContactSection, GoogleMap } from "@/features/contact";
import DestinationsSection from "@/features/destinations/components/DestinationsSection";
import { FAQSection } from "@/features/faq";
import { HomeGallerySection } from "@/features/gallery";
import PackagesSection from "@/features/packages/components/PackagesSection";
import ServicesSection from "@/features/services/components/ServicesSection";
import { TestimonialsSection } from "@/features/testimonials";

export default function Home() {
  return (
    <>
    <SEO
    description="Trusted travel agency in Chennai offering Umrah packages, tourist visas, flight bookings and international holiday packages."
    url="/"
  />
      <Hero />

      <SearchSection />

      <About />

      <ServicesSection />

      <DestinationsSection />

      <PackagesSection />

      <TestimonialsSection />

      <HomeGallerySection />

      <FAQSection />

      <ContactSection />

      <GoogleMap />
    </>
  );
}