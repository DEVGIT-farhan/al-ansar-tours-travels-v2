import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  createPackageCategory,
  deletePackageCategory,
  getPackageCategories,
  getPackageCategory,
  updatePackageCategory,
} from "../api/packageCategories.api";

import type { PackageCategory } from "@/shared/types/packageCategory.types";

import type {
  CreatePackageCategoryDto,
  UpdatePackageCategoryDto,
} from "../types/packageCategory.types";

const QUERY_KEY = ["package-categories"];

export function usePackageCategories() {
  return useQuery<PackageCategory[]>({
    queryKey: QUERY_KEY,
    queryFn: getPackageCategories,
  });
}

export function usePackageCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => getPackageCategory(id),
    enabled: !!id,
  });
}

export function useCreatePackageCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreatePackageCategoryDto) =>
      createPackageCategory(values),

    onSuccess: () => {
      toast.success("Category created.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useUpdatePackageCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageCategoryDto) =>
      updatePackageCategory(values),

    onSuccess: () => {
      toast.success("Category updated.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useDeletePackageCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePackageCategory,

    onSuccess: () => {
      toast.success("Category deleted.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
