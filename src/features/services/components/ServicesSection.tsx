import SectionHeading from "../../../components/common/SectionHeading";
import ServicesCard from "./ServicesCard";

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Our Services"
          title="Everything You Need for Your Journey"
          description="From flight bookings to Umrah packages, we offer complete travel solutions."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>

      </div>
    </section>
  );
}