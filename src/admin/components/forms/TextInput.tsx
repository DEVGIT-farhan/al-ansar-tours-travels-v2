import { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
