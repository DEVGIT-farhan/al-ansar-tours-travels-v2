import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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
  TravelPackage,
} from "../types/package.types";

const QUERY_KEY = ["packages"];

export function usePackages() {
  return useQuery<TravelPackage[]>({
    queryKey: QUERY_KEY,
    queryFn: getPackages,
  });
}

export function usePackage(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => getPackage(id),
    enabled: !!id,
  });
}

export function useCreatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreatePackageDto) =>
      createPackage(values),

    onSuccess: () => {
      toast.success("Package created.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useUpdatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdatePackageDto) =>
      updatePackage(values),

    onSuccess: () => {
      toast.success("Package updated.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useDeletePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePackage,

    onSuccess: () => {
      toast.success("Package deleted.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}