import TextArea from "@/admin/components/forms/TextArea";
import TextInput from "@/admin/components/forms/TextInput";
import SectionCard from "@/admin/components/forms/SectionCard";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { SettingsFormValues } from "../validation/settings.schema";

interface Props {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function ContactSection({
  register,
  errors,
}: Props) {
  return (
    <SectionCard
      title="Contact Information"
      description="Displayed throughout the website."
    >
      <TextInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <TextInput
        label="Phone"
        {...register("phone")}
        error={errors.phone?.message}
      />

      <TextInput
        label="WhatsApp"
        {...register("whatsapp")}
        error={errors.whatsapp?.message}
      />

      <TextInput
        label="Google Maps URL"
        {...register("google_maps_url")}
        error={errors.google_maps_url?.message}
      />

      <div className="md:col-span-2">
        <TextArea
          label="Address"
          {...register("address")}
          error={errors.address?.message}
        />
      </div>
    </SectionCard>
  );
}