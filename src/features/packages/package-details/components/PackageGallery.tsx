import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";

import Card from "@/components/ui/Card";

interface PackageGalleryProps {
  images: string[];
  title: string;
}

export default function PackageGallery({
  images,
  title,
}: PackageGalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Card className="overflow-hidden">
        {/* Hero Image */}

        <img
          src={images[0]}
          alt={title}
          loading="eager"
          className="h-105 w-full cursor-pointer object-cover"
          onClick={() => setIndex(0)}
        />

        {/* Thumbnails */}

        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 p-2">
            {images.slice(1, 5).map((image, i) => (
              <img
                key={image}
                src={image}
                alt={`${title} ${i + 2}`}
                loading="lazy"
                className="h-28 w-full cursor-pointer rounded-lg object-cover transition hover:opacity-80"
                onClick={() => setIndex(i + 1)}
              />
            ))}
          </div>
        )}
      </Card>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((image) => ({
          src: image,
        }))}
      />
    </>
  );
}