// src/admin/features/packages/schema/package.schema.ts

import { z } from "zod";

export const packageSchema = z.object({
  category_id: z.string().uuid().nullable(),

  title: z
    .string()
    .trim()
    .min(2, "Title must be at least 2 characters")
    .max(200),

  slug: z.string().trim().min(2, "Slug is required").max(200),

  short_description: z.string().trim().nullable().optional(),

  description: z.string().trim().nullable().optional(),

  duration: z.string().trim().nullable().optional(),

  destination: z.string().trim().nullable().optional(),

  price: z
    .number({
      error: "Price must be a number",
    })
    .min(0, "Price cannot be negative")
    .nullable(),

  currency: z.string().trim().min(1, "Currency is required"),

  cover_image: z.string().trim().nullable().optional(),

  featured: z.boolean(),

  active: z.boolean(),

  seo_title: z.string().trim().nullable().optional(),

  seo_description: z.string().trim().nullable().optional(),

  seo_keywords: z.string().trim().nullable().optional(),
});

export type PackageFormValues = z.infer<typeof packageSchema>;
