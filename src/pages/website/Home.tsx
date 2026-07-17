import {
  Hero,
  SearchSection,
  Umrah,
  Statistics,
  Testimonials,
  Gallery,
  FAQ,
  Contact
} from "../../components/home";
import About from "../../components/home/about/About";
import ServicesSection from "../../features/services/components/ServicesSection";
import DestinationsSection from "../../features/destinations/components/DestinationsSection";




export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <About />
      <ServicesSection />
      <DestinationsSection />
      <Umrah />
      <Statistics />
      <Testimonials />
      <Contact />
      <Gallery />
      <FAQ />
      

    </>
  );
}