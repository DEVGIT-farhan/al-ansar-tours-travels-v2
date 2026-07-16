import heroImage from "../../assets/images/hero.jpg";
import { heroContent } from "../../data/hero";
import Button from "../ui/Button";
import StatCard from "../common/StatCard";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row">
        
        <div className="flex-1">
          <p className="font-semibold uppercase tracking-[4px] text-[#F4B400]">
            {heroContent.tagline}
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-[#0B3D91] lg:text-6xl">
            {heroContent.heading}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="https://wa.me/919380080009"
            >
              Enquire on WhatsApp
            </Button>

            <Button
              to="/packages"
              variant="secondary"
            >
              View Packages
            </Button>

            <Button
              to="/contact"
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={heroImage}
            alt="Travel"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
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