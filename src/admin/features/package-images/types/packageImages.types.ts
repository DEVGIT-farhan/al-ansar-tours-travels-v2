import type { PackageImage } from "@/shared/types/packageImage.types";

export type CreatePackageImageDto = Omit<PackageImage, "id" | "created_at">;

export interface UpdatePackageImageDto {
  id: string;
  alt_text?: string | null;
  sort_order?: number;
}
export interface ReorderPackageImagesDto {
  id: string;
  sort_order: number;
}
