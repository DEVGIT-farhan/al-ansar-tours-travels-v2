import { Hero, SearchSection } from "@/components/home";
import About from "@/components/home/about/About";

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