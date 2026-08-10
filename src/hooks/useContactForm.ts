import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { COMPANY } from "@/constants/company";
import { sendContactEmail, sendCustomerConfirmationEmail } from "@/lib/email";
import { useWebsite } from "@/hooks/useWebsite";
import { createEnquiry } from "@/features/enquiries";

import {
  contactSchema,
  type ContactFormData,
} from "@/features/contact/schema/contactSchema";

const EMAILJS_REQUEST_INTERVAL_MS = 1100;

function waitForEmailJsRateLimit() {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, EMAILJS_REQUEST_INTERVAL_MS);
  });
}

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

      const [contactEmailResult] = await Promise.allSettled([
        sendContactEmail(data),
      ]);

      // EmailJS limits requests to one per second. Sending both messages in
      // parallel can cause the customer confirmation to be rejected.
      await waitForEmailJsRateLimit();

      const [confirmationEmailResult] = await Promise.allSettled([
        sendCustomerConfirmationEmail({
          ...data,
          companyName: settings?.company_name?.trim() || COMPANY.name,
          companyPhone: settings?.phone?.trim() || COMPANY.phone,
          companyWhatsapp: settings?.whatsapp?.trim() || COMPANY.whatsapp,
        }),
      ]);

      if (contactEmailResult.status === "rejected") {
        console.error(
          "EmailJS enquiry notification failed:",
          contactEmailResult.reason,
        );
      }

      if (confirmationEmailResult.status === "rejected") {
        console.error(
          "EmailJS customer confirmation failed:",
          confirmationEmailResult.reason,
        );
      }

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
