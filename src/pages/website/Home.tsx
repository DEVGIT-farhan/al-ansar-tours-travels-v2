import {
  Hero,
  SearchSection,
  Umrah,
  Statistics,
  FAQ,
  Contact
} from "../../components/home";
import About from "../../components/home/about/About";
import ServicesSection from "../../features/services/components/ServicesSection";
import DestinationsSection from "../../features/destinations/components/DestinationsSection";
import PackagesSection from "../../features/packages/components/PackagesSection";
import { TestimonialsSection } from "../../features/testimonials";
import { GallerySection } from "../../features/gallery";




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
      <GallerySection />
      <Umrah />
      <Statistics />
      <Contact />
      <FAQ />
      

    </>
  );
}