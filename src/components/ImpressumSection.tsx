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
              Döndü Tahtaci <span className="text-background/70">​( Schatzmeisterin ) </span>
            </p>
            
            <p>
              Rollbergstraße 73<br />
              12053 Berlin Neukölln
            </p>
            
            <div className="space-y-2">
              <p>Telefon : 01778460823</p>
              <p>E-Mail : info@eurasiasportakademie.de</p>
            </div>
            
            <div className="pt-4 border-t border-background/20">
              <p className="font-semibold mb-2">Berliner Sparkasse</p>
              <p>Eurasia Sportakademie e.V.</p>
              <p>DE15 1005 0000 0191 3729 27</p>
              <p>BELADEBEXXX</p>
            </div>
            
            <a href="https://www.paypal.com/pools/c/9l7CGFETaT" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors uppercase tracking-wide">
              Donate
            </a>
            
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
          {/* Phone button with hover options */}
          <div className="group relative">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-green-500 cursor-pointer hover:scale-110 transition-transform">
              <Phone size={24} className="text-white" />
            </div>
            {/* Hover options */}
            <div className="absolute right-16 top-1/2 -translate-y-1/2 flex gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <a 
                href="tel:+4917784608823" 
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Anrufen"
                title="Anrufen"
              >
                <Phone size={20} className="text-accent-foreground" />
              </a>
              <a 
                href="https://wa.me/4917784608823" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
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