import TextArea from "@/admin/components/forms/TextArea";
import TextInput from "@/admin/components/forms/TextInput";
import SectionCard from "@/admin/components/forms/SectionCard";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { SettingsFormValues } from "../validation/settings.schema";

interface Props {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function SeoSection({
  register,
  errors,
}: Props) {
  return (
    <SectionCard
      title="SEO"
      description="Default SEO settings for the website."
    >
      <div className="md:col-span-2">
        <TextInput
          label="SEO Title"
          {...register("seo_title")}
          error={errors.seo_title?.message}
        />
      </div>

      <div className="md:col-span-2">
        <TextArea
          label="SEO Description"
          {...register("seo_description")}
          error={errors.seo_description?.message}
        />
      </div>

      <div className="md:col-span-2">
        <TextArea
          label="SEO Keywords"
          {...register("seo_keywords")}
          error={errors.seo_keywords?.message}
        />
      </div>
    </SectionCard>
  );
}