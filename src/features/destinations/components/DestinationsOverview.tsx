import { Globe2 } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

export default function DestinationsOverview() {
  return (
    <Section>
      <SectionHeading
        badge="Explore the World"
        title="Discover Your Next Dream Destination"
        description="From spiritual pilgrimages to unforgettable international holidays, we help you explore the world's most loved destinations."
      />

      <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D91]/10">
            <Globe2 className="h-10 w-10 text-[#0B3D91]" />
          </div>

          <p className="max-w-4xl text-lg leading-8 text-gray-600">
            Every destination offers something unique, whether it's a
            spiritual experience, breathtaking landscapes, vibrant
            cultures, or unforgettable adventures. At AL ANSAR TOURS &
            TRAVELS, we help you choose the perfect destination based on
            your interests, travel goals, and budget.
          </p>

          <p className="max-w-4xl text-lg leading-8 text-gray-600">
            Our carefully selected destinations combine comfort,
            convenience, and memorable experiences, ensuring every journey
            becomes a story worth sharing.
          </p>
        </div>
      </div>
    </Section>
  );
}