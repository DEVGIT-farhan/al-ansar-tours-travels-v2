import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters."),

  email: z
    .email("Please enter a valid email address."),

  phone: z
  .string()
  .trim()
  .regex(
    /^(?:\+91|91)?[6-9]\d{9}$/,
    "Please enter a valid Indian mobile number."
  ),

  destination: z
    .string()
    .min(1, "Please select a destination."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;