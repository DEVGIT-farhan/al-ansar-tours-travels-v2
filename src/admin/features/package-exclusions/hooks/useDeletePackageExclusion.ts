import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePackageExclusion } from "../api/packageExclusions.api";

import type { PackageExclusion } from "../../../../shared/types/packageExclusions.types";

export function useDeletePackageExclusion(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePackageExclusion,

    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<PackageExclusion[]>(
        ["package-exclusions", packageId],
        (previous = []) => previous.filter((item) => item.id !== deletedId),
      );
    },
  });
}
