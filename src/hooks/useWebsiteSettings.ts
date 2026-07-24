import { useQuery } from "@tanstack/react-query";

import { getSettings } from "@/admin/features/settings/api/settings.api";

import type { Settings } from "@/admin/features/settings/types/settings.types";

const WEBSITE_SETTINGS_QUERY_KEY = ["website-settings"];

export function useWebsiteSettings() {
  return useQuery<Settings | null, Error>({
    queryKey: WEBSITE_SETTINGS_QUERY_KEY,
    queryFn: getSettings,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    placeholderData: null,
    refetchOnWindowFocus: false,
  });
}