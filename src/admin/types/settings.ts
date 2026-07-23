export interface Settings {
  id: string;

  company_name: string;
  tagline: string;

  email: string;
  phone: string;
  whatsapp: string;

  address: string;
  google_maps_url: string;

  logo_url: string | null;
  favicon_url: string | null;

  facebook_url: string | null;
  instagram_url: string | null;
  youtube_url: string | null;
  twitter_url: string | null;

  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;

  created_at: string;
  updated_at: string;
}