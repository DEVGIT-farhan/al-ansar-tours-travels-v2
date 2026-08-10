import { supabase } from "@/lib/supabase/client";

import type {
  CreatePackageItineraryDto,
  PackageItinerary,
  ReorderPackageItineraryDto,
  UpdatePackageItineraryBatchDto,
  UpdatePackageItineraryDto,
} from "../../../../shared/types/packageItinerary.types";

const TABLE = "package_itinerary";

export async function getPackageItinerary(
  packageId: string,
): Promise<PackageItinerary[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("package_id", packageId)
    .order("day_number", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data as PackageItinerary[];
}

export async function createPackageItinerary(
  values: CreatePackageItineraryDto,
): Promise<PackageItinerary> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(values)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as PackageItinerary;
}

export async function updatePackageItinerary(
  values: UpdatePackageItineraryDto,
): Promise<void> {
  const { id, ...payload } = values;

  const { error } = await supabase.from(TABLE).update(payload).eq("id", id);

  if (error) {
    throw error;
  }
}

export async function deletePackageItinerary(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);

  if (error) {
    throw error;
  }
}

export async function reorderPackageItinerary(
  items: ReorderPackageItineraryDto[],
): Promise<void> {
  const results = await Promise.all(
    items.map((item) =>
      supabase
        .from(TABLE)
        .update({
          day_number: item.day_number,
        })
        .eq("id", item.id),
    ),
  );

  const failed = results.find((result) => result.error);

  if (failed?.error) {
    throw failed.error;
  }
}

export async function updatePackageItineraryBatch(
  items: UpdatePackageItineraryBatchDto[],
): Promise<void> {
  const results = await Promise.all(
    items.map((item) =>
      supabase
        .from(TABLE)
        .update({
          day_number: item.day_number,
          title: item.title,
          description: item.description,
        })
        .eq("id", item.id),
    ),
  );

  const failed = results.find((result) => result.error);

  if (failed?.error) {
    throw failed.error;
  }
}
