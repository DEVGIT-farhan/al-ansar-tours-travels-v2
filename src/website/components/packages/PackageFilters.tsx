import type { ChangeEvent } from "react";

interface PackageFiltersProps {
  category: string;
  duration: string;
  price: string;
  categories: string[];
  onCategoryChange: (value: string) => void;
  onDurationChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

const selectClassName =
  "h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

export default function PackageFilters({
  category,
  duration,
  price,
  categories,
  onCategoryChange,
  onDurationChange,
  onPriceChange,
}: PackageFiltersProps) {
  const handleChange =
    (onChange: (value: string) => void) =>
    (event: ChangeEvent<HTMLSelectElement>) =>
      onChange(event.target.value);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <select
        value={category}
        onChange={handleChange(onCategoryChange)}
        className={selectClassName}
      >
        <option value="">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={duration}
        onChange={handleChange(onDurationChange)}
        className={selectClassName}
      >
        <option value="">Any Duration</option>
        <option value="1-3">1 to 3 Days</option>
        <option value="4-7">4 to 7 Days</option>
        <option value="8-14">8 to 14 Days</option>
        <option value="15+">15+ Days</option>
      </select>

      <select
        value={price}
        onChange={handleChange(onPriceChange)}
        className={selectClassName}
      >
        <option value="">Any Price</option>
        <option value="0-50000">Up to Rs. 50,000</option>
        <option value="50000-100000">Rs. 50,000 to Rs. 100,000</option>
        <option value="100000-200000">Rs. 100,000 to Rs. 200,000</option>
        <option value="200000+">Over Rs. 200,000</option>
      </select>
    </div>
  );
}
