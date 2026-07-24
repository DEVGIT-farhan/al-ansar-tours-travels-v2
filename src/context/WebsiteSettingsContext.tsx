import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { useWebsiteSettings } from "@/hooks/useWebsiteSettings";

import type { Settings } from "@/admin/features/settings/types/settings.types";

interface WebsiteSettingsContextValue {
  settings: Settings | null;
  loading: boolean;
}

const WebsiteSettingsContext =
  createContext<WebsiteSettingsContextValue | null>(
    null
  );

interface Props {
  children: ReactNode;
}

export function WebsiteSettingsProvider({
  children,
}: Props) {
  const {
    data,
    isLoading,
  } = useWebsiteSettings();

  return (
    <WebsiteSettingsContext.Provider
      value={{
        settings: data ?? null,
        loading: isLoading,
      }}
    >
      {children}
    </WebsiteSettingsContext.Provider>
  );
}

export function useWebsite() {
  const context = useContext(
    WebsiteSettingsContext
  );

  if (!context) {
    throw new Error(
      "useWebsite must be used inside WebsiteSettingsProvider."
    );
  }

  return context;
}