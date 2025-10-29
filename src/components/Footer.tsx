import { Home, Info, MessageCircle, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: "Home", glyph: "𓉗", path: "/" },
    { icon: Info, label: "About", glyph: "𓁹", path: "/about" },
    { icon: MessageCircle, label: "Chat", glyph: "𓅓", path: "/select-pharaoh" },
    { icon: Image, label: "Gallery", glyph: "𓋹", path: "/gallery" },
  ];

  return (
    <footer className="relative bg-gradient-temple text-card overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 60px)`,
          }}
        />
      </div>

      {/* Animated Scarab Beetle */}
      <div className="absolute top-8 left-0 text-4xl animate-scarab-crawl opacity-60">
        𓆣
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-5xl text-primary">☥</span>
              <h3 className="text-2xl font-cinzel font-bold">
                Voices of Pharaohs
              </h3>
            </div>
            <p className="text-primary/80 leading-relaxed">
              Bringing ancient wisdom to the modern world through the power of AI
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-xl font-cinzel font-semibold mb-6 text-primary">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/10 hover:bg-card/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {item.glyph}
                  </span>
                  <span className="text-sm font-cinzel">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-cinzel font-semibold mb-6 text-primary">
              Connect
            </h4>
            <p className="text-primary/80 mb-4">
              Join our journey through ancient Egypt
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xl">𓀀</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xl">𓁐</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-xl">𓂀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-muted px-4 text-2xl text-primary">𓋹</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-primary/60 text-sm">
          <p className="mb-2 font-cinzel">
            © {new Date().getFullYear()} Voices of Pharaohs. All rights
            reserved.
          </p>
          <p className="text-xs">
            Reviving ancient wisdom through modern technology
          </p>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
};

export default Footer;
