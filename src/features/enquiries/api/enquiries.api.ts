import { supabase } from "@/lib/supabase/client";

import type {
  CreateEnquiryDto,
  Enquiry,
  EnquiryStatus,
} from "@/shared/types/enquiry.types";

const TABLE = "enquiries";

export async function createEnquiry(
  values: CreateEnquiryDto,
): Promise<Enquiry> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      ...values,
      destination: values.destination || null,
      package_name: values.package_name || null,
      preferred_callback_time: values.preferred_callback_time || null,
    })
    .select()
    .single();

  if (error) throw error;

  return data as Enquiry;
}

export async function getEnquiries(): Promise<Enquiry[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as Enquiry[];
}

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus,
): Promise<void> {
  const { error } = await supabase.from(TABLE).update({ status }).eq("id", id);

  if (error) throw error;
}
