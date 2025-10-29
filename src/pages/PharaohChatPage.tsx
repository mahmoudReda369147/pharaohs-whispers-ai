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
    <div className="min-h-screen bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Animated Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {["𓀀", "𓁐", "𓂀", "𓃀", "𓄀", "𓅀", "𓆀", "𓇀"].map((glyph, i) => (
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

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/select-pharaoh")}
            className="mb-4 text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Choose Another Pharaoh
          </Button>

          <Card className="bg-gradient-temple p-6 border-2 border-primary/30 shadow-temple">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-5xl border-2 border-primary animate-glow-pulse">
                {pharaoh.symbol}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-cinzel font-bold text-card">
                    {pharaoh.name}
                  </h1>
                  <span className="text-2xl text-primary">𓋹</span>
                </div>
                <p className="text-primary/80">
                  Keeper of Ancient Wisdom
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={isVoiceMode ? "default" : "outline"}
                  onClick={() => setIsVoiceMode(!isVoiceMode)}
                  className={isVoiceMode ? "bg-secondary text-card" : "border-primary/30 text-card"}
                >
                  {isVoiceMode ? <Volume2 className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span className="ml-2">{isVoiceMode ? "Voice" : "Text"}</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Area */}
        <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary/30 shadow-temple mb-8">
          <div className="h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] ${
                    message.role === "user"
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-muted/50 border-2 border-primary/20"
                  } rounded-2xl p-6 shadow-papyrus relative`}
                >
                  {/* Soundwave Animation for Pharaoh when speaking */}
                  {message.role === "pharaoh" && isSpeaking && (
                    <div className="absolute -top-3 -right-3 flex items-center gap-1">
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
                        ? "text-primary text-2xl"
                        : "text-foreground text-lg"
                    }`}
                  >
                    {message.text}
                  </p>
                  
                  {message.translation && (
                    <div className="mt-3 pt-3 border-t border-primary/10">
                      {message.showTranslation ? (
                        <p className="text-sm text-muted-foreground italic">
                          {message.translation}
                        </p>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleTranslation(index)}
                          className="text-primary hover:text-primary/80 p-0 h-auto font-normal"
                        >
                          <Languages className="w-3 h-3 mr-1" />
                          Show Translation
                        </Button>
                      )}
                      {message.showTranslation && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleTranslation(index)}
                          className="text-primary hover:text-primary/80 p-0 h-auto font-normal mt-1"
                        >
                          Hide Translation
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isVoiceMode ? "Speak your message to the Pharaoh..." : "Type your message to the Pharaoh..."}
                  className="min-h-[80px] resize-none bg-background/80 border-primary/30 focus:border-primary rounded-xl font-cinzel"
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
                    className="bg-secondary hover:bg-secondary/90 text-card rounded-full h-14 w-14"
                    onClick={() => setIsSpeaking(!isSpeaking)}
                  >
                    <Mic className="w-6 h-6" />
                  </Button>
                )}
                <Button
                  size="icon"
                  onClick={handleSend}
                  className="gradient-gold text-card rounded-full h-14 w-14 hover:scale-105 transition-transform"
                >
                  <Send className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Summon Another Pharaoh */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/select-pharaoh")}
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 font-cinzel px-8 py-6 text-lg"
          >
            <span className="mr-2">𓁹</span>
            Summon Another Pharaoh
            <span className="ml-2">𓁹</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PharaohChatPage;
