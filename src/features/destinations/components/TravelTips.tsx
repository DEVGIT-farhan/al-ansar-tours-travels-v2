import {
  BadgeCheck,
  Briefcase,
  CreditCard,
  FileText,
  Globe2,
  Plane,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const tips = [
  {
    icon: FileText,
    title: "Keep Your Documents Ready",
    description:
      "Carry both printed and digital copies of your passport, visa, travel insurance, and flight tickets.",
  },
  {
    icon: Plane,
    title: "Arrive Early",
    description:
      "For international flights, arrive at the airport at least three hours before departure.",
  },
  {
    icon: CreditCard,
    title: "Carry Multiple Payment Options",
    description:
      "Keep some local currency along with an international debit or credit card for convenience.",
  },
  {
    icon: Briefcase,
    title: "Pack Smart",
    description:
      "Pack according to your destination's climate and airline baggage allowance to avoid extra charges.",
  },
  {
    icon: Globe2,
    title: "Respect Local Culture",
    description:
      "Learn about local customs, traditions, and dress codes before travelling to ensure a respectful experience.",
  },
  {
    icon: BadgeCheck,
    title: "Travel With Confidence",
    description:
      "Our team is always available to assist you before departure and throughout your journey whenever you need support.",
  },
];

export default function TravelTips() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Travel Tips"
        title="Travel Smarter, Travel Better"
        description="A few simple preparations can make your journey smoother, safer, and more enjoyable."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {tips.map((tip, index) => {
          const Icon = tip.icon;

          return (
            <article
              key={tip.title}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 100, 500)}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D91]/10">
                <Icon className="h-8 w-8 text-[#0B3D91]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B3D91]">
                {tip.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {tip.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}