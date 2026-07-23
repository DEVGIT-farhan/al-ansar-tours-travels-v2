import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import DestinationsOverview from "@/features/destinations/components/DestinationsOverview";
import DestinationCategories from "@/features/destinations/components/DestinationCategories";
import BestTimeToVisit from "@/features/destinations/components/BestTimeToVisit";
import TravelTips from "@/features/destinations/components/TravelTips";
import DestinationCTA from "@/features/destinations/components/DestinationCTA";
import DestinationsSection from "@/features/destinations/components/DestinationsSection";

export default function Destinations() {
  return (
    <>
      <SEO
        title="Destinations"
        description="Explore our most popular travel destinations around the world."
      />

      <PageHeader
        title="Destinations"
        description="Choose your dream destination from our carefully curated international travel experiences."
        breadcrumb={[
          {
            label: "Destinations",
          },
        ]}
      />

      <DestinationsOverview />
      <DestinationsSection />
      <DestinationCategories />
      <BestTimeToVisit/> 
      <TravelTips/>
      <DestinationCTA />
    </>
  );
}