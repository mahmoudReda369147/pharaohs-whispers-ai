import { Button } from "@/components/ui/button";
import { Play, Maximize2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AncientDialogue = () => {
  const navigate = useNavigate();

  const handleFullscreen = () => {
    const videoElement = document.getElementById('ancient-dialogue-video') as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      }
    }
  };

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
            {/* Video Player */}
            <div className="aspect-video bg-muted relative group">
              <video
                id="ancient-dialogue-video"
                className="w-full h-full object-cover"
                controls
               
              >
                <source src="/A_majestic_ancient_202510292125.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Fullscreen Button */}
              <button
                onClick={handleFullscreen}
                className="absolute bottom-20 right-4 z-20 p-3 rounded-full bg-primary/90 hover:bg-primary text-card shadow-temple transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                title="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Decorative Corner Hieroglyphs */}
              <div className="absolute top-4 left-4 text-primary/60 text-2xl z-10 pointer-events-none">
                𓀭
              </div>
              <div className="absolute bottom-20 right-20 text-primary/60 text-2xl z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                𓁛
              </div>
            </div>

            {/* Video Info Bar */}
            <div className="bg-card/95 backdrop-blur-sm p-6 border-t border-primary/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-cinzel font-semibold text-foreground mb-1">
                    Ancient Egypt: A Majestic Journey
                  </h3>
                  <p className="text-muted-foreground">
                    Experience the grandeur of pharaonic civilization in stunning detail
                  </p>
                </div>
                <div className="text-4xl text-primary animate-glow-pulse">
                  𓁹
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Immerse yourself in the timeless beauty and mysteries of ancient Egypt
                  </p>
                  <Button 
                    onClick={() => navigate("/select-pharaoh")}
                    className="gradient-gold text-card font-cinzel px-8 rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                  >
                    Chat with Pharaohs
                  </Button>
                </div>
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
