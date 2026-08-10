import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePackageInclusion } from "../api/packageInclusions.api";

import type { PackageInclusion } from "../../../../shared/types/packageInclusions.types";

export function useDeletePackageInclusion(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePackageInclusion,

    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<PackageInclusion[]>(
        ["package-inclusions", packageId],
        (previous = []) => previous.filter((item) => item.id !== deletedId),
      );
    },
  });
}
