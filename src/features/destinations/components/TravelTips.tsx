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
import { useSiteContent } from "@/features/site-content";

const tipIcons = [FileText, Plane, CreditCard, Briefcase, Globe2, BadgeCheck];

export default function TravelTips() {
  const { content } = useSiteContent();
  const section = content.destinations.tips;

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((tip, index) => {
          const Icon = tipIcons[index] ?? tipIcons[0]!;

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

              <p className="mt-4 leading-7 text-gray-600">{tip.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
