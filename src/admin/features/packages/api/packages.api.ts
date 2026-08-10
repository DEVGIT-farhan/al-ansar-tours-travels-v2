import { supabase } from "@/lib/supabase/client";

import type {
  CreatePackageDto,
  TravelPackage,
  TravelPackageWithCategory,
  UpdatePackageDto,
} from "../types/package.types";

const TABLE_NAME = "packages";

export async function getPackages(): Promise<TravelPackageWithCategory[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      *,
      category:package_categories(
        id,
        name,
        slug
      ),
      images:package_images(
        *
      )
    `,
    )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const packages = (data ?? []) as TravelPackageWithCategory[];

  packages.forEach((travelPackage) => {
    travelPackage.images ??= [];

    travelPackage.images.sort((a, b) => a.sort_order - b.sort_order);
  });

  return packages;
}

export async function getPackage(
  id: string,
): Promise<TravelPackageWithCategory> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      *,
      category:package_categories(
        id,
        name,
        slug
      ),
      images:package_images(
        *
      )
    `,
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Package not found.");
  }

  const travelPackage = data as TravelPackageWithCategory;

  travelPackage.images ??= [];

  travelPackage.images.sort((a, b) => a.sort_order - b.sort_order);

  return travelPackage;
}

export async function createPackage(
  payload: CreatePackageDto,
): Promise<TravelPackage> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as TravelPackage;
}

export async function updatePackage(
  payload: UpdatePackageDto,
): Promise<TravelPackage> {
  const { id, ...updates } = payload;

  const { error: updateError } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq("id", id);

  if (updateError) {
    throw new Error(updateError.message);
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error(
      "Package updated successfully, but could not reload the package.",
    );
  }

  return data as TravelPackage;
}

export async function deletePackage(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
