import { Controller, type Control } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import ImageUpload from "@/admin/components/forms/ImageUpload";

import type { SettingsFormValues } from "../validation/settings.schema";

interface BrandingSectionProps {
  control: Control<SettingsFormValues>;
}

export default function BrandingSection({
  control,
}: BrandingSectionProps) {
  return (
    <SectionCard
      title="Branding"
      description="Manage your company branding assets."
    >
      <div className="grid gap-8 md:grid-cols-2">
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
      </div>
    </SectionCard>
  );
}