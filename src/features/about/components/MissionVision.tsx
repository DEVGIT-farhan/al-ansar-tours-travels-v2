import { Compass, Target } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

export default function MissionVision() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Our Purpose"
        title="Driven by Purpose, Guided by Excellence"
        description="Our mission and vision define who we are and inspire every journey we help create."
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
            Our Mission
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            To provide reliable, transparent, and affordable travel
            solutions that make every journey smooth and memorable.
            Through personalized service, professional guidance, and
            continuous support, we strive to exceed our customers'
            expectations and build lasting relationships based on trust.
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
            Our Vision
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            To become one of India's most trusted travel agencies,
            connecting people with meaningful travel experiences
            across the world while delivering exceptional service,
            innovation, integrity, and customer satisfaction in
            everything we do.
          </p>
        </div>
      </div>
    </Section>
  );
}