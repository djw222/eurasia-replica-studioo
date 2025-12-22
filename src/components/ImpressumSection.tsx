import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, ChevronRight, Instagram } from "lucide-react";
import mapLocation from "@/assets/map-location.png";
const ImpressumSection = () => {
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
  return <section id="impressum" ref={sectionRef} className="bg-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Impressum */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl text-background mb-8">
            Impressum
          </h2>
          
          <div className="space-y-6 text-background">
            <p className="font-semibold text-lg">
              Eurasia Sportakademie e.V.
            </p>
            
            <p>
              Döndü Tahtaci <span className="text-background/70">(Inhaberin)</span>
            </p>
            
            <p>
              Rollbergstraße 73<br />
              12053 Berlin Neukölln
            </p>
            
            <div className="space-y-2">
              <p>Telefon : 01778460823</p>
              <p>E-Mail : info@eurasia.de</p>
            </div>
            
            <div className="pt-4 border-t border-background/20">
              <p className="font-semibold mb-2">Berliner Sparkasse</p>
              <p>Eurasia Sportakademie e.V.</p>
              <p>DE15 1005 0000 0191 3729 27</p>
              <p>BELADEBEXXX</p>
            </div>
            
            
          </div>
        </div>

        {/* Location */}
        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
        animationDelay: '0.2s'
      }}>
          <h3 className="font-display text-3xl md:text-4xl text-background mb-8">
            Unser Standort in Berlin Neukölln
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-video">
              <img src={mapLocation} alt="Standort Dojo Eurasia - Rollbergstraße 73, 12053 Berlin Neukölln" className="w-full h-full object-cover" />
            </div>
            
            {/* Address card */}
            <div className="bg-background rounded-xl p-8">
              <p className="text-muted-foreground text-sm mb-2">Du findest uns in der</p>
              <p className="font-bold text-foreground text-lg">
                ROLLBERGSTRASSE 73
              </p>
              <p className="font-bold text-foreground text-lg mb-6">
                12053 BERLIN NEUKÖLLN
              </p>
              
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">U</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">3 Gehminuten von</p>
                    <p className="font-semibold text-foreground">U Boddinstraße</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold text-sm">S</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">6 Gehminuten via</p>
                    <p className="font-semibold text-foreground">S Hermannstraße</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 mt-6">
                <a href="https://maps.google.com/?q=Rollbergstraße+73,+12053+Berlin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-medium hover:opacity-80 transition-opacity">
                  GOOGLE MAPS <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className={`mt-20 grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
        animationDelay: '0.4s'
      }}>
          <div>
            <h4 className="text-background uppercase text-sm font-semibold tracking-wide mb-4">
              Öffnungszeiten
            </h4>
            <div className="w-8 h-0.5 bg-accent mb-4"></div>
            <p className="text-background/80">
              Von <span className="font-semibold text-background">Montag bis Samstag von 10 bis 20 Uhr</span> ist 
              unsere Trainingshalle geöffnet.
            </p>
          </div>
          
          <div>
            <h4 className="text-background uppercase text-sm font-semibold tracking-wide mb-4">
              Parkmöglichkeiten
            </h4>
            <div className="w-8 h-0.5 bg-accent mb-4"></div>
            <p className="text-background/80">
              Freie Parkplätze findest du meist in den umliegenden Straßen (z. B. Mittelweg).
            </p>
          </div>
          
          <div>
            <h4 className="text-background uppercase text-sm font-semibold tracking-wide mb-4">
              Wir suchen Sponsoren
            </h4>
            <div className="w-8 h-0.5 bg-accent mb-4"></div>
            <p className="text-background/80">
              Das Dojo Eurasia ist ein Herzensprojekt. Damit die Zukunft dieses Projekts gesichert ist, 
              suchen wir nach Unterstützung.
            </p>
          </div>
        </div>

        {/* Floating contact buttons */}
        <div className="fixed right-4 md:right-8 bottom-1/4 flex flex-col gap-3 z-40">
          <a href="tel:01778460823" className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg" aria-label="Anrufen">
            <Phone size={24} className="text-accent-foreground" />
          </a>
          <a href="mailto:info@eurasia.de" className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg" aria-label="E-Mail senden">
            <Mail size={24} className="text-accent-foreground" />
          </a>
          <a href="https://maps.google.com/?q=Rollbergstraße+73,+12053+Berlin" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg" aria-label="Standort anzeigen">
            <MapPin size={24} className="text-accent-foreground" />
          </a>
          <a href="https://www.instagram.com/eurasiasportakademie/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg" aria-label="Instagram">
            <Instagram size={24} className="text-accent-foreground" />
          </a>
        </div>
      </div>
    </section>;
};
export default ImpressumSection;