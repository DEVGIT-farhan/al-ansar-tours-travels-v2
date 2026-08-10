import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { createPackageItinerary } from "../api/packageItinerary.api";

import type { CreatePackageItineraryDto } from "../../../../shared/types/packageItinerary.types";

const QUERY_KEY = ["package-itinerary"];

export function useCreatePackageItinerary(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreatePackageItineraryDto) =>
      createPackageItinerary(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, packageId],
      });

      toast.success("Day added successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
