import type { GalleryItem } from "../types/gallery";

import image1 from "../../../assets/images/gallery/gallery1.jpg";
import image2 from "../../../assets/images/gallery/gallery2.jpg";
import image3 from "../../../assets/images/gallery/gallery3.jpg";
import image4 from "../../../assets/images/gallery/gallery4.jpg";
import image5 from "../../../assets/images/gallery/gallery5.jpg";
import image6 from "../../../assets/images/gallery/gallery6.jpg";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Umrah Pilgrims",
    image: image1,
    category: "Umrah",
  },
  {
    id: 2,
    title: "Dubai Tour",
    image: image2,
    category: "Holiday",
  },
  {
    id: 3,
    title: "Malaysia Package",
    image: image3,
    category: "Holiday",
  },
  {
    id: 4,
    title: "Airport Assistance",
    image: image4,
    category: "Travel",
  },
  {
    id: 5,
    title: "Happy Customers",
    image: image5,
    category: "Customers",
  },
  {
    id: 6,
    title: "Turkey Tour",
    image: image6,
    category: "Holiday",
  },
];