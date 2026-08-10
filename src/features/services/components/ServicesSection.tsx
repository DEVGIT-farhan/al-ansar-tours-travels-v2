import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import {
  Briefcase,
  Globe,
  Hotel,
  MapPinned,
  Plane,
  PlaneTakeoff,
} from "lucide-react";

import { useSiteContent } from "@/features/site-content";
import ServicesCard from "./ServicesCard";

const serviceIcons = {
  Briefcase,
  Globe,
  Hotel,
  MapPinned,
  Plane,
  PlaneTakeoff,
};

interface ServicesSectionProps {
  heading?: {
    badge: string;
    title: string;
    description: string;
  };
}

export default function ServicesSection({ heading }: ServicesSectionProps) {
  const { content } = useSiteContent();
  const section = heading ?? content.home.services;
  const services = content.services.items.map((service, index) => ({
    ...service,
    id: index + 1,
    icon: serviceIcons[service.icon as keyof typeof serviceIcons] ?? Plane,
  }));

  return (
    <Section className="bg-linear-to-b from-white via-gray-50 to-white">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
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
