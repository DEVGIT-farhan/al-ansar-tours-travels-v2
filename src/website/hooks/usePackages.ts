import { useQuery } from "@tanstack/react-query";

import { getPackages } from "@/admin/features/packages/api/packages.api";

export default function usePackages() {
  return useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });
}
