import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";

function getDestinationsForTravelType(
  travelType: string,
  destinations: Record<string, string[]>,
) {
  switch (travelType) {
    case "Umrah":
    case "Hajj":
      return destinations.religious ?? [];

    case "Honeymoon":
      return destinations.honeymoon ?? [];

    case "Corporate":
      return destinations.corporate ?? [];

    case "Medical Tourism":
      return destinations.medical ?? [];

    case "Student Tour":
      return destinations.student ?? [];

    case "Group Tour":
      return destinations.group ?? [];

    default:
      return [
        ...(destinations.holiday ?? []),
        ...(destinations.religious ?? []),
      ];
  }
}

export default function SearchSection() {
  const { content } = useSiteContent();
  const { settings } = useWebsite();
  const searchContent = content.home.search;
  const destinationOptions = searchContent.destinationOptions as Record<
    string,
    string[]
  >;
  const saudiDestination = destinationOptions.religious?.[0] ?? "";
  const [travelType, setTravelType] = useState("");
  const [destination, setDestination] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [pax, setPax] = useState("");
  const [budget, setBudget] = useState("");

  const isReligiousTrip = travelType === "Umrah" || travelType === "Hajj";

  const availableDestinations = useMemo(
    () => getDestinationsForTravelType(travelType, destinationOptions),
    [travelType, destinationOptions],
  );

  const handleTravelTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setTravelType(value);

    if (value === "Umrah" || value === "Hajj") {
      setDestination(saudiDestination);
      return;
    }

    const validDestinations = getDestinationsForTravelType(
      value,
      destinationOptions,
    );

    if (!validDestinations.includes(destination as never)) {
      setDestination("");
    }
  };

  const whatsappUrl = useMemo(() => {
    const companyName = settings?.company_name?.trim() || COMPANY.name;
    const whatsapp = (settings?.whatsapp?.trim() || COMPANY.whatsapp).replace(
      /[^\d]/g,
      "",
    );
    const message = `Hello ${companyName},

I'm interested in planning a trip.

Destination: ${destination || "Not Selected"}
Travel Type: ${travelType || "Not Selected"}
Travel Month: ${travelMonth || "Not Selected"}
Travellers: ${pax || "Not Selected"}
Budget: ${budget || "Not Selected"}

Please share suitable packages and quotation.

Thank you.`;

    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  }, [destination, travelType, travelMonth, pax, budget, settings]);

  return (
    <section id="search" className="relative z-10 bg-[#f7f4ed] py-16 lg:-mt-1">
      <Container>
        <div className="rounded-3xl border border-white bg-white p-6 shadow-[0_22px_60px_-35px_rgba(16,42,67,0.42)] md:p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0B3D91]">
              {searchContent.heading}
            </h2>

            <p className="mt-3 text-gray-600">{searchContent.description}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {/* Destination */}
            <div>
              <label
                htmlFor="destination"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Destination
              </label>

              <select
                id="destination"
                value={destination}
                disabled={isReligiousTrip}
                onChange={(e) => setDestination(e.target.value)}
                className={`w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none ${
                  isReligiousTrip ? "cursor-not-allowed bg-gray-100" : ""
                }`}
              >
                <option value="">Select Destination</option>

                {availableDestinations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Type */}
            <div>
              <label
                htmlFor="travelType"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Travel Type
              </label>

              <select
                id="travelType"
                value={travelType}
                onChange={handleTravelTypeChange}
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">Select Travel Type</option>

                {searchContent.travelTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Month */}
            <div>
              <label
                htmlFor="travelMonth"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Travel Month
              </label>

              <select
                id="travelMonth"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">Select Month</option>

                {searchContent.travelMonths.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Travellers */}
            <div>
              <label
                htmlFor="pax"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Travellers
              </label>

              <select
                id="pax"
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">Select Travellers</option>

                {searchContent.travellerOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Budget
              </label>

              <select
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">Select Budget</option>

                {searchContent.budgetOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <Button href={whatsappUrl} className="w-full">
                {searchContent.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
