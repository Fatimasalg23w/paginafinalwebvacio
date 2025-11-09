import { useState, useEffect } from "react";
import { Gauge, Fan, Filter, Package } from "lucide-react";
import { Helmet } from "react-helmet-async";

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
      features:[
  "🏗️ Venta de equipos nuevos y reconstruidos.",
  "🛠️ Reparación, reconstrucción y mantenimiento.",
  "🧱 Remanufactura de partes dañadas (pistones, rotores, estatores, válvulas de media luna, etc.).",
  "⚙️ Sistemas personalizados según aplicación, refacciones y más."
]
,

      images: [
        { src: "/webp/desgasificadoradeaceite1.webp", caption: "Sistema para secado de transformador de alta velocidad, autonomo, puede operar a alta presion- Vista frontal" },
        { src: "/webp/sistemadefiltracion.webp", caption: "Vista-lateral-Sistema especial para secados rapidos en transformadores + 220 MVA" },
        { src: "/webp/bombadepaletasrotatorias.webp", caption: "Sistema de vacio especial para secado rapido." },
        { src: "/webp/reparacionsistemasdevacio.webp", caption: "Sistema STOKES- Bomba+Booster reacondicionado." },
        { src: "/webp/sistemasdestruidos.webp", caption: "Bomba+Booster STOKES antes de reacondicionamiento." },
        { src: "/webp/bombasdevacio.webp", caption: "Sistemas varios reacondicionados Bomba+Piston+Booster." },
        { src: "/webp/bombasdevacioenoperacion.webp", caption: "Prueba de medición de equipos reacondicionados." },
        { src: "/webp/bombadevacioplanta.webp", caption: "Bomba generica de pistón rotatorio reacondicionada." },
        { src: "/webp/sistemadevacio.webp", caption: "Kit completo de accesorios para secado de transformador." },
        { src: "/webp/bombadevacioenfuncion.webp", caption: "Sistema de alto vacio desgasificadora 5,000 LTS/HR." },
        { src: "/webp/bombasellodeagua.webp", caption: "Bomba de sello de agua." },
        { src: "/webp/bombasdevacio1.webp", caption: "Bomba de piston rotatorio 7.5 HP reacondicionada." },
        { src: "/webp/STOKES820.webp", caption: "Sistema de secado rapido en desgasificadora 9,0000 LTS/H" },
        { src: "/webp/reparacionpiezasbombasdevacio.webp", caption: "Reparacion total Boosters Stokes" },
        { src: "/webp/reparacionrotor.webp", caption: "Reparacion Boosters Varios" },
        
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
      features: [
  "🏭 Venta de equipos nuevos y reconstruidos, reconstrucción, mantenimiento y reparación de sistemas de tratamiento de aceite.",
  "🧪 Servicio de filtrado y desgasificación en sus instalaciones.",
  "🛢️ Aplicables para aceite de transformador, hidráulico, de corte, de engranes, de templado, mineral o sintético."
]
,
     images: [
        { src: "/webp/desgasificadoradeaceitesistema.webp", caption: "Equipo de filtrado industrial- Equipo STOKES 420-20, totalmente reconstruido| CFE" },
        { src: "/webp/Reconstrucciondesgasificadoras.webp", caption: "Equipo de filtrado industrial CFE estado inicial- Camara Exterior." },
        { src: "/webp/desgasificadoradeaceite.webp", caption: "Equipo de filtrado industrial CFE estado final- Camara Exterior." },
        { src: "/webp/STOKES420.webp", caption: "Tablero electrico reconstruido para equipo de filtrado industrial- Interior." },
        { src: "/webp/Sistemastokes.webp", caption: "Tablero electrico: estado inicial de equipo de filtrado industrial- Interior." },
        { src: "/webp/reparaciondedesgasificadora.webp", caption: "Tablero electrico de equipo reconstruido de filtrado industrial en funcionamiento- Exterior." },
        { src: "/webp/sistemastokes420.webp", caption: "Tablero electrico de equipo de filtrado industrial: Estado inicial- Exterior." },
        { src: "/webp/filtradodeaceite.webp", caption: "Parte trasera de sistema- Estado final del equipo de filtrado industrial." },
        { src: "/webp/filtradoradeaceite.webp", caption: "Parte trasera de sistema - Estado incial del equipo de filtrado industrial." },
        { src: "/webp/filtradodeaceitesistema.webp", caption: "Equipo recien Fabricado- Filtradora de aceite capacidad 4000LTS por hora." },
        { src: "/webp/sistemadefiltradodeaceite.webp", caption: "Equipo recien Fabricado por nuestros especialistas funcionando en planta." },
        { src: "/webp/sistemadetratamientodeaceite.webp", caption: "Filtradora de aceite 4000LTS/H- Vista Lateral." },
        { src: "/webp/filtradora.webp", caption: "Filtradora de aceite 4000LTS/H- en planta." },
        { src: "/webp/reconstrucciondefiltradoras.webp", caption: "Filtradora de aceite 4000LTS/H- Vista Frontal." },
        { src: "/webp/desgasificadoradeaceitereconstruida.webp", caption: "Sistema 4500 LTS/H equipo funcionando desde hace 9 años." },
        { src: "/webp/reparaciondesgasificadora.webp", caption: "Vista lateral-Sistema 4500 LTS/H equipo funcionando desde hace 9 años." },
        { src: "/webp/filtradoradeaceiteenplanta.webp", caption: "Sistema 4500 LTS/H en remolque." },
        { src: "/webp/sistemadesgasificado.webp", caption: "Transporte de Sistema 4500 LTS/H llegando a planta." },
        { src: "/webp/sistemadesgasificadoenplanta.webp", caption: "Sistema 4500 LTS/H maniobras en planta." },
        { src: "/webp/reparacionbombasdevacio.webp", caption: "Sistema 9,000 LTS/H estado inicial." },
        { src: "/webp/desgasificadorareparacion.webp", caption: "Sistema 9,000 LTS/H - en proceso de reconstrucción." },
        { src: "/webp/filtradora6000lts.webp", caption: "Sistema 9,000 LTS/H - Terminado en remolque." },
        { src: "/webp/reparacionfiltradora.webp", caption: "Parte posterior de Sistema 9,000 LTS/H - Terminado en remolque con accesorios." },
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
      features: [
  "💧 Secado de tanques e intercambiadores de calor o cualquier otro con agua, por prueba hidrostática.",
  "⚡ Secado de transformadores al vacío nuevos y reparados con equipos de menos de 100 micrones.",
  "🔄 Renta de sistemas de vacío completos (bomba, vacuómetro, manguera metálica, válvulas para dieléctrico y tornillería) para secado de transformador.",
  "🧳 Sistemas de filtración portátiles."
]
,
      images: [
        { src: "/webp/secadodetanquescriogenicos.webp", caption: "Secado de Tanque Intercambiador de calor de 50 Toneladas |Usuario Final: Refineria Dos Bocas." },
        { src: "/webp/secadodetanques.webp", caption: "Maniobras en planta de fabricación- Intercambiador de calor para refineria." },
        { src: "/webp/serviciosecadodetanques.webp", caption: "Revisión de humedad alcanzada en intercambiador de refineria." },
        { src: "/webp/tanquescontaminadosporpruebahidrostatica.webp", caption: "Sistema de vacio secando tanque con humedad relativa final 2%" },
        { src: "/webp/secadodetransformador.webp", caption: "Aplicando vacio de aislamiento en espacio anular de tanques criogenicos de 80,000 LTS cada uno." },
        { src: "/webp/serviciosecadodetransformador.webp", caption: "Instalación de valvulas y manguera metalica para secado de transformador 30 MVA." },
        { src: "/webp/serviciodesecadodetransformador.webp", caption: "En proceso de secado de transformador de 20 MVA hasta 0.35% humedad relativa" },
        { src: "/webp/secadoatransformador.webp", caption: "Aplicación de vacio a tanques criogenicos de gran volumen a toda una planta criogenica."} ,
         { src: "/webp/sistemadefiltracion.webp", caption: "Sistema para secado de transformador de alta velocidad, autonomo, puede operar a alta presion- Vista lateral" },
         { src: "/webp/desgasificadoradeaceite1.webp", caption: "Sistema para secado de transformador de alta velocidad, autonomo, puede operar a alta presion- Vista frontal" },
         { src: "/webp/sistemadevacio.webp", caption: "Kit completo de accesorios para secado de transformador" },
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
      video: "https://www.pexels.com/download/video/4404095/",
      features: [
  "🕵️‍♂️ Detectores de fuga líquidos.",
  "🏗️ Construcción de metalizadoras.",
  "⚗️ Construcción de liofilizadoras para la industria alimenticia y farmacéutica.",
  "💸 Precios accesibles, contratos flexibles y facilidades de pago. También aceptamos sistemas en mal estado a cuenta."
]
,
      images: [
        { src: "/webp/detectordefugas.webp", caption: "Detector cazafugas liquido por burbuja: No explosivo, no reactivo, no contaminante, no flamable. | Para uso en: Transformadores, Tuberias, Tanques y todo proceso Hermetico" },
        { src: "/webp/detecciondefugas.webp", caption: "Prueba de hermeticidad- Uso de Detector cazafugas- Marca propia." },
        { src: "/webp/localizarfugasensistema.webp", caption: "Localización de fugas- Aplicacion de liquido cazafugas." },
        { src: "/webp/liofilizadora.webp", caption: "Liofilizadora piloto para muestras- Industrial alimenticia y farmaceutica- Diseño para pruebas alimenticias y medicas." },
        { src: "/webp/liofilizadoradefruta.webp", caption: "Liofilizadora comercial para volumenes medios de alimentos o medicamentos." },
        { src: "/webp/localizaciondefugas.webp", caption: "Detección de fugas, liquido cazafugas aplicado." },
        { src: "/webp/microynanofugas.webp", caption: "Resultado de prueba de hermeticidad-Detección de micro y nanofugas usando"}, 
    
      ],
    },
  ];
 const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  const [imageIndices, setImageIndices] = useState<number[]>(
    Array(services.length).fill(0)
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomSrc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicios | Bombas y Sistemas de Vacío Industriales</title>
        <meta
          name="description"
          content="Venta, reparación y personalización de sistemas de vacío industriales. Galería interactiva y detalles técnicos."
        />
        <meta property="og:title" content="Servicios de Vacío Industriales" />
        <meta
          property="og:description"
          content="Expertos en soluciones de vacío para procesos industriales."
        />
        <meta property="og:image" content="/images/og-servicios.jpg" />
      </Helmet>

      <section className="py-0">
        {zoomSrc && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
            <div className="relative max-w-[90vw] max-h-[90vh] bg-black rounded-lg flex items-center justify-center p-4">
              <button
                onClick={() => setZoomSrc(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-600 hover:bg-red-700 border border-white rounded-full w-10 h-10 flex items-center justify-center z-[110] transition-colors"
                aria-label="Cerrar imagen ampliada"
              >
                ×
              </button>
              <img
                src={zoomSrc}
                alt="Imagen ampliada"
                className="w-auto h-auto max-w-[100vw] max-h-[100vh] object-contain z-[105] rounded-lg shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        )}

        {services.map((service, index) => {
          const currentImageIndex = imageIndices[index];

          const handlePrev = () => {
            const newIndices = [...imageIndices];
            newIndices[index] =
              (newIndices[index] - 1 + service.images.length) %
              service.images.length;
            setImageIndices(newIndices);
          };

          const handleNext = () => {
            const newIndices = [...imageIndices];
            const totalImages = service.images?.length || 0;
            newIndices[index] =
              totalImages > 0
                ? (newIndices[index] + 1) % totalImages
                : 0;
            setImageIndices(newIndices);
          };

          return (
            <div
              key={service.id}
              id={service.id}
              className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            >
              <video
                src="https://www.pexels.com/download/video/30243438/"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/75 z-10" />

              <div className="container mx-auto px-4 z-20 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 items-stretch">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-4xl text-[#ED213A] text-center">
                      Galería
                    </h2>

                    {service.images.length > 0 && (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="w-9 h-9 bg-[#ED213A] text-white hover:bg-white hover:text-[#ED213A] rounded-full flex items-center justify-center transition"
                          aria-label="Imagen anterior"
                        >
                          <span className="text-2xl font-bold">‹</span>
                        </button>

                        <img
                          src={service.images[currentImageIndex].src}
                          alt={service.images[currentImageIndex].caption}
                          loading="lazy"
                          width={440}
                          height={440}
                          className="w-[440px] h-[440px] object-cover rounded-lg cursor-zoom-in"
                          onClick={() =>
                            setZoomSrc(service.images[currentImageIndex].src)
                          }
                        />

                        <button
                          onClick={handleNext}
                          className="w-9 h-9 bg-[#ED213A] text-white hover:bg-white hover:text-[#ED213A] rounded-full flex items-center justify-center transition"
                          aria-label="Imagen siguiente"
                        >
                          <span className="text-2xl font-bold">›</span>
                        </button>
                      </div>
                    )}

                    {service.images.length > 0 && (
                      <p className="italic text-xl text-center mt-0 text-white">
                        {service.images[currentImageIndex].caption}
                      </p>
                    )}
                  </div>

                  <Card className="mt-12 h-full max-h-[520px] bg-white/80 backdrop-blur-sm border-white/30 flex flex-col">
                    <CardHeader className="text-black space-y-2">
                      <h1 className="text-4xl font-bold text-[#ED213A] text-center lg:text-left">
                        {service.title}
                      </h1>
                      <h2 className="text-2xl font-semibold leading-snug">
                        {service.description}
                      </h2>
                      <h3 className="text-xl font-semibold">
                        Servicios disponibles
                      </h3>
                    </CardHeader>

                    <CardContent className="text-black pb-4">
                      <div className="space-y-1 text-base">
                        {service.features.map((feature, idx) => (
                          <div key={idx}>{feature}</div>
                        ))}
                      </div>

                      <div className="mt-3 space-y-1">
                        <h4 className="text-lg font-semibold">Nota:</h4>
                        <p className="text-[1rem] leading-relaxed">
                          {service.extraDescription}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Services;