import { Globe, Plane, ShieldCheck, Sparkles, Users } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

const timelineIcons = [Sparkles, Plane, Users, Globe, ShieldCheck];

export default function JourneyTimeline() {
  const { content } = useSiteContent();
  const section = content.about.journey;

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="relative mx-auto mt-20 max-w-4xl">
        <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[#0B3D91]/20 md:block" />

        <div className="space-y-12">
          {section.items.map((item, index) => {
            const Icon = timelineIcons[index] ?? timelineIcons[0]!;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 100, 400)}
                className="relative flex gap-6"
              >
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-white shadow-lg md:flex">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-[#0B3D91]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
