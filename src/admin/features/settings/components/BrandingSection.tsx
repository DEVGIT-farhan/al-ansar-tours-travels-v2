import { Controller } from "react-hook-form";
import type {
  Control,
  FieldErrors,
} from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import ImageUpload from "@/admin/components/forms/ImageUpload";

import type { SettingsFormValues } from "../validation/settings.schema";

interface Props {
  control: Control<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function BrandingSection({
  control,
}: Props) {
  return (
    <SectionCard
      title="Branding"
      description="Upload your company logo and favicon."
    >
      <Controller
        control={control}
        name="logo_url"
        render={({ field }) => (
          <ImageUpload
            label="Company Logo"
            folder="logo"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="favicon_url"
        render={({ field }) => (
          <ImageUpload
            label="Favicon"
            folder="favicon"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </SectionCard>
  );
}