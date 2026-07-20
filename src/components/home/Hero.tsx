import heroImage from "../../assets/images/hero.jpg";
import { heroContent } from "../../data/hero";
import Button from "../ui/Button";
import StatCard from "../common/StatCard";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-10 md:py-14 lg:min-h-[620px] lg:flex-row lg:items-center lg:py-16">
        {/* Left Content */}
        <div className="max-w-xl flex-1">
          <p className="font-semibold uppercase tracking-[4px] text-[#F4B400]">
            {heroContent.tagline}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0B3D91] sm:text-5xl lg:text-6xl">
            {heroContent.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href="https://wa.me/919380080009"
              className="w-full sm:w-auto"
            >
              Enquire on WhatsApp
            </Button>

            <Button
              to="/packages"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View Packages
            </Button>

            <Button
              to="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-4 flex flex-1 justify-center lg:mt-0 lg:justify-end">
          <img
            src={heroImage}
            alt="Muslims performing Tawaf around the Holy Kaaba in Makkah"
            className="w-full max-w-2xl rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="-mt-6 mx-auto grid max-w-6xl gap-6 px-6 pb-12 md:grid-cols-3">
        {heroContent.stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}