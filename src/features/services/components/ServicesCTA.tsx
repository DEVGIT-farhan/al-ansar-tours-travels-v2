import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function ServicesCTA() {
  const { content } = useSiteContent();
  const cta = content.services.cta;

  return (
    <Section>
      <div className="rounded-[32px] bg-[#0B3D91] px-8 py-16 text-center shadow-2xl lg:px-16">
        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#F4B400]">
          {cta.badge}
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
          {cta.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          {cta.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/packages" variant="secondary">
            {cta.primaryButtonLabel}
          </Button>

          <Button
            to="/contact"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0B3D91]"
          >
            {cta.secondaryButtonLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
