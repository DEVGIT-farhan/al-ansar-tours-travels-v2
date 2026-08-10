import Dialog from "../ui/Dialog";
import AdminButton from "../ui/AdminButton";

interface DeleteDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  open,
  title = "Delete Item",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  loading = false,
  onClose,
  onConfirm,
}: DeleteDialogProps) {
  return (
    <Dialog
      open={open}
      title={title}
      onClose={onClose}
      size="sm"
      footer={
        <>
          <AdminButton variant="secondary" onClick={onClose} disabled={loading}>
            Cancel
          </AdminButton>

          <AdminButton variant="danger" loading={loading} onClick={onConfirm}>
            Delete
          </AdminButton>
        </>
      }
    >
      <p className="text-sm text-gray-600">{description}</p>
    </Dialog>
  );
}
