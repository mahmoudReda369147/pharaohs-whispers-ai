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
    <div className="min-h-screen bg-gradient-sand relative overflow-hidden">
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

      {/* Animated Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {["𓀀", "𓁐", "𓂀", "𓄀", "𓅀", "𓆀", "𓈀", "𓉀"].map((glyph, i) => (
          <span
            key={i}
            className="absolute text-9xl text-primary animate-float-hieroglyph"
            style={{
              left: `${(i * 12) % 90}%`,
              top: `${(i * 15) % 80}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {glyph}
          </span>
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

        {/* Premium Header Card */}
        <div className="mb-8 animate-fade-in-up">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl border-4 border-primary/40 shadow-2xl">
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 text-3xl text-primary/40">𓄹</div>
            <div className="absolute top-4 right-4 text-3xl text-primary/40">𓄺</div>
            <div className="absolute bottom-4 left-4 text-3xl text-primary/40">𓄻</div>
            <div className="absolute bottom-4 right-4 text-3xl text-primary/40">𓄼</div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* Golden Border Effect */}
            <div className="absolute inset-0 border-8 border-primary/10 pointer-events-none" />            

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

        {/* Premium Chat Area */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl border-4 border-primary/40 shadow-2xl">
            {/* Golden Border Effect */}
            <div className="absolute inset-0 border-8 border-primary/10 pointer-events-none" />
            
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
                      : "bg-gradient-to-br from-card to-card/80 border-4 border-primary/30"
                  } rounded-3xl p-6 shadow-temple hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Decorative Corner for Pharaoh Messages */}
                  {message.role === "pharaoh" && (
                    <>
                      <div className="absolute -top-2 -left-2 text-xl text-primary/40">𓄹</div>
                      <div className="absolute -bottom-2 -right-2 text-xl text-primary/40">𓄼</div>
                    </>
                  )}

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

                  {/* Message Content */}
                  <div className="relative">
                    {message.role === "pharaoh" && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{pharaoh.symbol}</span>
                        <span className="text-xs text-primary/60 font-cinzel tracking-wider">PHARAOH SPEAKS</span>
                      </div>
                    )}
                    
                    <p
                      className={`font-cinzel leading-relaxed ${
                        message.role === "pharaoh"
                          ? "text-primary/90 text-2xl mb-2"
                          : "text-foreground text-lg"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                  
                  {/* Translation Section */}
                  {message.translation && (
                    <div className="mt-4 pt-4 border-t-2 border-primary/20">
                      {message.showTranslation ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Languages className="w-4 h-4 text-primary" />
                            <span className="text-xs text-primary/70 font-cinzel tracking-wider">TRANSLATION</span>
                          </div>
                          <p className="text-base text-primary/80 leading-relaxed">
                            {message.translation}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleTranslation(index)}
                            className="text-primary hover:text-primary/80 p-0 h-auto font-normal mt-2 text-xs"
                          >
                            Hide Translation
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleTranslation(index)}
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-2 rounded-lg transition-all duration-300 font-cinzel"
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

          {/* Premium Input Area */}
          <div className="relative p-6 border-t-4 border-primary/30 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-card">
              <span className="text-2xl text-primary">𓋹</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isVoiceMode ? "🎤 Speak your message to the Pharaoh..." : "💬 Type your message to the Pharaoh..."}
                  className="min-h-[100px] resize-none bg-background/90 border-2 border-primary/40 focus:border-primary rounded-2xl font-cinzel text-lg p-4 transition-all duration-300 focus:shadow-lg"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                {isVoiceMode && (
                  <Button
                    size="icon"
                    className="bg-accent hover:bg-accent/90 text-card rounded-full h-16 w-16 shadow-temple hover:scale-110 transition-all duration-300"
                    onClick={() => setIsSpeaking(!isSpeaking)}
                  >
                    <Mic className="w-7 h-7" />
                  </Button>
                )}
                <Button
                  size="icon"
                  onClick={handleSend}
                  className="gradient-gold text-card rounded-full h-16 w-16 hover:scale-110 transition-all duration-300 shadow-temple border-2 border-primary/40"
                >
                  <Send className="w-7 h-7" />
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
            {/* Shimmer Effect */}
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
