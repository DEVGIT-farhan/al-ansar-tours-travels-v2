import CategoryForm from "./CategoryForm";
import type { PackageCategory } from "@/shared/types/packageCategory.types";

interface CategoryModalProps {
  open: boolean;
  category?: PackageCategory;
  onClose: () => void;
}

export default function CategoryModal({
  open,
  category,
  onClose,
}: CategoryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">
            {category ? "Edit Category" : "Create Category"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 transition hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <CategoryForm category={category} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
