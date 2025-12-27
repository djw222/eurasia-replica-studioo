import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white uppercase leading-tight animate-fade-up drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Die Kampfsportschule
          <br />
          <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">in Berlin Neukölln</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
