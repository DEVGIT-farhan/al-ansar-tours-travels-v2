import { useEffect } from "react";
import {
  Controller,
  type Control,
  type UseFormSetValue,
  type UseFormWatch,
} from "react-hook-form";

import TextInput from "@/admin/components/forms/TextInput";
import TextArea from "@/admin/components/forms/TextArea";
import SelectField from "@/admin/components/forms/SelectField";
import SectionCard from "@/admin/components/forms/SectionCard";

import type { PackageFormValues } from "../validation/package.schema";
import type { PackageCategory } from "@/shared/types/packageCategory.types";

interface BasicInfoSectionProps {
  control: Control<PackageFormValues>;
  watch: UseFormWatch<PackageFormValues>;
  setValue: UseFormSetValue<PackageFormValues>;
  categories: PackageCategory[];
  editing?: boolean;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BasicInfoSection({
  control,
  watch,
  setValue,
  categories,
  editing = false,
}: BasicInfoSectionProps) {
  const title = watch("title");

  useEffect(() => {
    if (editing) return;

    setValue("slug", slugify(title ?? ""), {
      shouldValidate: true,
    });
  }, [title, editing, setValue]);

  return (
    <SectionCard
      title="Basic Information"
      description="General package details."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <TextInput
              label="Package Title"
              placeholder="Dubai Premium Package"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="slug"
          render={({ field, fieldState }) => (
            <TextInput
              label="Slug"
              placeholder="dubai-premium-package"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="category_id"
          render={({ field, fieldState }) => (
            <SelectField
              label="Category"
              placeholder="Select category"
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={(e) =>
                field.onChange(e.target.value === "" ? null : e.target.value)
              }
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          )}
        />

        <Controller
          control={control}
          name="destination"
          render={({ field, fieldState }) => (
            <TextInput
              label="Destination"
              placeholder="Dubai"
              error={fieldState.error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
      </div>

      <div className="mt-6">
        <Controller
          control={control}
          name="short_description"
          render={({ field, fieldState }) => (
            <TextArea
              label="Short Description"
              rows={3}
              placeholder="Brief summary of the package..."
              error={fieldState.error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
      </div>

      <div className="mt-6">
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <TextArea
              label="Description"
              rows={8}
              placeholder="Detailed package description..."
              error={fieldState.error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
      </div>
    </SectionCard>
  );
}
