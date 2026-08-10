import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { getEnquiries, updateEnquiryStatus } from "../api/enquiries.api";

import type { EnquiryStatus } from "@/shared/types/enquiry.types";

const enquiryQueryKey = ["enquiries"];

export function useEnquiries() {
  return useQuery({
    queryKey: enquiryQueryKey,
    queryFn: getEnquiries,
  });
}

export function useUpdateEnquiryStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: EnquiryStatus }) =>
      updateEnquiryStatus(id, status),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: enquiryQueryKey });
      toast.success("Enquiry status updated");
    },
    onError: () => toast.error("Could not update the enquiry status"),
  });
}
