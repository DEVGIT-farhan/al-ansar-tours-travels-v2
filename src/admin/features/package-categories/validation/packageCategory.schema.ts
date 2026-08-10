import { z } from "zod";

export const packageCategorySchema = z.object({
  name: z.string().trim().min(2, "Category name is required"),

  slug: z.string().trim().min(2, "Slug is required"),

  icon: z.string().nullable().optional(),

  active: z.boolean(),

  sort_order: z.number().min(1, "Sort order must be at least 1"),
});

export type PackageCategoryFormValues = z.infer<typeof packageCategorySchema>;
