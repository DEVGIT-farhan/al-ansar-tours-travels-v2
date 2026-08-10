import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

import heroImage from "@/assets/images/hero.jpg";

import { Container, Button } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";

export default function Hero() {
  const { content } = useSiteContent();
  const { settings } = useWebsite();
  const hero = content.home.hero;
  const companyName = settings?.company_name?.trim() || COMPANY.name;
  const whatsapp = (settings?.whatsapp?.trim() || COMPANY.whatsapp).replace(
    /[^\d]/g,
    "",
  );
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Hello ${companyName}, I would like to know more about your travel packages.`,
  )}`;

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#071a2e] text-white lg:min-h-[780px]">
      <img
        src={hero.imageUrl || heroImage}
        alt={hero.imageAlt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,36,0.94)_0%,rgba(5,20,36,0.76)_44%,rgba(5,20,36,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-[linear-gradient(0deg,rgba(5,20,36,0.9),transparent)]" />

      <Container className="flex min-h-[720px] flex-col justify-center py-24 lg:min-h-[780px] lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#e8ba62]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f4d28b] backdrop-blur">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            {hero.tagline}
          </p>

          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
            {hero.heading}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl} variant="secondary" className="min-w-45">
              {hero.whatsappButtonLabel}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              to="/packages"
              variant="outline"
              className="min-w-45 border-white/30 bg-white/10 text-white hover:border-white hover:bg-white hover:text-[#102a43]"
            >
              {hero.packagesButtonLabel}
            </Button>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8 pt-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid max-w-2xl grid-cols-3 gap-7 border-t border-white/20 pt-6 sm:gap-12">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tracking-tight text-[#f4d28b] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#search"
            className="inline-flex items-center gap-3 self-start text-sm font-semibold text-white transition hover:text-[#f4d28b] lg:self-auto"
          >
            Explore your next journey
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
