import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Upload, Loader2, Image as ImageIcon, Trash2 } from "lucide-react";

import { uploadFile } from "@/lib/supabase/storage";

interface ImageUploadProps {
  label: string;
  folder: string;
  bucket?: string;
  value?: string;
  onChange(url: string): void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function ImageUpload({
  label,
  folder,
  bucket = "package-images",
  value,
  onChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Image size must be less than 5 MB.");
      return;
    }

    try {
      setUploading(true);

      const url = await uploadFile({
        bucket,
        folder,
        file,
      });

      onChange(url);

      toast.success("Image uploaded successfully.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to upload image.",
      );
    } finally {
      setUploading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    void handleFile(file);

    e.target.value = "";
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    if (uploading) return;

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    void handleFile(file);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition hover:border-blue-500 hover:bg-blue-50"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleInputChange}
        />

        {uploading ? (
          <>
            <Loader2 className="mb-3 h-8 w-8 animate-spin text-blue-600" />

            <p className="font-medium">Uploading...</p>
          </>
        ) : (
          <>
            <Upload className="mb-3 h-8 w-8 text-slate-500" />

            <p className="font-medium">Click or drag an image here</p>

            <p className="mt-1 text-sm text-slate-500">
              PNG, JPG, JPEG, WEBP (Max 5 MB)
            </p>
          </>
        )}
      </div>

      {value && (
        <div className="overflow-hidden rounded-xl border bg-white">
          <img src={value} alt={label} className="h-64 w-full object-cover" />

          <div className="flex items-center justify-between border-t p-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ImageIcon size={18} />
              Image uploaded successfully
            </div>

            <button
              type="button"
              onClick={() => onChange("")}
              className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-red-600 transition hover:bg-red-50"
            >
              <Trash2 size={16} />
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
