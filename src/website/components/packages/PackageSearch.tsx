import { Search } from "lucide-react";

interface PackageSearchProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export default function PackageSearch({
  value,
  onSearch,
  placeholder = "Search packages...",
}: PackageSearchProps) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
