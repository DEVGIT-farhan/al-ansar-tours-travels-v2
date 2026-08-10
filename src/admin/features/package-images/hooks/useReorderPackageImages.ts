import { useMutation, useQueryClient } from "@tanstack/react-query";

import { reorderPackageImages } from "../api/packageImages.api";

import type { PackageImage } from "@/shared/types/packageImage.types";

export function useReorderPackageImages(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reorderPackageImages,

    onMutate: async (payload) => {
      await queryClient.cancelQueries({
        queryKey: ["package-images", packageId],
      });

      const previousImages = queryClient.getQueryData<PackageImage[]>([
        "package-images",
        packageId,
      ]);

      if (!previousImages) {
        return { previousImages: [] };
      }

      const sortOrderMap = new Map(
        payload.map((item) => [item.id, item.sort_order]),
      );

      const updatedImages = previousImages
        .map((image) => ({
          ...image,
          sort_order: sortOrderMap.get(image.id) ?? image.sort_order,
        }))
        .sort((a, b) => a.sort_order - b.sort_order);

      queryClient.setQueryData(["package-images", packageId], updatedImages);

      return { previousImages };
    },

    onError: (_error, _payload, context) => {
      if (context?.previousImages) {
        queryClient.setQueryData(
          ["package-images", packageId],
          context.previousImages,
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["package-images", packageId],
      });
    },
  });
}
