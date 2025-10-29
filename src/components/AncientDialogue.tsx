import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AncientDialogue = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary text-3xl">𓆃</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-foreground">
              Ancient Dialogue
            </h2>
            <span className="text-primary text-3xl">𓆃</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Witness history come alive as pharaohs speak in their native tongue
          </p>
        </div>

        {/* Video Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Border */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl" />
          
          {/* Video Container */}
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-temple border-4 border-primary/30">
            {/* Placeholder for Video */}
            <div className="aspect-video bg-muted flex items-center justify-center relative group cursor-pointer">
              {/* Temple Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full flex items-center justify-center text-9xl text-primary">
                  𓁹
                </div>
              </div>

              {/* Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110 shadow-temple">
                  <Play className="w-10 h-10 text-card fill-card ml-1" />
                </div>
                <p className="text-xl font-cinzel text-foreground">
                  Watch Pharaohs Speak
                </p>
              </div>

              {/* Animated Hieroglyphs on Hover */}
              <div className="absolute top-4 left-4 text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                𓀭
              </div>
              <div className="absolute bottom-4 right-4 text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                𓁛
              </div>
            </div>

            {/* Video Info Bar */}
            <div className="bg-card/95 backdrop-blur-sm p-6 border-t border-primary/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-foreground mb-1">
                    Dialogue of Two Pharaohs
                  </h3>
                  <p className="text-muted-foreground">
                    Ancient Egyptian with English subtitles
                  </p>
                </div>
                <Button 
                  onClick={() => navigate("/select-pharaoh")}
                  className="gradient-gold text-card font-cinzel px-8 rounded-full hover:scale-105 transition-transform duration-300"
                >
                  Generate Your Own Dialogue
                </Button>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute -top-3 -left-3 text-primary text-4xl">𓋹</div>
          <div className="absolute -top-3 -right-3 text-primary text-4xl">𓋹</div>
          <div className="absolute -bottom-3 -left-3 text-primary text-4xl">𓋹</div>
          <div className="absolute -bottom-3 -right-3 text-primary text-4xl">𓋹</div>
        </div>

        {/* Background Temple Walls Effect */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-9xl text-primary/5 hidden lg:block">
          𓉗
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-9xl text-primary/5 hidden lg:block">
          𓉗
        </div>
      </div>
    </section>
  );
};

export default AncientDialogue;
