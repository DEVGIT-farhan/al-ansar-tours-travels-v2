import type { ContactFormData } from "@/features/contact/schema/contactSchema";

import { useContactForm } from "@/hooks/useContactForm";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface PackageEnquiryFormProps {
  packageName: string;
}

export default function PackageEnquiryForm({
  packageName,
}: PackageEnquiryFormProps) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    onSubmit,
  } = useContactForm();

  const handlePackageSubmit = async (
    data: ContactFormData
  ) => {
    await onSubmit({
      ...data,
      packageName,
    });
  };

  return (
    <Card className="mt-12 p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Enquire About This Package
        </h2>

        <p className="mt-2 text-gray-600">
          Complete the form below and our travel
          consultant will contact you shortly.
        </p>
      </div>

      <form
        noValidate
        onSubmit={handleSubmit(handlePackageSubmit)}
        className="grid gap-6 md:grid-cols-2"
      >
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            {...register("phone")}
            type="tel"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Package */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Selected Package
          </label>

          <div className="rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 font-semibold text-[#0B3D91]">
            {packageName}
          </div>
        </div>

        {/* Message */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </label>

          <textarea
            {...register("message")}
            rows={6}
            placeholder={`Hello,

I'm interested in the ${packageName}.

Please share the complete itinerary, available travel dates and pricing.`}
            disabled={isSubmitting}
            className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 transition focus:border-[#0B3D91] focus:outline-none"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}

        <div className="md:col-span-2">
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
        </div>
      </form>
    </Card>
  );
}