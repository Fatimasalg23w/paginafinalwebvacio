const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="https://www.pexels.com/es-es/download/video/5272700/" type="video/mp4" />
      </video>

      {/* Capa negra difuminada */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Gradiente adicional si lo deseas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-20" />

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-5xl font-bold text-center mb-6">
            <span className="text-red-600">Acerca de</span> <span className="text-white">Nosotros</span>
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
              Podrás encontrar además servicios de secado al vacío, filtradoras y desgasificadoras de aceite, secado para tanques e intercambiadores de calor o cualquier otro por prueba hidrostática. Secado de transformadores al vacío, renta y venta de sistemas de vacío completos y accesorios. Detectores de fugas, rehabilitación de partes dañadas y más.
            </p>
            <p className="text-primary font-semibold text-xl">
             Hemos ayudado a nuestros clientes a aumentar su producción hasta en un 300% mediante la implementación de nuestras soluciones de vacío, tu podrías ser el siguiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;