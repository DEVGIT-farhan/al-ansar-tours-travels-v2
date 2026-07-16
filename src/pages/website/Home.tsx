import Hero from "../../components/home/Hero";
import SearchSection from "../../components/home/SearchSection";
import About from "../../components/home/About";
import Services from "../../components/home/Services";
import Destinations from "../../components/home/Destinations";
import Statistics from "../../components/home/Statistics";
import Umrah from "../../components/home/Umrah";
import Testimonials from "../../components/home/Testimonials";
import Contact from "../../components/home/Contact";
import Gallery from "../../components/home/Gallery";
import FAQ from "../../components/home/FAQ";



export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <About />
      <Services />
      <Destinations />
      <Statistics />
      <Umrah />
      <Testimonials />
      <Contact />
      <Gallery />
      <FAQ />
      

    </>
  );
}