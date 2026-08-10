import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useContactForm } from "@/hooks/useContactForm";

import SectionHeading from "@/components/common/SectionHeading";
import { Button, Card, Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";
import { usePackages } from "@/admin/features/packages/hooks/usePackages";

import { contactInfo as defaultContactInfo } from "../data/contactInfo";

const icons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  clock: Clock,
};

const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 transition-all duration-300 focus:border-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#0B3D91]/20";

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const { content } = useSiteContent();
  const { settings } = useWebsite();
  const { data: packages = [] } = usePackages();
  const contactContent = content.home.contact;
  const formContent = content.contact.form;
  const mapsUrl =
    settings?.google_maps_url?.trim() ||
    "https://maps.google.com/?q=125+Dr+Besant+Road+Royapettah+Chennai+600014";
  const packageDestinations = [
    ...new Set(
      packages
        .filter((pkg) => pkg.active && pkg.destination?.trim())
        .map((pkg) => pkg.destination!.trim()),
    ),
  ];
  const contactInfo = [
    {
      icon: "phone",
      title: "Phone",
      value: settings?.phone?.trim() || defaultContactInfo[0]!.value,
    },
    {
      icon: "mail",
      title: "Email",
      value: settings?.email?.trim() || defaultContactInfo[1]!.value,
    },
    {
      icon: "map",
      title: "Address",
      value: settings?.address?.trim() || defaultContactInfo[2]!.value,
    },
    {
      icon: "clock",
      title: "Office Hours",
      value: settings?.monday_hours?.trim() || defaultContactInfo[3]!.value,
    },
  ];
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useContactForm();

  useEffect(() => {
    const packageName = searchParams.get("package")?.trim();
    const destination = searchParams.get("destination")?.trim();

    if (packageName) setValue("packageName", packageName);
    if (destination) setValue("destination", destination);
  }, [searchParams, setValue]);

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={contactContent.badge}
        title={contactContent.title}
        description={contactContent.description}
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-5">
          {contactInfo.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Card
                key={item.title}
                className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#0B3D91]/10 p-3">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7 text-[#0B3D91]"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B3D91]">
                      {item.title}
                    </h3>

                    {item.icon === "phone" ? (
                      <a
                        href={`tel:${item.value.replace(/\s+/g, "")}`}
                        className="mt-1 block text-gray-600 transition hover:text-[#0B3D91]"
                      >
                        {item.value}
                      </a>
                    ) : item.icon === "mail" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="mt-1 block text-gray-600 transition hover:text-[#0B3D91]"
                      >
                        {item.value}
                      </a>
                    ) : item.icon === "map" ? (
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-gray-600 transition hover:text-[#0B3D91]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#0B3D91]">
            {contactContent.formTitle}
          </h3>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <input type="hidden" {...register("packageName")} />

            {searchParams.get("package") && (
              <p className="rounded-xl bg-[#fff8e9] px-4 py-3 text-sm font-medium text-[#725017]">
                Enquiring about: {searchParams.get("package")}
              </p>
            )}

            {/* Name */}
            <div>
              <input
                {...register("name")}
                disabled={isSubmitting}
                autoComplete="name"
                type="text"
                placeholder={formContent.namePlaceholder}
                className={inputClassName}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email")}
                disabled={isSubmitting}
                autoComplete="email"
                type="email"
                placeholder={formContent.emailPlaceholder}
                className={inputClassName}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register("phone")}
                disabled={isSubmitting}
                autoComplete="tel"
                type="tel"
                placeholder={formContent.phonePlaceholder}
                className={inputClassName}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Destination */}
            <div>
              <input
                {...register("destination")}
                disabled={isSubmitting}
                type="text"
                list="package-destinations"
                placeholder={formContent.destinationPlaceholder}
                className={inputClassName}
              />

              <datalist id="package-destinations">
                {packageDestinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </datalist>

              {errors.destination && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Preferred callback time{" "}
                <span className="font-normal">(optional)</span>
              </label>
              <select
                {...register("preferredCallbackTime")}
                disabled={isSubmitting}
                className={inputClassName}
              >
                <option value="">Choose a convenient time</option>
                <option value="Morning (9 AM - 12 PM)">
                  Morning (9 AM - 12 PM)
                </option>
                <option value="Afternoon (12 PM - 4 PM)">
                  Afternoon (12 PM - 4 PM)
                </option>
                <option value="Evening (4 PM - 7 PM)">
                  Evening (4 PM - 7 PM)
                </option>
                <option value="Any time during office hours">
                  Any time during office hours
                </option>
              </select>

              {errors.preferredCallbackTime && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.preferredCallbackTime.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message")}
                disabled={isSubmitting}
                rows={5}
                placeholder={formContent.messagePlaceholder}
                className={`${inputClassName} resize-y`}
              />

              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {formContent.submittingLabel}
                </>
              ) : (
                formContent.submitLabel
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
