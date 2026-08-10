import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { destinations } from "../data/destinations";
import { usePackages } from "@/admin/features/packages/hooks/usePackages";
import { useSiteContent } from "@/features/site-content";
import DestinationCard from "./DestinationCard";

interface DestinationsSectionProps {
  heading?: {
    badge: string;
    title: string;
    description: string;
  };
}

export default function DestinationsSection({
  heading,
}: DestinationsSectionProps) {
  const { content } = useSiteContent();
  const { data: packages = [], isLoading } = usePackages();
  const section = heading ?? content.home.destinations;
  const linkedDestinations = Object.values(
    packages
      .filter((pkg) => pkg.active && pkg.destination?.trim())
      .reduce<Record<string, typeof packages>>((groups, pkg) => {
        const key = pkg.destination!.trim().toLowerCase();
        groups[key] = [...(groups[key] ?? []), pkg];
        return groups;
      }, {}),
  )
    .map((destinationPackages, index) => {
      const firstPackage = destinationPackages[0]!;
      const fallback = destinations[index];
      const prices = destinationPackages
        .map((pkg) => pkg.price)
        .filter((price): price is number => price !== null);
      const lowestPrice = prices.length ? Math.min(...prices) : null;

      return {
        id: firstPackage.id,
        name: firstPackage.destination!.trim(),
        slug: firstPackage
          .destination!.trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),
        badge: `${destinationPackages.length} ${destinationPackages.length === 1 ? "Package" : "Packages"}`,
        image: firstPackage.cover_image || fallback?.image || "",
        duration: `${destinationPackages.length} ${destinationPackages.length === 1 ? "package" : "packages"} available`,
        price:
          lowestPrice === null
            ? "Contact for price"
            : `From ${firstPackage.currency} ${lowestPrice.toLocaleString("en-IN")}`,
        packageCount: destinationPackages.length,
      };
    })
    .filter((destination) => Boolean(destination.image));

  return (
    <Section className="bg-white">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {linkedDestinations.map((destination, index) => (
          <li
            key={destination.id}
            data-aos="zoom-in-up"
            data-aos-delay={Math.min(index * 100, 500)}
          >
            <DestinationCard destination={destination} />
          </li>
        ))}

        {!isLoading && linkedDestinations.length === 0 && (
          <li className="col-span-full rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
            Destinations will appear here automatically when active packages are
            created in the Packages admin area.
          </li>
        )}
      </ul>
    </Section>
  );
}
