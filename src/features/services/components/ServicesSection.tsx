import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { services } from "../data/services";
import ServicesCard from "./ServicesCard";

export default function ServicesSection() {
  return (
    <Section className="bg-linear-to-b from-white via-gray-50 to-white">
      <SectionHeading
        badge="Our Services"
        title="Everything You Need for Your Journey"
        description="From flight bookings to Umrah packages, we provide complete travel solutions tailored to your needs."
      />

      <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li
            key={service.id}
            data-aos="zoom-in"
            data-aos-delay={Math.min(index * 100, 500)}
          >
            <ServicesCard service={service} />
          </li>
        ))}
      </ul>
    </Section>
  );
}