import { z } from "zod";

export const settingsSchema = z.object({
  company_name: z.string().min(2, "Company name is required"),

  tagline: z.string().optional(),

  email: z.email("Invalid email").optional().or(z.literal("")),

  phone: z.string().optional(),

  whatsapp: z.string().optional(),

  address: z.string().optional(),

  google_maps_url: z.string().optional(),

  facebook_url: z.string().optional(),

  instagram_url: z.string().optional(),

  youtube_url: z.string().optional(),

  twitter_url: z.string().optional(),

  seo_title: z.string().optional(),

  seo_description: z.string().optional(),

  seo_keywords: z.string().optional(),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;