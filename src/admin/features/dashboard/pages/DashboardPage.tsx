import AdminLayout from "@/admin/components/layout/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome to AL ANSAR TOURS & TRAVELS CMS.
      </p>
    </AdminLayout>
  );
}