import {
  CalendarCheck,
  ClipboardCheck,
  Headphones,
  PlaneTakeoff,
  Search,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const steps = [
  {
    icon: Search,
    title: "Enquiry",
    description:
      "Tell us about your travel plans, preferred destination, and requirements.",
  },
  {
    icon: Headphones,
    title: "Travel Consultation",
    description:
      "Our travel experts recommend the best package and guide you through every option.",
  },
  {
    icon: ClipboardCheck,
    title: "Booking Confirmation",
    description:
      "We confirm your flights, accommodation, visas, and travel itinerary.",
  },
  {
    icon: CalendarCheck,
    title: "Travel Preparation",
    description:
      "Receive all your travel documents, guidance, and important information before departure.",
  },
  {
    icon: PlaneTakeoff,
    title: "Enjoy Your Journey",
    description:
      "Travel with confidence knowing our team is available whenever you need assistance.",
  },
];

export default function ServiceProcess() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="How It Works"
        title="A Simple Journey From Enquiry to Departure"
        description="Our streamlined process ensures a smooth and hassle-free travel experience."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 100, 400)}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D91]/10">
                <Icon className="h-10 w-10 text-[#0B3D91]" />
              </div>

              <div className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B400] text-sm font-bold text-black">
                {index + 1}
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#0B3D91]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}