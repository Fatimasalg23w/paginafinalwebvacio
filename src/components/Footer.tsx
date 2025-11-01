import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Contactanos
            </h3>
            <p className="text-muted-foreground mb-4">
              Contamos con +32 años de experiencia en sistemas de alto vacío, bombas industriales y soluciones de hermeticidad para la industria mexicana.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#bombas" className="text-muted-foreground hover:text-primary transition-colors">
                  Bombas de vacio
                </a>
              </li>
              <li>
                <a href="#filtradoras" className="text-muted-foreground hover:text-primary transition-colors">
                  Filtradoras y Desgasificadoras
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Mas Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#secado" className="text-muted-foreground hover:text-primary transition-colors">
                  Secado al Vacio
                </a>
              </li>
              <li>
                <a href="#detectores" className="text-muted-foreground hover:text-primary transition-colors">
                  Detectores de fuga, metalizadoras, liofilizadoras y más
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            © {currentYear} Servicios y equipos de vacio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
