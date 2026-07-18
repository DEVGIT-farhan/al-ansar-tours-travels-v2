import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { sendContactEmail } from "@/lib/email";
import {
  contactSchema,
  type ContactFormData,
} from "@/features/contact/schema/contactSchema";

export function useContactForm() {
  const form = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
  mode: "onSubmit",
  reValidateMode: "onChange",
  shouldFocusError: false,
  defaultValues: {
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  },
});

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactEmail(data);

      toast.success("Enquiry sent successfully!");

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send enquiry. Please try again.");
    }
  };

  return {
    ...form,
    onSubmit,
  };
}