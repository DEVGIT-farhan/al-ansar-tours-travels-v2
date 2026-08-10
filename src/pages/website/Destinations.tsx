import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import DestinationsOverview from "@/features/destinations/components/DestinationsOverview";
import DestinationCategories from "@/features/destinations/components/DestinationCategories";
import BestTimeToVisit from "@/features/destinations/components/BestTimeToVisit";
import TravelTips from "@/features/destinations/components/TravelTips";
import DestinationCTA from "@/features/destinations/components/DestinationCTA";
import DestinationsSection from "@/features/destinations/components/DestinationsSection";
import { useSiteContent } from "@/features/site-content";

export default function Destinations() {
  const { content } = useSiteContent();
  const destinations = content.destinations;

  return (
    <>
      <SEO
        title={destinations.pageTitle}
        description={destinations.overview.description}
      />

      <PageHeader
        title={destinations.pageTitle}
        description={destinations.pageDescription}
        breadcrumb={[
          {
            label: destinations.pageTitle,
          },
        ]}
      />

      <DestinationsOverview />
      <DestinationsSection heading={destinations.list} />
      <DestinationCategories />
      <BestTimeToVisit />
      <TravelTips />
      <DestinationCTA />
    </>
  );
}
