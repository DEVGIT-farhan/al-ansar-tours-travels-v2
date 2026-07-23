import AdminLayout from "@/admin/components/layout/AdminLayout";
import SettingsForm from "../components/SettingsForm";

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500">
            Manage your company information.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <SettingsForm />
        </div>
      </div>
    </AdminLayout>
  );
}