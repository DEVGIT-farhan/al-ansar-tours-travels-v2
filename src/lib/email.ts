import emailjs from "@emailjs/browser";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}