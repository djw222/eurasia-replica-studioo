import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UeberUnsSection from "@/components/UeberUnsSection";
import SportartenSection from "@/components/SportartenSection";
import TrainingszeitenSection from "@/components/TrainingszeitenSection";
import ImpressumSection from "@/components/ImpressumSection";

const Index = () => {
  useEffect(() => {
    // Add dark class for the purple theme
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <HeroSection />
        <UeberUnsSection />
        <SportartenSection />
        <TrainingszeitenSection />
        <ImpressumSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary border-t border-foreground/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Eurasia Sport & Philosophy e.V. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
