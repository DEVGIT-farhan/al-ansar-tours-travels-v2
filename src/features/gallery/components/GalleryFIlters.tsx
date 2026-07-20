interface GalleryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            activeCategory === category
              ? "bg-[#0B3D91] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-[#F4B400] hover:text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}