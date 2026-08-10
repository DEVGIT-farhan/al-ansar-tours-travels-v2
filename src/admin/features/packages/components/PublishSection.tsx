import { Controller, type Control } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import SwitchField from "@/admin/components/forms/SwitchField";

import type { PackageFormValues } from "../validation/package.schema";

interface PublishSectionProps {
  control: Control<PackageFormValues>;
}

export default function PublishSection({ control }: PublishSectionProps) {
  return (
    <SectionCard
      title="Publishing"
      description="Control whether this package is visible on the website."
    >
      <div className="space-y-6">
        <Controller
          control={control}
          name="featured"
          render={({ field }) => (
            <SwitchField
              label="Featured Package"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />

        <Controller
          control={control}
          name="active"
          render={({ field }) => (
            <SwitchField
              label="Publish Package"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </div>
    </SectionCard>
  );
}
