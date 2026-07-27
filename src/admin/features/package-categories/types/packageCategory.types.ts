export interface PackageCategory {
  id: string;

  name: string;
  slug: string;

  icon: string | null;

  active: boolean;

  sort_order: number;

  created_at: string;
}

export type CreatePackageCategoryDto = Omit<
  PackageCategory,
  "id" | "created_at"
>;

export type UpdatePackageCategoryDto =
  PackageCategory;