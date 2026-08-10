import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { COMPANY } from "@/constants/COMPANY";
import { sendContactEmail, sendCustomerConfirmationEmail } from "@/lib/email";
import { useWebsite } from "@/hooks/useWebsite";
import { createEnquiry } from "@/features/enquiries";

import {
  contactSchema,
  type ContactFormData,
} from "@/features/contact/schema/contactSchema";

export function useContactForm() {
  const { settings } = useWebsite();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      packageName: "",
      preferredCallbackTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await createEnquiry({
        name: data.name,
        email: data.email,
        phone: data.phone,
        destination: data.destination,
        package_name: data.packageName,
        preferred_callback_time: data.preferredCallbackTime,
        message: data.message,
      });

      await Promise.allSettled([
        sendContactEmail(data),
        sendCustomerConfirmationEmail({
          ...data,
          companyName: settings?.company_name?.trim() || COMPANY.name,
          companyPhone: settings?.phone?.trim() || COMPANY.phone,
          companyWhatsapp: settings?.whatsapp?.trim() || COMPANY.whatsapp,
        }),
      ]);

      toast.success(
        data.packageName
          ? `Enquiry for "${data.packageName}" sent successfully!`
          : "Enquiry sent successfully!",
      );

      form.reset({
        name: "",
        email: "",
        phone: "",
        destination: "",
        packageName: "",
        preferredCallbackTime: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send enquiry. Please try again.");
    }
  };

  return {
    ...form,
    onSubmit,
  };
}
