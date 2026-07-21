import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import {
  BUDGETS,
  DESTINATIONS,
  PAX_OPTIONS,
  TRAVEL_MONTHS,
  TRAVEL_TYPES,
} from "@/data/travelOptions";

const SAUDI_DESTINATION = "Saudi Arabia (Umrah & Hajj)";

function getDestinationsForTravelType(travelType: string) {
  switch (travelType) {
    case "Umrah":
    case "Hajj":
      return DESTINATIONS.religious;

    case "Honeymoon":
      return DESTINATIONS.honeymoon;

    case "Corporate":
      return DESTINATIONS.corporate;

    case "Medical Tourism":
      return DESTINATIONS.medical;

    case "Student Tour":
      return DESTINATIONS.student;

    case "Group Tour":
      return DESTINATIONS.group;

    default:
      return [
        ...DESTINATIONS.holiday,
        ...DESTINATIONS.religious,
      ];
  }
}

export default function SearchSection() {
  const [travelType, setTravelType] = useState("");
  const [destination, setDestination] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [pax, setPax] = useState("");
  const [budget, setBudget] = useState("");

  const isReligiousTrip =
    travelType === "Umrah" || travelType === "Hajj";

  const availableDestinations = useMemo(
    () => getDestinationsForTravelType(travelType),
    [travelType]
  );

  const handleTravelTypeChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    setTravelType(value);

    if (value === "Umrah" || value === "Hajj") {
      setDestination(SAUDI_DESTINATION);
      return;
    }

    const validDestinations =
      getDestinationsForTravelType(value);

    if (!validDestinations.includes(destination as never)) {
      setDestination("");
    }
  };

  const whatsappUrl = useMemo(() => {
    const message = `Hello ${COMPANY.name},

I'm interested in planning a trip.

Destination: ${destination || "Not Selected"}
Travel Type: ${travelType || "Not Selected"}
Travel Month: ${travelMonth || "Not Selected"}
Travellers: ${pax || "Not Selected"}
Budget: ${budget || "Not Selected"}

Please share suitable packages and quotation.

Thank you.`;

    return `https://wa.me/${
      COMPANY.whatsapp
    }?text=${encodeURIComponent(message)}`;
  }, [
    destination,
    travelType,
    travelMonth,
    pax,
    budget,
  ]);

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0B3D91]">
              Plan Your Next Journey
            </h2>

            <p className="mt-3 text-gray-600">
              Tell us about your travel plans and receive a
              personalised quotation from our travel experts.
            </p>
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
                onChange={(e) =>
                  setDestination(e.target.value)
                }
                className={`w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none ${
                  isReligiousTrip
                    ? "cursor-not-allowed bg-gray-100"
                    : ""
                }`}
              >
                <option value="">
                  Select Destination
                </option>

                {availableDestinations.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
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
                <option value="">
                  Select Travel Type
                </option>

                {TRAVEL_TYPES.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
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
                onChange={(e) =>
                  setTravelMonth(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">
                  Select Month
                </option>

                {TRAVEL_MONTHS.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
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
                onChange={(e) =>
                  setPax(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">
                  Select Travellers
                </option>

                {PAX_OPTIONS.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
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
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 p-3 transition focus:border-[#0B3D91] focus:outline-none"
              >
                <option value="">
                  Select Budget
                </option>

                {BUDGETS.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <Button
                href={whatsappUrl}
                className="w-full"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}