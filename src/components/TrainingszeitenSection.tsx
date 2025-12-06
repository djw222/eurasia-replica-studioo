import { useEffect, useRef, useState } from "react";

const TrainingszeitenSection = () => {
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
      id="trainingszeiten"
      ref={sectionRef}
      className="min-h-screen bg-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground italic uppercase mb-4">
            Aktuelle
            <br />
            <span className="text-accent">Trainingszeiten</span>
          </h2>
        </div>

        {/* Placeholder for schedule */}
        <div 
          className={`bg-card border border-border rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center justify-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="text-center">
            <p className="text-foreground text-lg uppercase tracking-wide mb-4">
              Trainingsplan kommt bald
            </p>
            <p className="text-muted-foreground max-w-md">
              Hier wird der vollständige Trainingsplan mit allen Zeiten und Sportarten angezeigt.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-accent uppercase tracking-wide font-semibold mb-4">
            Du willst mitmachen?
          </p>
          <p className="text-foreground max-w-2xl mx-auto">
            Wir bieten ein kostenloses Probetraining für jede von uns angebotene Sportart an. 
            Du musst dich nicht anmelden, sondern kannst einfach zu einer unserer Trainingszeiten vorbeikommen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingszeitenSection;
