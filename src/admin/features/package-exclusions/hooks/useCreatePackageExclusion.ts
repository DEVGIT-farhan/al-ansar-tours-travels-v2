import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPackageExclusion } from "../api/packageExclusions.api";

import type { CreatePackageExclusionDto } from "../../../../shared/types/packageExclusions.types";

export function useCreatePackageExclusion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreatePackageExclusionDto) =>
      createPackageExclusion(values),

    onSuccess: (created) => {
      queryClient.setQueryData(
        ["package-exclusions", created.package_id],
        (previous: (typeof created)[] | undefined) => {
          if (!previous) {
            return [created];
          }

          return [...previous, created];
        },
      );
    },
  });
}
