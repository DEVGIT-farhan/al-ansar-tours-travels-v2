import emailjs from "@emailjs/browser";

import type { ContactFormData } from "@/features/contact/schema/contactSchema";

export async function sendContactEmail(
  data: ContactFormData
) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,

      destination: data.destination ?? "",

      packageName: data.packageName ?? "",

      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}