import { forwardRef } from "react";

interface SwitchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex cursor-pointer items-center gap-3">
        <input
          ref={ref}
          type="checkbox"
          className="h-5 w-5 rounded border-gray-300 accent-[#0B3D91]"
          {...props}
        />

        <span className="text-sm font-medium text-gray-700">{label}</span>
      </label>
    );
  },
);

SwitchField.displayName = "SwitchField";

export default SwitchField;
