import { COMPANY } from "@/constants/COMPANY";
import type { ContactInfo } from "../types/contact";

export const contactInfo: ContactInfo[] = [
  {
    icon: "phone",
    title: "Phone",
    value: COMPANY.phone,
  },
  {
    icon: "mail",
    title: "Email",
    value: COMPANY.email,
  },
  {
    icon: "map",
    title: "Address",
    value: `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}`,
  },
  {
    icon: "clock",
    title: "Office Hours",
    value: COMPANY.officeHours,
  },
];