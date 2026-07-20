import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

interface GalleryLightboxProps {
  open: boolean;
  close: () => void;
  slides: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  index: number;
}

export default function GalleryLightbox({
  open,
  close,
  slides,
  index,
}: GalleryLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
      carousel={{
        finite: false,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0,0,0,0.92)",
        },
      }}
      animation={{
        fade: 350,
        swipe: 450,
      }}
    />
  );
}