import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Breadcrumb items={breadcrumb} />

        <h1 className="mt-4 text-4xl font-bold text-[#0B3D91] lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}