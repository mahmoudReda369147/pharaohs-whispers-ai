import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-sand">
      {/* Floating Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {["𓀀", "𓁐", "𓂀", "𓃀", "𓄀", "𓅀"].map((glyph, i) => (
          <span
            key={i}
            className="absolute text-9xl text-primary animate-float-hieroglyph"
            style={{
              left: `${(i * 16) % 90}%`,
              top: `${(i * 14) % 80}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {glyph}
          </span>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl text-primary animate-rotate-ankh">☥</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-foreground mb-4">
            Discover the Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Reviving the lost language of the Pharaohs through AI
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-3xl">𓁹</span>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        {/* Story Section */}
        <Card className="mb-12 p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-temple animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl text-primary">𓂀</span>
            <h2 className="text-3xl font-cinzel font-bold text-foreground">
              The Lost Voice
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              For thousands of years, the voices of Ancient Egypt have been silent. The language of the Pharaohs, 
              once spoken in the grand halls of temples and whispered in the shadows of pyramids, faded into history 
              as civilizations rose and fell.
            </p>
            <p>
              Until now.
            </p>
            <p>
              Through the power of artificial intelligence and the careful study of hieroglyphic texts, we have 
              reconstructed not just the written word, but the living voice of ancient Egypt. Using advanced AI models 
              trained on historical linguistics, archaeological discoveries, and phonetic reconstructions, we've created 
              an experience that transcends time itself.
            </p>
            <p>
              This is more than a translation tool. It's a portal to another age — a digital resurrection of a 
              civilization that shaped human history. When you speak with a Pharaoh, you're not just reading ancient 
              text. You're hearing the echo of voices that commanded empires, built monuments, and reached for immortality.
            </p>
          </div>
        </Card>

        {/* Mission Section */}
        <Card className="mb-12 p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-temple animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl text-secondary">𓋹</span>
            <h2 className="text-3xl font-cinzel font-bold text-foreground">
              Our Mission
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              We believe that history should not remain locked in museums and academic journals. It should be 
              experienced, felt, and understood on a deeper level. Our mission is to make ancient civilizations 
              accessible through technology, bridging millennia with innovation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 border-2 border-primary/20 rounded-lg bg-muted/20">
                <div className="text-5xl text-primary mb-3">𓁹</div>
                <h3 className="font-cinzel font-semibold text-foreground mb-2">Preserve</h3>
                <p className="text-sm text-muted-foreground">
                  Safeguard ancient knowledge through digital reconstruction
                </p>
              </div>
              <div className="text-center p-6 border-2 border-secondary/20 rounded-lg bg-muted/20">
                <div className="text-5xl text-secondary mb-3">☥</div>
                <h3 className="font-cinzel font-semibold text-foreground mb-2">Revive</h3>
                <p className="text-sm text-muted-foreground">
                  Bring extinct languages back to life with AI technology
                </p>
              </div>
              <div className="text-center p-6 border-2 border-primary/20 rounded-lg bg-muted/20">
                <div className="text-5xl text-primary mb-3">𓂀</div>
                <h3 className="font-cinzel font-semibold text-foreground mb-2">Educate</h3>
                <p className="text-sm text-muted-foreground">
                  Make history accessible and engaging for all
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Team Section */}
        <Card className="mb-12 p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-temple animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl text-primary">𓀭</span>
            <h2 className="text-3xl font-cinzel font-bold text-foreground">
              The Team
            </h2>
          </div>
          <div className="text-muted-foreground text-lg leading-relaxed mb-6">
            <p>
              Our team brings together Egyptologists, AI researchers, linguists, and creative technologists 
              united by a passion for bringing history to life. We work closely with museums, universities, 
              and cultural institutions to ensure historical accuracy while pushing the boundaries of what's 
              possible with AI.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["𓁹", "𓋹", "𓂀", "☥"].map((symbol, i) => (
              <div key={i} className="p-4 border border-primary/20 rounded-lg bg-muted/10">
                <div className="text-4xl text-primary mb-2">{symbol}</div>
                <div className="text-xs text-muted-foreground">Team Member</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Iconography Section */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8">
            Sacred Symbols
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-6xl">
            <span className="text-primary cursor-pointer hover:scale-110 transition-transform" title="Ankh - Eternal Life">☥</span>
            <span className="text-secondary cursor-pointer hover:scale-110 transition-transform" title="Eye of Ra - Protection">𓁹</span>
            <span className="text-primary cursor-pointer hover:scale-110 transition-transform" title="Scarab - Rebirth">𓆣</span>
            <span className="text-secondary cursor-pointer hover:scale-110 transition-transform" title="Djed - Stability">𓊽</span>
            <span className="text-primary cursor-pointer hover:scale-110 transition-transform" title="Was Scepter - Power">𓋹</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
