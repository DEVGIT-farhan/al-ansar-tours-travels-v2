import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { deletePackageItinerary } from "../api/packageItinerary.api";

const QUERY_KEY = ["package-itinerary"];

export function useDeletePackageItinerary(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePackageItinerary(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, packageId],
      });

      toast.success("Day deleted successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
