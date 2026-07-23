import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import ServicesOverview from "@/features/services/components/ServicesOverview";
import ServicesSection from "@/features/services/components/ServicesSection";
import ServiceProcess from "@/features/services/components/ServiceProcess";
import WhyChooseServices from "@/features/services/components/WhyChooseServices";
import ServicesCTA from "@/features/services/components/ServicesCTA";
export default function Services() {
  return (
    <>
  <SEO
    title="Our Services"
    description="Explore our complete range of travel services including Umrah, Hajj, visa assistance, flight bookings, and holiday packages."
  />

  <PageHeader
    title="Our Services"
    description="Professional travel solutions tailored to your needs."
    breadcrumb={[
      {
        label: "Services",
      },
    ]}
  />

  <ServicesOverview />
  <ServicesSection />
  <ServiceProcess />
  <WhyChooseServices />
  <ServicesCTA/>

</>
  );
}