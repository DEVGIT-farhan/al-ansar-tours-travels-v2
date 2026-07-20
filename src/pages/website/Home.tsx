import {
  Hero,
  SearchSection,
  Umrah,
  Statistics,
} from "../../components/home";

import About from "../../components/home/about/About";

import { FAQSection } from "@/features/faq";
import { ContactSection, GoogleMap } from "@/features/contact";
import { HomeGallerySection } from "@/features/gallery";
import ServicesSection from "../../features/services/components/ServicesSection";
import DestinationsSection from "../../features/destinations/components/DestinationsSection";
import PackagesSection from "../../features/packages/components/PackagesSection";
import { TestimonialsSection } from "../../features/testimonials";

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