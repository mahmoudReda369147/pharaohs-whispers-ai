import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

interface Pharaoh {
  id: string;
  name: string;
  reign: string;
  trait: string;
  symbol: string;
}

const pharaohs: Pharaoh[] = [
  {
    id: "tutankhamun",
    name: "Tutankhamun",
    reign: "1332-1323 BCE",
    trait: "The Boy King of eternal youth and discovery",
    symbol: "𓀭"
  },
  {
    id: "ramses",
    name: "Ramesses II",
    reign: "1279-1213 BCE",
    trait: "The Great Builder of monuments and wisdom",
    symbol: "𓁹"
  },
  {
    id: "akhenaten",
    name: "Akhenaten",
    reign: "1353-1336 BCE",
    trait: "The Heretic Pharaoh of revolution and light",
    symbol: "☥"
  },
  {
    id: "nefertiti",
    name: "Nefertiti",
    reign: "1353-1336 BCE",
    trait: "The Beautiful One of grace and power",
    symbol: "𓋹"
  },
  {
    id: "hatshepsut",
    name: "Hatshepsut",
    reign: "1479-1458 BCE",
    trait: "The Female King of prosperity and trade",
    symbol: "𓁐"
  },
  {
    id: "khufu",
    name: "Khufu",
    reign: "2589-2566 BCE",
    trait: "The Pyramid Builder of eternal legacy",
    symbol: "𓉔"
  }
];

const SelectPharaohPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-sand">
      {/* Floating Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
        {["𓀀", "𓁐", "𓂀", "𓃀", "𓄀", "𓅀"].map((glyph, i) => (
          <span
            key={i}
            className="absolute text-6xl text-primary animate-float-hieroglyph"
            style={{
              left: `${(i * 15) + 10}%`,
              top: `${(i * 12) % 80}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {glyph}
          </span>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-primary text-4xl">𓁹</span>
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-foreground">
              Choose Your Pharaoh
            </h1>
            <span className="text-primary text-4xl">𓁹</span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Select a ruler to converse with the wisdom of ages
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-2xl">☥</span>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        {/* Pharaoh Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pharaohs.map((pharaoh, index) => (
            <Card
              key={pharaoh.id}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-papyrus hover:shadow-temple animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Golden Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 text-center">
                {/* Pharaoh Symbol */}
                <div className="mb-6 text-8xl text-primary animate-glow-pulse">
                  {pharaoh.symbol}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-cinzel font-bold text-foreground mb-2">
                  {pharaoh.name}
                </h3>

                {/* Reign Period */}
                <p className="text-sm text-primary font-semibold mb-4">
                  {pharaoh.reign}
                </p>

                {/* Trait Description */}
                <p className="text-muted-foreground mb-6 italic">
                  {pharaoh.trait}
                </p>

                {/* Decorative Line */}
                <div className="mb-6 flex items-center justify-center gap-2">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                  <span className="text-primary text-xl">𓋹</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => navigate(`/chat/${pharaoh.id}`)}
                  className="gradient-gold text-card font-cinzel hover:scale-105 transition-transform duration-300 w-full"
                >
                  Speak to this Pharaoh
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SelectPharaohPage;
