import { Navigation } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/company";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";

export default function GoogleMap() {
  const { content } = useSiteContent();
  const { settings } = useWebsite();
  const mapContent = content.home.map;
  const fallbackMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}`,
  )}`;
  const mapsUrl = settings?.google_maps_url?.trim() || fallbackMapsUrl;

  return (
    <section className="bg-gray-50 pb-20">
      <Container>
        <SectionHeading
          badge={mapContent.badge}
          title={mapContent.title}
          description={mapContent.description}
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="AL ANSAR TOURS & TRAVELS Location"
            src={mapContent.embedUrl}
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button href={mapsUrl}>
            <Navigation aria-hidden="true" className="mr-2 h-5 w-5" />
            {mapContent.buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
