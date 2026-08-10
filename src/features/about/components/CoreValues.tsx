import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

const valueStyles = [
  { icon: ShieldCheck, color: "text-[#0B3D91]", bg: "bg-[#0B3D91]/10" },
  { icon: HeartHandshake, color: "text-[#F4B400]", bg: "bg-[#F4B400]/10" },
  { icon: Award, color: "text-green-600", bg: "bg-green-100" },
  { icon: Users, color: "text-purple-600", bg: "bg-purple-100" },
];

export default function CoreValues() {
  const { content } = useSiteContent();
  const section = content.about.coreValues;

  return (
    <Section>
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {section.items.map((value, index) => {
          const style = valueStyles[index] ?? valueStyles[0]!;
          const Icon = style.icon;

          return (
            <article
              key={value.title}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 100, 400)}
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${style.bg}`}
              >
                <Icon className={`h-10 w-10 ${style.color}`} />
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
