import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

export default function AboutStory() {
  return (
    <Section>
      <SectionHeading
        badge="Our Story"
        title="Every Great Journey Begins with Trust"
        description="More than a travel agency, we are your trusted partner in creating unforgettable travel experiences."
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}

        <div data-aos="fade-right">
          <img
            src="/images/about/about-story.jpg"
            alt="AL ANSAR TOURS & TRAVELS"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Story */}

        <div
          className="space-y-6 text-lg leading-8 text-gray-600"
          data-aos="fade-left"
        >
          <p>
            Travelling is much more than reaching a destination.
            It is about discovering new cultures, strengthening
            faith, creating lifelong memories, and sharing
            meaningful experiences with the people who matter most.
          </p>

          <p>
            AL ANSAR TOURS & TRAVELS was established with a
            simple vision—to make travel easier, more reliable,
            and completely stress-free. What began as a passion
            for assisting pilgrims with their Umrah journeys has
            grown into a trusted travel company offering complete
            travel solutions for individuals, families, and groups.
          </p>

          <p>
            Today we proudly provide Umrah packages, visa
            assistance, international holiday tours, flight
            bookings, hotel reservations, and personalized travel
            planning. Every journey is carefully designed to
            provide comfort, convenience, and complete peace of
            mind.
          </p>

          <p>
            Our greatest achievement isn't simply the destinations
            we offer—it's the trust our customers place in us.
            That trust inspires us to deliver exceptional service,
            transparent guidance, and memorable travel experiences
            every single day.
          </p>
        </div>
      </div>
    </Section>
  );
}