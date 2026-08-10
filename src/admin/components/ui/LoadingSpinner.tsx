import clsx from "clsx";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  fullScreen?: boolean;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

export default function LoadingSpinner({
  size = "md",
  className,
  label,
  fullScreen = false,
}: LoadingSpinnerProps) {
  const spinner = (
    <div
      className={clsx(
        "animate-spin rounded-full border-gray-300 border-t-blue-600",
        sizes[size],
        className,
      )}
      aria-hidden="true"
    />
  );

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3",
        fullScreen && "min-h-screen",
      )}
      role="status"
      aria-live="polite"
    >
      {spinner}

      {label && <p className="text-sm text-gray-500">{label}</p>}

      <span className="sr-only">Loading...</span>
    </div>
  );
}
