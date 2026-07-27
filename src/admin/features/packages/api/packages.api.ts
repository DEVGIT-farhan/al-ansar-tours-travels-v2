import { supabase } from "@/lib/supabase/client";

import type {
  CreatePackageDto,
  TravelPackage,
  UpdatePackageDto,
} from "../types/package.types";

const TABLE = "packages";

export async function getPackages(): Promise<
  TravelPackage[]
> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data ?? [];
}

export async function getPackage(
  id: string
): Promise<TravelPackage> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createPackage(
  values: CreatePackageDto
): Promise<TravelPackage> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(values)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updatePackage(
  values: UpdatePackageDto
): Promise<TravelPackage> {
  const payload = {
  ...values,
  updated_at: new Date().toISOString(),
};

const { data, error } = await supabase
  .from(TABLE)
  .update(payload)
    .eq("id", values.id)
    .select()
    .single();

  if (error) {throw error;}

  return data;
}

export async function deletePackage(
  id: string
) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;
}