import emailjs from "@emailjs/browser";

import type { ContactFormData } from "@/features/contact/schema/contactSchema";

export async function sendContactEmail(data: ContactFormData) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,

      destination: data.destination ?? "",

      packageName: data.packageName ?? "",

      preferredCallbackTime: data.preferredCallbackTime ?? "",

      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
}

interface CustomerConfirmationData extends ContactFormData {
  companyName: string;
  companyPhone: string;
  companyWhatsapp: string;
}

export async function sendCustomerConfirmationEmail({
  companyName,
  companyPhone,
  companyWhatsapp,
  ...data
}: CustomerConfirmationData) {
  const templateId = import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID;

  if (!templateId) return;

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId,
    {
      to_email: data.email,
      customer_name: data.name,
      package_name: data.packageName ?? "Travel enquiry",
      destination: data.destination ?? "Not specified",
      preferred_callback_time: data.preferredCallbackTime ?? "Any time",
      company_name: companyName,
      company_phone: companyPhone,
      company_whatsapp: companyWhatsapp,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
}
