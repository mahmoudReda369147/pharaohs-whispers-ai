import { Music, Video } from "lucide-react";

const galleryItems = [
  {
    type: "music",
    title: "Hymn to Ra",
    creator: "User_Anubis",
    description: "Ancient sunrise chant",
  },
  {
    type: "video",
    title: "Temple Dance",
    creator: "User_Cleopatra",
    description: "Ritual performance",
  },
  {
    type: "music",
    title: "Nile's Whisper",
    creator: "User_Osiris",
    description: "Ambient river sounds",
  },
  {
    type: "video",
    title: "Pharaoh's Speech",
    creator: "User_Hatshepsut",
    description: "Royal proclamation",
  },
  {
    type: "music",
    title: "Desert Winds",
    creator: "User_Thoth",
    description: "Mystical atmosphere",
  },
  {
    type: "video",
    title: "Hieroglyph Story",
    creator: "User_Isis",
    description: "Animated tale",
  },
];

const ArtGallery = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary text-3xl">𓆃</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-foreground">
              Ancient Music & Art Gallery
            </h2>
            <span className="text-primary text-3xl">𓆃</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore creations from the eternal halls of creativity
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Item Card */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-papyrus hover:shadow-temple transition-all duration-300 hover:scale-[1.02]">
                {/* Decorative Gold Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-primary/20 transition-all duration-500 pointer-events-none" />

                {/* Content Area */}
                <div className="bg-card/95 backdrop-blur-sm p-6">
                  {/* Icon & Type */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === "music"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.type === "music" ? (
                        <Music className="w-6 h-6" />
                      ) : (
                        <Video className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-cinzel">
                      {item.type}
                    </span>
                  </div>

                  {/* Placeholder Visual */}
                  <div
                    className={`aspect-square mb-4 rounded-xl overflow-hidden ${
                      item.type === "music"
                        ? "bg-gradient-to-br from-primary/30 to-primary/10"
                        : "bg-gradient-to-br from-secondary/30 to-secondary/10"
                    } flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500`}
                  >
                    {/* Hieroglyph Pattern */}
                    <div className="text-7xl opacity-20">
                      {item.type === "music" ? "𓊽" : "𓁹"}
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title & Info */}
                  <h3 className="text-xl font-cinzel font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    by {item.creator}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {item.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between">
                    <span className="text-xs text-primary font-cinzel">
                      View Creation
                    </span>
                    <span className="text-primary text-xl group-hover:animate-glow-pulse">
                      𓋹
                    </span>
                  </div>
                </div>

                {/* Corner Ornaments */}
                <div className="absolute top-2 left-2 text-primary/20 text-sm">𓋹</div>
                <div className="absolute top-2 right-2 text-primary/20 text-sm">𓋹</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 font-cinzel">
            Share your own ancient creations with the world
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-2xl">𓆃</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
