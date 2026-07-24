import AdminLayout from "@/admin/components/layout/AdminLayout";

import SettingsForm from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";

export default function SettingsPage() {
  const {
    data: settings,
    isLoading,
    error,
  } = useSettings();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0B3D91] border-t-transparent" />

            <p className="mt-4 text-gray-500">
              Loading settings...
            </p>
          </div>
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
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Website Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your company information,
            branding, contact details, social
            media, SEO and business hours.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
<SettingsForm settings={settings ?? null} />        </div>
      </div>
    </AdminLayout>
  );
}