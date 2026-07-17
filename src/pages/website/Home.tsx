import {
  Hero,
  SearchSection,
  Destinations,
  Umrah,
  Statistics,
  Testimonials,
  Gallery,
  FAQ,
  Contact
} from "../../components/home";
import About from "../../components/home/about/About";
import ServicesSection from "../../features/services/components/ServicesSection";




export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <About />
      <ServicesSection />
      <Destinations />
      <Umrah />
      <Statistics />
      <Testimonials />
      <Contact />
      <Gallery />
      <FAQ />
      

    </>
  );
}