import { Section } from "@/components/ui";
import SectionHeading from "../../../components/common/SectionHeading";
import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destinations";

export default function DestinationsSection() {
  return (
    <Section className="bg-white">
        <SectionHeading
          badge="Popular Destinations"
          title="Explore Our Most Loved Places"
          description="Choose from our carefully selected destinations for unforgettable journeys."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <div
    key={destination.id}
    data-aos="zoom-in-up"
    data-aos-delay={index * 100}
  >
    <DestinationCard destination={destination} />
  </div>
))}

        </div>
     
    </Section>
  );
}