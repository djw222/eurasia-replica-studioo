import { useEffect, useRef, useState } from "react";

const schedule = {
  Montag: [
    { time: "16:30 - 17:45", activity: "TKD BIS 10" },
    { time: "17:45 - 19:00", activity: "TKD AB 10" },
    { time: "19:00 - 20:00", activity: "BOXEN JUGENDLICHE" },
  ],
  Dienstag: [
    { time: "16:30 - 17:30", activity: "BOXEN KINDER" },
    { time: "17:30 - 18:30", activity: "BOXEN JUGENDLICHE" },
    { time: "18:30 - 19:30", activity: "BJJ ALLE ALTERSKLASSEN" },
  ],
  Mittwoch: [
    { time: "15:30 - 16:30", activity: "SPIELSTUNDE" },
    { time: "16:30 - 17:30", activity: "JUDO ALLE ALTERSKLASSEN" },
    { time: "17:30 - 18:30", activity: "KICKBOXEN ALLE ALTERSKLASSEN" },
    { time: "18:30 - 19:30", activity: "BJJ ALLE ALTERSKLASSEN" },
  ],
  Donnerstag: [
    { time: "12:00 - 13:00", activity: "FITNESS ERWACHSENE" },
    { time: "16:30 - 17:30", activity: "BOXEN KINDER" },
    { time: "17:30 - 18:30", activity: "BOXEN JUGENDLICHE" },
    { time: "18:30 - 19:30", activity: "SPARRING" },
  ],
  Freitag: [
    { time: "15:30 - 16:30", activity: "BASTELN TURNEN MALEN" },
    { time: "16:30 - 17:45", activity: "TKD BIS 10" },
    { time: "17:45 - 19:00", activity: "TKD AB 10" },
  ],
  Samstag: [
    { time: "", activity: "PERSONALTRAINING AUF ANFRAGE MÖGLICH", note: true },
    { time: "10:00 - 11:00", activity: "JUDO" },
    { time: "11:00 - 12:00", activity: "KICKBOXEN ALLE ALTERSKLASSEN" },
    { time: "12:00 - 13:00", activity: "KAMPFVORBEREITUNG" },
  ],
  Sonntag: [
    { time: "", activity: "PERSONALTRAINING AUF ANFRAGE MÖGLICH", note: true },
  ],
};

const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"] as const;

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
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground uppercase mb-4">
            Aktuelle
            <br />
            <span className="text-accent">Trainingszeiten</span>
          </h2>
        </div>

        {/* Weekly Schedule Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {days.map((day, index) => (
            <div 
              key={day} 
              className="bg-card border border-border rounded-xl p-4 md:p-5"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="font-display text-accent text-lg md:text-xl uppercase mb-4 text-center border-b border-border pb-3">
                {day}
              </h3>
              <div className="space-y-3">
                {schedule[day].map((slot, slotIndex) => (
                  <div 
                    key={slotIndex} 
                    className={`${slot.note ? 'text-center' : ''}`}
                  >
                    {slot.note ? (
                      <p className="text-muted-foreground text-xs italic">
                        {slot.activity}
                      </p>
                    ) : (
                      <>
                        <p className="text-accent text-xs font-mono">
                          {slot.time}
                        </p>
                        <p className="text-foreground text-sm uppercase tracking-wide">
                          {slot.activity}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="font-display text-accent uppercase tracking-wide mb-4">
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
