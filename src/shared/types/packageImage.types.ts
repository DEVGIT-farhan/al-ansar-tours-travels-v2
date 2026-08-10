export interface PackageImage {
  id: string;
  package_id: string;
  image_url: string;
  alt_text: string | null;
  sort_order: number;
  created_at: string;
}

export interface CreatePackageImageDto {
  package_id: string;
  image_url: string;
  alt_text?: string | null;
  sort_order: number;
}

export interface UpdatePackageImageDto {
  id: string;
  alt_text?: string | null;
}

export interface ReorderPackageImagesDto {
  id: string;
  sort_order: number;
}
