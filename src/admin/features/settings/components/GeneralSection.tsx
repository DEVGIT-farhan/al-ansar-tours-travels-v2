import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import TextInput from "@/admin/components/forms/TextInput";
import SectionCard from "@/admin/components/forms/SectionCard";

import type { SettingsFormValues } from "../validation/settings.schema";

interface Props {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function GeneralSection({
  register,
  errors,
}: Props) {
  return (
    <SectionCard
      title="General Information"
      description="Basic company information displayed throughout the website."
    >
      <TextInput
        label="Company Name"
        placeholder="AL ANSAR TOURS & TRAVELS"
        {...register("company_name")}
        error={errors.company_name?.message}
      />

      <TextInput
        label="Tagline"
        placeholder="Your Trusted Travel Partner"
        {...register("tagline")}
        error={errors.tagline?.message}
      />
    </SectionCard>
  );
}