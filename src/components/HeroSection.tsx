const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-background flex items-center justify-center pt-24 md:pt-32"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-foreground uppercase leading-tight animate-fade-up">
          Die Kampfsportschule
          <br />
          <span className="text-accent">in Berlin-Neukölln</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
