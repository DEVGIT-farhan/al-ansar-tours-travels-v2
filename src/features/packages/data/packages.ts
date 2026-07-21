import type { Package } from "../types/package";

import umrahPremium from "../../../assets/images/packages/umrah-premium.jpg";
import umrahDeluxe from "../../../assets/images/packages/umrah-deluxe.jpg";
import dubai from "../../../assets/images/packages/dubai.jpg";
import malaysia from "../../../assets/images/packages/malaysia.jpg";
import thailand from "../../../assets/images/packages/thailand.jpg";
import turkey from "../../../assets/images/packages/turkey.jpg";

export const packages: Package[] = [
  {
    id: 1,
    slug: "premium-umrah",
    badge: "Best Seller",
    title: "Premium Umrah",
    image: umrahPremium,
    duration: "10 Days",
    price: "From ₹89,999 / Person",
    rating: 4.9,
    whatsappMessage:
      "I'm interested in the Premium Umrah package. Please share the itinerary, inclusions, available travel dates and pricing.",
    includes: [
      "Return Flights",
      "5-Star Hotel",
      "Umrah Visa",
      "Airport Transfers",
    ],
  },
  {
    id: 2,
    slug: "deluxe-umrah",
    badge: "Luxury",
    title: "Deluxe Umrah",
    image: umrahDeluxe,
    duration: "12 Days",
    price: "From ₹1,19,999 / Person",
    rating: 5.0,
    whatsappMessage:
      "I'm interested in the Deluxe Umrah package. Please share the complete itinerary and pricing.",
    includes: [
      "Business Class Flights",
      "Luxury Hotel",
      "Umrah Visa",
      "Meals Included",
    ],
  },
  {
    id: 3,
    slug: "dubai-holiday",
    badge: "Most Popular",
    title: "Dubai Holiday",
    image: dubai,
    duration: "5 Days",
    price: "From ₹34,999 / Person",
    rating: 4.8,
    whatsappMessage:
      "I'm interested in the Dubai Holiday package. Please send me the itinerary, inclusions and available travel dates.",
    includes: [
      "Return Flights",
      "Hotel Stay",
      "Dubai City Tour",
      "Visa Included",
    ],
  },
  {
    id: 4,
    slug: "malaysia-tour",
    badge: "Family Favourite",
    title: "Malaysia Tour",
    image: malaysia,
    duration: "6 Days",
    price: "From ₹39,999 / Person",
    rating: 4.8,
    whatsappMessage:
      "I'm interested in the Malaysia Tour package. Please share the itinerary and package details.",
    includes: [
      "Return Flights",
      "Hotel Stay",
      "Sightseeing",
      "Breakfast Included",
    ],
  },
  {
    id: 5,
    slug: "thailand-getaway",
    badge: "Hot Deal",
    title: "Thailand Getaway",
    image: thailand,
    duration: "5 Days",
    price: "From ₹36,999 / Person",
    rating: 4.7,
    whatsappMessage:
      "I'm interested in the Thailand Getaway package. Please send me the complete package details.",
    includes: [
      "Hotel Stay",
      "Airport Pickup",
      "Guided Tours",
      "Breakfast Included",
    ],
  },
  {
    id: 6,
    slug: "turkey-explorer",
    badge: "Trending",
    title: "Turkey Explorer",
    image: turkey,
    duration: "8 Days",
    price: "From ₹74,999 / Person",
    rating: 4.9,
    whatsappMessage:
      "I'm interested in the Turkey Explorer package. Please share the itinerary, pricing and available departures.",
    includes: [
      "Return Flights",
      "Luxury Hotel",
      "Guided Tours",
      "Breakfast Included",
    ],
  },
];