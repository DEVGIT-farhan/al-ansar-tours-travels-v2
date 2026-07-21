import { Navigation } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";

export default function GoogleMap() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}`
  )}`;

  return (
    <section className="bg-gray-50 pb-20">
      <Container>
        <SectionHeading
          badge="Visit Our Office"
          title="Find Us on Google Maps"
          description="Visit our office in Royapettah, Chennai. Our travel experts are ready to assist you with Umrah, Hajj, tourist visas, flight tickets and holiday packages."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="AL ANSAR TOURS & TRAVELS Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.723765379647!2d80.26957227507788!3d13.053246987269652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526626b0db1dc3%3A0x7e898cfc0ab2e1f5!2s125%2F104%2C%20Dr%20Besant%20Rd%2C%20Triplicane%2C%20Chennai%2C%20Greater%20Chennai%2C%20Tamil%20Nadu%20600014!5e0!3m2!1sen!2sin!4v1784367347797!5m2!1sen!2sin
"
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
            <Navigation
              aria-hidden="true"
              className="mr-2 h-5 w-5"
            />
            Get Directions
          </Button>
        </div>
      </Container>
    </section>
  );
}