import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/lib/supabase/client";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

export default function usePackage(slug: string) {
  return useQuery({
    queryKey: ["package", slug],

    queryFn: async (): Promise<TravelPackageWithCategory | null> => {
      const { data, error } = await supabase
        .from("packages")
        .select(
          `
          *,
          category:package_categories(
            id,
            name,
            slug,
            icon,
            active,
            sort_order,
            created_at
          ),
          images:package_images(
            *
          ),
          itinerary:package_itinerary(
            *
          ),
          inclusions:package_inclusions(
            *
          ),
          exclusions:package_exclusions(
            *
          )
        `,
        )
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (!data) {
        return null;
      }

      const travelPackage = data as TravelPackageWithCategory;

      travelPackage.images ??= [];
      travelPackage.itinerary ??= [];
      travelPackage.inclusions ??= [];
      travelPackage.exclusions ??= [];

      travelPackage.images.sort((a, b) => a.sort_order - b.sort_order);

      travelPackage.itinerary.sort((a, b) => a.day_number - b.day_number);

      return travelPackage;
    },

    enabled: Boolean(slug),
  });
}
