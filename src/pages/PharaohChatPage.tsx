import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, Volume2, Languages, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Message {
  role: "user" | "pharaoh";
  text: string;
  translation?: string;
  showTranslation?: boolean;
}

const pharaohData: Record<string, { name: string; symbol: string; greeting: string; translation: string }> = {
  tutankhamun: {
    name: "Tutankhamun",
    symbol: "𓀭",
    greeting: "𓅓𓏏𓅱 𓇋𓏠𓈖 𓊪𓏏𓎛",
    translation: "Greetings, traveler. I am the Boy King, risen from eternal slumber."
  },
  ramses: {
    name: "Ramesses II",
    symbol: "𓁹",
    greeting: "𓊪𓏏𓎛 𓈖𓆑𓂋 𓇋𓏠𓈖",
    translation: "I am Ramesses, the Great. Builder of monuments that touch the heavens."
  },
  akhenaten: {
    name: "Akhenaten",
    symbol: "☥",
    greeting: "𓇳𓁷𓏤 𓆑𓂋𓅱𓈖",
    translation: "I am Akhenaten, who brought the light of Aten to the world."
  },
  nefertiti: {
    name: "Nefertiti",
    symbol: "𓋹",
    greeting: "𓅓𓏏𓅱 𓆑𓂋𓅱 𓈖𓆑𓂋",
    translation: "I am Nefertiti, the Beautiful One. Speak, and I shall listen."
  },
  hatshepsut: {
    name: "Hatshepsut",
    symbol: "𓁐",
    greeting: "𓊪𓏏𓎛 𓇋𓏠𓈖 𓈖𓆑𓂋",
    translation: "I am Hatshepsut, who ruled as Pharaoh and brought prosperity."
  },
  khufu: {
    name: "Khufu",
    symbol: "𓉔",
    greeting: "𓅓𓏏𓅱 𓆑𓂋 𓊪𓏏𓎛",
    translation: "I am Khufu, builder of the Great Pyramid. What wisdom do you seek?"
  }
};

