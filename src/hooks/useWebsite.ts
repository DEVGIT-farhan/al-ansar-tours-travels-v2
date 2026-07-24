import { useContext } from "react";

import { WebsiteSettingsContext } from "@/context/WebsiteSettingsContext";

export function useWebsite() {
  const context = useContext(WebsiteSettingsContext);

  if (!context) {
    throw new Error(
      "useWebsite must be used within WebsiteSettingsProvider."
    );
  }

  return context;
}