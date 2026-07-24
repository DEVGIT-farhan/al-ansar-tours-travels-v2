import { useRef, useState } from "react";
import toast from "react-hot-toast";

import { uploadFile } from "@/lib/supabase/storage";

interface ImageUploadProps {
  label: string;
  folder: string;
  value?: string;
  onChange(url: string): void;
}

export default function ImageUpload({
  label,
  folder,
  value,
  onChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const url = await uploadFile(
        "branding",
        folder,
        file
      );

      onChange(url);

      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        {label}
      </label>

      {value && (
        <img
          src={value}
          alt={label}
          className="h-32 rounded-lg border object-contain"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="rounded-lg border px-5 py-3"
      >
        {uploading
          ? "Uploading..."
          : value
          ? "Replace Image"
          : "Upload Image"}
      </button>
    </div>
  );
}