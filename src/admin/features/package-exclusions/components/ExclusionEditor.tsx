import SimpleListEditor from "@/admin/shared/components/editor/SimpleListEditor";
import { useEditableList } from "@/admin/shared/hooks/useEditableList";

import { useCreatePackageExclusion } from "../hooks/useCreatePackageExclusion";
import { useDeletePackageExclusion } from "../hooks/useDeletePackageExclusion";
import { usePackageExclusions } from "../hooks/usePackageExclusions";
import { useUpdatePackageExclusionsBatch } from "../hooks/useUpdatePackageExclusionsBatch";

import type { PackageExclusion } from "../../../../shared/types/packageExclusions.types";

interface ExclusionEditorProps {
  packageId: string;
}

export default function ExclusionEditor({ packageId }: ExclusionEditorProps) {
  const { data: exclusions = [], isPending } = usePackageExclusions(packageId);

  const createMutation = useCreatePackageExclusion();

  const deleteMutation = useDeletePackageExclusion(packageId);

  const saveMutation = useUpdatePackageExclusionsBatch(packageId);

  const { items, addItem, changeItem, removeItem, replaceItems, reset } =
    useEditableList<PackageExclusion>(packageId, exclusions);

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
      title="Package Exclusions"
      addButtonLabel="Add Exclusion"
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
