import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

import { Button, Card, Section } from "@/components/ui";
import SectionHeading from "@/components/common/SectionHeading";
import { destinations } from "../data/destinations";
import { contactInfo } from "../data/contactInfo";

const icons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  clock: Clock,
};

export default function ContactSection() {
  const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  onSubmit,
} = useContactForm();
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Contact Us"
        title="Let's Plan Your Next Journey"
        description="Have questions about Umrah, visas, or holiday packages? Our travel experts are here to help."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-5">
          {contactInfo.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Card
  key={item.title}
  className="p-6 hover:-translate-y-1 hover:shadow-lg"
>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#0B3D91]/10 p-3">
                    <Icon className="h-7 w-7 text-[#0B3D91]" />
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
    href="https://maps.google.com/?q=125+Dr+Besant+Road+Royapettah+Chennai+600014"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-1 block text-gray-600 transition hover:text-[#0B3D91]"
  >
    {item.value}
  </a>
) : (
  <p className="mt-1 text-gray-600">
    {item.value}
  </p>
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
            Send an Enquiry
          </h3>

          <form
  noValidate
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-5"
>
            <input
  {...register("name")} required disabled={isSubmitting}
  type="text"
  placeholder="Your Name"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
/>
{errors.name && (
  <p className="mt-1 text-sm text-red-500">
    {errors.name.message}
  </p>
)}

            <input
  {...register("email")} 
  autoComplete="name"
  required 
  disabled={isSubmitting}
  type="email"
  placeholder="Email Address"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
/>
{errors.email && (
  <p className="mt-1 text-sm text-red-500">
    {errors.email.message}
  </p>
)}

            <input
  {...register("phone")}
  autoComplete="tel"
  required disabled={isSubmitting}
  type="tel"
  placeholder="Phone Number"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
/>
{errors.phone && (
  <p className="mt-1 text-sm text-red-500">
    {errors.phone.message}
  </p>
)}

            <select
  {...register("destination")}
  disabled={isSubmitting}
  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
>
  <option value="">Select Your Destination</option>

  {destinations.map((destination) => (
    <option key={destination} value={destination}>
      {destination}
    </option>
  ))}
</select>
{errors.destination && (
  <p className="mt-1 text-sm text-red-500">
    {errors.destination.message}
  </p>
)}

           <textarea
  className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
  {...register("message")}
  autoComplete="message"
  required disabled={isSubmitting}
  rows={5}
  placeholder="Your Message"

/>
{errors.message && (
  <p className="mt-1 text-sm text-red-500">
    {errors.message.message}
  </p>
)}

<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full"
>
  {isSubmitting ? (
    <>
      <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Sending...
    </>
  ) : (
    "Send Enquiry"
  )}
</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}