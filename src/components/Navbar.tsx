import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio", external: false },
    { href: "#nosotros", label: "Nosotros", external: false },
    { href: "#bombas", label: "Bombas de Vacío", external: false },
    { href: "#filtradoras", label: "Filtradoras y desgasificadoras", external: false },
    { href: "#secado", label: "Secado al vacío", external: false },
    { href: "#detectores", label: "Detectores de fuga y más", external: false },
    { href: "http://localhost:8082/", label: "Blog", external: true }, // 👈 Enlace externo al blog
    { href: "#contacto", label: "Contacto", external: false },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center space-x-2"
            onClick={(e) => scrollToSection(e, "#inicio")}
          >
            <img
              src={logo}
              alt="Vacío y Hermeticidad Logo"
              className="h-30 w-40"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => {
              const isInternal = !link.external && link.href.startsWith("#");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  {...(isInternal && {
                    onClick: (e) => scrollToSection(e, link.href),
                  })}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="px-1 py-2 text-xl font-semibold text-white hover:text-primary hover:bg-white/10 rounded transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8 text-white" />
            ) : (
              <Menu className="h-8 w-8 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-2 space-y-1 border-t border-border">
            {navLinks.map((link) => {
              const isInternal = !link.external && link.href.startsWith("#");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  {...(isInternal && {
                    onClick: (e) => scrollToSection(e, link.href),
                  })}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="block px-4 py-3 text-lg font-semibold text-white hover:text-primary hover:bg-white/10 rounded transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
