import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Acerca de Nosotros | Soluciones de Vacío Industriales</title>
        <meta
          name="description"
          content="Expertos en bombas de vacío, secado industrial y sistemas completos para procesos eficientes."
        />
        <meta property="og:title" content="Acerca de Nosotros | Soluciones de Vacío" />
        <meta
          property="og:description"
          content="Optimiza tu producción con soluciones de vacío confiables y servicios especializados."
        />
        <meta property="og:image" content="/images/og-nosotros.jpg" />
      </Helmet>

      <section
        id="nosotros"
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right, #4169e1, #3eb8f0ff)", // RoyalBlue + Petrol
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/75 z-20" />

        <div className="container mx-auto px-4 relative z-30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-5xl font-bold text-center mb-6">
              <span className="text-red-600">Acerca de</span>{" "}
              <span className="text-white">Nosotros</span>
            </h2>
            <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-12" />

            <div className="space-y-6 text-lg text-white leading-relaxed">
              <p>
                <strong className="text-white">Nuestra misión</strong> es ofrecer una amplia gama de servicios para el área industrial en el ámbito del vacío, ayudando a las empresas a optimizar sus procesos de producción mediante soluciones de vacío eficientes y confiables.
              </p>
              <p>
                Nos especializamos en venta, reconstrucción y reparación de bombas de vacío de: pistón rotatorio, paletas rotatorias, secas de lóbulos, secas de turbina regenerativa, secas de editorial, etc.
              </p>
              <p>
                Nuestros años de experiencia nos avalan en el manejo de marcas como STOKES, KINNEY, ALCATEL, LEYBOLD, BT, VARIAN, PRECISION CIENTIFIC, WELCH, BALZERS-PFEIFFER, TUTHILL, SPENCER, EDWARDS, RIETSCHLE, ROOTS-DRESSER, ORION y más.
              </p>
              <p>
                Aquí podrán encontrar además servicios de secado al vacío, filtradoras y desgasificadoras de aceite, secado para tanques e intercambiadores de calor o cualquier otro por prueba hidrostática o cualquier otro con remanentes de humedad por prueba hidrostática; secado de transformadores al vacío, venta de sistemas de vacío completos y accesorios. Detectores de fugas, rehabilitación de partes dañadas y más.
              </p>
              <p className="text-white font-semibold text-xl">
                Hemos apoyado a nuestros clientes a aumentar su producción hasta en un 300% mediante la implementación de nuestras soluciones de vacío, permítenos ayudarte en el proceso para que tu empresa sea la siguiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
