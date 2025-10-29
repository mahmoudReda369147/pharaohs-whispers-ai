import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Sparkles, Users, Book, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-sand">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 50px)`,
          }}
        />
      </div>

      {/* Floating Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {["𓀀", "𓁐", "𓂀", "𓄀", "𓅀", "𓆀", "𓈀", "𓉀"].map((glyph, i) => (
          <span
            key={i}
            className="absolute text-9xl text-primary animate-float-hieroglyph"
            style={{
              left: `${(i * 12) % 90}%`,
              top: `${(i * 13) % 80}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {glyph}
          </span>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-6xl">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Ankh with Glow */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-2xl animate-glow-pulse" />
              <div className="relative">
                <span className="text-8xl text-primary animate-rotate-ankh" style={{ animationDuration: "20s" }}>☥</span>
                <div className="absolute inset-0 text-8xl text-primary animate-glow-pulse">☥</div>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-6">
            <span className="text-gradient-gold">Discover Our</span>
            <br />
            <span className="text-foreground">Sacred Mission</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
            Reviving the eternal voice of the Pharaohs through the power of artificial intelligence
          </p>
          
          {/* Decorative Divider */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="flex gap-3 text-3xl">
              <span className="text-primary animate-glow-pulse">𓁹</span>
              <span className="text-primary/60">𓋹</span>
              <span className="text-primary animate-glow-pulse">𓆣</span>
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/90 backdrop-blur-xl border-4 border-primary/40 shadow-2xl">
            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 text-4xl text-primary/40">𓄹</div>
            <div className="absolute top-6 right-6 text-4xl text-primary/40">𓄺</div>
            <div className="absolute bottom-6 left-6 text-4xl text-primary/40">𓄻</div>
            <div className="absolute bottom-6 right-6 text-4xl text-primary/40">𓄼</div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* Golden Border Effect */}
            <div className="absolute inset-0 border-8 border-primary/10 pointer-events-none" />

            <div className="relative p-10 md:p-16">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="text-6xl text-primary animate-glow-pulse">𓂀</div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gradient-gold mb-2">
                    The Lost Voice
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-cinzel first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  For thousands of years, the voices of Ancient Egypt have been silent. The language of the Pharaohs, 
                  once spoken in the grand halls of temples and whispered in the shadows of pyramids, faded into history 
                  as civilizations rose and fell.
                </p>
                
                <p className="text-3xl font-cinzel text-center text-gradient-gold py-6">
                  Until now.
                </p>
                
                <p>
                  Through the power of artificial intelligence and the careful study of hieroglyphic texts, we have 
                  reconstructed not just the written word, but the <span className="text-primary font-semibold">living voice of ancient Egypt</span>. Using advanced AI models 
                  trained on historical linguistics, archaeological discoveries, and phonetic reconstructions, we've created 
                  an experience that transcends time itself.
                </p>
                
                <div className="relative my-8 p-6 border-l-4 border-primary bg-muted/30 rounded-r-xl">
                  <div className="absolute -left-3 top-6 text-3xl text-primary animate-glow-pulse">𓁹</div>
                  <p className="italic text-primary/90 ml-6 text-lg font-light leading-relaxed">
                    This is more than a translation tool. It's a portal to another age — a digital resurrection of a 
                    civilization that shaped human history. When you speak with a Pharaoh, you're not just reading ancient 
                    text. You're hearing the echo of voices that commanded empires, built monuments, and reached for immortality.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="text-5xl text-primary animate-glow-pulse">𓋹</div>
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground">
                Our Sacred Mission
              </h2>
              <div className="text-5xl text-primary animate-glow-pulse">𓋹</div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that history should not remain locked in museums and academic journals. It should be 
              experienced, felt, and understood on a deeper level.
            </p>
          </div>

          {/* Mission Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Preserve Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-4 border-primary/30 hover:border-primary transition-all duration-500 shadow-temple hover:shadow-2xl hover:scale-105">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="text-7xl text-primary group-hover:scale-110 transition-transform duration-500">𓁹</div>
                    <div className="absolute inset-0 text-7xl text-primary opacity-0 group-hover:opacity-100 animate-glow-pulse">𓁹</div>
                  </div>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gradient-gold mb-4 group-hover:tracking-wider transition-all duration-300">
                  Preserve
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Safeguard ancient knowledge through digital reconstruction and modern technology
                </p>
              </div>
            </Card>

            {/* Revive Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-4 border-accent/30 hover:border-accent transition-all duration-500 shadow-temple hover:shadow-2xl hover:scale-105">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="text-7xl text-accent group-hover:scale-110 transition-transform duration-500">☥</div>
                    <div className="absolute inset-0 text-7xl text-accent opacity-0 group-hover:opacity-100 animate-glow-pulse">☥</div>
                  </div>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gradient-gold mb-4 group-hover:tracking-wider transition-all duration-300">
                  Revive
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Bring extinct languages back to life with cutting-edge AI technology and innovation
                </p>
              </div>
            </Card>

            {/* Educate Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-4 border-primary/30 hover:border-primary transition-all duration-500 shadow-temple hover:shadow-2xl hover:scale-105">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="text-7xl text-primary group-hover:scale-110 transition-transform duration-500">𓂀</div>
                    <div className="absolute inset-0 text-7xl text-primary opacity-0 group-hover:opacity-100 animate-glow-pulse">𓂀</div>
                  </div>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gradient-gold mb-4 group-hover:tracking-wider transition-all duration-300">
                  Educate
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Make history accessible, engaging, and inspiring for people of all ages
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl border-4 border-primary/40 shadow-2xl">
            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 text-4xl text-primary/40">𓄹</div>
            <div className="absolute top-6 right-6 text-4xl text-primary/40">𓄺</div>
            <div className="absolute bottom-6 left-6 text-4xl text-primary/40">𓄻</div>
            <div className="absolute bottom-6 right-6 text-4xl text-primary/40">𓄼</div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* Golden Border Effect */}
            <div className="absolute inset-0 border-8 border-primary/10 pointer-events-none" />

            <div className="relative p-10 md:p-16">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl text-primary animate-glow-pulse">𓀭</div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-gradient-gold mb-2">
                    The Team Behind the Magic
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
              
              <div className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-10">
                <p>
                  Our team brings together <span className="text-primary font-semibold">Egyptologists, AI researchers, linguists, and creative technologists</span> united by a passion for bringing history to life. We work closely with museums, universities, and cultural institutions to ensure historical accuracy while pushing the boundaries of what's possible with AI.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { symbol: "𓁹", role: "Egyptologist", color: "text-primary" },
                  { symbol: "𓋹", role: "AI Researcher", color: "text-accent" },
                  { symbol: "𓂀", role: "Linguist", color: "text-primary" },
                  { symbol: "☥", role: "Technologist", color: "text-accent" }
                ].map((member, i) => (
                  <div key={i} className="group relative p-6 border-2 border-primary/30 rounded-xl bg-gradient-to-br from-card to-card/80 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative text-center">
                      <div className={`text-6xl ${member.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        {member.symbol}
                      </div>
                      <div className="text-sm font-cinzel font-semibold text-foreground">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Sacred Symbols Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">
              Sacred Symbols of <span className="text-gradient-gold">Egypt</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each hieroglyph carries profound meaning from the ancient world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { symbol: "☥", name: "Ankh", meaning: "Eternal Life", color: "primary" },
              { symbol: "𓁹", name: "Eye of Ra", meaning: "Protection", color: "accent" },
              { symbol: "𓆣", name: "Scarab", meaning: "Rebirth", color: "primary" },
              { symbol: "𓊽", name: "Djed", meaning: "Stability", color: "accent" },
              { symbol: "𓋹", name: "Was Scepter", meaning: "Power", color: "primary" }
            ].map((item, i) => (
              <Card key={i} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-4 border-primary/20 hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className={`text-7xl text-${item.color} mb-4 group-hover:scale-125 transition-transform duration-500`}>
                    {item.symbol}
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3" />
                  <h3 className="text-lg font-cinzel font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.meaning}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
