import type { ReactNode } from "react";
import clsx from "clsx";

interface AdminCardProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function AdminCard({
  title,
  subtitle,
  actions,
  children,
  className,
}: AdminCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
        className,
      )}
    >
      {(title || subtitle || actions) && (
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            {title && (
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      {children}
    </div>
  );
}
