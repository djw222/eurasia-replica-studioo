import { useEffect, useRef, useState } from "react";

const sports = [
  {
    name: "Taekwondo",
    description: "Koreanische Kampfkunst mit spektakulären Tritttechniken. Fördert Flexibilität, Schnelligkeit und mentale Disziplin.",
  },
  {
    name: "Boxen",
    description: "Klassischer Kampfsport für Ausdauer, Kraft und Koordination. Perfekt für Fitness und Selbstverteidigung.",
  },
  {
    name: "Judo",
    description: "Japanische Wurf- und Bodenkampfkunst. Lehrt Respekt, Technik und die effiziente Nutzung von Kraft.",
  },
  {
    name: "Kickboxen",
    description: "Dynamische Kombination aus Boxen und Tritttechniken. Steigert Ausdauer, Kraft und Selbstverteidigungsfähigkeiten.",
  },
  {
    name: "BJJ",
    description: "Brazilian Jiu-Jitsu – Bodenkampfkunst mit Fokus auf Hebel und Würgetechniken. Effektive Selbstverteidigung für alle Größen.",
  },
];

const SportartenSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sportarten"
      ref={sectionRef}
      className="min-h-screen bg-foreground py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-background mb-6">
            Ein vielfältiges Angebot an Disziplinen für Körper und Geist
          </h2>
          <p className="text-background/80 text-lg max-w-3xl mx-auto">
            Kraftvolles Taekwondo, technisch präzises Judo, dynamisches Boxtraining oder 
            harmonisierendes Yoga – unser Sportangebot fördert die{" "}
            <span className="underline text-accent">körperliche und mentale Fitness</span> und ist 
            so abwechslungsreich wie unsere Gemeinschaft.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <div
              key={sport.name}
              className={`flip-card h-64 cursor-pointer ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              tabIndex={0}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 bg-background/10 border border-background/30 rounded-xl flex items-center justify-center">
                  <h3 className="font-display text-3xl md:text-4xl text-background uppercase">
                    {sport.name}
                  </h3>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-background rounded-xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="font-display text-xl text-accent uppercase mb-4">
                      {sport.name}
                    </h3>
                    <p className="text-foreground">
                      {sport.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className={`h-64 bg-accent rounded-xl flex flex-col items-center justify-center p-6 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-accent-foreground uppercase text-sm tracking-wide font-semibold mb-2">
              Trau dich!
            </p>
            <div className="w-8 h-0.5 bg-accent-foreground mb-4"></div>
            <p className="text-accent-foreground">
              Du möchtest bei uns mitmachen? Dann komm einfach vorbei!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportartenSection;
