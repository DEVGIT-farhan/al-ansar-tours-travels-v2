import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, CheckCircle2, FilePenLine, Plus } from "lucide-react";

import CrudHeader from "@/admin/components/crud/CrudHeader";
import CrudTable, { type CrudColumn } from "@/admin/components/crud/CrudTable";
import DeleteDialog from "@/admin/components/dialogs/DeleteDialog";
import AdminButton from "@/admin/components/ui/AdminButton";
import StatusBadge from "@/admin/components/ui/StatusBadge";

import { useDeletePackage, usePackages } from "../hooks/usePackages";

import type { TravelPackageWithCategory } from "../types/package.types";

export default function PackagesPage() {
  const { data: packages = [] } = usePackages();

  const deleteMutation = useDeletePackage();

  const publishedCount = packages.filter((pkg) => pkg.active).length;
  const featuredCount = packages.filter((pkg) => pkg.featured).length;

  const [selected, setSelected] = useState<TravelPackageWithCategory | null>(
    null,
  );

  async function handleDelete() {
    if (!selected) return;

    await deleteMutation.mutateAsync(selected.id);

    setSelected(null);
  }

  const columns: CrudColumn<TravelPackageWithCategory>[] = [
    {
      key: "title",
      title: "Package",
      render: (row) => (
        <div className="flex items-center gap-3">
          {row.cover_image ? (
            <img
              src={row.cover_image}
              alt=""
              className="h-11 w-11 rounded-xl object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff8e9] text-[#9b6a18]">
              <Box className="h-5 w-5" />
            </div>
          )}
          <div>
            <div className="font-semibold text-[#102a43]">{row.title}</div>

            <div className="mt-0.5 text-xs text-slate-500">
              {row.destination ?? "Destination not set"}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      title: "Category",
      render: (row) => row.category?.name ?? "-",
    },
    {
      key: "price",
      title: "Price",
      render: (row) =>
        row.price == null
          ? "-"
          : `${row.currency} ${Number(row.price).toLocaleString()}`,
    },
    {
      key: "featured",
      title: "Featured",
      render: (row) => (
        <StatusBadge
          label={row.featured ? "Yes" : "No"}
          variant={row.featured ? "success" : "neutral"}
        />
      ),
    },
    {
      key: "active",
      title: "Status",
      render: (row) => (
        <StatusBadge
          label={row.active ? "Published" : "Draft"}
          variant={row.active ? "success" : "danger"}
        />
      ),
    },

    {
      key: "actions",
      title: "Actions",
      className: "text-right",
      render: (row) => (
        <div className="flex justify-end gap-2">
          <Link to={`/admin/packages/${row.id}/images`}>
            <AdminButton size="sm" variant="secondary">
              Images
            </AdminButton>
          </Link>

          <Link to={`/admin/packages/${row.id}/itinerary`}>
            <AdminButton size="sm" variant="secondary">
              Itinerary
            </AdminButton>
          </Link>

          <Link to={`/admin/packages/${row.id}/edit`}>
            <AdminButton size="sm" variant="secondary">
              Edit
            </AdminButton>
          </Link>

          <AdminButton
            size="sm"
            variant="danger"
            onClick={() => setSelected(row)}
          >
            Delete
          </AdminButton>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Travel Packages"
        description="Create, publish and maintain the packages customers discover across your website."
        action={
          <Link to="/admin/packages/new">
            <AdminButton leftIcon={<Plus className="h-4 w-4" />}>
              Add Package
            </AdminButton>
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            All packages
          </p>
          <p className="mt-2 text-3xl font-bold text-[#102a43]">
            {packages.length}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Published
          </p>
          <p className="mt-2 text-3xl font-bold text-emerald-800">
            {publishedCount}
          </p>
        </div>
        <div className="rounded-2xl border border-[#d9a441]/25 bg-[#fff8e9] p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9b6a18]">
            <FilePenLine className="h-4 w-4" /> Featured
          </p>
          <p className="mt-2 text-3xl font-bold text-[#725017]">
            {featuredCount}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <CrudTable columns={columns} data={packages} rowKey="id" />
      </div>

      <DeleteDialog
        open={!!selected}
        title="Delete Package"
        description={
          selected
            ? `Are you sure you want to delete "${selected.title}"? This action cannot be undone.`
            : undefined
        }
        loading={deleteMutation.isPending}
        onClose={() => setSelected(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
