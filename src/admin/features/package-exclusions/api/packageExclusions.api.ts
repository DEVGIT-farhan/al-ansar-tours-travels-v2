import { supabase } from "@/lib/supabase/client";

import type {
  CreatePackageExclusionDto,
  PackageExclusion,
  UpdatePackageExclusionsBatchDto,
} from "../../../../shared/types/packageExclusions.types";

export async function getPackageExclusions(
  packageId: string,
): Promise<PackageExclusion[]> {
  const { data, error } = await supabase
    .from("package_exclusions")
    .select("*")
    .eq("package_id", packageId)
    .order("id", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return (data ?? []) satisfies PackageExclusion[];
}

export async function createPackageExclusion(
  values: CreatePackageExclusionDto,
): Promise<PackageExclusion> {
  const { data, error } = await supabase
    .from("package_exclusions")
    .insert(values)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data satisfies PackageExclusion;
}

export async function updatePackageExclusion(
  id: string,
  description: string,
): Promise<PackageExclusion> {
  const { data, error } = await supabase
    .from("package_exclusions")
    .update({
      description,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data satisfies PackageExclusion;
}

export async function deletePackageExclusion(id: string): Promise<void> {
  const { error } = await supabase
    .from("package_exclusions")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function updatePackageExclusionsBatch(
  values: UpdatePackageExclusionsBatchDto[],
): Promise<PackageExclusion[]> {
  const updated: PackageExclusion[] = [];

  for (const item of values) {
    updated.push(await updatePackageExclusion(item.id, item.description));
  }

  return updated;
}
