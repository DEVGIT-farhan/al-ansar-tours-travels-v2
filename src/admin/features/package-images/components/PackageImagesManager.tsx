import { useCallback, useState } from "react";

import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import SortableImage from "./SortableImage";
import UploadDropzone from "./UploadDropzone";

import { useDeletePackageImage } from "../hooks/useDeletePackageImage";
import { usePackageImages } from "../hooks/usePackageImages";
import { useReorderPackageImages } from "../hooks/useReorderPackageImages";
import { useSetPackageCoverImage } from "../hooks/useSetPackageCoverImage";
import { useUpdatePackageImage } from "../hooks/useUpdatePackageImage";
import { useUploadPackageImage } from "../hooks/useUploadPackageImage";

import { usePackage } from "@/admin/features/packages/hooks/usePackages";

import type {
  PackageImage,
  ReorderPackageImagesDto,
} from "@/shared/types/packageImage.types";

interface PackageImagesManagerProps {
  packageId: string;
}

export default function PackageImagesManager({
  packageId,
}: PackageImagesManagerProps) {
  const { data: fetchedImages = [], isLoading } = usePackageImages(packageId);

  const { data: travelPackage } = usePackage(packageId);

  const [dragImages, setDragImages] = useState<PackageImage[] | null>(null);

  const images = dragImages ?? fetchedImages;

  const uploadMutation = useUploadPackageImage(packageId);

  const deleteMutation = useDeletePackageImage(packageId);

  const updateMutation = useUpdatePackageImage(packageId);

  const reorderMutation = useReorderPackageImages(packageId);

  const setCoverMutation = useSetPackageCoverImage();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleFilesSelected = useCallback(
    async (files: File[]) => {
      await Promise.all(files.map((file) => uploadMutation.mutateAsync(file)));
    },
    [uploadMutation],
  );

  const handleDelete = useCallback(
    async (image: PackageImage) => {
      if (!window.confirm("Delete this image?")) {
        return;
      }

      await deleteMutation.mutateAsync(image);
    },
    [deleteMutation],
  );

  const handleAltTextChange = useCallback(
    async (id: string, altText: string) => {
      await updateMutation.mutateAsync({
        id,
        alt_text: altText || null,
      });
    },
    [updateMutation],
  );

  const handleSetCover = useCallback(
    async (image: PackageImage) => {
      await setCoverMutation.mutateAsync({
        packageId,
        imageUrl: image.image_url,
      });
    },
    [packageId, setCoverMutation],
  );

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || active.id === over.id) {
        setDragImages(null);
        return;
      }

      const oldIndex = images.findIndex((image) => image.id === active.id);

      const newIndex = images.findIndex((image) => image.id === over.id);

      if (oldIndex === -1 || newIndex === -1) {
        setDragImages(null);
        return;
      }

      const reordered = arrayMove(images, oldIndex, newIndex);

      setDragImages(reordered);

      const payload: ReorderPackageImagesDto[] = reordered.map(
        (image, index) => ({
          id: image.id,
          sort_order: index,
        }),
      );

      try {
        await reorderMutation.mutateAsync(payload);

        setDragImages(null);
      } catch {
        setDragImages(null);
      }
    },
    [images, reorderMutation],
  );

  return (
    <div className="space-y-6">
      <UploadDropzone
        disabled={uploadMutation.isPending}
        onFilesSelected={handleFilesSelected}
      />

      {isLoading && (
        <div className="py-10 text-center text-gray-500">
          Loading gallery...
        </div>
      )}

      {!isLoading && images.length === 0 && (
        <div className="rounded-lg border border-dashed py-12 text-center text-gray-500">
          No gallery images uploaded.
        </div>
      )}

      {!isLoading && images.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images.map((image) => image.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((image) => (
                <SortableImage
                  key={image.id}
                  image={image}
                  deleting={deleteMutation.isPending}
                  isCover={travelPackage?.cover_image === image.image_url}
                  settingCover={setCoverMutation.isPending}
                  onDelete={handleDelete}
                  onAltTextChange={handleAltTextChange}
                  onSetCover={handleSetCover}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
