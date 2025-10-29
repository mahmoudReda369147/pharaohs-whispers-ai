import { ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-temple.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleEnter = async () => {
    setShowWelcome(false);
    // Play audio when user interacts
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Audio play error:", error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Welcome Overlay */}
      {showWelcome && (
        <section className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
          {/* Background Video with Overlay */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/A_majestic_ancient_202510292125.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>

          {/* Floating Hieroglyphs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {["𓀀", "𓁐", "𓂀", "𓄀", "𓅀", "𓆀", "𓈀", "𓉀"].map((glyph, index) => (
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
                Voices of Pharaohs
              </span>
              <br />
              <span className="text-foreground">Awaits You</span>
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
              <button
                onClick={handleEnter}
                className="gradient-gold text-card font-cinzel text-lg px-10 py-7 rounded-full hover:scale-105 transition-transform duration-300 shadow-temple"
              >
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5" />
                  <span>Enter the Temple</span>
                </div>
              </button>
            </div>

            {/* Audio Notice */}
            <p 
              className="mt-6 text-sm text-muted-foreground/70 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Click to begin your journey with authentic Egyptian ambience
            </p>

            {/* Decorative Line */}
            <div className="mt-16 flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-2xl">𓋹</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
      )}

      {/* Audio Control Button (appears after entering) */}
      {!showWelcome && (
        <button
          onClick={toggleMute}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-gold hover:shadow-temple transition-all duration-300 hover:scale-110 border-2 border-primary/30 hover:border-primary group"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-card group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-6 h-6 text-card group-hover:scale-110 transition-transform" />
          )}
        </button>
      )}

      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
