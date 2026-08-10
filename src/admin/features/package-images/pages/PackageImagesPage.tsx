import { useParams } from "react-router-dom";

import CrudHeader from "@/admin/components/crud/CrudHeader";
import PackageImagesManager from "../components/PackageImagesManager";

export default function PackageImagesPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="p-6">Package not found.</div>;
  }

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Package Gallery"
        description="Upload and manage gallery images."
      />

      <div className="rounded-3xl border border-slate-200/80 bg-[#fdfcf9] p-4 shadow-sm sm:p-6">
        <PackageImagesManager packageId={id} />
      </div>
    </div>
  );
}
