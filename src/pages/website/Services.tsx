import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import ServicesOverview from "@/features/services/components/ServicesOverview";
import ServicesSection from "@/features/services/components/ServicesSection";
import ServiceProcess from "@/features/services/components/ServiceProcess";
import WhyChooseServices from "@/features/services/components/WhyChooseServices";
import ServicesCTA from "@/features/services/components/ServicesCTA";
import { useSiteContent } from "@/features/site-content";

export default function Services() {
  const { content } = useSiteContent();
  const services = content.services;

  return (
    <>
      <SEO
        title={services.pageTitle}
        description={services.overview.description}
      />

      <PageHeader
        title={services.pageTitle}
        description={services.pageDescription}
        breadcrumb={[
          {
            label: services.pageTitle,
          },
        ]}
      />

      <ServicesOverview />
      <ServicesSection heading={services.list} />
      <ServiceProcess />
      <WhyChooseServices />
      <ServicesCTA />
    </>
  );
}
