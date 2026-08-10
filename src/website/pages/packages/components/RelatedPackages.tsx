import type { TravelPackageWithCategory } from "@/shared/types/package.types";

interface RelatedPackagesProps {
  travelPackage: TravelPackageWithCategory;
}

export default function RelatedPackages({
  travelPackage,
}: RelatedPackagesProps) {
  return (
    <section>
      <h2>Related Packages</h2>

      <p>Category: {travelPackage.category?.name ?? "No category assigned"}</p>
    </section>
  );
}
