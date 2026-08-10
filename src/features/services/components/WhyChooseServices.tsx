import {
  BadgeCheck,
  Clock3,
  Handshake,
  Headphones,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

const reasonIcons = [
  BadgeCheck,
  ShieldCheck,
  Wallet,
  Headphones,
  Handshake,
  Clock3,
];

export default function WhyChooseServices() {
  const { content } = useSiteContent();
  const section = content.services.reasons;

  return (
    <Section>
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((reason, index) => {
          const Icon = reasonIcons[index] ?? reasonIcons[0]!;

          return (
            <article
              key={reason.title}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 100, 500)}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D91]/10">
                <Icon className="h-8 w-8 text-[#0B3D91]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B3D91]">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {reason.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
