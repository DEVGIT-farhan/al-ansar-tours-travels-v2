import { supabase } from "@/lib/supabase/client";
import {
  getStoragePathFromPublicUrl,
  uploadFile,
} from "@/lib/supabase/storage";

import type {
  PackageImage,
  CreatePackageImageDto,
  ReorderPackageImagesDto,
} from "@/shared/types/packageImage.types";

const TABLE = "package_images";
const BUCKET = "package-images";

export async function getPackageImages(
  packageId: string,
): Promise<PackageImage[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("package_id", packageId)
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data as PackageImage[];
}

export async function uploadPackageImage(
  packageId: string,
  file: File,
): Promise<PackageImage> {
  const imageUrl = await uploadFile({
    bucket: BUCKET,
    folder: `packages/${packageId}`,
    file,
  });
  const { data: lastImage, error: lastImageError } = await supabase
    .from(TABLE)
    .select("sort_order")
    .eq("package_id", packageId)
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (lastImageError) throw lastImageError;

  const payload: CreatePackageImageDto = {
    package_id: packageId,
    image_url: imageUrl,
    alt_text: null,
    sort_order: (lastImage?.sort_order ?? -1) + 1,
  };
  const { data, error } = await supabase
    .from(TABLE)
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data as PackageImage;
}

export async function deletePackageImage(image: PackageImage): Promise<void> {
  const storagePath = getStoragePathFromPublicUrl(image.image_url, BUCKET);
  const { error: storageError } = await supabase.storage
    .from(BUCKET)
    .remove([storagePath]);

  if (storageError) throw storageError;

  const { error: databaseError } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", image.id);

  if (databaseError) throw databaseError;
}

export async function updatePackageImage(
  id: string,
  values: { alt_text?: string | null },
): Promise<void> {
  const { error } = await supabase.from(TABLE).update(values).eq("id", id);

  if (error) throw error;
}

export async function reorderPackageImages(
  images: ReorderPackageImagesDto[],
): Promise<void> {
  const results = await Promise.all(
    images.map((image) =>
      supabase
        .from(TABLE)
        .update({ sort_order: image.sort_order })
        .eq("id", image.id),
    ),
  );
  const failed = results.find((result) => result.error);

  if (failed?.error) throw failed.error;
}

export async function setPackageCoverImage(
  packageId: string,
  imageUrl: string,
): Promise<void> {
  const { error } = await supabase
    .from("packages")
    .update({ cover_image: imageUrl })
    .eq("id", packageId);

  if (error) throw error;
}
