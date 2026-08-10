import { useQuery } from "@tanstack/react-query";

import { getPackageExclusions } from "../api/packageExclusions.api";

export function usePackageExclusions(packageId: string) {
  return useQuery({
    queryKey: ["package-exclusions", packageId],
    queryFn: () => getPackageExclusions(packageId),
    enabled: Boolean(packageId),
    staleTime: 60_000,
  });
}
