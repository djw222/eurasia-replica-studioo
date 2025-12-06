import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UeberUnsSection from "@/components/UeberUnsSection";
import SportartenSection from "@/components/SportartenSection";
import TrainingszeitenSection from "@/components/TrainingszeitenSection";
import ImpressumSection from "@/components/ImpressumSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UeberUnsSection />
        <SportartenSection />
        <TrainingszeitenSection />
        <ImpressumSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground border-t border-background/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Eurasia Sportakademie e.V. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
