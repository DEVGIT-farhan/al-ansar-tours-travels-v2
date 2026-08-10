import { supabase } from "./client";

export interface UploadFileOptions {
  bucket: string;
  folder: string;
  file: File;
  fileName?: string;
  upsert?: boolean;
}

export interface DeleteFileOptions {
  bucket: string;
  path: string;
}

export async function uploadFile({
  bucket,
  folder,
  file,
  fileName,
  upsert = false,
}: UploadFileOptions): Promise<string> {
  const extension = file.name.split(".").pop();

  const finalFileName = fileName ?? `${crypto.randomUUID()}.${extension}`;

  const filePath = `${folder}/${finalFileName}`;

  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: "3600",
    upsert,
  });

  if (error) {
    throw error;
  }

  return getPublicUrl(bucket, filePath);
}

export async function deleteFile({
  bucket,
  path,
}: DeleteFileOptions): Promise<void> {
  const { error } = await supabase.storage.from(bucket).remove([path]);

  if (error) {
    throw error;
  }
}

export function getPublicUrl(bucket: string, path: string): string {
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

export function getStoragePathFromPublicUrl(
  publicUrl: string,
  bucket: string,
): string {
  const marker = `/storage/v1/object/public/${bucket}/`;

  const index = publicUrl.indexOf(marker);

  if (index === -1) {
    throw new Error("Invalid Supabase Storage public URL.");
  }

  return decodeURIComponent(publicUrl.substring(index + marker.length));
}
