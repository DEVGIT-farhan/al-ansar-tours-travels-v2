import { useMemo } from "react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { usePackages } from "@/admin/features/packages/hooks/usePackages";
import { useSiteContent } from "@/features/site-content";
import PackageGrid from "@/website/components/packages/PackageGrid";

export default function PackagesSection() {
  const { data: packages = [], isLoading } = usePackages();
  const { content } = useSiteContent();
  const section = content.home.packages;

  const featuredPackages = useMemo(
    () => packages.filter((pkg) => pkg.featured).slice(0, 6),
    [packages],
  );

  return (
    <Section className="bg-linear-to-b from-white via-gray-50 to-white">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16">
        <PackageGrid packages={featuredPackages} loading={isLoading} />
      </div>
    </Section>
  );
}
