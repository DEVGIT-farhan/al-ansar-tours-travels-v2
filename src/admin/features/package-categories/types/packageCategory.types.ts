import type { PackageCategory } from "@/shared/types/packageCategory.types";

export type CreatePackageCategoryDto = Omit<
  PackageCategory,
  "id" | "created_at"
>;

export type UpdatePackageCategoryDto = Omit<PackageCategory, "created_at">;
