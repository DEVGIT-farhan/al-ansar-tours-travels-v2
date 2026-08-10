import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePackageExclusionsBatch } from "../api/packageExclusions.api";

import type {
  PackageExclusion,
  UpdatePackageExclusionsBatchDto,
} from "../../../../shared/types/packageExclusions.types";

export function useUpdatePackageExclusionsBatch(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageExclusionsBatchDto[]) =>
      updatePackageExclusionsBatch(values),

    onSuccess: (updatedItems) => {
      queryClient.setQueryData<PackageExclusion[]>(
        ["package-exclusions", packageId],
        () => updatedItems,
      );
    },
  });
}
