import { forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

        <textarea
          ref={ref}
          {...props}
          className={`min-h-28 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
        />

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;