import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
const UeberUnsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="ueber-uns" ref={sectionRef} className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Herzlich Willkommen im Dojo Eurasia dem Trainingszentrum für Kampfsport aus Berlin
            </h2>
            
            <p className="text-foreground text-lg leading-relaxed">
              Unsere Kampfsportschule ist mehr als nur ein Ort des Trainings. Wir sind eine{" "}
              <span className="underline font-semibold text-accent">engagierte Gemeinschaft</span>, die Vielfalt, 
              Inklusion und den gemeinsamen Weg zu körperlicher und mentaler Stärke schätzt.
            </p>
            
            <p className="text-foreground text-lg leading-relaxed">
              Hier inmitten des lebendigen Stadtteils Neukölln setzen wir uns aktiv{" "}
              <span className="underline font-semibold text-accent">gegen Rassismus</span> ein und schaffen 
              einen Raum, in dem sich jeder willkommen fühlt und sein Potential frei entfalten kann.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => document.querySelector('#impressum')?.scrollIntoView({
              behavior: 'smooth'
            })} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-colors">
                ÜBER UNS <ChevronRight size={18} />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors">
                GRATIS PROBETRAINING <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right content - Values */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-muted-foreground uppercase tracking-wide text-sm mb-4">
                Wir stehen für
              </p>
              <div className="space-y-2">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent uppercase">
                  Gleichheit
                </h3>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground uppercase">
                  Diversität
                </h3>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent uppercase">
                  Inklusion
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
        animationDelay: '0.4s'
      }}>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 uppercase">
              Mitgliedschaft & Preise
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <p className="text-muted-foreground uppercase text-sm mb-2">Kinder</p>
                <p className="font-display text-3xl text-accent">35€</p>
                <p className="text-muted-foreground text-sm">pro Monat</p>
              </div>
              <div className="text-center p-6 border-y md:border-y-0 md:border-x border-border">
                <p className="text-muted-foreground uppercase text-sm mb-2">Jugendliche</p>
                <p className="font-display text-3xl text-accent">40€</p>
                <p className="text-muted-foreground text-sm">pro Monat</p>
              </div>
              <div className="text-center p-6">
                <p className="text-muted-foreground uppercase text-sm mb-2">Erwachsene</p>
                <p className="font-display text-3xl text-accent">50€</p>
                <p className="text-muted-foreground text-sm">pro Monat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UeberUnsSection;