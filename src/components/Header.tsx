import { useState } from "react";
import { Menu, X } from "lucide-react";
const navItems = [{
  label: "Über uns",
  href: "#ueber-uns"
}, {
  label: "Sportarten",
  href: "#sportarten"
}, {
  label: "Trainingszeiten",
  href: "#trainingszeiten"
}, {
  label: "Impressum",
  href: "#impressum"
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left nav items - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-foreground font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide">
                {item.label}
              </button>)}
          </nav>

          {/* Logo - center */}
          <button onClick={() => handleNavClick("#hero")} className="flex flex-col items-center">
            <span className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
              EURASIA SPORTAKADEMIE   
            </span>
            
          </button>

          {/* Right nav items - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(2).map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-foreground font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide">
                {item.label}
              </button>)}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {navItems.map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-foreground font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide text-left">
                {item.label}
              </button>)}
          </nav>}
      </div>
    </header>;
};
export default Header;