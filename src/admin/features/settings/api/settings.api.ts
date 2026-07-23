import { supabase } from "@/lib/supabase";
import type { Settings } from "../types/settings.types";

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return data;
}

export async function updateSettings(settings: Settings) {
  const { data, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", settings.id)
    .select()
    .single();

  if (error) throw error;

  return data;
}