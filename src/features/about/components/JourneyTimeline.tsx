import {
  Globe,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const timeline = [
  {
    icon: Sparkles,
    title: "Our Beginning",
    description:
      "Founded with a vision to simplify travel and provide trustworthy guidance for every traveller.",
  },
  {
    icon: Plane,
    title: "Expanding Our Services",
    description:
      "From flight bookings and visa assistance to Umrah, Hajj, and international holiday packages, we broadened our expertise to serve diverse travel needs.",
  },
  {
    icon: Users,
    title: "Building Customer Trust",
    description:
      "Every successful journey strengthened our reputation and deepened the relationships we share with our travellers.",
  },
  {
    icon: Globe,
    title: "Connecting the World",
    description:
      "We continue helping families, individuals, and groups explore destinations around the globe with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Looking Ahead",
    description:
      "Our commitment remains unchanged—to deliver exceptional travel experiences through professionalism, integrity, and personalized service.",
  },
];

export default function JourneyTimeline() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Our Journey"
        title="Growing Through Every Journey We Create"
        description="Our story is defined by the trust of our customers and our commitment to making travel simple, memorable, and meaningful."
      />

      <div className="relative mx-auto mt-20 max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[#0B3D91]/20 md:block" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 100, 400)}
                className="relative flex gap-6"
              >
                <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-white shadow-lg">
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