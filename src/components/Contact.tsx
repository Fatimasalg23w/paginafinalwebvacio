import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// 🔐 Tus claves de EmailJS
const SERVICE_ID = "service_77fya8i";
const TEMPLATE_ID = "template_41u8ptn";
const PUBLIC_KEY = "zPdFhxdtkjxR9Z9VJ";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Intenta nuevamente o contáctanos por otro medio.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Expertos en vacío | Expertos en filtracion y desgasificación de aceite</title>
        <meta
          name="description"
          content="Contáctanos para asesoría técnica, cotizaciones y servicios especializados en vacío industrial."
        />
        <meta property="og:title" content="Contacto | Soluciones de Vacío" />
        <meta
          property="og:description"
          content="Estamos listos para atender tus necesidades de vacío industrial en toda la república mexicana."
        />
        <meta property="og:image" content="/images/og-contacto.jpg" />
      </Helmet>

      <section id="contacto" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contáctanos</span>
            </h3>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Estamos listos para atender tus necesidades de vacío industrial
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-28 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="font-gradient mb-1">Dirección</h2>
                      <p className="text-muted-foreground">
                        Estado de México (Servicio a toda la república mexicana)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="font-semibold mb-1">Teléfono</h2>
                      <p className="text-muted-foreground">
                        +52 (55) 57102944
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 (55) 1234-5678"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-white glow-effect"
                >
                  Enviar Mensaje
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
