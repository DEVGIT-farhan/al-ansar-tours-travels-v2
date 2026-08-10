import { CalendarDays } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function BestTimeToVisit() {
  const { content } = useSiteContent();
  const section = content.destinations.bestTime;

  return (
    <Section>
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-12 bg-[#0B3D91] px-8 py-5 font-semibold text-white">
          <div className="col-span-4">Destination</div>
          <div className="col-span-3">Best Time</div>
          <div className="col-span-5">Why Visit?</div>
        </div>

        {section.items.map((item, index) => (
          <div
            key={item.destination}
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 100, 400)}
            className="grid grid-cols-12 items-center border-t border-gray-200 px-8 py-6 transition-colors hover:bg-gray-50"
          >
            <div className="col-span-4 flex items-center gap-3 font-semibold text-[#0B3D91]">
              <CalendarDays className="h-5 w-5" />
              {item.destination}
            </div>

            <div className="col-span-3 font-medium text-[#F4B400]">
              {item.months}
            </div>

            <div className="col-span-5 text-gray-600">{item.reason}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