const PharaohChatPage = () => {
  const { pharaohId } = useParams<{ pharaohId: string }>();
  const navigate = useNavigate();
  const pharaoh = pharaohId ? pharaohData[pharaohId] : pharaohData.tutankhamun;
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "pharaoh",
      text: pharaoh.greeting,
      translation: pharaoh.translation,
      showTranslation: false
    }
  ]);
  const [input, setInput] = useState("");
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "pharaoh",
          text: "𓊪𓏏𓎛 𓈖𓆑𓂋 𓇋𓏠𓈖 𓆑𓂋𓅱𓈖",
          translation: "Your words have reached the halls of eternity. The wisdom you seek shall be revealed...",
          showTranslation: false
        }
      ]);
    }, 1500);
  };

  const toggleTranslation = (index: number) => {
    setMessages(prev => prev.map((msg, i) => 
      i === index && msg.translation 
        ? { ...msg, showTranslation: !msg.showTranslation }
        : msg
    ));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Golden Hieroglyphic Wall Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(135deg, 
              hsl(var(--primary) / 0.15) 0%, 
              hsl(var(--secondary) / 0.05) 50%, 
              hsl(var(--primary) / 0.2) 100%
            ),
            radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.25) 0%, transparent 50%),
            linear-gradient(to bottom, #2d1f10 0%, #4a3520 50%, #2d1f10 100%)
          `,
        }}
      />
      
      {/* Embossed Hieroglyphic Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {["𓀀", "𓁐", "𓂀", "𓄀", "𓅀", "𓆀", "𓈀", "𓉀", "𓊪", "𓋹", "𓌀", "𓍯", "𓎛", "𓏏", "𓀭", "☥"].map((glyph, i) => (
          <div
            key={i}
            className="absolute text-6xl font-bold"
            style={{
              left: `${(i * 17) % 95}%`,
              top: `${(i * 23) % 90}%`,
              color: 'hsl(var(--primary))',
              textShadow: `
                2px 2px 4px rgba(0,0,0,0.5),
                -1px -1px 2px hsl(var(--primary) / 0.3),
                0 0 20px hsl(var(--primary) / 0.2)
              `,
              transform: `rotate(${(i * 15) % 360}deg)`,
            }}
          >
            {glyph}
          </div>
        ))}
      </div>

      {/* Animated Light Rays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 30%, 
                hsl(var(--primary) / 0.1) 50%, 
                transparent 70%
              )
            `,
            animation: 'shimmer 8s ease-in-out infinite',
            transform: 'translateX(-100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(135deg, 
                transparent 40%, 
                hsl(var(--primary) / 0.15) 50%, 
                transparent 60%
              )
            `,
            animation: 'shimmer 12s ease-in-out infinite reverse',
            transform: 'translateX(-100%)',
          }}
        />
      </div>

      {/* Glowing Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float-hieroglyph"
            style={{
              left: `${(i * 8) % 100}%`,
              top: `${(i * 11) % 100}%`,
              background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
              boxShadow: `0 0 10px hsl(var(--primary))`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/select-pharaoh")}
          className="mb-6 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-cinzel"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Choose Another Pharaoh
        </Button>

        {/* Header Card */}
        <div className="mb-8 animate-fade-in-up">
          <Card className="relative overflow-hidden bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl">
            <div className="relative p-8">
              <div className="flex items-center gap-6">
                {/* Pharaoh Avatar */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center text-6xl border-4 border-primary shadow-temple">
                    {pharaoh.symbol}
                  </div>
                </div>
                
                {/* Pharaoh Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-4xl font-cinzel font-bold text-gradient-gold">
                      {pharaoh.name}
                    </h1>
                    <span className="text-3xl text-primary animate-glow-pulse">𓋹</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-xl">𓁹</span>
                    <p className="text-lg font-cinzel">
                      Keeper of Ancient Wisdom
                    </p>
                  </div>
                  <div className="mt-2 h-1 w-48 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                
                {/* Voice Toggle */}
                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    variant={isVoiceMode ? "default" : "outline"}
                    onClick={() => setIsVoiceMode(!isVoiceMode)}
                    className={isVoiceMode ? "gradient-gold text-card font-cinzel shadow-temple" : "border-2 border-primary/40 text-foreground hover:bg-primary/10 font-cinzel"}
                  >
                    {isVoiceMode ? <Volume2 className="w-5 h-5 mr-2" /> : <Mic className="w-5 h-5 mr-2" />}
                    <span>{isVoiceMode ? "Voice Mode" : "Text Mode"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Card className="relative overflow-hidden bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl">
            <div className="h-[550px] overflow-y-auto p-8 space-y-6 scroll-smooth" style={{ scrollbarWidth: "thin" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex animate-fade-in-up ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`relative group max-w-[85%] ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40"
                      : "bg-muted/50 border-2 border-primary/20"
                  } rounded-2xl p-5 shadow-papyrus`}
                >
                  {/* Soundwave Animation for Pharaoh when speaking */}
                  {message.role === "pharaoh" && isSpeaking && (
                    <div className="absolute -top-3 -right-3 flex items-center gap-1 bg-card rounded-full px-2 py-1 border-2 border-primary shadow-lg">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <p
                    className={`font-cinzel mb-2 ${
                      message.role === "pharaoh"
                        ? "text-primary text-xl"
                        : "text-foreground"
                    }`}
                  >
                    {message.text}
                  </p>
                  
                  {message.translation && (
                    <div className="mt-2 pt-2 border-t border-primary/10">
                      {message.showTranslation ? (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground italic">
                            {message.translation}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleTranslation(index)}
                            className="text-primary hover:text-primary/80 p-0 h-auto font-normal text-xs"
                          >
                            Hide Translation
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleTranslation(index)}
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-1 rounded-lg font-cinzel text-xs"
                        >
                          <Languages className="w-4 h-4 mr-2" />
                          Show Translation
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Speak your words to the Pharaoh..."
                  className="min-h-[60px] resize-none bg-background/80 border-primary/30 focus:border-primary rounded-xl font-cinzel"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                {isVoiceMode && (
                  <Button
                    size="icon"
                    className="bg-secondary hover:bg-secondary/90 text-card rounded-full h-12 w-12"
                    onClick={() => setIsSpeaking(!isSpeaking)}
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                )}
                <Button
                  size="icon"
                  onClick={handleSend}
                  className="gradient-gold text-card rounded-full h-12 w-12 hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          </Card>
        </div>

        {/* Summon Another Pharaoh Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button
            onClick={() => navigate("/select-pharaoh")}
            className="group relative px-12 py-7 rounded-full overflow-hidden gradient-gold text-card font-cinzel text-lg shadow-temple hover:scale-105 transition-all duration-300 border-2 border-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative flex items-center gap-3">
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">𓁹</span>
              <span>Summon Another Pharaoh</span>
              <span className="text-2xl group-hover:-rotate-12 transition-transform duration-300">𓁹</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PharaohChatPage;
