export type ContactIcon = "phone" | "mail" | "map" | "clock";

export interface ContactInfo {
  icon: ContactIcon;
  title: string;
  value: string;
}
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;

  packageName?: string;
}
