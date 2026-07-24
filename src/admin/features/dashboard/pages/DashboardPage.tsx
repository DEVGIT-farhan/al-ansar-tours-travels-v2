import {
  FiImage,
  FiMail,
  FiMapPin,
  FiPackage,
} from "react-icons/fi";

import AdminLayout from "@/admin/components/layout/AdminLayout";

import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome to AL ANSAR CMS
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Packages"
            value={0}
            icon={FiPackage}
          />

          <StatsCard
            title="Destinations"
            value={0}
            icon={FiMapPin}
            color="#16A34A"
          />

          <StatsCard
            title="Gallery Images"
            value={0}
            icon={FiImage}
            color="#F59E0B"
          />

          <StatsCard
            title="Enquiries"
            value={0}
            icon={FiMail}
            color="#DC2626"
          />
        </div>

        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center">
          <h2 className="text-xl font-semibold">
            Dashboard Widgets
          </h2>

          <p className="mt-2 text-gray-500">
            Recent enquiries, quick actions and
            analytics will appear here.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}