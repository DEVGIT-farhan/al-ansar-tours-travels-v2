import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { reorderPackageItinerary } from "../api/packageItinerary.api";

import type { ReorderPackageItineraryDto } from "../../../../shared/types/packageItinerary.types";

const QUERY_KEY = ["package-itinerary"];

export function useReorderPackageItinerary(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: ReorderPackageItineraryDto[]) =>
      reorderPackageItinerary(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, packageId],
      });

      toast.success("Itinerary reordered.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
