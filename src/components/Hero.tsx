import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ Imágenes WebP optimizadas
import Becker from "@/assets/bomba de vacio becker.webp";
import Busch from "@/assets/bomba de vacio busch.webp";
import Edwards from "@/assets/bomba de vacio edwards.webp";
import Kinney from "@/assets/bomba de vacio kinney.webp";
import Leybold from "@/assets/bomba de vacio leybold.webp";
import Stokes from "@/assets/bomba de vacio stokes.webp";
import Alcatel from "@/assets/bomba de vacio alcatel.webp";
import Pfeiffer from "@/assets/bomba de vacio pfeiffer.webp";
import Varian from "@/assets/bomba de vacio varian.webp";

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

const LazyVideo = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0">
      {visible && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source
            src="https://www.pexels.com/download/video/30914505/"
            type="video/mp4"
          />
        </video>
      )}
      <div className="absolute inset-0 bg-black/80 z-10" />
    </div>
  );
};

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
    <>
      <Helmet>
        <title>Expertos en Tecnología del Vacío | +30 Años de Experiencia</title>
        <meta
          name="description"
          content="Especialistas en bombas de vacío, sistemas de alto vacío, filtradoras, desgasificadoras y asesoría técnica en México."
        />
        <meta property="og:title" content="Tecnología del Vacío en México" />
        <meta
          property="og:description"
          content="Más de 30 años ofreciendo soluciones industriales en vacío. Cotiza con nosotros."
        />
        <meta property="og:image" content="/images/og-hero.jpg" />
      </Helmet>

      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center parallax-section"
      >
        <LazyVideo />

        <div className="container mx-auto px-6 z-20 text-center">
          <div className="max-w-6xl mx-auto space-y-1 animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              <span className="text-gradient">+30 años de experiencia</span>
              <br />
              <span className="text-white">
                en la tecnología del vacío en México
              </span>
            </h1>
            <p className="text-xl md:text-xl text-white max-w-2xl mx-auto">
              Especialistas en fabricación, mantenimiento y reconstrucción de
              bombas de vacío | sistemas de alto vacío | Filtradoras y
              desgasificadoras | Renta de equipos de vacío | Asesoría técnica
              personalizada
            </p>

            <div className="overflow-hidden relative mt-6">
              <div
                ref={scrollRef}
                className="flex overflow-x-scroll no-scrollbar whitespace-nowrap"
                style={{ scrollBehavior: "auto" }}
              >
                {[...images, ...images].map((image, index) => (
                  <img
                    key={`loop-${index}`}
                    src={image}
                    alt={`Bomba de Vacío ${index + 1}`}
                    width={180}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="h-36 w-36 mx-6 inline-block"
                  />
                ))}
              </div>
            </div>

          
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
  <Button
    size="lg"
    className="bg-primary hover:bg-red text-white glow-effect group"
    aria-label="Solicitar cotización"
    onClick={() =>
      document
        .querySelector("#contacto")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Solicitar Cotización
    <ArrowRight
      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
      aria-hidden="true"
    />
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="border-primary text-black hover:bg-white"
    aria-label="Conocer más sobre nosotros"
    onClick={() =>
      document
        .querySelector("#nosotros")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Conocer Más
  </Button>
</div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
