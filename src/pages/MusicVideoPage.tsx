import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music, Video } from "lucide-react";
import Footer from "@/components/Footer";

interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: "music" | "video";
  thumbnail: string;
  creator: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Hymn to Ra",
    description: "Ancient chant praising the sun god at dawn",
    type: "music",
    thumbnail: "𓇳",
    creator: "AI from Ancient Texts"
  },
  {
    id: "2",
    title: "Nile's Whisper",
    description: "Flowing melody inspired by the sacred river",
    type: "music",
    thumbnail: "𓈗",
    creator: "AI Composition"
  },
  {
    id: "3",
    title: "Temple Dance",
    description: "Rhythmic celebration in honor of Hathor",
    type: "video",
    thumbnail: "𓃀",
    creator: "AI Generated"
  },
  {
    id: "4",
    title: "Dialogue of Kings",
    description: "Conversation between Ramesses and Tutankhamun",
    type: "video",
    thumbnail: "𓁹",
    creator: "AI Recreation"
  },
  {
    id: "5",
    title: "Song of Isis",
    description: "Lament and celebration of the goddess",
    type: "music",
    thumbnail: "𓊨",
    creator: "AI from Hieroglyphic Lyrics"
  },
  {
    id: "6",
    title: "Pyramid Builders Chant",
    description: "Work song from the age of construction",
    type: "music",
    thumbnail: "𓉔",
    creator: "AI Historical Recreation"
  },
  {
    id: "7",
    title: "Valley of Kings",
    description: "Visual journey through the sacred tombs",
    type: "video",
    thumbnail: "𓋹",
    creator: "AI Visual Experience"
  },
  {
    id: "8",
    title: "Scarab's Journey",
    description: "Instrumental celebrating rebirth and transformation",
    type: "music",
    thumbnail: "𓆣",
    creator: "AI Composition"
  }
];

const MusicVideoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-sand">
      {/* Floating Background Hieroglyphs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        {["𓀀", "𓁐", "𓂀", "𓃀", "𓄀", "𓅀", "𓆀", "𓇀"].map((glyph, i) => (
          <span
            key={i}
            className="absolute text-9xl text-primary animate-float-hieroglyph"
            style={{
              left: `${(i * 11) % 90}%`,
              top: `${(i * 13) % 80}%`,
              animationDelay: `${i * 0.6}s`,
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
            <Music className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-foreground">
              Ancient Music & Art Gallery
            </h1>
            <Video className="w-10 h-10 text-secondary" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Experience the sounds and visions of Egypt, recreated through AI from ancient texts and imagery
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-3xl">𓂀</span>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mediaItems.map((item, index) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-4 border-primary/40 hover:border-primary transition-all duration-300 shadow-papyrus hover:shadow-temple animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Golden Frame Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Papyrus Texture Border */}
              <div className="absolute inset-0 pointer-events-none border-8 border-primary/10 group-hover:border-primary/20 transition-colors duration-300" />
              
              <div className="relative">
                {/* Thumbnail Area */}
                <div className="aspect-video bg-gradient-temple flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-shimmer" />
                  </div>
                  
                  {/* Symbol */}
                  <div className="relative text-8xl text-primary animate-glow-pulse z-10">
                    {item.thumbnail}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-temple">
                      <Play className="w-8 h-8 text-card fill-card ml-1" />
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-card/90 border border-primary/30 flex items-center gap-2">
                      {item.type === "music" ? (
                        <Music className="w-3 h-3 text-primary" />
                      ) : (
                        <Video className="w-3 h-3 text-secondary" />
                      )}
                      <span className="text-xs font-semibold text-foreground uppercase">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  
                  {/* Creator Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-primary font-semibold">
                      {item.creator}
                    </span>
                  </div>

                  {/* Decorative Line */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                    <span className="text-primary">𓋹</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
                  </div>

                  {/* Play Button */}
                  <Button
                    className="w-full gradient-gold text-card font-cinzel hover:scale-105 transition-transform"
                  >
                    <Play className="w-4 h-4 mr-2 fill-card" />
                    {item.type === "music" ? "Play Song" : "Watch Video"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MusicVideoPage;
