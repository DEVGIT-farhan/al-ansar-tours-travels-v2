import SectionHeading from "@/components/common/SectionHeading";

import PackageCard from "@/features/packages/components/PackageCard";
import { packages } from "@/features/packages/data/packages";

interface RelatedPackagesProps {
  currentSlug: string;
}

export default function RelatedPackages({
  currentSlug,
}: RelatedPackagesProps) {
  const relatedPackages = packages
    .filter((pkg) => pkg.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPackages.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <SectionHeading
        badge="You May Also Like"
        title="Related Packages"
        description="Explore more travel experiences carefully selected for you."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {relatedPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            packageData={pkg}
          />
        ))}
      </div>
    </section>
  );
}