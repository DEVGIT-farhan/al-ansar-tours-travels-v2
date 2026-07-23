import { supabase } from "@/lib/supabase";
import type { Settings } from "../types/settings.types";

export async function getSettings(): Promise<Settings | null> {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateSettings(
  values: Partial<Settings>
): Promise<Settings> {
  const { data, error } = await supabase
    .from("settings")
    .update(values)
    .eq("id", values.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}