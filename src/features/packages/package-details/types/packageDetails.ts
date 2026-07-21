export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface PackageFAQ {
  question: string;
  answer: string;
}
export interface Hotel {
  name: string;
  city: string;
  stars: number;
  image?: string;
}

export interface PackageDetails {
  id: number;
  slug: string;

  title: string;
  subtitle: string;

  heroImage: string;
  gallery: string[];

  duration: string;
  price: string;
  rating: number;

  highlights: string[];

  overview: string;

  includes: string[];
  excludes: string[];

  itinerary: ItineraryDay[];

  hotels: Hotel[];

  faqs: PackageFAQ[];

  whatsappMessage: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}