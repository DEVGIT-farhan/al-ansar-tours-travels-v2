import { createContext } from "react";
import type { Settings } from "@/admin/features/settings/types/settings.types";

export interface WebsiteSettingsContextValue {
  settings: Settings | null;
  loading: boolean;
}

export const WebsiteSettingsContext =
  createContext<WebsiteSettingsContextValue | null>(null);