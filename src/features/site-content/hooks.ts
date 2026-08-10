import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getSiteContent, updateSiteContent } from "./api";
import { defaultSiteContent } from "./defaults";
import type { SiteContent } from "./defaults";

export const SITE_CONTENT_QUERY_KEY = ["site-content"];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeContent<T>(fallback: T, override: unknown): T {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(override)) {
      return fallback;
    }

    return override.map((item, index) => {
      const itemFallback = fallback[index] ?? fallback[0];

      return itemFallback === undefined
        ? item
        : mergeContent(itemFallback, item);
    }) as T;
  }

  if (isRecord(fallback)) {
    if (!isRecord(override)) {
      return fallback;
    }

    return Object.fromEntries(
      Object.entries(fallback).map(([key, value]) => [
        key,
        mergeContent(value, override[key]),
      ]),
    ) as T;
  }

  return (override ?? fallback) as T;
}

export function useSiteContent() {
  const query = useQuery({
    queryKey: SITE_CONTENT_QUERY_KEY,
    queryFn: getSiteContent,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const content = useMemo(
    () => mergeContent(defaultSiteContent, query.data ?? {}),
    [query.data],
  );

  return {
    ...query,
    content,
  };
}

export function useUpdateSiteContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: SiteContent) => updateSiteContent(content),
    onSuccess: (content) => {
      queryClient.setQueryData(SITE_CONTENT_QUERY_KEY, content);
      toast.success("Website content published successfully.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
