import { useMemo, useState } from "react";

import {
  AdminButton,
  AdminCard,
  Dialog,
  LoadingSpinner,
  StatusBadge,
} from "@/admin/components/ui";

import {
  CrudActions,
  CrudHeader,
  CrudSearch,
  CrudTable,
} from "@/admin/components/crud";

import type { CrudColumn } from "@/admin/components/crud/CrudTable";

import DeleteDialog from "@/admin/components/dialogs/DeleteDialog";

import CategoryForm from "../components/CategoryForm";

import {
  useDeletePackageCategory,
  usePackageCategories,
} from "../hooks/usePackageCategories";

import type { PackageCategory } from "@/shared/types/packageCategory.types";

export default function PackageCategoriesPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState<PackageCategory | null>(null);

  const { data: categories = [], isLoading } = usePackageCategories();

  const deleteMutation = useDeletePackageCategory();

  const closeForm = () => {
    setFormOpen(false);
    setSelected(null);
  };

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelected(null);
  };

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return categories;

    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(query) ||
        category.slug.toLowerCase().includes(query),
    );
  }, [categories, search]);

  function handleCreate() {
    setSelected(null);
    setFormOpen(true);
  }

  function handleEdit(category: PackageCategory) {
    setSelected(category);
    setFormOpen(true);
  }

  function handleDeleteClick(category: PackageCategory) {
    setSelected(category);
    setDeleteOpen(true);
  }

  async function handleDelete() {
    if (!selected) return;

    await deleteMutation.mutateAsync(selected.id);
    closeDelete();
  }

  const columns: CrudColumn<PackageCategory>[] = [
    {
      key: "name",
      title: "Name",
    },
    {
      key: "slug",
      title: "Slug",
    },
    {
      key: "sort_order",
      title: "Order",
    },
    {
      key: "active",
      title: "Status",
      render: (row) => (
        <StatusBadge
          label={row.active ? "Active" : "Inactive"}
          variant={row.active ? "success" : "neutral"}
        />
      ),
    },
    {
      key: "actions",
      title: "Actions",
      render: (row) => (
        <CrudActions
          onEdit={() => handleEdit(row)}
          onDelete={() => handleDeleteClick(row)}
        />
      ),
    },
  ];

  return (
    <>
      <CrudHeader
        title="Package Categories"
        description="Manage package categories."
        action={<AdminButton onClick={handleCreate}>Add Category</AdminButton>}
      />

      <CrudSearch
        value={search}
        onChange={setSearch}
        placeholder="Search categories..."
      />

      <AdminCard>
        {isLoading ? (
          <LoadingSpinner label="Loading categories..." />
        ) : (
          <CrudTable columns={columns} data={filteredCategories} rowKey="id" />
        )}
      </AdminCard>

      <Dialog
        open={formOpen}
        onClose={closeForm}
        title={selected ? "Edit Category" : "Add Category"}
        size="md"
      >
        <CategoryForm category={selected ?? undefined} onSuccess={closeForm} />
      </Dialog>

      <DeleteDialog
        open={deleteOpen}
        title="Delete Category"
        description={`Are you sure you want to delete "${selected?.name}"?`}
        loading={deleteMutation.isPending}
        onClose={closeDelete}
        onConfirm={handleDelete}
      />
    </>
  );
}
