import { useParams } from "react-router-dom";
import PackageGallery from "@/features/packages/package-details/components/PackageGallery";
import SEO from "@/components/common/SEO";
import NotFound from "@/pages/website/NotFound";
import PackageEnquiryForm from "@/features/packages/package-details/components/PackageEnquiryForm";
import { packageDetails } from "@/features/packages/package-details/data/packageDetails";
import PageHeader from "@/components/common/PageHeader";
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
<PageHeader
  title={packageData.title}
  description={packageData.subtitle}
  breadcrumb={[
    {
      label: "Packages",
      to: "/packages",
    },
    {
      label: packageData.title,
    },
  ]}
/>

<PackageHero packageData={packageData} />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Hero */}
        <PackageHero packageData={packageData} />

<div className="mt-8">
  <PackageGallery
    images={packageData.gallery}
    title={packageData.title}
  />
</div>

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
          <PackageEnquiryForm
  packageName={packageData.title}
/>

          <StickyBookingCard packageData={packageData} />
        </section>

        {/* Related Packages */}
        <RelatedPackages currentSlug={packageData.slug} />
      </main>
    </>
  );
}