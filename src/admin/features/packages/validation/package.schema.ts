import { z } from "zod";

export const packageSchema = z.object({
  category_id: z.string().nullable(),

  title: z.string().min(3),

  slug: z.string().min(3),

  short_description: z.string().nullable(),

  description: z.string().nullable(),

  duration: z.string().nullable(),

  destination: z.string().nullable(),

  price: z.number().nullable(),

  currency: z.string().nullable(),

  cover_image: z.string().nullable(),

  itinerary: z.array(
    z.object({
      day: z.number(),

      title: z.string(),

      description: z.string(),
    })
  ),

  inclusions: z.array(z.string()),

  exclusions: z.array(z.string()),

  featured: z.boolean(),

  active: z.boolean(),

  seo_title: z.string().nullable(),

  seo_description: z.string().nullable(),

  seo_keywords: z.string().nullable(),
});

export type PackageFormValues =
  z.infer<typeof packageSchema>;