export const ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "booked",
  "closed",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination: string | null;
  package_name: string | null;
  preferred_callback_time: string | null;
  message: string;
  status: EnquiryStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateEnquiryDto {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  package_name?: string;
  preferred_callback_time?: string;
  message: string;
}
