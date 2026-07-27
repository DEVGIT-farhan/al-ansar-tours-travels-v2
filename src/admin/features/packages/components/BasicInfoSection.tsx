import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import TextInput from "@/admin/components/forms/TextInput";
import TextArea from "@/admin/components/forms/TextArea";
import SectionCard from "@/admin/components/forms/SectionCard";

import type {
  PackageFormValues,
} from "../validation/package.schema";

interface BasicInfoSectionProps {
  register: UseFormRegister<PackageFormValues>;
  errors: FieldErrors<PackageFormValues>;
}

export default function BasicInfoSection({
  register,
  errors,
}: BasicInfoSectionProps) {
  return (
    <SectionCard
      title="Basic Information"
      description="General package information."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TextInput
          label="Package Title"
          {...register("title")}
          error={errors.title?.message}
        />

        <TextInput
          label="Slug"
          {...register("slug")}
          error={errors.slug?.message}
        />

        <TextInput
          label="Destination"
          {...register("destination")}
          error={errors.destination?.message}
        />

        <TextInput
          label="Duration"
          placeholder="5 Days / 4 Nights"
          {...register("duration")}
          error={errors.duration?.message}
        />
      </div>

      <div className="mt-6">
        <TextArea
          label="Short Description"
          rows={3}
          {...register("short_description")}
          error={
            errors.short_description?.message
          }
        />
      </div>

      <div className="mt-6">
        <TextArea
          label="Description"
          rows={6}
          {...register("description")}
          error={errors.description?.message}
        />
      </div>
    </SectionCard>
  );
}