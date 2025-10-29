import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, Music } from "lucide-react";

interface Message {
  role: "user" | "pharaoh";
  text: string;
  translation?: string;
}

const PharaohChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "pharaoh",
      text: "𓅓𓏏𓅱 𓇋𓏠𓈖 𓊪𓏏𓎛 𓆑𓂋𓅱𓈖",
      translation: "Greetings, traveler from distant lands. Speak, and I shall listen.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    // Simulate pharaoh response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "pharaoh",
          text: "𓊪𓏏𓎛 𓈖𓆑𓂋 𓇋𓏠𓈖",
          translation: "Your words have reached the halls of eternity...",
        },
      ]);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Hieroglyphs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-9xl text-primary absolute top-10 left-10">𓀀</div>
        <div className="text-9xl text-primary absolute top-40 right-20">𓁐</div>
        <div className="text-9xl text-primary absolute bottom-20 left-1/4">𓂀</div>
        <div className="text-9xl text-primary absolute bottom-40 right-1/3">𓃀</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-secondary text-3xl">𓁹</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-foreground">
              Talk With the Pharaoh
            </h2>
            <span className="text-secondary text-3xl">𓁹</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Converse with ancient wisdom through the voice of the ages
          </p>
        </div>

        {/* Chat Interface */}
        <div className="relative">
          {/* Decorative Border */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl" />
          
          <div className="relative bg-card/95 backdrop-blur-sm rounded-3xl shadow-temple border-2 border-primary/30 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-temple p-6 border-b border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl border-2 border-primary">
                  𓀭
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-cinzel font-semibold text-card">
                    Pharaoh Ramesses
                  </h3>
                  <p className="text-primary/80 text-sm">
                    Keeper of Ancient Wisdom
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-card rounded-full gap-2"
                >
                  <Music className="w-4 h-4" />
                  Ask to Sing
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary/10 border border-primary/30"
                        : "bg-muted/50 border-2 border-primary/20"
                    } rounded-2xl p-5 shadow-papyrus`}
                  >
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
                      <p className="text-sm text-muted-foreground italic border-t border-primary/10 pt-2 mt-2">
                        {message.translation}
                      </p>
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
                  <Button
                    size="icon"
                    className="bg-secondary hover:bg-secondary/90 text-card rounded-full h-12 w-12"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharaohChat;
