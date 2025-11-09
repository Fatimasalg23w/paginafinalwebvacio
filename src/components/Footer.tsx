import { Facebook, Linkedin, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
         <title>Servicios y Equipos de Vacio| Expertos en filtracion y desgasificación de aceite</title>
        <meta
          name="description"
          content="Contáctanos y explora nuestros servicios de vacío industrial. Enlaces rápidos y redes sociales."
        />
        <meta property="og:title" content="Footer | Servicios y Equipos de Vacío" />
        <meta
          property="og:description"
          content="Más de 32 años de experiencia en vacío industrial. Conéctate con nosotros."
        />
        <meta property="og:image" content="/images/og-footer.jpg" />
      </Helmet>

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Contáctanos
              </h3>
              <p className="text-muted-foreground mb-4">
                Contamos con +32 años de experiencia en sistemas de alto vacío, bombas industriales y soluciones de hermeticidad para la industria mexicana.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Servicios-y-Equipos-de-Vacio/61583523715639"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/servicios-y-equipos-de-vacio-237a19395"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:serviciosyequiposdevacio@gmail.com"
                  aria-label="Enviar correo a Servicios y Equipos de Vacío"
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Inicio">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Nosotros">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#bombas" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Bombas de vacío">
                    Bombas de vacío
                  </a>
                </li>
                <li>
                  <a href="#filtradoras" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Filtradoras y Desgasificadoras">
                    Filtradoras y Desgasificadoras
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold mb-4">Más Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#secado" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Secado al Vacío">
                    Secado al Vacío
                  </a>
                </li>
                <li>
                  <a href="#detectores" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Detectores de fuga y otros equipos">
                    Detectores de fuga, metalizadoras, liofilizadoras y más
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir al Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Ir a Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              © {currentYear} Servicios y Equipos de Vacío. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
