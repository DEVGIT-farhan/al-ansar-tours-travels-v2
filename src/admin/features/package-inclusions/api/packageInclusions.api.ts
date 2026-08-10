import { supabase } from "@/lib/supabase/client";

import type {
  CreatePackageInclusionDto,
  PackageInclusion,
  UpdatePackageInclusionBatchDto,
} from "../../../../shared/types/packageInclusions.types";

export async function getPackageInclusions(
  packageId: string,
): Promise<PackageInclusion[]> {
  const { data, error } = await supabase
    .from("package_inclusions")
    .select("*")
    .eq("package_id", packageId)
    .order("id", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return (data ?? []) satisfies PackageInclusion[];
}

export async function createPackageInclusion(
  values: CreatePackageInclusionDto,
): Promise<PackageInclusion> {
  const { data, error } = await supabase
    .from("package_inclusions")
    .insert(values)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data satisfies PackageInclusion;
}

export async function updatePackageInclusion(
  id: string,
  description: string,
): Promise<PackageInclusion> {
  const { data, error } = await supabase
    .from("package_inclusions")
    .update({
      description,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data satisfies PackageInclusion;
}

export async function deletePackageInclusion(id: string): Promise<void> {
  const { error } = await supabase
    .from("package_inclusions")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function updatePackageInclusionsBatch(
  values: UpdatePackageInclusionBatchDto[],
): Promise<PackageInclusion[]> {
  const updated: PackageInclusion[] = [];

  for (const item of values) {
    updated.push(await updatePackageInclusion(item.id, item.description));
  }

  return updated;
}
