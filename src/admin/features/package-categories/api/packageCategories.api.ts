import { supabase } from "@/lib/supabase/client";

import type {
  PackageCategory,
  CreatePackageCategoryDto,
  UpdatePackageCategoryDto,
} from "../types/packageCategory.types";

const TABLE = "package_categories";

export async function getPackageCategories(): Promise<
  PackageCategory[]
> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("sort_order", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getPackageCategory(
  id: string
): Promise<PackageCategory> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createPackageCategory(
  values: CreatePackageCategoryDto
): Promise<PackageCategory> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(values)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updatePackageCategory(
  values: UpdatePackageCategoryDto
): Promise<PackageCategory> {
  const { data, error } = await supabase
    .from(TABLE)
    .update(values)
    .eq("id", values.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deletePackageCategory(
  id: string
) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}