import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";

import ContactSection from "@/features/contact/components/ContactSection";
import GoogleMap from "@/features/contact/components/GoogleMap";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact AL ANSAR TOURS & TRAVELS for Umrah, Hajj, visa assistance, flight bookings and holiday packages."
      />

      <PageHeader
        title="Contact Us"
        description="Speak with our travel experts for Umrah, visas and holiday packages."
        breadcrumb={[
          {
            label: "Contact Us",
          },
        ]}
      />

      <ContactSection />

      <GoogleMap />
    </>
  );
}