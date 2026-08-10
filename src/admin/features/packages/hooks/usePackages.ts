import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  createPackage,
  deletePackage,
  getPackage,
  getPackages,
  updatePackage,
} from "../api/packages.api";

import type {
  CreatePackageDto,
  UpdatePackageDto,
} from "../types/package.types";

const QUERY_KEY = ["packages"];

export function usePackages() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: getPackages,
  });
}

export function usePackage(id?: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => getPackage(id!),
    enabled: !!id,
  });
}

export function useCreatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePackageDto) => createPackage(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      toast.success("Package created successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useUpdatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePackageDto) => updatePackage(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      toast.success("Package updated successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useDeletePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePackage(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      toast.success("Package deleted successfully.");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
