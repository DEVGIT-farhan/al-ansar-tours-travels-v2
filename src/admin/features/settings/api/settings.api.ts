import { supabase } from "@/lib/supabase/client";

import type {
  Settings,
  UpdateSettingsDto,
} from "../types/settings.types";

const TABLE_NAME = "settings";

export async function getSettings(): Promise<Settings | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateSettings(
  settings: UpdateSettingsDto
): Promise<Settings> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .upsert(settings)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}