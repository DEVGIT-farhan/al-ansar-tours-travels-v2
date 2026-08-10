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
    <section className="relative overflow-hidden border-b border-[#102a43]/10 bg-[#102a43]">
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#d9a441]/20 blur-3xl" />
      <div className="absolute -bottom-36 left-1/4 h-72 w-72 rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <Breadcrumb items={breadcrumb} />

        <h1 className="mt-5 max-w-3xl text-4xl font-bold text-white lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
