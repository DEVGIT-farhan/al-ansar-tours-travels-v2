import { Search } from "lucide-react";
import type { ReactNode } from "react";

interface CrudSearchProps {
  value: string;
  onChange(value: string): void;
  placeholder?: string;
  rightContent?: ReactNode;
}

export default function CrudSearch({
  value,
  onChange,
  placeholder = "Search...",
  rightContent,
}: CrudSearchProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
        />
      </div>

      {rightContent && (
        <div className="flex items-center gap-3">{rightContent}</div>
      )}
    </div>
  );
}
