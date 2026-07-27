export interface PackageCategory {
  id: string;

  name: string;
  slug: string;

  icon: string | null;

  active: boolean;
  sort_order: number;

  created_at: string;
}

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
  currency: string | null;

  cover_image: string | null;

 itinerary:
  | {
      day: number;
      title: string;
      description: string;
    }[]
  | null;

inclusions: string[] | null;

exclusions: string[] | null;

  featured: boolean;
  active: boolean;

  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;

  created_at: string;
  updated_at: string;
}

export type CreatePackageDto = Omit<
  TravelPackage,
  "id" | "created_at" | "updated_at"
>;

export type UpdatePackageDto = Omit<
  TravelPackage,
  "created_at"
>;