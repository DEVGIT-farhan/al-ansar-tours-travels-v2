import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePackageImage } from "../api/packageImages.api";

export function useUpdatePackageImage(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, alt_text }: { id: string; alt_text: string | null }) =>
      updatePackageImage(id, {
        alt_text,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["package-images", packageId],
      });
    },
  });
}
