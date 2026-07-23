import {
  Building2,
  Landmark,
  Mountain,
  Palmtree,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

const categories = [
  {
    icon: Landmark,
    title: "Spiritual Journeys",
    description:
      "Experience meaningful pilgrimages including Umrah and Hajj with carefully planned travel arrangements.",
  },
  {
    icon: Building2,
    title: "City Escapes",
    description:
      "Explore vibrant cities with world-class shopping, entertainment, culture, and iconic landmarks.",
  },
  {
    icon: Palmtree,
    title: "Beach Holidays",
    description:
      "Relax on beautiful beaches and enjoy tropical getaways perfect for families and honeymooners.",
  },
  {
    icon: Mountain,
    title: "Nature & Adventure",
    description:
      "Discover breathtaking mountains, scenic landscapes, wildlife, and unforgettable outdoor experiences.",
  },
];

export default function DestinationCategories() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Travel Styles"
        title="Choose the Journey That Inspires You"
        description="Every traveller is different. Discover destinations that match your interests and travel goals."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = category.icon;

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