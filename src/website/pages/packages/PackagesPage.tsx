import { useMemo } from "react";

import { usePackages } from "@/admin/features/packages/hooks/usePackages";
import Section from "@/website/components/common/Section";
import SectionTitle from "@/website/components/common/SectionTitle";
import PackageGrid from "@/website/components/packages/PackageGrid";
import PackageToolbar from "@/website/components/packages/PackageToolbar";
import usePackageFilters from "@/website/hooks/usePackageFilters";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

function getDurationInDays(duration: string | null): number | null {
  const value = Number.parseInt(duration ?? "", 10);
  return Number.isNaN(value) ? null : value;
}

function isInRange(value: number | null, range: string): boolean {
  if (!range) return true;
  if (value === null) return false;

  const [minimum = 0, maximum = 0] = range.split("-").map(Number);
  return range.endsWith("+")
    ? value >= Number.parseInt(range, 10)
    : value >= minimum && value <= maximum;
}

function compareOptionalNumbers(
  left: number | null,
  right: number | null,
  direction = 1,
): number {
  if (left === null) return 1;
  if (right === null) return -1;
  return (left - right) * direction;
}

function sortPackages(
  packages: TravelPackageWithCategory[],
  sort: string,
): TravelPackageWithCategory[] {
  return [...packages].sort((left, right) => {
    switch (sort) {
      case "oldest":
        return left.created_at.localeCompare(right.created_at);
      case "price_asc":
        return compareOptionalNumbers(left.price, right.price);
      case "price_desc":
        return compareOptionalNumbers(left.price, right.price, -1);
      case "duration_asc":
        return compareOptionalNumbers(
          getDurationInDays(left.duration),
          getDurationInDays(right.duration),
        );
      case "duration_desc":
        return compareOptionalNumbers(
          getDurationInDays(left.duration),
          getDurationInDays(right.duration),
          -1,
        );
      case "name_asc":
        return left.title.localeCompare(right.title);
      case "name_desc":
        return right.title.localeCompare(left.title);
      case "newest":
      default:
        return right.created_at.localeCompare(left.created_at);
    }
  });
}

export default function PackagesPage() {
  const { data: packages = [], isLoading } = usePackages();
  const {
    search,
    category,
    destination,
    duration,
    price,
    sort,
    setSearch,
    setCategory,
    setDuration,
    setPrice,
    setSort,
  } = usePackageFilters();

  const filteredPackages = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const selectedDestination = destination.trim().toLowerCase();

    const matchingPackages = packages.filter((pkg) => {
      const matchesSearch =
        !keyword ||
        [pkg.title, pkg.destination, pkg.category?.name].some((value) =>
          value?.toLowerCase().includes(keyword),
        );
      const matchesCategory = !category || pkg.category?.name === category;
      const matchesDestination =
        !selectedDestination ||
        pkg.destination?.trim().toLowerCase() === selectedDestination;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination &&
        isInRange(getDurationInDays(pkg.duration), duration) &&
        isInRange(pkg.price, price)
      );
    });

    return sortPackages(matchingPackages, sort);
  }, [packages, search, category, destination, duration, price, sort]);

  return (
    <Section>
      <SectionTitle
        title="Travel Packages"
        description="Explore our domestic and international holiday packages."
      />

      <PackageToolbar
        search={search}
        category={category}
        duration={duration}
        price={price}
        sort={sort}
        categories={packages
          .map((pkg) => pkg.category?.name ?? "")
          .filter(Boolean)}
        onSearch={setSearch}
        onCategoryChange={setCategory}
        onDurationChange={setDuration}
        onPriceChange={setPrice}
        onSortChange={setSort}
      />

      <PackageGrid packages={filteredPackages} loading={isLoading} />
    </Section>
  );
}
