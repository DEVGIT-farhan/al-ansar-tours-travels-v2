import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { updatePackageItinerary } from "../api/packageItinerary.api";

import type { UpdatePackageItineraryDto } from "../../../../shared/types/packageItinerary.types";

const QUERY_KEY = ["package-itinerary"];

export function useUpdatePackageItinerary(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageItineraryDto) =>
      updatePackageItinerary(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, packageId],
      });

      toast.success("Itinerary updated.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
