import type { GalleryItem } from "../types/gallery";

import original1 from "../../../assets/images/gallery/originals/gallery1.jpg";
import original2 from "../../../assets/images/gallery/originals/gallery2.jpg";
import original3 from "../../../assets/images/gallery/originals/gallery3.jpg";
import original4 from "../../../assets/images/gallery/originals/gallery4.jpg";
import original5 from "../../../assets/images/gallery/originals/gallery5.jpg";
import original6 from "../../../assets/images/gallery/originals/gallery6.jpg";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Umrah Pilgrims",
    thumbnail: original1,
    image: original1,
    category: "Umrah",
  },
  {
    id: 2,
    title: "Dubai Tour",
    thumbnail: original2,
    image: original2,
    category: "Dubai",
  },
  {
    id: 3,
    title: "Malaysia Package",
    thumbnail: original3,
    image: original3,
    category: "Malaysia",
  },
  {
    id: 4,
    title: "Airport Assistance",
    thumbnail: original4,
    image: original4,
    category: "Travel",
  },
  {
    id: 5,
    title: "Happy Customers",
    thumbnail: original5,
    image: original5,
    category: "Customers",
  },
  {
    id: 6,
    title: "Turkey Tour",
    thumbnail: original6,
    image: original6,
    category: "Turkey",
  },
];
