import AdminButton from "@/admin/components/ui/AdminButton";

import type {
  SimpleListEditorProps,
  SimpleListItem,
} from "./SimpleListEditor.types";

export default function SimpleListEditor({
  title,
  addButtonLabel,
  items,
  loading = false,
  saveDisabled = false,
  onAdd,
  onDelete,
  onChange,
  onSave,
}: SimpleListEditorProps) {
  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  return (
    <div className="space-y-6 rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>

          <p className="text-sm text-gray-500">Manage {title.toLowerCase()}.</p>
        </div>

        <div className="flex gap-2">
          <AdminButton type="button" variant="secondary" onClick={onAdd}>
            {addButtonLabel}
          </AdminButton>

          <AdminButton type="button" onClick={onSave} disabled={saveDisabled}>
            Save Changes
          </AdminButton>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed py-10 text-center text-gray-500">
          No items added yet.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item: SimpleListItem, index: number) => (
            <div key={item.id} className="flex items-center gap-3">
              <input
                type="text"
                value={item.description}
                onChange={(e) => onChange(index, e.target.value)}
                placeholder="Enter description..."
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />

              <AdminButton
                type="button"
                variant="danger"
                onClick={() => onDelete(index)}
              >
                Delete
              </AdminButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
