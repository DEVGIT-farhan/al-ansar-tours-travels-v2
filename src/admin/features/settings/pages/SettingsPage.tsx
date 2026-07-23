import AdminLayout from "@/admin/components/layout/AdminLayout";

import SettingsForm from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";

export default function SettingsPage() {
  const { data, isLoading, error } = useSettings();
  console.log(data);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex h-96 items-center justify-center">
          <p className="text-gray-500">Loading settings...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-lg font-semibold text-red-700">
            Failed to load settings
          </h2>

          <p className="mt-2 text-red-600">
            {(error as Error).message}
          </p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>

          <p className="text-gray-500">
            Manage your company information.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <SettingsForm settings={data} />
        </div>
      </div>
    </AdminLayout>
  );
}