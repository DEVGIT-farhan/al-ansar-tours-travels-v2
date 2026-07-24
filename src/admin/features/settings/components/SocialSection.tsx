import TextInput from "@/admin/components/forms/TextInput";
import SectionCard from "@/admin/components/forms/SectionCard";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { SettingsFormValues } from "../validation/settings.schema";

interface Props {
  register: UseFormRegister<SettingsFormValues>;
  errors: FieldErrors<SettingsFormValues>;
}

export default function SocialSection({
  register,
  errors,
}: Props) {
  return (
    <SectionCard
      title="Social Media"
      description="Links to your social media profiles."
    >
      <TextInput
        label="Facebook"
        {...register("facebook_url")}
        error={errors.facebook_url?.message}
      />

      <TextInput
        label="Instagram"
        {...register("instagram_url")}
        error={errors.instagram_url?.message}
      />

      <TextInput
        label="YouTube"
        {...register("youtube_url")}
        error={errors.youtube_url?.message}
      />

      <TextInput
        label="Twitter / X"
        {...register("twitter_url")}
        error={errors.twitter_url?.message}
      />
    </SectionCard>
  );
}