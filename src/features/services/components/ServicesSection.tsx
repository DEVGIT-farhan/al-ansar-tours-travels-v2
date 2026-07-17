import Container from "../../../components/ui/Container";
import SectionHeading from "../../../components/common/SectionHeading";
import ServicesCard from "./ServicesCard";
import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section className="bg-linear-to-b from-white via-gray-50 to-white py-20">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Everything You Need for Your Journey"
          description="From flight bookings to Umrah packages, we provide complete travel solutions tailored to your needs."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}