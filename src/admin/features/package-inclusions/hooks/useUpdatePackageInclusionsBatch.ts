import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePackageInclusionsBatch } from "../api/packageInclusions.api";

import type {
  PackageInclusion,
  UpdatePackageInclusionBatchDto,
} from "../../../../shared/types/packageInclusions.types";

export function useUpdatePackageInclusionsBatch(packageId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageInclusionBatchDto[]) =>
      updatePackageInclusionsBatch(values),

    onSuccess: (updatedItems) => {
      queryClient.setQueryData<PackageInclusion[]>(
        ["package-inclusions", packageId],
        () => updatedItems,
      );
    },
  });
}
