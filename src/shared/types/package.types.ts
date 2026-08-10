import type { PackageCategory } from "@/shared/types/packageCategory.types";
import type { PackageImage } from "@/shared/types/packageImage.types";
import type { PackageItinerary } from "@/shared/types/packageItinerary.types";
import type { PackageInclusion } from "@/shared/types/packageInclusions.types";
import type { PackageExclusion } from "@/shared/types/packageExclusions.types";

export interface TravelPackage {
  id: string;

  category_id: string | null;

  title: string;
  slug: string;

  short_description: string | null;
  description: string | null;

  duration: string | null;
  destination: string | null;

  price: number | null;
  currency: string;

  cover_image: string | null;

  featured: boolean;
  active: boolean;

  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;

  created_at: string;
  updated_at: string;
}

export interface TravelPackageWithCategory extends TravelPackage {
  category: PackageCategory | null;

  images: PackageImage[];

  itinerary: PackageItinerary[];

  inclusions: PackageInclusion[];

  exclusions: PackageExclusion[];
}

export type CreatePackageDto = Omit<
  TravelPackage,
  "id" | "created_at" | "updated_at"
>;

export type UpdatePackageDto = CreatePackageDto & {
  id: string;
};
