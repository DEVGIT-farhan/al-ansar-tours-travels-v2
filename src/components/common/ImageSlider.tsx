import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[];
  className?: string;
}

export default function ImageSlider({
  images,
  className = "",
}: ImageSliderProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      speed={800}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
         pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      className={`w-full ${className}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="h-[450px] w-full">
            <img
              src={image}
              alt={`About ${index + 1}`}
              className="h-72 w-full rounded-3xl object-cover md:h-96 lg:h-[450px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}