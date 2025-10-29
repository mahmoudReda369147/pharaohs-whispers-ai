import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-temple.jpg";

const HeroSection = () => {
  const hieroglyphs = ["𓀀", "𓁐", "𓂀", "𓃀", "𓄀", "𓅀", "𓆀", "𓇀"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating Hieroglyphs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hieroglyphs.map((glyph, index) => (
          <span
            key={index}
            className="absolute text-primary text-4xl md:text-6xl opacity-20 animate-float-hieroglyph"
            style={{
              left: `${(index * 12) + 5}%`,
              top: `${(index * 10) % 80}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {glyph}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Animated Ankh Symbol */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="text-8xl md:text-9xl text-primary animate-rotate-ankh">
              ☥
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl text-primary animate-glow-pulse">
              ☥
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient-gold">
            The Language of the Pharaohs
          </span>
          <br />
          <span className="text-foreground">Lives Again</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Step into the eternal voice of ancient Egypt
        </p>

        {/* CTA Button */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="gradient-gold text-card font-cinzel text-lg px-10 py-7 rounded-full hover:scale-105 transition-transform duration-300 shadow-temple"
          >
            Explore the Ancient Voices
          </Button>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-2xl">𓋹</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
