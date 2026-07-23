import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),

  email: z
    .email("Please enter a valid email address")
    .trim(),

  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(
      /^[0-9+\-\s()]+$/,
      "Please enter a valid phone number"
    ),

  destination: z
    .string()
    .trim()
    .optional(),

  packageName: z
    .string()
    .trim()
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;