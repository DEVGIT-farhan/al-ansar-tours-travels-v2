import type { Destination } from "../types/destination";

import mecca from "../../../assets/images/destinations/mecca.jpg";
import dubai from "../../../assets/images/destinations/dubai.jpg";
import malaysia from "../../../assets/images/destinations/malaysia.jpg";
import thailand from "../../../assets/images/destinations/thailand.jpg";
import singapore from "../../../assets/images/destinations/singapore.jpg";
import turkey from "../../../assets/images/destinations/turkey.jpg";

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Mecca",
    slug: "mecca",
    badge: "Best Seller",
    image: mecca,
    duration: "7 Days",
    price: "From ₹45,999 / Person",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Dubai",
    slug: "dubai",
    badge: "Most Popular",
    image: dubai,
    duration: "5 Days",
    price: "From ₹29,999 / Person",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Malaysia",
    slug: "malaysia",
    badge: "Family Favourite",
    image: malaysia,
    duration: "6 Days",
    price: "From ₹39,999 / Person",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Thailand",
    slug: "thailand",
    badge: "Hot Deal",
    image: thailand,
    duration: "5 Days",
    price: "From ₹34,999 / Person",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Singapore",
    slug: "singapore",
    badge: "Luxury",
    image: singapore,
    duration: "4 Days",
    price: "From ₹42,999 / Person",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Turkey",
    slug: "turkey",
    badge: "Trending",
    image: turkey,
    duration: "8 Days",
    price: "From ₹64,999 / Person",
    rating: 4.9,
  },
];