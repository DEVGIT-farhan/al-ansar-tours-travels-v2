import {
  Briefcase,
  Globe,
  Hotel,
  MapPinned,
  Plane,
  PlaneTakeoff,
} from "lucide-react";

import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: 1,
    title: "Flight Booking",
    description: "Domestic & International flight reservations.",
    icon: Plane,
    whatsappMessage:
      "I'm interested in Flight Booking. Please share available fares and booking details.",
  },
  {
    id: 2,
    title: "Visa Assistance",
    description: "Fast and reliable visa processing.",
    icon: Globe,
    whatsappMessage:
      "I'm interested in Visa Assistance. Please share the requirements and processing details.",
  },
  {
    id: 3,
    title: "Umrah Packages",
    description: "Complete Umrah travel arrangements.",
    icon: MapPinned,
    whatsappMessage:
      "I'm interested in your Umrah Packages. Please share your latest packages and pricing.",
  },
  {
    id: 4,
    title: "Holiday Packages",
    description: "Customized tours worldwide.",
    icon: PlaneTakeoff,
    whatsappMessage:
      "I'm interested in your Holiday Packages. Please recommend suitable destinations and packages.",
  },
  {
    id: 5,
    title: "Hotel Booking",
    description: "Affordable hotels across the globe.",
    icon: Hotel,
    whatsappMessage:
      "I'm interested in Hotel Booking. Please help me find the best available options.",
  },
  {
    id: 6,
    title: "Corporate Travel",
    description: "Business travel management solutions.",
    icon: Briefcase,
    whatsappMessage:
      "I'm interested in Corporate Travel services. Please share your business travel solutions.",
  },
];