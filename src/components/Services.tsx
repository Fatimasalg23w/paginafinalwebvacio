import { useState } from "react";
import { Gauge, Fan, Filter, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "bombas",
      icon: Gauge,
      title: "Bombas y sistemas de vacío",
      description: "Soluciones integrales para sistemas de vacío industriales.",
      extraDescription:
        "Sistemas de vacío completos con accesorios como vacuómetros digitales, mangueras metálicas de 3, 4 y 6 pulgadas, válvulas reductoras, empaques compatibles con aceite dieléctrico y tornillería especializada.",
      video: "https://www.pexels.com/es-es/download/video/12891228/",
      features: [
        "Venta de equipos nuevos y reconstruidos.",
        "Reparación, reconstrucción y mantenimiento.",
        "Remanufactura de partes dañadas (pistones, rotores, estatores, válvulas de media luna, etc.).",
        "Sistemas personalizados según aplicación, refacciones y más.",
      ],
      images: [
        { src: "/bomba de paletas rotatorias.png", caption: "Bomba de paletas rotatorias" },
        { src: "/bomba de vacio edwards.png", caption: "Bomba de vacío marca Edwards" },
        { src: "/welch1397.png", caption: "Vista lateral de bomba industrial" },
        { src: "/45KW.png", caption: "Sistema de vacío completo" },
        { src: "/bomba71CFM.png", caption: "Detalle de válvulas y conexiones" },
        { src: "/piezalimpia.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/piezasucia.png", caption: "Prueba de hermeticidad en transformador" },
      ],
    },
    {
      id: "filtradoras",
      icon: Fan,
      title: "Filtradoras y desgasificadoras de aceite",
      description:
        "Eliminación de gases como nitrógeno, oxígeno, monóxido y bióxido de carbono, humedad, sin que el aceite regenerado pierda sus propiedades.",
      extraDescription:
        "En un solo paso usted puede eliminar de 2,800 a 1 partícula entre 5–10 micrones. Conoce nuestros casos de éxito.",
      video: "https://www.pexels.com/es-es/download/video/30243438/",
      features: [
        "Venta de equipos nuevos y reconstruidos, reconstrucción, mantenimiento y reparación de sistemas de tratamiento de aceite.",
        "Servicio de filtrado y desgasificación en sus instalaciones.",
        "Renta de equipos completos.",
        "Aplicables para aceite de transformador, hidráulico, de corte, de engranes, de templado, mineral o sintético.",
      ],
      images: [
        { src: "/desgasificadoradeaceite.png", caption: "Equipo de filtrado industrial" },
        { src: "/tableroelectricodesgasificadora.png", caption: "Desgasificadora en operación" },
        { src: "/tableroenmalestadodesgasificadora.png", caption: "Sistema portátil de filtrado" },
        { src: "/tableroelectrico2.png", caption: "Sistema portátil de filtrado" },
        { src: "/tableroelectrico3.png", caption: "Sistema portátil de filtrado" },
      ],
    },
    {
      id: "secado",
      icon: Filter,
      title: "Secado al vacío",
      description:
        "Servicio de secado de tanques e intercambiadores de calor, secado de transformadores al vacío, renta de sistemas de vacío completos para secado de transformador.",
      extraDescription:
        "Sistemas de filtración con alta eficiencia para aceites dieléctricos, líquidos hidráulicos y transformadores, con accesorios modulares para fácil integración.",
      video: "https://www.pexels.com/es-es/download/video/10058364/",
      features: [
        "Secado de tanques e intercambiadores de calor o cualquier otro con agua, por prueba hidrostática.",
        "Secado de transformadores al vacío nuevos y reparados con equipos de menos de 100 micrones.",
        "Renta de sistemas de vacío completos (bomba, vacuómetro, manguera metálica, válvulas para dieléctrico y tornillería) para secado de transformador.",
        "Sistemas de filtración portátiles.",
      ],
      images: [
        { src: "/desgasificadora.png", caption: "Transformador en proceso de secado" },
        { src: "/secadotanques.png", caption: "Sistema de vacío aplicado a tanque" },
        { src: "/tanques.png", caption: "Sistema de vacío aplicado a tanque" },
        { src: "/tanquescriogenicos.png", caption: "Sistema de vacío aplicado a tanque" },
        { src: "/secadotanques.png", caption: "Sistema de vacío aplicado a tanque" },
        { src: "/secadoalvacio.png", caption: "Sistema de vacío aplicado a tanque" },
      ],
    },
    {
      id: "detectores",
      icon: Package,
      title: "Detectores de fuga y otros servicios",
      description:
        "Detectores de fuga líquidos, pruebas de hermeticidad de transformadores, reparación de desgasificadoras, repuestos y accesorios para equipos de vacío.",
      extraDescription:
        "Detección de fugas para varios gases tales como: gases refrigerantes, gas helio, por sniffing (dentro del tanque, cámara o tubería), por evacuación o vacío. Además contamos con detectores de fuga líquido de marca propia, probados en nuestros sistemas y servicios en otras instalaciones.",
      video: "https://www.pexels.com/es-es/download/video/12891228/",
      features: [
        "Detectores de fuga líquidos.",
        "Construcción de metalizadoras.",
        "Construcción de liofilizadoras para la industria alimenticia y farmacéutica.",
        "Precios accesibles, contratos flexibles y facilidades de pago. También aceptamos sistemas en mal estado a cuenta.",
      ],
      images: [
        { src: "/metalizadoraproceso.png", caption: "Detector de fuga líquido en acción" },
        { src: "/metalizadorapiezas.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/liofilizadora.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/piezasmetalizadas.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/detectordefuga.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/detectarfugas.png", caption: "Prueba de hermeticidad en transformador" },
        { src: "/Liofilizadoradefruta.png", caption: "Prueba de hermeticidad en transformador" },
    
      ],
    },
  ];

  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  const [imageIndices, setImageIndices] = useState<number[]>(
    Array(services.length).fill(0)
  );
   return (
    <section className="py-0">
      {services.map((service, index) => {
        const currentImageIndex = imageIndices[index];

        const handlePrev = () => {
          const newIndices = [...imageIndices];
          newIndices[index] =
            (newIndices[index] - 1 + service.images.length) % service.images.length;
          setImageIndices(newIndices);
        };

        const handleNext = () => {
          const newIndices = [...imageIndices];
          newIndices[index] = (newIndices[index] + 1) % service.images.length;
          setImageIndices(newIndices);
        };
        return (
  <div
    key={service.id}
    id={service.id}
    className={`relative parallax-section min-h-screen flex flex-col justify-center ${
      index % 2 === 0
        ? "bg-background"
        : "bg-black-to-b from-background to-card"
    }`}
  >
    {zoomSrc && (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <div className="relative w-[950px] h-[950px] bg-black rounded-lg flex items-center justify-center">
          {/* Botón de cerrar */}
          <button
            onClick={() => setZoomSrc(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/70 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center z-[60]"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Imagen ampliada */}
          <img
            src={zoomSrc}
            alt="Zoom"
            className="max-w-full max-h-full object-contain z-40"
          />
        </div>
      </div>
    )}

       
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              >
                <source src={service.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/80 z-10" />
            </div>

            <div className="container mx-auto px-4 z-20 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
                <Card className="bg-black/20 backdrop-blur-sm border-primary/100">
                  <CardHeader className="flex flex-col items-center gap-4">
                    <CardTitle className="text-4xl text-primary text-center">
                      Galería
                    </CardTitle>

                    <div className="flex items-center justify-center gap-9">
                      <button
                      onClick={handlePrev}
                      className="text-gray-300 hover:text-gray-100 bg-gray-700/40 rounded-full p-2 transition">
                         <span className="text-2xl font-bold">‹</span>
                          </button>

  <img
    src={service.images[currentImageIndex].src}
    alt={`Imagen ${currentImageIndex + 1}`}
    className="w-[400px] h-[400px] object-cover rounded-lg cursor-zoom-in"
    onClick={() => setZoomSrc(service.images[currentImageIndex].src)}
  />

  <button
    onClick={handleNext}
    className="text-gray-300 hover:text-gray-100 bg-gray-700/40 rounded-full p-2 transition"
  >
    <span className="text-2xl font-bold">›</span>
  </button>
</div>

               

                    <p className="text-white italic text-sm text-center mt-2">
                      {service.images[currentImageIndex].caption}
                    </p>
                  </CardHeader>
                </Card>

                {/* Tarjeta derecha: Información del servicio */}
                <Card className="border-primary/100 bg-card/60 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-sm md:text-5xl text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xl text-muted-foreground mt-6">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5 mb-6 text-lg">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.extraDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;

