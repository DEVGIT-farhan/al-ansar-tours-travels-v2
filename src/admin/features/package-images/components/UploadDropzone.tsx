import { useRef, useState } from "react";

import Button from "@/shared/components/Button";
import { cn } from "@/lib/cn";

interface UploadDropzoneProps {
  disabled?: boolean;
  maxFiles?: number;
  onFilesSelected: (files: File[]) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

export default function UploadDropzone({
  disabled = false,
  maxFiles = 20,
  onFilesSelected,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  function validateFiles(files: File[]) {
    const validFiles = files.filter((file) =>
      ACCEPTED_TYPES.includes(file.type),
    );

    onFilesSelected(validFiles.slice(0, maxFiles));
  }

  function handleFiles(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    validateFiles(Array.from(fileList));
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);

    handleFiles(event.dataTransfer.files);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
  }

  return (
    <div
      className={cn(
        "rounded-xl border-2 border-dashed p-10 transition-all",
        isDragging ? "border-primary bg-primary/5" : "border-gray-300",
        disabled && "pointer-events-none opacity-60",
      )}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      <input
        ref={inputRef}
        hidden
        multiple
        accept="image/*"
        type="file"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-5xl">📷</div>

        <div>
          <h3 className="text-lg font-semibold">Upload Gallery Images</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Drag &amp; drop images here or choose files.
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            JPG, PNG or WebP • Maximum {maxFiles} images
          </p>
        </div>

        <Button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          Choose Images
        </Button>
      </div>
    </div>
  );
}
