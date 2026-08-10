import { Controller, type Control } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextInput from "@/admin/components/forms/TextInput";
import TextArea from "@/admin/components/forms/TextArea";

import type { PackageFormValues } from "../validation/package.schema";

interface SeoSectionProps {
  control: Control<PackageFormValues>;
}

export default function SeoSection({ control }: SeoSectionProps) {
  return (
    <SectionCard
      title="SEO Settings"
      description="Optimize this package for search engines."
    >
      <div className="space-y-6">
        <Controller
          control={control}
          name="seo_title"
          render={({ field, fieldState }) => (
            <TextInput
              label="SEO Title"
              placeholder="Amazing Dubai Tour Package | AL ANSAR TOURS & TRAVELS"
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          )}
        />

        <Controller
          control={control}
          name="seo_description"
          render={({ field, fieldState }) => (
            <TextArea
              label="SEO Description"
              rows={4}
              placeholder="Write a concise description for search engines..."
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          )}
        />

        <Controller
          control={control}
          name="seo_keywords"
          render={({ field, fieldState }) => (
            <TextInput
              label="SEO Keywords"
              placeholder="dubai package, dubai tour, honeymoon package"
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          )}
        />
      </div>
    </SectionCard>
  );
}
