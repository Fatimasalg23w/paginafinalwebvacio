import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Becker from "@/assets/bomba de vacio becker.png";
import Busch from "@/assets/bomba de vacio busch.png";
import Edwards from "@/assets/bomba de vacio edwards.png";
import Kinney from "@/assets/bomba de vacio kinney.png";
import Leybold from "@/assets/bomba de vacio leybold.png";
import Stokes from "@/assets/bomba de vacio stokes.png";
import Alcatel from "@/assets/bomba de vacio alcatel.png";
import Pfeiffer from "@/assets/bomba de vacio pfeiffer.png";
import Varian from "@/assets/bomba de vacio varian.png";

const images = [
  Becker,
  Busch,
  Edwards,
  Kinney,
  Leybold,
  Stokes,
  Alcatel,
  Pfeiffer,
  Varian,
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollLeft = 0;
    const speed = 0.5;

    const animate = () => {
      scrollLeft += speed;
      if (scrollLeft >= container.scrollWidth / 2) {
        scrollLeft = 0;
      }
      container.scrollLeft = scrollLeft;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center parallax-section">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="https://www.pexels.com/es-es/download/video/30914505/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <div className="max-w-6xl mx-auto space-y-1 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
            <span className="text-gradient">+30 años de experiencia</span>
            <br />
            <span className="text-white">en la tecnología del vacío en México</span>
          </h1>
          <p className="text-xl md:text-xl text-white max-w-2xl mx-auto">
            Especialistas en fabricación, mantenimiento y reconstrucción de bombas de vacío | sistemas de alto vacío | Filtradoras y desgasificadoras | Renta de equipos de vacío | Asesoría técnica personalizada
          </p>

          {/* Carrusel de Marcas */}
          <div className="overflow-hidden relative mt-6">
            <div
              ref={scrollRef}
              className="flex overflow-x-scroll no-scrollbar whitespace-nowrap"
              style={{ scrollBehavior: 'auto' }}
            >
              {[...images, ...images].map((image, index) => (
                <img
                  key={`loop-${index}`}
                  src={image}
                  alt={`Bomba de Vacío ${index}`}
                  className="h-36 w-36 mx-6 inline-block"
                />
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-red text-white glow-effect group"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-black hover:bg-white"
              onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;