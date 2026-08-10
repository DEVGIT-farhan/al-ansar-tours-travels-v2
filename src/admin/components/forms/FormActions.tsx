interface FormActionsProps {
  loading?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
}

export default function FormActions({
  loading = false,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  onCancel,
}: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
        >
          {cancelLabel}
        </button>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#0B3D91] px-6 py-3 font-medium text-white transition hover:bg-[#082f70] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Saving..." : submitLabel}
      </button>
    </div>
  );
}
