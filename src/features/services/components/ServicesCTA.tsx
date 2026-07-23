import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { Section } from "@/components/ui";

export default function ServicesCTA() {
  return (
    <Section>
      <div className="rounded-[32px] bg-[#0B3D91] px-8 py-16 text-center shadow-2xl lg:px-16">
        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#F4B400]">
          Let's Travel Together
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
          Ready to Plan Your Next Journey?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          Whether you're planning Umrah, an international holiday,
          flight booking, or visa assistance, our travel experts are
          here to make your journey simple, comfortable, and
          memorable.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            to="/packages"
            variant="secondary"
          >
            Explore Packages
          </Button>

          <Button
            to="/contact"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0B3D91]"
          >
            Contact Us

            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}