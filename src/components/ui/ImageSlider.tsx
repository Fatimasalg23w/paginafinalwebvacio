import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const next = () =>
    setCurrent((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative w-full max-w-6xl h-72">
        <img
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="object-contain h-full w-full rounded-lg shadow-md"
        />
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/70 z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
