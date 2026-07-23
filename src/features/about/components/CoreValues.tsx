import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build long-lasting relationships through honesty, transparency, and dependable travel services.",
    color: "text-[#0B3D91]",
    bg: "bg-[#0B3D91]/10",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Every travel plan is designed around our customers' needs, comfort, and satisfaction.",
    color: "text-[#F4B400]",
    bg: "bg-[#F4B400]/10",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We continuously improve our services to provide exceptional travel experiences every time.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Users,
    title: "Commitment",
    description:
      "From your first enquiry until your safe return home, our team is with you every step of the journey.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function CoreValues() {
  return (
    <Section>
      <SectionHeading
        badge="Core Values"
        title="The Principles That Guide Every Journey"
        description="Our values shape every decision we make and every experience we deliver."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <article
              key={value.title}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 100, 400)}
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${value.bg}`}
              >
                <Icon
                  className={`h-10 w-10 ${value.color}`}
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B3D91]">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}