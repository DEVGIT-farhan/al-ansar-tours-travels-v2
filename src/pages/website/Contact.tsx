import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";

import ContactSection from "@/features/contact/components/ContactSection";
import GoogleMap from "@/features/contact/components/GoogleMap";
import { useSiteContent } from "@/features/site-content";

export default function Contact() {
  const { content } = useSiteContent();
  const contact = content.contact;

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact AL ANSAR TOURS & TRAVELS for Umrah, Hajj, visa assistance, flight bookings and holiday packages."
      />

      <PageHeader
        title={contact.pageTitle}
        description={contact.pageDescription}
        breadcrumb={[
          {
            label: contact.pageTitle,
          },
        ]}
      />

      <ContactSection />

      <GoogleMap />
    </>
  );
}
