import { Building2, Landmark, Mountain, Palmtree } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

const categoryIcons = [Landmark, Building2, Palmtree, Mountain];

export default function DestinationCategories() {
  const { content } = useSiteContent();
  const section = content.destinations.categories;

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {section.items.map((category, index) => {
          const Icon = categoryIcons[index] ?? categoryIcons[0]!;

          return (
            <article
              key={category.title}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 100, 400)}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D91]/10">
                <Icon className="h-10 w-10 text-[#0B3D91]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B3D91]">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {category.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
