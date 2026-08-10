import { useQuery } from "@tanstack/react-query";

import { getPackageInclusions } from "../api/packageInclusions.api";

export function usePackageInclusions(packageId: string) {
  return useQuery({
    queryKey: ["package-inclusions", packageId],
    queryFn: () => getPackageInclusions(packageId),
    enabled: Boolean(packageId),
    staleTime: 60_000,
  });
}
