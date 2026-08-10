import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePackageImage } from "../api/packageImages.api";

import type { PackageImage } from "@/shared/types/packageImage.types";

export function useDeletePackageImage(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (image: PackageImage) => {
      return deletePackageImage(image);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["package-images", packageId],
      });
    },
  });
}
