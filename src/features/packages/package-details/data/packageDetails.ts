import type { PackageDetails } from "../types/packageDetails";

import umrahPremium from "@/assets/images/packages/umrah-premium.jpg";
import umrahDeluxe from "@/assets/images/packages/umrah-deluxe.jpg";
import dubai from "@/assets/images/packages/dubai.jpg";
import malaysia from "@/assets/images/packages/malaysia.jpg";
import thailand from "@/assets/images/packages/thailand.jpg";
import turkey from "@/assets/images/packages/turkey.jpg";

export const packageDetails: PackageDetails[] = [
  {
    id: 1,
    slug: "premium-umrah",

    title: "Premium Umrah Package",

    subtitle:
      "Experience a spiritually fulfilling Umrah with premium accommodation and seamless travel arrangements.",

    heroImage: umrahPremium,

    gallery: [
      umrahPremium,
      umrahPremium,
      umrahPremium,
    ],

    duration: "10 Days",

    price: "₹89,999",

    rating: 4.9,

    highlights: [
      "Return Flights",
      "Umrah Visa Included",
      "5-Star Hotels",
      "Airport Transfers",
      "Daily Breakfast",
      "Guided Ziyarah",
    ],

    overview:
      "Our Premium Umrah Package is designed for pilgrims seeking comfort, convenience and complete peace of mind. From visa processing to premium accommodation near Haram, every aspect of your journey is professionally managed by our experienced travel team.",

    includes: [
      "Return Economy Flights",
      "Umrah Visa",
      "5-Star Accommodation",
      "Airport Transfers",
      "Daily Breakfast",
      "Guided Ziyarah",
      "Tour Coordinator",
      "Ground Transportation",
    ],

    excludes: [
      "Personal Expenses",
      "Laundry",
      "Travel Insurance",
      "Lunch & Dinner",
      "Extra Hotel Nights",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Madinah",
        description:
          "Arrive in Madinah, airport reception, hotel check-in and rest.",
      },
      {
        day: 2,
        title: "Madinah Ziyarah",
        description:
          "Visit Masjid Quba, Uhud Mountain, Qiblatain Mosque and important Islamic landmarks.",
      },
      {
        day: 3,
        title: "Prayers in Masjid an-Nabawi",
        description:
          "Free day for worship and spiritual activities.",
      },
      {
        day: 4,
        title: "Travel to Makkah",
        description:
          "Travel comfortably to Makkah, hotel check-in and perform Umrah.",
      },
      {
        day: 5,
        title: "Free for Worship",
        description:
          "Spend the day performing Umrah and prayers at Masjid al-Haram.",
      },
      {
        day: 6,
        title: "Makkah Ziyarah",
        description:
          "Visit Jabal al-Noor, Jabal Thawr and other historical sites.",
      },
      {
        day: 7,
        title: "Additional Umrah",
        description:
          "Opportunity to perform additional Umrah and personal worship.",
      },
      {
        day: 8,
        title: "Shopping & Leisure",
        description:
          "Free time for shopping and family activities.",
      },
      {
        day: 9,
        title: "Final Prayers",
        description:
          "Spend the final day in prayer before departure.",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Airport transfer and return flight.",
      },
    ],

    hotels: [
      {
        name: "Pullman Zamzam Madinah",
        city: "Madinah",
        stars: 5,
      },
      {
        name: "Swissôtel Makkah",
        city: "Makkah",
        stars: 5,
      },
    ],

    faqs: [
      {
        question: "Is the Umrah visa included?",
        answer:
          "Yes. Complete visa processing is included.",
      },
      {
        question: "Are flights included?",
        answer:
          "Yes. Return economy airfare is included.",
      },
      {
        question: "How close are the hotels?",
        answer:
          "Our hotels are within walking distance of the Holy Mosques.",
      },
      {
        question: "Do you provide a guide?",
        answer:
          "Yes. Experienced group coordinators accompany pilgrims.",
      },
    ],

    whatsappMessage:
      "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Premium Umrah Package. Please share complete details.",

    seo: {
      title: "Premium Umrah Package | AL ANSAR TOURS & TRAVELS",
      description:
        "Book our Premium Umrah Package with return flights, visa, luxury hotels and guided Ziyarah.",
      keywords: [
        "Premium Umrah",
        "Luxury Umrah",
        "Umrah Chennai",
        "Saudi Umrah Package",
        "5 Star Umrah",
      ],
    },
  },

  {
    id: 2,

    slug: "deluxe-umrah",

    title: "Deluxe Umrah Package",

    subtitle:
      "Enjoy a luxury Umrah journey with business-class comfort and premium hospitality.",

    heroImage: umrahDeluxe,

    gallery: [
      umrahDeluxe,
      umrahDeluxe,
      umrahDeluxe,
    ],

    duration: "12 Days",

    price: "₹1,19,999",

    rating: 5,

    highlights: [
      "Business Class Flights",
      "Luxury Hotels",
      "VIP Transfers",
      "Daily Buffet",
      "Private Guidance",
      "Premium Services",
    ],

    overview:
      "The Deluxe Umrah Package offers the highest level of comfort with business-class flights, luxury accommodation, premium transportation and personalized assistance throughout your pilgrimage.",

    includes: [
      "Business Class Flights",
      "Umrah Visa",
      "Luxury Hotels",
      "VIP Airport Transfers",
      "Breakfast & Dinner",
      "Private Tour Guide",
      "Ground Transportation",
      "24×7 Assistance",
    ],

    excludes: [
      "Personal Shopping",
      "Laundry",
      "Travel Insurance",
      "Extra Excursions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Madinah",
        description:
          "VIP airport reception and luxury hotel check-in.",
      },
      {
        day: 2,
        title: "Historical Ziyarah",
        description:
          "Guided visit to significant Islamic landmarks.",
      },
      {
        day: 3,
        title: "Worship & Reflection",
        description:
          "Dedicated day for worship in Masjid an-Nabawi.",
      },
      {
        day: 4,
        title: "Travel to Makkah",
        description:
          "Luxury coach transfer and Umrah performance.",
      },
      {
        day: 5,
        title: "Personal Worship",
        description:
          "Spend the day in Masjid al-Haram.",
      },
      {
        day: 6,
        title: "Makkah Tour",
        description:
          "Visit historical Islamic locations with guide.",
      },
      {
        day: 7,
        title: "Additional Umrah",
        description:
          "Optional additional Umrah for pilgrims.",
      },
      {
        day: 8,
        title: "Religious Lectures",
        description:
          "Attend spiritual sessions conducted by scholars.",
      },
      {
        day: 9,
        title: "Free Time",
        description:
          "Shopping and personal activities.",
      },
      {
        day: 10,
        title: "Prayer & Reflection",
        description:
          "Spend the day in worship.",
      },
      {
        day: 11,
        title: "Farewell Tawaf",
        description:
          "Complete farewell rituals before departure.",
      },
      {
        day: 12,
        title: "Return Journey",
        description:
          "Airport transfer and return flight.",
      },
    ],

    hotels: [
      {
        name: "Anwar Al Madinah Mövenpick",
        city: "Madinah",
        stars: 5,
      },
      {
        name: "Fairmont Makkah Clock Royal Tower",
        city: "Makkah",
        stars: 5,
      },
    ],

    faqs: [
      {
        question: "Are meals included?",
        answer:
          "Yes. Daily breakfast and dinner are included.",
      },
      {
        question: "Is business class included?",
        answer:
          "Yes. Business-class airfare is included in this package.",
      },
      {
        question: "Are transfers private?",
        answer:
          "Yes. Premium airport and intercity transfers are provided.",
      },
      {
        question: "Can families join together?",
        answer:
          "Yes. Family and group bookings are welcome.",
      },
    ],

    whatsappMessage:
      "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Deluxe Umrah Package. Please share complete details.",

    seo: {
      title: "Deluxe Umrah Package | AL ANSAR TOURS & TRAVELS",
      description:
        "Luxury Deluxe Umrah Package with business-class flights, premium hotels and VIP services.",
      keywords: [
        "Deluxe Umrah",
        "Luxury Umrah Package",
        "Business Class Umrah",
        "Premium Umrah India",
      ],
    },
  },
  {
  id: 3,

  slug: "dubai-holiday",

  title: "Dubai Holiday",

  subtitle:
    "Experience the luxury of Dubai with world-famous attractions, shopping, desert adventures and modern city life.",

  heroImage: dubai,

  gallery: [dubai, dubai, dubai],

  duration: "5 Days",

  price: "₹34,999",

  rating: 4.8,

  highlights: [
    "Return Flights",
    "4-Star Hotel",
    "Desert Safari",
    "Dubai City Tour",
    "Airport Transfers",
    "Daily Breakfast",
  ],

  overview:
    "Explore the vibrant city of Dubai with comfortable accommodation, guided sightseeing and unforgettable experiences including the Burj Khalifa, Desert Safari and Marina Cruise.",

  includes: [
    "Return Flights",
    "Dubai Tourist Visa",
    "4-Star Hotel",
    "Airport Transfers",
    "Daily Breakfast",
    "Dubai City Tour",
    "Desert Safari",
    "Dhow Cruise Dinner",
  ],

  excludes: [
    "Lunch & Dinner (except cruise)",
    "Personal Shopping",
    "Travel Insurance",
    "Optional Activities",
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Dubai",
      description:
        "Airport pickup, hotel check-in and evening at leisure.",
    },
    {
      day: 2,
      title: "Dubai City Tour",
      description:
        "Visit Burj Khalifa, Dubai Mall, Jumeirah Beach and Palm Jumeirah.",
    },
    {
      day: 3,
      title: "Desert Safari",
      description:
        "Enjoy dune bashing, camel rides, cultural shows and BBQ dinner.",
    },
    {
      day: 4,
      title: "Shopping & Marina Cruise",
      description:
        "Free shopping followed by an evening Dhow Marina Cruise.",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Airport transfer for your return journey.",
    },
  ],

  hotels: [
    {
      name: "City Seasons Hotel",
      city: "Dubai",
      stars: 4,
    },
  ],

  faqs: [
    {
      question: "Is Dubai visa included?",
      answer: "Yes, tourist visa processing is included.",
    },
    {
      question: "Is Burj Khalifa ticket included?",
      answer: "Optional upgrades are available.",
    },
    {
      question: "Are airport transfers included?",
      answer: "Yes, both arrival and departure transfers are included.",
    },
    {
      question: "Can families join this package?",
      answer: "Yes, this package is ideal for families and couples.",
    },
  ],

  whatsappMessage:
    "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Dubai Holiday Package. Please share complete details.",

  seo: {
    title: "Dubai Holiday Package | AL ANSAR TOURS & TRAVELS",
    description:
      "Book affordable Dubai holiday packages with flights, visa, hotels and sightseeing.",
    keywords: [
      "Dubai Tour",
      "Dubai Holiday",
      "Dubai Package",
      "Dubai Trip",
    ],
  },
},
  {
  id: 4,

  slug: "malaysia-tour",

  title: "Malaysia Tour",

  subtitle:
    "Discover Kuala Lumpur, Genting Highlands and Malaysia's cultural beauty.",

  heroImage: malaysia,

  gallery: [malaysia, malaysia, malaysia],

  duration: "6 Days",

  price: "₹39,999",

  rating: 4.8,

  highlights: [
    "Return Flights",
    "Hotel Stay",
    "City Tour",
    "Genting Highlands",
    "Airport Transfers",
    "Breakfast Included",
  ],

  overview:
    "Enjoy Malaysia's modern cities, lush landscapes and exciting attractions with our carefully planned holiday package.",

  includes: [
    "Return Flights",
    "Hotel Accommodation",
    "Airport Transfers",
    "Daily Breakfast",
    "Kuala Lumpur City Tour",
    "Genting Highlands Tour",
    "Cable Car Ride",
  ],

  excludes: [
    "Lunch",
    "Dinner",
    "Travel Insurance",
    "Personal Expenses",
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival",
      description:
        "Airport pickup and hotel check-in.",
    },
    {
      day: 2,
      title: "Kuala Lumpur Tour",
      description:
        "Visit Petronas Twin Towers, King's Palace and Independence Square.",
    },
    {
      day: 3,
      title: "Genting Highlands",
      description:
        "Cable car ride and theme park activities.",
    },
    {
      day: 4,
      title: "Shopping",
      description:
        "Enjoy shopping at Bukit Bintang and local markets.",
    },
    {
      day: 5,
      title: "Leisure Day",
      description:
        "Spend the day exploring on your own.",
    },
    {
      day: 6,
      title: "Departure",
      description:
        "Airport transfer and return flight.",
    },
  ],

  hotels: [
    {
      name: "Grand Millennium Kuala Lumpur",
      city: "Kuala Lumpur",
      stars: 5,
    },
  ],

  faqs: [
    {
      question: "Are flights included?",
      answer: "Yes, return airfare is included.",
    },
    {
      question: "Is breakfast included?",
      answer: "Yes, daily breakfast is included.",
    },
    {
      question: "Is Genting Highlands included?",
      answer: "Yes, including cable car tickets.",
    },
    {
      question: "Is this suitable for families?",
      answer: "Absolutely. It is designed for families, couples and groups.",
    },
  ],

  whatsappMessage:
    "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Malaysia Tour Package. Please share complete details.",

  seo: {
    title: "Malaysia Tour Package | AL ANSAR TOURS & TRAVELS",
    description:
      "Affordable Malaysia holiday packages including flights, hotels and sightseeing.",
    keywords: [
      "Malaysia Tour",
      "Malaysia Holiday",
      "Kuala Lumpur Tour",
      "Malaysia Package",
    ],
  },
},
{
  id: 5,

  slug: "thailand-getaway",

  title: "Thailand Getaway",

  subtitle:
    "Enjoy tropical beaches, vibrant nightlife, exciting island tours and unforgettable Thai hospitality.",

  heroImage: thailand,

  gallery: [
    thailand,
    thailand,
    thailand,
  ],

  duration: "5 Days",

  price: "₹36,999",

  rating: 4.7,

  highlights: [
    "Return Flights",
    "Hotel Stay",
    "Airport Transfers",
    "Phi Phi Island Tour",
    "Daily Breakfast",
    "City Sightseeing",
  ],

  overview:
    "Experience the beauty of Thailand with comfortable accommodation, exciting sightseeing, island adventures and plenty of leisure time for shopping and relaxation.",

  includes: [
    "Return Flights",
    "Hotel Accommodation",
    "Airport Transfers",
    "Daily Breakfast",
    "Phi Phi Island Tour",
    "Bangkok City Tour",
    "English Speaking Guide",
    "Ground Transportation",
  ],

  excludes: [
    "Lunch",
    "Dinner",
    "Travel Insurance",
    "Personal Expenses",
    "Water Sports",
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Bangkok",
      description:
        "Airport pickup, hotel check-in and evening at leisure.",
    },
    {
      day: 2,
      title: "Bangkok City Tour",
      description:
        "Visit famous temples, shopping districts and local attractions.",
    },
    {
      day: 3,
      title: "Phi Phi Island Tour",
      description:
        "Enjoy a full-day island tour with beautiful beaches and crystal-clear waters.",
    },
    {
      day: 4,
      title: "Shopping & Leisure",
      description:
        "Free time to explore local markets and shopping malls.",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Airport transfer and return flight.",
    },
  ],

  hotels: [
    {
      name: "Amari Bangkok",
      city: "Bangkok",
      stars: 5,
    },
  ],

  faqs: [
    {
      question: "Is airport transfer included?",
      answer: "Yes, arrival and departure transfers are included.",
    },
    {
      question: "Is breakfast included?",
      answer: "Yes, daily breakfast is included.",
    },
    {
      question: "Can couples book this package?",
      answer: "Yes, this package is perfect for couples and families.",
    },
    {
      question: "Are island tours included?",
      answer: "Yes, the Phi Phi Island tour is included.",
    },
  ],

  whatsappMessage:
    "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Thailand Getaway Package. Please share complete details.",

  seo: {
    title: "Thailand Getaway Package | AL ANSAR TOURS & TRAVELS",
    description:
      "Affordable Thailand holiday package with flights, hotels, sightseeing and island tours.",
    keywords: [
      "Thailand Tour",
      "Thailand Holiday",
      "Bangkok Package",
      "Thailand Trip",
    ],
  },
},
{
  id: 6,

  slug: "turkey-explorer",

  title: "Turkey Explorer",

  subtitle:
    "Discover Istanbul, Cappadocia and Turkey's rich history with our premium holiday package.",

  heroImage: turkey,

  gallery: [
    turkey,
    turkey,
    turkey,
  ],

  duration: "8 Days",

  price: "₹74,999",

  rating: 4.9,

  highlights: [
    "Return Flights",
    "Luxury Hotels",
    "Daily Breakfast",
    "Guided Tours",
    "Airport Transfers",
    "Historic Attractions",
  ],

  overview:
    "Explore the magnificent history and natural beauty of Turkey with guided sightseeing, comfortable hotels and unforgettable cultural experiences.",

  includes: [
    "Return Flights",
    "Luxury Hotel Stay",
    "Airport Transfers",
    "Daily Breakfast",
    "Istanbul City Tour",
    "Cappadocia Tour",
    "Professional Guide",
    "Ground Transportation",
  ],

  excludes: [
    "Lunch",
    "Dinner",
    "Travel Insurance",
    "Personal Shopping",
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Istanbul",
      description:
        "Airport pickup and hotel check-in.",
    },
    {
      day: 2,
      title: "Istanbul City Tour",
      description:
        "Visit Hagia Sophia, Blue Mosque and Topkapi Palace.",
    },
    {
      day: 3,
      title: "Bosphorus Cruise",
      description:
        "Enjoy a scenic cruise connecting Europe and Asia.",
    },
    {
      day: 4,
      title: "Travel to Cappadocia",
      description:
        "Domestic transfer and hotel check-in.",
    },
    {
      day: 5,
      title: "Cappadocia Tour",
      description:
        "Explore fairy chimneys, underground cities and valleys.",
    },
    {
      day: 6,
      title: "Optional Hot Air Balloon",
      description:
        "Morning balloon ride (optional) followed by sightseeing.",
    },
    {
      day: 7,
      title: "Shopping & Leisure",
      description:
        "Free day to explore Turkish markets and local culture.",
    },
    {
      day: 8,
      title: "Departure",
      description:
        "Airport transfer and return flight.",
    },
  ],

  hotels: [
    {
      name: "Hilton Istanbul Bosphorus",
      city: "Istanbul",
      stars: 5,
    },
    {
      name: "Mithra Cave Hotel",
      city: "Cappadocia",
      stars: 5,
    },
  ],

  faqs: [
    {
      question: "Are domestic transfers included?",
      answer: "Yes, domestic transportation is included.",
    },
    {
      question: "Can I book the balloon ride?",
      answer: "Yes, it can be arranged as an optional activity.",
    },
    {
      question: "Is breakfast included?",
      answer: "Yes, daily breakfast is included.",
    },
    {
      question: "Is this suitable for families?",
      answer: "Yes, it is suitable for families, couples and groups.",
    },
  ],

  whatsappMessage:
    "Hello AL ANSAR TOURS & TRAVELS, I'm interested in the Turkey Explorer Package. Please share complete details.",

  seo: {
    title: "Turkey Explorer Package | AL ANSAR TOURS & TRAVELS",
    description:
      "Discover Turkey with flights, luxury hotels, Istanbul tours and Cappadocia adventures.",
    keywords: [
      "Turkey Tour",
      "Turkey Holiday",
      "Istanbul Package",
      "Cappadocia Tour",
    ],
  },
},
];