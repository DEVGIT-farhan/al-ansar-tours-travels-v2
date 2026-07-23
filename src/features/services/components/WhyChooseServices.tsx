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

const reasons = [
  {
    icon: BadgeCheck,
    title: "Experienced Travel Experts",
    description:
      "Our knowledgeable consultants help you choose the right travel solutions based on your needs and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We believe in honesty, transparency, and delivering dependable travel services you can count on.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description:
      "Enjoy affordable travel packages without compromising on quality or service.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is available to assist you before, during, and after your journey.",
  },
  {
    icon: Handshake,
    title: "Personalized Service",
    description:
      "Every traveller is different. We recommend solutions that match your travel goals and preferences.",
  },
  {
    icon: Clock3,
    title: "Hassle-Free Process",
    description:
      "From enquiry to departure, we take care of the details so you can travel with confidence.",
  },
];

export default function WhyChooseServices() {
  return (
    <Section>
      <SectionHeading
        badge="Why Choose Us"
        title="Travel With Confidence"
        description="We combine experience, reliability, and personalized service to make every journey smooth and memorable."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

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