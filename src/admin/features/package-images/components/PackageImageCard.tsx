import { useState } from "react";

import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import { GripVertical, Star } from "lucide-react";

import Button from "@/shared/components/Button";

import type { PackageImage } from "@/shared/types/packageImage.types";

interface PackageImageCardProps {
  image: PackageImage;

  isCover: boolean;

  deleting?: boolean;

  settingCover?: boolean;

  dragAttributes?: DraggableAttributes;

  dragListeners?: SyntheticListenerMap;

  onDelete: (image: PackageImage) => void;

  onAltTextChange: (id: string, altText: string) => void;

  onSetCover: (image: PackageImage) => void;
}

export default function PackageImageCard({
  image,
  isCover,
  deleting = false,
  settingCover = false,
  dragAttributes,
  dragListeners,
  onDelete,
  onAltTextChange,
  onSetCover,
}: PackageImageCardProps) {
  const [altText, setAltText] = useState(image.alt_text ?? "");

  function handleBlur() {
    if (altText !== (image.alt_text ?? "")) {
      onAltTextChange(image.id, altText);
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="relative">
        {isCover && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
            <Star size={14} fill="currentColor" />
            Cover
          </div>
        )}

        <div className="flex items-center justify-end border-b bg-gray-50 px-3 py-2">
          <button
            type="button"
            className="cursor-grab rounded-md p-2 text-gray-500 transition hover:bg-gray-200 active:cursor-grabbing"
            {...dragAttributes}
            {...dragListeners}
          >
            <GripVertical size={18} />
          </button>
        </div>

        <div className="aspect-square overflow-hidden">
          <img
            src={image.image_url}
            alt={altText || "Package image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <input
          type="text"
          value={altText}
          placeholder="Alt text"
          className="w-full rounded-md border px-3 py-2 text-sm"
          onChange={(event) => setAltText(event.target.value)}
          onBlur={handleBlur}
        />

        {isCover ? (
          <Button type="button" disabled>
            Cover Image
          </Button>
        ) : (
          <Button
            type="button"
            disabled={settingCover}
            onClick={() => onSetCover(image)}
          >
            {settingCover ? "Setting..." : "Set as Cover"}
          </Button>
        )}

        {!isCover && (
          <Button
            type="button"
            disabled={deleting}
            onClick={() => onDelete(image)}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
