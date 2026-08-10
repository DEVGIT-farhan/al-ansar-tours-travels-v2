import { useQuery } from "@tanstack/react-query";

import { getPackageImages } from "../api/packageImages.api";

export function usePackageImages(packageId: string) {
  return useQuery({
    queryKey: ["package-images", packageId],
    queryFn: () => getPackageImages(packageId),
    enabled: Boolean(packageId),
  });
}
