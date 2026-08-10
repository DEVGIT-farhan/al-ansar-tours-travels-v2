import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/shared/components/Button";
import Container from "@/website/components/common/Container";

import HeroStats from "../components/HeroStats";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      <Container className="relative flex min-h-175 items-center">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-200">
            Trusted Travel Partner
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Explore the World
            <br />
            With Confidence
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Discover unforgettable journeys with our Hajj, Umrah, Visa Services,
            Domestic and International Tour Packages designed for every
            traveler.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/packages">
              <Button rightIcon={<ArrowRight />}>Explore Packages</Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}
