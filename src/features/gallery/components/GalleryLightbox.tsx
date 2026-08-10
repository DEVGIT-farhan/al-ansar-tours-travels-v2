import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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
      plugins={[Fullscreen, Zoom]}
      carousel={{
        finite: false,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      styles={{
        root: {
          "--yarl__color_backdrop": "rgba(0,0,0,0.97)",
        },
        container: {
          backgroundColor: "rgba(0,0,0,0.97)",
        },
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
      }}
      animation={{
        fade: 350,
        swipe: 450,
      }}
    />
  );
}
