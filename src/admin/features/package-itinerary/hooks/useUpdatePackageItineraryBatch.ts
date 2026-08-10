import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { updatePackageItineraryBatch } from "../api/packageItinerary.api";

import type { UpdatePackageItineraryBatchDto } from "../../../../shared/types/packageItinerary.types";

const QUERY_KEY = ["package-itinerary"];

export function useUpdatePackageItineraryBatch(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageItineraryBatchDto[]) =>
      updatePackageItineraryBatch(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, packageId],
      });

      toast.success("Itinerary updated successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
