import type { ReactNode } from "react";

import { WebsiteSettingsContext } from "./WebsiteSettingsContext";
import { useWebsiteSettings } from "@/hooks/useWebsiteSettings";

interface Props {
  children: ReactNode;
}

export function WebsiteSettingsProvider({
  children,
}: Props) {
  const { data, isLoading } = useWebsiteSettings();

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