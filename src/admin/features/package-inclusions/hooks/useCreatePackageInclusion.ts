import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPackageInclusion } from "../api/packageInclusions.api";

import type { CreatePackageInclusionDto } from "../../../../shared/types/packageInclusions.types";

export function useCreatePackageInclusion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreatePackageInclusionDto) =>
      createPackageInclusion(values),

    onSuccess: (created) => {
      queryClient.setQueryData(
        ["package-inclusions", created.package_id],
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
