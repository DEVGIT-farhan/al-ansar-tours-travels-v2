import { useQuery } from "@tanstack/react-query";

import { getPackageItinerary } from "../api/packageItinerary.api";

const QUERY_KEY = ["package-itinerary"];

export function usePackageItinerary(packageId: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, packageId],
    queryFn: () => getPackageItinerary(packageId),
    enabled: !!packageId,
  });
}
