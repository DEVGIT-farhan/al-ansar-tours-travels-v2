import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { packages } from "../data/packages";
import PackageCard from "./PackageCard";

export default function PackagesSection() {
  return (
    <Section className="bg-linear-to-b from-white via-gray-50 to-white">
      <SectionHeading
        badge="Featured Packages"
        title="Choose Your Perfect Journey"
        description="Discover our best-selling Umrah and holiday packages designed for unforgettable experiences."
      />

      <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((packageData, index) => (
          <li
            key={packageData.id}
            data-aos="zoom-in"
            data-aos-delay={Math.min(index * 100, 500)}
          >
            <PackageCard packageData={packageData} />
          </li>
        ))}
      </ul>
    </Section>
  );
}