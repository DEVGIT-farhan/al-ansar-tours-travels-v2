import { z } from "zod";

export const settingsSchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters.")
    .max(100, "Company name cannot exceed 100 characters."),

  tagline: z.string().trim().max(150).optional().or(z.literal("")),

  logo_url: z.string().optional().or(z.literal("")),

  favicon_url: z.string().optional().or(z.literal("")),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),

  phone: z.string().trim().max(20).optional().or(z.literal("")),

  whatsapp: z.string().trim().max(20).optional().or(z.literal("")),

  address: z.string().trim().max(500).optional().or(z.literal("")),

  google_maps_url: z
    .string()
    .url("Please enter a valid Google Maps URL.")
    .optional()
    .or(z.literal("")),

  facebook_url: z
    .string()
    .url("Please enter a valid Facebook URL.")
    .optional()
    .or(z.literal("")),

  instagram_url: z
    .string()
    .url("Please enter a valid Instagram URL.")
    .optional()
    .or(z.literal("")),

  youtube_url: z
    .string()
    .url("Please enter a valid YouTube URL.")
    .optional()
    .or(z.literal("")),

  twitter_url: z
    .string()
    .url("Please enter a valid X / Twitter URL.")
    .optional()
    .or(z.literal("")),

  linkedin_url: z
    .string()
    .url("Please enter a valid LinkedIn URL.")
    .optional()
    .or(z.literal("")),

  seo_title: z.string().trim().max(70).optional().or(z.literal("")),

  seo_description: z.string().trim().max(160).optional().or(z.literal("")),

  seo_keywords: z.string().trim().max(255).optional().or(z.literal("")),

  monday_hours: z.string().optional().or(z.literal("")),

  tuesday_hours: z.string().optional().or(z.literal("")),

  wednesday_hours: z.string().optional().or(z.literal("")),

  thursday_hours: z.string().optional().or(z.literal("")),

  friday_hours: z.string().optional().or(z.literal("")),

  saturday_hours: z.string().optional().or(z.literal("")),

  sunday_hours: z.string().optional().or(z.literal("")),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
