import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";

import IUSALOGO from "@/assets/IUSALOGO.png";
import mitsubishi from "@/assets/mitsubishi.png"; // Corrected filename
import MOTREC from "@/assets/MOTREC.png";
import pemex from "@/assets/pemex.png";
import tatsalogo from "@/assets/tatsalogo.png";
import cfe from "@/assets/cfe.png";

const ClientsCarousel = () => {
  const [logoImages, setLogoImages] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use the logo image 7 times
    const initialImages = [
      cfe,
      IUSALOGO,
      mitsubishi,
      MOTREC,
      pemex,
      tatsalogo,
      cfe,
      IUSALOGO,
      mitsubishi,
      MOTREC,
      pemex,
      tatsalogo,
    ];
    setLogoImages(initialImages);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let start: number;
    let currentTranslateX = 0; // Track the current translateX value

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      // Adjust the speed by changing the divisor (larger = slower)
      const speed = 0.1; // Adjust this value
      currentTranslateX -= speed; // Increment the translateX value

      // Calculate the translateX value based on the currentTranslateX
      const translateX = currentTranslateX % 100;

      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${translateX}%)`;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [logoImages]);

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ellos Confían</span> en Nosotros
          </h2>
          <p className="text-xl text-muted-foreground">
            Conoce nuestros clientes satisfechos que han mejorado su productividad
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
          <Carousel
            opts={{
              loop: true,
              duration: 2000, // Adjust for desired speed
              drag: false,
            }}
            className="w-full"
          >
            <CarouselContent
              className="-ml-1 flex transition-none"
              style={{ transform: "translateX(0%)" }}
              ref={carouselRef}
            >
              {logoImages.map((imageUrl, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 lg:basis-1/4 px-1"
                >
                  <div className="h-32 flex items-center justify-center bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`Client Logo ${index + 1}`}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
