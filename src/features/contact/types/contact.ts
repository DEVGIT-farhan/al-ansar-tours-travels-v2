export type ContactIcon =
  | "phone"
  | "mail"
  | "map"
  | "clock";

export interface ContactInfo {
  icon: ContactIcon;
  title: string;
  value: string;
}