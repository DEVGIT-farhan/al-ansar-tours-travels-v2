import { Pencil, Trash2 } from "lucide-react";
import AdminButton from "../ui/AdminButton";

interface CrudActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
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
    <div className="flex items-center justify-end gap-2">
      {onEdit && (
        <AdminButton
          variant="secondary"
          size="sm"
          leftIcon={<Pencil size={16} />}
          onClick={onEdit}
          disabled={disableEdit}
        >
          {editLabel}
        </AdminButton>
      )}

      {onDelete && (
        <AdminButton
          variant="danger"
          size="sm"
          leftIcon={<Trash2 size={16} />}
          onClick={onDelete}
          disabled={disableDelete}
        >
          {deleteLabel}
        </AdminButton>
      )}
    </div>
  );
}
