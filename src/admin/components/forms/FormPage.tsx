import type { ReactNode } from "react";

interface FormPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FormPage({
  title,
  description,
  children,
}: FormPageProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {description && <p className="mt-2 text-gray-500">{description}</p>}
      </div>

      {children}
    </div>
  );
}
