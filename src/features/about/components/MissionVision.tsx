import { Compass, Target } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function MissionVision() {
  const { content } = useSiteContent();
  const section = content.about.missionVision;

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Mission */}

        <div
          data-aos="fade-right"
          className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D91]/10">
            <Target className="h-8 w-8 text-[#0B3D91]" />
          </div>

          <h3 className="text-3xl font-bold text-[#0B3D91]">
            {section.missionTitle}
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            {section.missionDescription}
          </p>
        </div>

        {/* Vision */}

        <div
          data-aos="fade-left"
          className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4B400]/10">
            <Compass className="h-8 w-8 text-[#F4B400]" />
          </div>

          <h3 className="text-3xl font-bold text-[#0B3D91]">
            {section.visionTitle}
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            {section.visionDescription}
          </p>
        </div>
      </div>
    </Section>
  );
}
