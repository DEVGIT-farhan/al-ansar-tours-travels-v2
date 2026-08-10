import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { setPackageCoverImage } from "../api/packageImages.api";

interface SetPackageCoverImageDto {
  packageId: string;
  imageUrl: string;
}

const PACKAGES_QUERY_KEY = ["packages"];

export function useSetPackageCoverImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ packageId, imageUrl }: SetPackageCoverImageDto) =>
      setPackageCoverImage(packageId, imageUrl),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: PACKAGES_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: [...PACKAGES_QUERY_KEY, variables.packageId],
        }),
      ]);

      toast.success("Cover image updated successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
