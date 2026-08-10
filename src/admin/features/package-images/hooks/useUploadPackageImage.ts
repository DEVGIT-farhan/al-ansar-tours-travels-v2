import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadPackageImage } from "../api/packageImages.api";

export function useUploadPackageImage(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadPackageImage(packageId, file),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["package-images", packageId],
      });
    },
  });
}
