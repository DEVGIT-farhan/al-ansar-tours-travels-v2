import { z } from "zod";

export const packageCategorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name is required"),

  slug: z
    .string()
    .min(2, "Slug is required"),

  icon: z.string().nullable(),

  active: z.boolean(),

  sort_order: z.number(),
});

export type PackageCategoryFormValues =
  z.infer<typeof packageCategorySchema>;