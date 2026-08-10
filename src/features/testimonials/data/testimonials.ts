import type { Testimonial } from "../types/testimonial";

import customer1 from "../../../assets/images/gallery/originals/gallery1.jpg";
import customer2 from "../../../assets/images/gallery/originals/gallery2.jpg";
import customer3 from "../../../assets/images/gallery/originals/gallery3.jpg";
import customer4 from "../../../assets/images/gallery/originals/gallery4.jpg";
import customer5 from "../../../assets/images/gallery/originals/gallery5.jpg";
import customer6 from "../../../assets/images/gallery/originals/gallery6.jpg";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    location: "Chennai",
    image: customer1,
    rating: 5,
    review:
      "Excellent service! Everything from visa processing to hotel booking was handled professionally.",
  },
  {
    id: 2,
    name: "Mohammed Ibrahim",
    location: "Bangalore",
    image: customer2,
    rating: 5,
    review: "Our Umrah journey was perfectly organized. Highly recommended!",
  },
  {
    id: 3,
    name: "Ayesha Begum",
    location: "Hyderabad",
    image: customer3,
    rating: 5,
    review:
      "Very supportive staff and affordable packages. Will definitely travel again.",
  },
  {
    id: 4,
    name: "Abdul Rahman",
    location: "Coimbatore",
    image: customer4,
    rating: 5,
    review: "The holiday package exceeded our expectations. Great experience!",
  },
  {
    id: 5,
    name: "Fatima Khan",
    location: "Mumbai",
    image: customer5,
    rating: 5,
    review:
      "Professional team and smooth travel arrangements from start to finish.",
  },
  {
    id: 6,
    name: "Yusuf Ahmed",
    location: "Madurai",
    image: customer6,
    rating: 5,
    review:
      "Very trustworthy travel agency. Everything was exactly as promised.",
  },
];
