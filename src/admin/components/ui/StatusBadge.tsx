import clsx from "clsx";

const variants = {
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  pending: "bg-orange-100 text-orange-800",
  info: "bg-blue-100 text-blue-800",
  danger: "bg-red-100 text-red-800",
  neutral: "bg-gray-100 text-gray-700",
} as const;

export type StatusVariant = keyof typeof variants;

interface StatusBadgeProps {
  label: string;
  variant?: StatusVariant;
  className?: string;
  dot?: boolean;
}

export default function StatusBadge({
  label,
  variant = "neutral",
  className,
  dot = true,
}: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {dot && (
        <span
          className={clsx("mr-2 h-2 w-2 rounded-full", {
            "bg-green-600": variant === "success",
            "bg-yellow-600": variant === "warning",
            "bg-orange-600": variant === "pending",
            "bg-blue-600": variant === "info",
            "bg-red-600": variant === "danger",
            "bg-gray-500": variant === "neutral",
          })}
        />
      )}

      {label}
    </span>
  );
}
