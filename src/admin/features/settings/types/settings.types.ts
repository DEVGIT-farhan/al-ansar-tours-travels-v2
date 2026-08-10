export interface Settings {
  id: string;

  company_name: string;
  tagline: string | null;

  logo_url: string | null;
  favicon_url: string | null;

  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  address: string | null;
  google_maps_url: string | null;

  facebook_url: string | null;
  instagram_url: string | null;
  youtube_url: string | null;
  twitter_url: string | null;
  linkedin_url: string | null;

  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;

  monday_hours: string | null;
  tuesday_hours: string | null;
  wednesday_hours: string | null;
  thursday_hours: string | null;
  friday_hours: string | null;
  saturday_hours: string | null;
  sunday_hours: string | null;

  created_at: string;
  updated_at: string;
}

export type UpdateSettingsDto = Omit<Settings, "created_at" | "updated_at">;
