import { Navigate, useNavigate, useParams } from "react-router-dom";
import CrudHeader from "@/admin/components/crud/CrudHeader";
import PackageForm from "../components/PackageForm";
import { usePackage } from "../hooks/usePackages";
import InclusionEditor from "@/admin/features/package-inclusions/components/InclusionEditor";
import ExclusionEditor from "@/admin/features/package-exclusions/components/ExclusionEditor";

export default function EditPackagePage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: packageData, isLoading } = usePackage(id ?? "");

  if (!id) {
    return <Navigate to="/admin/packages" replace />;
  }

  if (isLoading) {
    return <div className="py-10 text-center">Loading package...</div>;
  }

  if (!packageData) {
    return <div className="py-10 text-center">Package not found.</div>;
  }

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Edit Travel Package"
        description="Update package details."
      />

      <div className="space-y-8 rounded-3xl border border-slate-200/80 bg-[#fdfcf9] p-4 shadow-sm sm:p-6">
        <PackageForm
          packageData={packageData}
          onSuccess={() => navigate("/admin/packages")}
          onCancel={() => navigate("/admin/packages")}
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <InclusionEditor packageId={packageData.id} />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <ExclusionEditor packageId={packageData.id} />
        </div>
      </div>
    </div>
  );
}
