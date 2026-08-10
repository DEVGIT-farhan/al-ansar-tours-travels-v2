import type { FieldErrors, UseFormRegister } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextArea from "@/admin/components/forms/TextArea";
import TextInput from "@/admin/components/forms/TextInput";

import type { SettingsFormValues } from "../validation/settings.schema";

interface SeoSectionProps {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function SeoSection({ register, errors }: SeoSectionProps) {
  return (
    <SectionCard
      title="SEO Settings"
      description="Default SEO metadata used across the website."
    >
      <div className="grid gap-6">
        <TextInput
          label="SEO Title"
          placeholder="AL ANSAR TOURS & TRAVELS"
          {...register("seo_title")}
          error={errors.seo_title?.message}
        />

        <TextArea
          label="SEO Description"
          rows={4}
          placeholder="Enter a default meta description for search engines..."
          {...register("seo_description")}
          error={errors.seo_description?.message}
        />

        <TextArea
          label="SEO Keywords"
          rows={3}
          placeholder="travel, umrah, hajj, visa, holidays"
          {...register("seo_keywords")}
          error={errors.seo_keywords?.message}
        />
      </div>
    </SectionCard>
  );
}
