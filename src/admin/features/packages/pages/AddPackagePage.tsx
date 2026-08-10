import { useNavigate } from "react-router-dom";

import CrudHeader from "@/admin/components/crud/CrudHeader";

import PackageForm from "../components/PackageForm";

export default function AddPackagePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Add Travel Package"
        description="Create a new travel package."
      />

      <div className="rounded-3xl border border-slate-200/80 bg-[#fdfcf9] p-4 shadow-sm sm:p-6">
        <PackageForm
          onSuccess={() => navigate("/admin/packages")}
          onCancel={() => navigate("/admin/packages")}
        />
      </div>
    </div>
  );
}
