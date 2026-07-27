import { Pencil, Trash2 } from "lucide-react";

interface CrudActionsProps {
  onEdit(): void;
  onDelete(): void;

  editLabel?: string;
  deleteLabel?: string;

  disableEdit?: boolean;
  disableDelete?: boolean;
}

export default function CrudActions({
  onEdit,
  onDelete,
  editLabel = "Edit",
  deleteLabel = "Delete",
  disableEdit = false,
  disableDelete = false,
}: CrudActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onEdit}
        disabled={disableEdit}
        className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-[#0B3D91] transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Pencil size={16} />
        {editLabel}
      </button>

      <button
        type="button"
        onClick={onDelete}
        disabled={disableDelete}
        className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Trash2 size={16} />
        {deleteLabel}
      </button>
    </div>
  );
}