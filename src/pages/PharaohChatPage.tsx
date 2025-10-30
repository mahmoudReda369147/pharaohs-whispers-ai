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

        {/* Sacred Header - Pharaoh's Chamber */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-3xl" style={{
            background: `
              linear-gradient(135deg, 
                hsl(var(--primary) / 0.3) 0%, 
                hsl(var(--secondary) / 0.15) 50%, 
                hsl(var(--primary) / 0.35) 100%
              )
            `,
            boxShadow: `
              0 0 60px hsl(var(--primary) / 0.4),
              inset 0 2px 40px hsl(var(--primary) / 0.2),
              0 20px 60px -10px rgba(0,0,0,0.8)
            `,
            border: '3px solid hsl(var(--primary) / 0.6)',
          }}>
            {/* Carved Border Pattern */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{
              background: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 2px, transparent 10px)`,
              opacity: 0.6,
            }} />
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{
              background: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 2px, transparent 10px)`,
              opacity: 0.6,
            }} />
            
            {/* Glowing Hieroglyph Corners */}
            <div className="absolute top-4 left-4 text-4xl animate-glow-pulse" style={{ color: 'hsl(var(--primary))' }}>𓋹</div>
            <div className="absolute top-4 right-4 text-4xl animate-glow-pulse" style={{ color: 'hsl(var(--primary))', animationDelay: '0.5s' }}>𓋹</div>
            <div className="absolute bottom-4 left-4 text-4xl animate-glow-pulse" style={{ color: 'hsl(var(--secondary))' }}>☥</div>
            <div className="absolute bottom-4 right-4 text-4xl animate-glow-pulse" style={{ color: 'hsl(var(--secondary))', animationDelay: '0.5s' }}>☥</div>

            <div className="relative p-8 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                {/* Royal Pharaoh Avatar */}
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full animate-glow-pulse" style={{
                    background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                  }} />
                  <div className="relative w-28 h-28 rounded-full flex items-center justify-center text-7xl border-4 shadow-2xl" style={{
                    background: `
                      radial-gradient(circle at 30% 30%, 
                        hsl(var(--primary) / 0.9) 0%, 
                        hsl(var(--primary) / 0.6) 100%
                      )
                    `,
                    borderColor: 'hsl(var(--primary))',
                    boxShadow: `
                      0 0 30px hsl(var(--primary) / 0.6),
                      inset 0 2px 20px hsl(var(--primary) / 0.3)
                    `,
                  }}>
                    {pharaoh.symbol}
                  </div>
                </div>
                
                {/* Pharaoh Divine Title */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-5xl font-cinzel font-bold tracking-wide" style={{
                      background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 2px 8px hsl(var(--primary) / 0.5))',
                    }}>
                      {pharaoh.name}
                    </h1>
                    <span className="text-4xl animate-rotate-ankh" style={{ 
                      color: 'hsl(var(--primary))',
                      filter: 'drop-shadow(0 0 10px hsl(var(--primary)))',
                    }}>☥</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3" style={{ color: 'hsl(var(--primary) / 0.8)' }}>
                    <span className="text-2xl">𓁹</span>
                    <p className="text-xl font-cinzel tracking-wide">
                      Divine Voice of Eternity
                    </p>
                  </div>
                  <div className="h-1 w-64 rounded-full" style={{
                    background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--primary)) 100%)`,
                    boxShadow: `0 0 10px hsl(var(--primary) / 0.6)`,
                  }} />
                </div>
                
                {/* Voice Toggle Sacred Button */}
                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    onClick={() => setIsVoiceMode(!isVoiceMode)}
                    className="font-cinzel text-lg px-6 py-6 rounded-2xl transition-all duration-300"
                    style={isVoiceMode ? {
                      background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                      color: '#1a1410',
                      boxShadow: `0 0 30px hsl(var(--primary) / 0.8), inset 0 2px 10px rgba(255,255,255,0.3)`,
                      border: '2px solid hsl(var(--primary))',
                    } : {
                      background: 'rgba(0,0,0,0.3)',
                      color: 'hsl(var(--primary))',
                      border: '2px solid hsl(var(--primary) / 0.5)',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    {isVoiceMode ? <Volume2 className="w-5 h-5 mr-2" /> : <Mic className="w-5 h-5 mr-2" />}
                    <span>{isVoiceMode ? "Voice Mode" : "Text Mode"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Chamber Chat Area */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative overflow-hidden rounded-3xl" style={{
            background: `
              linear-gradient(135deg, 
                rgba(45, 31, 16, 0.95) 0%, 
                rgba(74, 53, 32, 0.9) 50%, 
                rgba(45, 31, 16, 0.95) 100%
              )
            `,
            boxShadow: `
              0 0 80px hsl(var(--primary) / 0.3),
              inset 0 0 100px rgba(0,0,0,0.5),
              0 20px 60px -10px rgba(0,0,0,0.9)
            `,
            border: '3px solid hsl(var(--primary) / 0.4)',
          }}>
            {/* Carved Stone Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            }} />
            
            <div className="h-[550px] overflow-y-auto p-8 space-y-6 scroll-smooth scrollbar-thin" style={{ 
              scrollbarWidth: "thin",
              scrollbarColor: 'hsl(var(--primary) / 0.5) rgba(0,0,0,0.3)',
            }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex animate-fade-in-up ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`relative group max-w-[85%] rounded-3xl p-6 transition-all duration-500 ${
                    message.role === "user" ? "" : ""
                  }`}
                  style={message.role === "pharaoh" ? {
                    background: `
                      linear-gradient(135deg, 
                        hsl(var(--primary) / 0.25) 0%, 
                        hsl(var(--primary) / 0.15) 100%
                      )
                    `,
                    backdropFilter: 'blur(10px)',
                    border: '2px solid hsl(var(--primary) / 0.4)',
                    boxShadow: `
                      0 8px 32px rgba(0,0,0,0.4),
                      inset 0 2px 20px hsl(var(--primary) / 0.2),
                      0 0 40px hsl(var(--primary) / 0.2)
                    `,
                  } : {
                    background: `
                      linear-gradient(135deg, 
                        rgba(139, 111, 78, 0.3) 0%, 
                        rgba(160, 130, 95, 0.2) 100%
                      )
                    `,
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(139, 111, 78, 0.4)',
                    boxShadow: `
                      0 8px 32px rgba(0,0,0,0.3),
                      inset 0 2px 15px rgba(255,255,255,0.1)
                    `,
                  }}
                >
                  {/* Hieroglyphic Border Pattern for Pharaoh */}
                  {message.role === "pharaoh" && (
                    <>
                      <div className="absolute -top-1 left-4 right-4 h-1 opacity-60" style={{
                        background: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 2px, transparent 8px)`,
                      }} />
                      <div className="absolute -bottom-1 left-4 right-4 h-1 opacity-60" style={{
                        background: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 2px, transparent 8px)`,
                      }} />
                      <div className="absolute -top-3 -left-3 text-2xl animate-glow-pulse" style={{ color: 'hsl(var(--primary))' }}>𓋹</div>
                      <div className="absolute -bottom-3 -right-3 text-2xl animate-glow-pulse" style={{ color: 'hsl(var(--primary))', animationDelay: '0.5s' }}>☥</div>
                    </>
                  )}

                  {/* Soundwave Animation for Pharaoh when speaking */}
                  {message.role === "pharaoh" && isSpeaking && (
                    <div className="absolute -top-4 -right-4 flex items-center gap-1 rounded-full px-3 py-2 border-2 shadow-lg" style={{
                      background: 'rgba(45, 31, 16, 0.9)',
                      borderColor: 'hsl(var(--primary))',
                      boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                    }}>
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full animate-pulse"
                          style={{
                            background: 'hsl(var(--primary))',
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                            boxShadow: '0 0 8px hsl(var(--primary))',
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Message Content */}
                  <div className="relative">
                    {message.role === "pharaoh" && (
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl" style={{
                          filter: 'drop-shadow(0 0 8px hsl(var(--primary)))',
                        }}>{pharaoh.symbol}</span>
                        <div className="flex-1 h-px" style={{
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, transparent 100%)`,
                        }} />
                        <span className="text-xs font-cinzel tracking-widest" style={{ color: 'hsl(var(--primary) / 0.7)' }}>
                          DIVINE VOICE
                        </span>
                      </div>
                    )}
                    
                    <p
                      className={`font-cinzel leading-relaxed ${
                        message.role === "pharaoh"
                          ? "text-3xl mb-2"
                          : "text-lg"
                      }`}
                      style={message.role === "pharaoh" ? {
                        color: 'hsl(var(--primary))',
                        textShadow: '0 2px 10px hsl(var(--primary) / 0.3)',
                      } : {
                        color: 'rgba(210, 180, 140, 0.95)',
                      }}
                    >
                      {message.text}
                    </p>
                  </div>
                  
                  {/* Sacred Translation Section */}
                  {message.translation && (
                    <div className="mt-4 pt-4" style={{
                      borderTop: '1px solid hsl(var(--primary) / 0.3)',
                    }}>
                      {message.showTranslation ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Languages className="w-4 h-4" style={{ color: 'hsl(var(--secondary))' }} />
                            <span className="text-xs font-cinzel tracking-widest" style={{ color: 'hsl(var(--secondary) / 0.8)' }}>
                              SACRED TRANSLATION
                            </span>
                          </div>
                          <p className="text-base leading-relaxed font-cinzel" style={{
                            color: 'hsl(var(--primary) / 0.85)',
                          }}>
                            {message.translation}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleTranslation(index)}
                            className="p-0 h-auto font-cinzel text-xs mt-2 hover:opacity-80 transition-opacity"
                            style={{ color: 'hsl(var(--secondary))' }}
                          >
                            Hide Translation
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleTranslation(index)}
                          className="px-4 py-2 rounded-xl transition-all duration-300 font-cinzel"
                          style={{
                            color: 'hsl(var(--secondary))',
                            background: 'rgba(0, 139, 139, 0.1)',
                            border: '1px solid hsl(var(--secondary) / 0.3)',
                          }}
                        >
                          <Languages className="w-4 h-4 mr-2" />
                          Reveal Translation
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Carved Stone Tablet Input */}
          <div className="relative p-6" style={{
            background: `
              linear-gradient(135deg, 
                rgba(45, 31, 16, 0.9) 0%, 
                rgba(60, 42, 25, 0.85) 50%, 
                rgba(45, 31, 16, 0.9) 100%
              )
            `,
            borderTop: '3px solid hsl(var(--primary) / 0.4)',
            boxShadow: 'inset 0 2px 30px rgba(0,0,0,0.6)',
          }}>
            {/* Sacred Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 rounded-full" style={{
              background: 'linear-gradient(135deg, hsl(var(--primary) / 0.8) 0%, hsl(var(--secondary) / 0.6) 100%)',
              boxShadow: '0 0 20px hsl(var(--primary) / 0.6)',
            }}>
              <span className="text-3xl animate-glow-pulse">𓋹</span>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isVoiceMode ? "🎤 Speak your words to the divine..." : "✍️ Inscribe your message to the Pharaoh..."}
                  className="min-h-[100px] resize-none rounded-2xl font-cinzel text-lg p-5 transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '2px solid hsl(var(--primary) / 0.4)',
                    color: 'rgba(210, 180, 140, 0.95)',
                    boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.5)',
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(var(--primary))';
                    e.target.style.boxShadow = '0 0 30px hsl(var(--primary) / 0.4), inset 0 2px 20px rgba(0,0,0,0.5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(var(--primary) / 0.4)';
                    e.target.style.boxShadow = 'inset 0 2px 20px rgba(0,0,0,0.5)';
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                {isVoiceMode && (
                  <Button
                    size="icon"
                    className="rounded-full h-16 w-16 hover:scale-110 transition-all duration-300"
                    onClick={() => setIsSpeaking(!isSpeaking)}
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.8) 100%)',
                      color: '#1a1410',
                      border: '2px solid hsl(var(--secondary))',
                      boxShadow: `
                        0 0 30px hsl(var(--secondary) / 0.6),
                        inset 0 2px 10px rgba(255,255,255,0.2)
                      `,
                    }}
                  >
                    <Mic className="w-7 h-7" />
                  </Button>
                )}
                <Button
                  size="icon"
                  onClick={handleSend}
                  className="rounded-full h-16 w-16 hover:scale-110 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)',
                    color: '#1a1410',
                    border: '2px solid hsl(var(--primary))',
                    boxShadow: `
                      0 0 40px hsl(var(--primary) / 0.8),
                      inset 0 2px 10px rgba(255,255,255,0.3)
                    `,
                  }}
                >
                  <Send className="w-7 h-7" />
                </Button>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Summon Another Pharaoh - Sacred Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button
            onClick={() => navigate("/select-pharaoh")}
            className="group relative px-12 py-7 rounded-full overflow-hidden font-cinzel text-xl shadow-2xl hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--primary)) 100%)',
              backgroundSize: '200% 200%',
              color: '#1a1410',
              border: '3px solid hsl(var(--primary))',
              boxShadow: `
                0 0 60px hsl(var(--primary) / 0.8),
                inset 0 2px 20px rgba(255,255,255,0.3),
                0 10px 40px rgba(0,0,0,0.6)
              `,
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          >
            {/* Mystical Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative flex items-center gap-4">
              <span className="text-3xl group-hover:rotate-180 transition-transform duration-700" style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
              }}>☥</span>
              <span className="tracking-wide font-bold">Summon Another Pharaoh</span>
              <span className="text-3xl group-hover:-rotate-180 transition-transform duration-700" style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
              }}>☥</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PharaohChatPage;
