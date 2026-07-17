import {
  Plane,
  Globe,
  Hotel,
  Briefcase,
  PlaneTakeoff,
  MapPinned,
} from "lucide-react";

import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: 1,
    title: "Flight Booking",
    description: "Domestic & International flight reservations.",
    icon: Plane,
  },
  {
    id: 2,
    title: "Visa Assistance",
    description: "Fast and reliable visa processing.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Umrah Packages",
    description: "Complete Umrah travel arrangements.",
    icon: MapPinned,
  },
  {
    id: 4,
    title: "Holiday Packages",
    description: "Customized tours worldwide.",
    icon: PlaneTakeoff,
  },
  {
    id: 5,
    title: "Hotel Booking",
    description: "Affordable hotels across the globe.",
    icon: Hotel,
  },
  {
    id: 6,
    title: "Corporate Travel",
    description: "Business travel management solutions.",
    icon: Briefcase,
  },
];