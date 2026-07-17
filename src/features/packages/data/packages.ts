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
    title: "Premium Umrah",
    image: umrahPremium,
    duration: "10 Days",
    price: "₹89,999",
    rating: 4.9,
    includes: [
      "Flight Included",
      "5-Star Hotel",
      "Visa Included",
      "Airport Transfer",
    ],
  },
  {
    id: 2,
    title: "Deluxe Umrah",
    image: umrahDeluxe,
    duration: "12 Days",
    price: "₹1,19,999",
    rating: 5.0,
    includes: [
      "Business Class",
      "Luxury Hotel",
      "Visa Included",
      "Meals Included",
    ],
  },
  {
    id: 3,
    title: "Dubai Holiday",
    image: dubai,
    duration: "5 Days",
    price: "₹34,999",
    rating: 4.8,
    includes: [
      "Flight",
      "Hotel",
      "City Tour",
      "Visa",
    ],
  },
  {
    id: 4,
    title: "Malaysia Tour",
    image: malaysia,
    duration: "6 Days",
    price: "₹39,999",
    rating: 4.8,
    includes: [
      "Flight",
      "Hotel",
      "Sightseeing",
      "Breakfast",
    ],
  },
  {
    id: 5,
    title: "Thailand Getaway",
    image: thailand,
    duration: "5 Days",
    price: "₹36,999",
    rating: 4.7,
    includes: [
      "Hotel",
      "Airport Pickup",
      "Tours",
      "Breakfast",
    ],
  },
  {
    id: 6,
    title: "Turkey Explorer",
    image: turkey,
    duration: "8 Days",
    price: "₹74,999",
    rating: 4.9,
    includes: [
      "Flight",
      "Luxury Hotel",
      "Guided Tour",
      "Breakfast",
    ],
  },
];