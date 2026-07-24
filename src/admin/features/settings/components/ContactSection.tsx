import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextArea from "@/admin/components/forms/TextArea";
import TextInput from "@/admin/components/forms/TextInput";

import type { SettingsFormValues } from "../validation/settings.schema";

interface ContactSectionProps {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function ContactSection({
  register,
  errors,
}: ContactSectionProps) {
  return (
    <SectionCard
      title="Contact Information"
      description="Contact details displayed across the website."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TextInput
          label="Email Address"
          type="email"
          placeholder="info@alansartours.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <TextInput
          label="Phone Number"
          placeholder="+91 9876543210"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <TextInput
          label="WhatsApp"
          placeholder="919876543210"
          {...register("whatsapp")}
          error={errors.whatsapp?.message}
        />

        <TextInput
          label="Google Maps URL"
          placeholder="https://maps.google.com/..."
          {...register("google_maps_url")}
          error={errors.google_maps_url?.message}
        />

        <div className="md:col-span-2">
          <TextArea
            label="Company Address"
            placeholder="Enter your complete office address..."
            rows={4}
            {...register("address")}
            error={errors.address?.message}
          />
        </div>
      </div>
    </SectionCard>
  );
}