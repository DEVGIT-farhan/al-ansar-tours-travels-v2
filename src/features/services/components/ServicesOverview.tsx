import { PlaneTakeoff } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

export default function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        badge="Our Services"
        title="Complete Travel Solutions Under One Roof"
        description="Whether you're planning a spiritual journey, an international holiday, or require visa assistance, we provide reliable travel solutions tailored to your needs."
      />

      <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D91]/10">
            <PlaneTakeoff className="h-10 w-10 text-[#0B3D91]" />
          </div>

          <p className="max-w-4xl text-lg leading-8 text-gray-600">
            At <strong>AL ANSAR TOURS & TRAVELS</strong>, we believe every
            journey should be simple, comfortable, and memorable. From
            Umrah and Hajj packages to visa assistance, international
            holidays, flight bookings, hotel reservations, and customised
            travel planning, our experienced consultants are committed to
            delivering dependable service with complete transparency and
            personalized support.
          </p>

          <p className="max-w-4xl text-lg leading-8 text-gray-600">
            No matter where your destination is, we help you travel with
            confidence by taking care of every detail, allowing you to
            focus on enjoying your journey.
          </p>
        </div>
      </div>
    </Section>
  );
}