import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Settings } from "../types/settings.types";
import {
  settingsSchema,
  type SettingsFormValues,
} from "../validation/settings.schema";

import { useCreateSettings, useUpdateSettings } from "../hooks/useSettings";

import GeneralSection from "./GeneralSection";
import ContactSection from "./ContactSection";
import SocialSection from "./SocialSection";
import SeoSection from "./SeoSection";
import BrandingSection from "./BrandingSection";
import BusinessHoursSection from "./BusinessHoursSection";

interface SettingsFormProps {
  settings: Settings | null;
}

export default function SettingsForm({ settings }: SettingsFormProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      company_name: "",
      tagline: "",

      logo_url: "",
      favicon_url: "",

      email: "",
      phone: "",
      whatsapp: "",
      address: "",
      google_maps_url: "",

      facebook_url: "",
      instagram_url: "",
      youtube_url: "",
      twitter_url: "",
      linkedin_url: "",

      seo_title: "",
      seo_description: "",
      seo_keywords: "",

      monday_hours: "",
      tuesday_hours: "",
      wednesday_hours: "",
      thursday_hours: "",
      friday_hours: "",
      saturday_hours: "",
      sunday_hours: "",
    },
  });

  const updateSettings = useUpdateSettings();
  const createSettings = useCreateSettings();

  useEffect(() => {
    if (!settings) return;

    reset({
      company_name: settings.company_name ?? "",
      tagline: settings.tagline ?? "",

      logo_url: settings.logo_url ?? "",
      favicon_url: settings.favicon_url ?? "",

      email: settings.email ?? "",
      phone: settings.phone ?? "",
      whatsapp: settings.whatsapp ?? "",
      address: settings.address ?? "",
      google_maps_url: settings.google_maps_url ?? "",

      facebook_url: settings.facebook_url ?? "",
      instagram_url: settings.instagram_url ?? "",
      youtube_url: settings.youtube_url ?? "",
      twitter_url: settings.twitter_url ?? "",
      linkedin_url: settings.linkedin_url ?? "",

      seo_title: settings.seo_title ?? "",
      seo_description: settings.seo_description ?? "",
      seo_keywords: settings.seo_keywords ?? "",

      monday_hours: settings.monday_hours ?? "",
      tuesday_hours: settings.tuesday_hours ?? "",
      wednesday_hours: settings.wednesday_hours ?? "",
      thursday_hours: settings.thursday_hours ?? "",
      friday_hours: settings.friday_hours ?? "",
      saturday_hours: settings.saturday_hours ?? "",
      sunday_hours: settings.sunday_hours ?? "",
    });
  }, [settings, reset]);

  function onSubmit(values: SettingsFormValues) {
    if (!settings) {
      createSettings.mutate(values);
      return;
    }

    updateSettings.mutate({
      ...settings,
      ...values,
    });
  }

  const isSaving = updateSettings.isPending || createSettings.isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <GeneralSection register={register} errors={errors} />

      <ContactSection register={register} errors={errors} />

      <SocialSection register={register} errors={errors} />

      <SeoSection register={register} errors={errors} />

      <BrandingSection control={control} />

      <BusinessHoursSection register={register} errors={errors} />

      <div className="sticky bottom-4 z-10 flex justify-end rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
        <button
          type="submit"
          disabled={isSaving}
          className="rounded-xl bg-[#102a43] px-8 py-3 font-semibold text-white shadow-lg shadow-[#102a43]/20 transition hover:-translate-y-0.5 hover:bg-[#163b5c] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSaving ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
