const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-primary flex items-center justify-center pt-24 md:pt-32"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-primary-foreground italic uppercase leading-tight animate-fade-up">
          Die Kampfsportschule
          <br />
          in Berlin-Neukölln
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
