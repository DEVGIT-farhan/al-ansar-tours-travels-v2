import { useParams } from "react-router-dom";

import Container from "@/website/components/common/Container";
import usePackage from "@/website/hooks/usePackage";
import SEO from "@/components/common/SEO";

import PackageBookingCard from "./components/PackageBookingCard";
import PackageGallery from "./components/PackageGallery";
import PackageHero from "./components/PackageHero";
import PackageInclusions from "./components/PackageInclusions";
import PackageItinerary from "./components/PackageItinerary";
import PackageOverview from "./components/PackageOverview";
import RelatedPackages from "./components/RelatedPackages";

export default function PackageDetailsPage() {
  const { slug } = useParams();

  const {
    data: travelPackage,
    isLoading,
    isError,
    error,
  } = usePackage(slug ?? "");

  if (isLoading) {
    return (
      <Container className="py-24">
        <div className="flex justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600" />
        </div>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="py-24">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </Container>
    );
  }

  if (!travelPackage) {
    return (
      <Container className="py-24">
        <h1>No package found</h1>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={travelPackage.seo_title?.trim() || travelPackage.title}
        description={
          travelPackage.seo_description?.trim() ||
          travelPackage.short_description ||
          undefined
        }
        keywords={travelPackage.seo_keywords
          ?.split(",")
          .map((keyword) => keyword.trim())}
        image={travelPackage.cover_image ?? undefined}
        url={`/packages/${travelPackage.slug}`}
        type="article"
      />
      <PackageHero travelPackage={travelPackage} />

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_380px]">
          <main className="space-y-12">
            <PackageOverview travelPackage={travelPackage} />

            {travelPackage.itinerary?.length ? (
              <PackageItinerary travelPackage={travelPackage} />
            ) : null}

            <PackageInclusions travelPackage={travelPackage} />

            <PackageGallery images={travelPackage.images ?? []} />

            <RelatedPackages travelPackage={travelPackage} />
          </main>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <PackageBookingCard travelPackage={travelPackage} />
          </aside>
        </div>
      </Container>
    </>
  );
}
