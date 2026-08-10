import { Link } from "react-router-dom";

import Button from "@/shared/components/Button";
import Section from "@/website/components/common/Section";
import SectionTitle from "@/website/components/common/SectionTitle";
import PackageGrid from "@/website/components/packages/PackageGrid";

import usePackages from "@/website/hooks/usePackages";

export default function FeaturedPackagesSection() {
  const { data: packages = [], isLoading, isError } = usePackages();

  const featuredPackages = packages
    .filter((pkg) => pkg.active && pkg.featured)
    .slice(0, 6);

  return (
    <Section>
      <SectionTitle
        eyebrow="Featured Tours"
        title="Explore Our Most Popular Packages"
        description="Discover hand-picked travel experiences crafted for unforgettable journeys."
        action={
          <Link to="/packages">
            <Button variant="secondary">View All Packages</Button>
          </Link>
        }
      />

      {isError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
          Failed to load travel packages.
        </div>
      ) : (
        <PackageGrid packages={featuredPackages} loading={isLoading} />
      )}
    </Section>
  );
}
