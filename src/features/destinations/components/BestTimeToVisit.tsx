import { CalendarDays } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const seasons = [
  {
    destination: "Saudi Arabia",
    months: "October – March",
    reason:
      "Pleasant weather makes it the ideal season for Umrah and sightseeing.",
  },
  {
    destination: "Dubai",
    months: "November – March",
    reason:
      "Comfortable temperatures are perfect for outdoor attractions and shopping festivals.",
  },
  {
    destination: "Malaysia",
    months: "December – April",
    reason:
      "Enjoy warm tropical weather with excellent opportunities for sightseeing.",
  },
  {
    destination: "Thailand",
    months: "November – February",
    reason:
      "Cooler temperatures make beaches, islands, and city tours more enjoyable.",
  },
  {
    destination: "Turkey",
    months: "April – June & September – November",
    reason:
      "Mild weather provides the best conditions for exploring historical sites and natural beauty.",
  },
];

export default function BestTimeToVisit() {
  return (
    <Section>
      <SectionHeading
        badge="Travel Guide"
        title="Best Time to Visit Our Popular Destinations"
        description="Planning your trip during the right season ensures a more enjoyable and comfortable travel experience."
      />

      <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-12 bg-[#0B3D91] px-8 py-5 font-semibold text-white">
          <div className="col-span-4">Destination</div>
          <div className="col-span-3">Best Time</div>
          <div className="col-span-5">Why Visit?</div>
        </div>

        {seasons.map((item, index) => (
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

            <div className="col-span-5 text-gray-600">
              {item.reason}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}