import Container from "../../../components/ui/Container";
import SectionHeading from "../../../components/common/SectionHeading";
import PackageCard from "./PackageCard";
import { packages } from "../data/packages";

export default function PackagesSection() {
  return (
    <section
      className="bg-gradient-to-b from-white via-gray-50 to-white py-24"
      data-aos="fade-up"
    >
      <Container>

        <SectionHeading
          badge="Featured Packages"
          title="Choose Your Perfect Journey"
          description="Discover our best-selling Umrah and holiday packages designed for unforgettable experiences."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((packageData, index) => (
            <div
              key={packageData.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <PackageCard packageData={packageData} />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}