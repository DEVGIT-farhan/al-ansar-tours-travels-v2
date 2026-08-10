import { PlaneTakeoff } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function ServicesOverview() {
  const { content } = useSiteContent();
  const overview = content.services.overview;

  return (
    <Section>
      <SectionHeading
        badge={overview.badge}
        title={overview.title}
        description={overview.description}
      />

      <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D91]/10">
            <PlaneTakeoff className="h-10 w-10 text-[#0B3D91]" />
          </div>

          {overview.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-4xl text-lg leading-8 text-gray-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
