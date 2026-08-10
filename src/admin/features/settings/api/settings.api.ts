import { supabase } from "@/lib/supabase/client";

import type { Settings, UpdateSettingsDto } from "../types/settings.types";
import type { SettingsFormValues } from "../validation/settings.schema";

const TABLE_NAME = "settings";

/**
 * Fetch website settings (singleton record)
 */
export async function getSettings(): Promise<Settings | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: true })
    .limit(1);

  if (error) {
    throw error;
  }

  return data.length > 0 ? data[0] : null;
}

/**
 * Update website settings
 */
export async function updateSettings(
  settings: UpdateSettingsDto,
): Promise<Settings> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({
      company_name: settings.company_name,
      tagline: settings.tagline,

      logo_url: settings.logo_url,
      favicon_url: settings.favicon_url,

      email: settings.email,
      phone: settings.phone,
      whatsapp: settings.whatsapp,
      address: settings.address,
      google_maps_url: settings.google_maps_url,

      facebook_url: settings.facebook_url,
      instagram_url: settings.instagram_url,
      youtube_url: settings.youtube_url,
      twitter_url: settings.twitter_url,
      linkedin_url: settings.linkedin_url,

      seo_title: settings.seo_title,
      seo_description: settings.seo_description,
      seo_keywords: settings.seo_keywords,

      monday_hours: settings.monday_hours,
      tuesday_hours: settings.tuesday_hours,
      wednesday_hours: settings.wednesday_hours,
      thursday_hours: settings.thursday_hours,
      friday_hours: settings.friday_hours,
      saturday_hours: settings.saturday_hours,
      sunday_hours: settings.sunday_hours,

      updated_at: new Date().toISOString(),
    })
    .eq("id", settings.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createSettings(
  values: SettingsFormValues,
): Promise<Settings> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert({
      ...values,
      linkedin_url: values.linkedin_url || null,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
