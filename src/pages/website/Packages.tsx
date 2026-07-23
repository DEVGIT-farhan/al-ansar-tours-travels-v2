import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";

import PackagesSection from "@/features/packages/components/PackagesSection";

export default function Packages() {
  return (
    <>
      <SEO
        title="Travel Packages"
        description="Explore our Umrah, Hajj and international holiday packages."
      />

      <PageHeader
        title="Travel Packages"
        description="Explore our carefully designed Umrah and international holiday packages."
        breadcrumb={[
          {
            label: "Packages",
          },
        ]}
      />

      <PackagesSection />
    </>
  );
}