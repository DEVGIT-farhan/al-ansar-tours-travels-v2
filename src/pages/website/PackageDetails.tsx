import { useParams } from "react-router-dom";

import SEO from "@/components/common/SEO";
import NotFound from "@/pages/website/NotFound";

import { packageDetails } from "@/features/packages/package-details/data/packageDetails";

import PackageHero from "@/features/packages/package-details/components/PackageHero";
import PackageOverview from "@/features/packages/package-details/components/PackageOverview";
import PackageIncludes from "@/features/packages/package-details/components/PackageIncludes";
import PackageItinerary from "@/features/packages/package-details/components/PackageItinerary";
import PackageHotels from "@/features/packages/package-details/components/PackageHotels";
import PackageFAQ from "@/features/packages/package-details/components/PackageFAQ";
import StickyBookingCard from "@/features/packages/package-details/components/StickyBookingCard";
import RelatedPackages from "@/features/packages/package-details/components/RelatedPackages";

export default function PackageDetails() {
  const { slug } = useParams();

  const packageData = packageDetails.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageData) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={packageData.seo.title}
        description={packageData.seo.description}
        keywords={packageData.seo.keywords}
        url={`/package-details/${packageData.slug}`}
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Hero */}
        <PackageHero packageData={packageData} />

        {/* Highlights */}
        <section className="mt-8">
          <div className="flex flex-wrap gap-3">
            {packageData.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-[#0B3D91]/10 px-4 py-2 text-sm font-semibold text-[#0B3D91]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <PackageOverview packageData={packageData} />

        {/* Includes */}
        <PackageIncludes packageData={packageData} />

        {/* Main Content */}
        <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2fr)_360px]">
          <div className="space-y-12">
            <PackageItinerary packageData={packageData} />

            <PackageHotels packageData={packageData} />

            <PackageFAQ packageData={packageData} />
          </div>

          <StickyBookingCard packageData={packageData} />
        </section>

        {/* Related Packages */}
        <RelatedPackages currentSlug={packageData.slug} />
      </main>
    </>
  );
}