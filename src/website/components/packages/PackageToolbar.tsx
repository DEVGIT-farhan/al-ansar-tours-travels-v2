import { useMemo } from "react";

import PackageFilters from "./PackageFilters";
import PackageSearch from "./PackageSearch";
import PackageSort from "./PackageSort";

interface PackageToolbarProps {
  search: string;
  category: string;
  duration: string;
  price: string;
  sort: string;

  categories: string[];

  onSearch: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDurationChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function PackageToolbar({
  search,
  category,
  duration,
  price,
  sort,
  categories,
  onSearch,
  onCategoryChange,
  onDurationChange,
  onPriceChange,
  onSortChange,
}: PackageToolbarProps) {
  const uniqueCategories = useMemo(
    () => [...new Set(categories)].sort(),
    [categories],
  );

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <PackageSearch value={search} onSearch={onSearch} />

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4">
        <PackageFilters
          category={category}
          duration={duration}
          price={price}
          categories={uniqueCategories}
          onCategoryChange={onCategoryChange}
          onDurationChange={onDurationChange}
          onPriceChange={onPriceChange}
        />

        <PackageSort value={sort} onChange={onSortChange} />
      </div>
    </div>
  );
}
