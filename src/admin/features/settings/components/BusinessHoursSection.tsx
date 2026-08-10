import type { FieldErrors, UseFormRegister } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextInput from "@/admin/components/forms/TextInput";

import type { SettingsFormValues } from "../validation/settings.schema";

interface BusinessHoursSectionProps {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function BusinessHoursSection({
  register,
  errors,
}: BusinessHoursSectionProps) {
  return (
    <SectionCard
      title="Business Hours"
      description="Manage your office working hours."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="Monday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("monday_hours")}
          error={errors.monday_hours?.message}
        />

        <TextInput
          label="Tuesday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("tuesday_hours")}
          error={errors.tuesday_hours?.message}
        />

        <TextInput
          label="Wednesday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("wednesday_hours")}
          error={errors.wednesday_hours?.message}
        />

        <TextInput
          label="Thursday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("thursday_hours")}
          error={errors.thursday_hours?.message}
        />

        <TextInput
          label="Friday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("friday_hours")}
          error={errors.friday_hours?.message}
        />

        <TextInput
          label="Saturday"
          placeholder="9:00 AM - 6:00 PM"
          {...register("saturday_hours")}
          error={errors.saturday_hours?.message}
        />

        <TextInput
          label="Sunday"
          placeholder="Closed"
          {...register("sunday_hours")}
          error={errors.sunday_hours?.message}
        />
      </div>
    </SectionCard>
  );
}
