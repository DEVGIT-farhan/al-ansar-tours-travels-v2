import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateSettings } from "../hooks/useSettings";
import type { Settings } from "../types/settings.types";
import {
  settingsSchema,
  type SettingsFormValues,
} from "../validation/settings.schema";
import SectionCard from "@/admin/components/forms/SectionCard";
import TextInput from "@/admin/components/forms/TextInput";

interface SettingsFormProps {
  settings: Settings | null;
}

export default function SettingsForm({
  settings,
}: SettingsFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      company_name: "",
      tagline: "",
      email: "",
      phone: "",
      whatsapp: "",
      address: "",
      google_maps_url: "",
      facebook_url: "",
      instagram_url: "",
      youtube_url: "",
      twitter_url: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
    },
  });
  const updateSettings = useUpdateSettings();

  useEffect(() => {
    if (settings) {
      reset({
        company_name: settings.company_name ?? "",
        tagline: settings.tagline ?? "",
        email: settings.email ?? "",
        phone: settings.phone ?? "",
        whatsapp: settings.whatsapp ?? "",
        address: settings.address ?? "",
        google_maps_url: settings.google_maps_url ?? "",
        facebook_url: settings.facebook_url ?? "",
        instagram_url: settings.instagram_url ?? "",
        youtube_url: settings.youtube_url ?? "",
        twitter_url: settings.twitter_url ?? "",
        seo_title: settings.seo_title ?? "",
        seo_description: settings.seo_description ?? "",
        seo_keywords: settings.seo_keywords ?? "",
      });
    }
  }, [settings, reset]);

  async function onSubmit(values: SettingsFormValues) {
  if (!settings) return;

  updateSettings.mutate({
    ...settings,
    ...values,
  });
}

  return (
    <form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-6"
>
  <SectionCard
    title="General Information"
    description="Basic company information displayed across the website."
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

  <div className="flex justify-end">
    <button
      type="submit"
      disabled={updateSettings.isPending}
      className="rounded-lg bg-[#0B3D91] px-6 py-3 text-white transition hover:bg-[#082f70] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {updateSettings.isPending ? "Saving..." : "Save Changes"}
    </button>
  </div>
</form>
  );
}