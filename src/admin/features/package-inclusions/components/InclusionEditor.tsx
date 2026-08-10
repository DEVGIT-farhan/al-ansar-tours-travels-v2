import SimpleListEditor from "@/admin/shared/components/editor/SimpleListEditor";
import { useEditableList } from "@/admin/shared/hooks/useEditableList";

import { useCreatePackageInclusion } from "../hooks/useCreatePackageInclusion";
import { useDeletePackageInclusion } from "../hooks/useDeletePackageInclusion";
import { usePackageInclusions } from "../hooks/usePackageInclusions";
import { useUpdatePackageInclusionsBatch } from "../hooks/useUpdatePackageInclusionsBatch";

import type { PackageInclusion } from "../../../../shared/types/packageInclusions.types";

interface InclusionEditorProps {
  packageId: string;
}

export default function InclusionEditor({ packageId }: InclusionEditorProps) {
  const { data: inclusions = [], isPending } = usePackageInclusions(packageId);

  const createMutation = useCreatePackageInclusion();

  const deleteMutation = useDeletePackageInclusion(packageId);

  const saveMutation = useUpdatePackageInclusionsBatch(packageId);

  const { items, addItem, changeItem, removeItem, replaceItems, reset } =
    useEditableList<PackageInclusion>(packageId, inclusions);

  async function handleAdd() {
    const created = await createMutation.mutateAsync({
      package_id: packageId,
      description: "",
    });

    addItem(created);
  }

  async function handleDelete(index: number) {
    const item = items[index];

    if (!item) {
      return;
    }

    await deleteMutation.mutateAsync(item.id);

    removeItem(index);
  }

  async function handleSave() {
    const updated = await saveMutation.mutateAsync(
      items.map((item) => ({
        id: item.id,
        description: item.description,
      })),
    );

    replaceItems(updated);
    reset();
  }

  return (
    <SimpleListEditor
      title="Package Inclusions"
      addButtonLabel="Add Inclusion"
      items={items}
      loading={isPending}
      saveDisabled={saveMutation.isPending}
      onAdd={handleAdd}
      onDelete={handleDelete}
      onChange={changeItem}
      onSave={handleSave}
    />
  );
}
