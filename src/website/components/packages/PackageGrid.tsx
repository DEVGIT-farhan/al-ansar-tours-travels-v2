import type { TravelPackageWithCategory } from "@/shared/types/package.types";

import PackageCard from "./PackageCard";
import PackageCardSkeleton from "./PackageCardSkeleton";

interface PackageGridProps {
  packages: TravelPackageWithCategory[];
  loading?: boolean;
}

export default function PackageGrid({ packages, loading }: PackageGridProps) {
  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <PackageCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!packages.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center">
        No travel packages available.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </div>
  );
}
