import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  createSettings,
  getSettings,
  updateSettings,
} from "../api/settings.api";

import type { Settings, UpdateSettingsDto } from "../types/settings.types";

const SETTINGS_QUERY_KEY = ["settings"];

export function useSettings() {
  return useQuery<Settings | null>({
    queryKey: SETTINGS_QUERY_KEY,
    placeholderData: null,
    queryFn: getSettings,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdateSettingsDto) => updateSettings(values),

    onSuccess: () => {
      toast.success("Settings updated successfully.");

      queryClient.invalidateQueries({
        queryKey: SETTINGS_QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useCreateSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSettings,
    onSuccess: () => {
      toast.success("Settings created successfully.");

      queryClient.invalidateQueries({
        queryKey: SETTINGS_QUERY_KEY,
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
