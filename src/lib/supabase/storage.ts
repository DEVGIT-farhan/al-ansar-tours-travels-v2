import { supabase } from "./client";

export interface UploadFileOptions {
  bucket: string;
  folder: string;
  file: File;
}

export async function uploadFile({
  bucket,
  folder,
  file,
}: UploadFileOptions): Promise<string> {
  const extension = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return publicUrl;
}

export async function deleteFile(
  bucket: string,
  path: string
) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    throw error;
  }
}

export function getPublicUrl(
  bucket: string,
  path: string
) {
  return supabase.storage
    .from(bucket)
    .getPublicUrl(path).data.publicUrl;
}