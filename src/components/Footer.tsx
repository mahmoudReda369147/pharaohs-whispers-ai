import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", glyph: "𓉗", path: "/" },
    { label: "Chat", glyph: "𓅓", path: "/select-pharaoh" },
    { label: "Gallery", glyph: "𓋹", path: "/gallery" },
    { label: "About", glyph: "𓁹", path: "/about" },
  ];

  const socialLinks = [
    { glyph: "𓀀", label: "Follow" },
    { glyph: "𓁐", label: "Connect" },
    { glyph: "𓂀", label: "Share" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-muted via-muted to-background text-foreground overflow-hidden border-t border-primary/20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 80px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 80px)`,
          }}
        />
      </div>

      {/* Floating Hieroglyphs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <span className="absolute top-20 left-10 text-4xl text-primary animate-float-hieroglyph" style={{ animationDelay: "0s" }}>
          𓂀
        </span>
        <span className="absolute top-32 right-20 text-5xl text-primary animate-float-hieroglyph" style={{ animationDelay: "2s" }}>
          𓁹
        </span>
        <span className="absolute bottom-28 left-1/4 text-6xl text-primary animate-float-hieroglyph" style={{ animationDelay: "4s" }}>
          𓋹
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Section - Brand & Description */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <span className="text-7xl text-primary">☥</span>
              <div className="absolute inset-0 text-7xl text-primary opacity-50 animate-glow-pulse" />
            </div>
            <div className="text-left">
              <h3 className="text-4xl font-cinzel font-bold text-gradient-gold mb-1">
                Voices of Pharaohs
              </h3>
              <p className="text-sm text-muted-foreground font-cinzel tracking-wider">
                Ancient Wisdom Reborn
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Journey through millennia as AI breathes life into the eternal voices of Egypt's greatest rulers
          </p>
        </div>

        {/* Middle Section - Navigation & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-cinzel font-semibold mb-6 text-primary flex items-center gap-2">
              <span className="text-2xl">𓉗</span>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className="group flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span className="text-3xl text-primary group-hover:scale-110 transition-transform">
                    {link.glyph}
                  </span>
                  <span className="text-base font-cinzel text-foreground/80 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-cinzel font-semibold mb-6 text-primary flex items-center gap-2">
              <span className="text-2xl">𓁹</span>
              Connect With Us
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join our community of history enthusiasts and explore the mysteries of ancient Egypt together
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="group w-14 h-14 rounded-full bg-gradient-gold hover:shadow-temple transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-primary/20 hover:border-primary"
                  aria-label={social.label}
                >
                  <span className="text-2xl text-card group-hover:scale-110 transition-transform">
                    {social.glyph}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-primary/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl text-primary animate-glow-pulse">𓋹</span>
                <span className="text-2xl text-primary/40">𓆣</span>
                <span className="text-3xl text-primary animate-glow-pulse">𓋹</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <p className="text-base font-cinzel text-muted-foreground mb-2">
            © {new Date().getFullYear()} Voices of Pharaohs. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Crafted with reverence for ancient history and modern innovation
          </p>
        </div>
      </div>

      {/* Bottom Decorative Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
