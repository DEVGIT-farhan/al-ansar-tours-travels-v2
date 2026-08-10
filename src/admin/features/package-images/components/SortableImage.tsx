import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import PackageImageCard from "./PackageImageCard";

import type { PackageImage } from "@/shared/types/packageImage.types";

interface SortableImageProps {
  image: PackageImage;

  deleting?: boolean;

  isCover: boolean;

  settingCover?: boolean;

  onDelete: (image: PackageImage) => void;

  onAltTextChange: (id: string, altText: string) => void;

  onSetCover: (image: PackageImage) => void;
}

export default function SortableImage({
  image,
  deleting = false,
  isCover,
  settingCover = false,
  onDelete,
  onAltTextChange,
  onSetCover,
}: SortableImageProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: image.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <PackageImageCard
        image={image}
        deleting={deleting}
        isCover={isCover}
        settingCover={settingCover}
        onDelete={onDelete}
        onAltTextChange={onAltTextChange}
        onSetCover={onSetCover}
        dragAttributes={attributes}
        dragListeners={listeners}
      />
    </div>
  );
}
