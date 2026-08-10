import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbItems = [
    {
      name: "Home",
      item: "/",
    },
    ...items.map((item) => ({
      name: item.label,
      item: item.to,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
        ? `${window.location.origin}${item.item}`
        : window.location.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
          </li>

          {items.map((item, index) => {
            const last = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />

                {last || !item.to ? (
                  <span
                    className="font-semibold text-[#e8ba62]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="transition hover:text-white">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
