import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: " Caso de éxito: Reconstrucción de varias desgasificadoras de aceite dielectrico para transformador de CFE ",
      excerpt: "Conoce el caso de CFE, enterate como nuestros especialistas ayudaron a esta empresa publica a alcanzar un mayor volumen de produccion y reducción de costos en sus procesos, gracias a la reconstruccion de varias desgasificadoras en estado critico.",
      date: "2025",
      category: "Caso de Éxito",
      content: "Descubré como la implementación de estos sistemas dió resultados en producción, como si fueran practicamente equipos nuevos.",
    },
    {
      title: "Industrias Dranmak y la mejora del 300% de su producción en aceite dielectrico",
      excerpt: "Conoce el caso de industrias dranmak y como mejoraron su producción, gracias a nuestra desgasificadoras, aumentando los niveles de calidad en el producto de sus lubricantes. ",
      date: "2025",
      category: "Caso de Éxito",
      content: "Descubre como este sistema ha ayudado a mejorar sus procesos durante más de 9 años. ",
    },
    {
      title: "Caso de Exito: Refineria dos bocas ",
      excerpt: "Detección de micro/nanofugas en intercambiadores gigantes. Secado despues de prueba hidrostatica con humedad final del 0.3%",
      date: "2025",
      category: "Caso de Éxito",
      content: "Conoce el caso de Refineria dos bocas, como gracias a nuestro detector de fugas liquido y nuestro Secado a intercambiadores, ayudo a que mejoraran su produccion y mejoraran la hermeticidad de sus sistemas",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-gradient">Blog</span>
          </h4>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artículos, casos de éxito y guías técnicas sobre tecnología de vacío
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:glow-effect group"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.content}
                </p>
                <a href="http://localhost:8082"
                target="_blank"
                rel="noopener noreferrer"
                 className="inline-flex items-center text-primary hover:underline group">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
