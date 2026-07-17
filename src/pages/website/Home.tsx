import {
  Hero,
  SearchSection,
  Umrah,
  Statistics,
  Gallery,
  FAQ,
  Contact
} from "../../components/home";
import About from "../../components/home/about/About";
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
      <Umrah />
      <Statistics />
      <TestimonialsSection />
      <Contact />
      <Gallery />
      <FAQ />
      

    </>
  );
}