import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  settingsSchema,
  type SettingsFormValues,
} from "../validation/settings.schema";
export default function SettingsForm() {
  const {
    register,
    handleSubmit,
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

  function onSubmit(values: SettingsFormValues) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div>
        <h2 className="mb-4 text-xl font-semibold">
          General Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Company Name
            </label>

            <input
              {...register("company_name")}
              className="w-full rounded-lg border p-3"
            />

            {errors.company_name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Tagline
            </label>

            <input
              {...register("tagline")}
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-[#0B3D91] px-6 py-3 text-white"
      >
        Save Changes
      </button>
    </form>
  );
}