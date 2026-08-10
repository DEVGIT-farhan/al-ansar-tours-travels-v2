import { Controller, type Control } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import ImageUpload from "@/admin/components/forms/ImageUpload";

import type { PackageFormValues } from "../validation/package.schema";

interface ImagesSectionProps {
  control: Control<PackageFormValues>;
}

export default function ImagesSection({ control }: ImagesSectionProps) {
  return (
    <SectionCard
      title="Package Image"
      description="Upload the main cover image for this package."
    >
      <Controller
        control={control}
        name="cover_image"
        render={({ field }) => (
          <ImageUpload
            label="Cover Image"
            folder="packages"
            value={field.value ?? ""}
            onChange={field.onChange}
          />
        )}
      />
    </SectionCard>
  );
}
