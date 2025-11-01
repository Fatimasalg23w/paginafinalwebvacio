import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    production: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      years: 32,
      clients: 200,
      production: 300,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        production: Math.floor(targets.production * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      value: counts.years,
      suffix: "+",
      label: "Años de Experiencia",
      description: "Liderando el mercado mexicano",
    },
    {
      value: counts.clients,
      suffix: "+",
      label: "Clientes Satisfechos",
      description: "Confiando en nuestras soluciones",
    },
    {
      value: counts.production,
      suffix: "%",
      label: "Mayor Producción",
      description: "Hasta un 300% más eficiente",
    },
  ];

  return (
    <section ref={sectionRef} className="py-5 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-white/10 border border-white/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:glow-effect ${
                isVisible ? "animate-fade-in" : "opacity-96"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">
                {stat.value}
                {stat.suffix}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;