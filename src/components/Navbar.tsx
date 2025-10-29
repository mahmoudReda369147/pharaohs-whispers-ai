import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", glyph: "𓉗", path: "/" },
    { label: "Chat with Pharaohs", glyph: "𓅓", path: "/select-pharaoh" },
    { label: "Gallery", glyph: "𓋹", path: "/gallery" },
    { label: "About", glyph: "𓁹", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-gradient-to-b from-muted/98 via-muted/95 to-muted/90 backdrop-blur-xl shadow-2xl border-b border-primary/20"
            : "bg-gradient-to-b from-muted via-muted to-muted/95 border-b border-primary/30"
        )}
      >
        {/* Animated Top Border with Shimmer */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-shimmer" />
        </div>

        {/* Floating Hieroglyphs Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <span className="absolute top-2 left-[10%] text-2xl text-primary animate-float-hieroglyph" style={{ animationDelay: "0s" }}>
            𓆣
          </span>
          <span className="absolute top-3 right-[15%] text-xl text-primary animate-float-hieroglyph" style={{ animationDelay: "2s" }}>
            𓋹
          </span>
          <span className="absolute top-1 left-[45%] text-2xl text-primary animate-float-hieroglyph" style={{ animationDelay: "4s" }}>
            𓁹
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-4 group cursor-pointer relative"
            >
              {/* Glow Effect Behind Logo */}
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Main Ankh */}
                <span className="text-6xl text-primary group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_10px_rgba(218,165,32,0.5)]">
                  ☥
                </span>
                {/* Rotating Background Ankh */}
                <div className="absolute inset-0 text-6xl text-primary/30 animate-rotate-ankh" style={{ animationDuration: "30s" }}>
                  ☥
                </div>
                {/* Pulse Glow */}
                <div className="absolute inset-0 text-6xl text-primary opacity-0 group-hover:opacity-100 animate-glow-pulse transition-opacity duration-500">
                  ☥
                </div>
              </div>
              
              <div className="flex flex-col relative">
                <span className={cn(
                  "text-2xl font-cinzel font-bold group-hover:tracking-wider transition-all duration-300",
                  isScrolled ? "text-gradient-gold" : "text-card"
                )}>
                  Voices of Pharaohs
                </span>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-xs font-cinzel tracking-widest",
                    isScrolled ? "text-primary/70" : "text-card/80"
                  )}>
                    Ancient Wisdom Reborn
                  </span>
                  <Sparkles className={cn(
                    "w-3 h-3 transition-colors",
                    isScrolled ? "text-primary/70 group-hover:text-primary" : "text-card/70 group-hover:text-card"
                  )} />
                </div>
              </div>
            </button>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <Button
                    onClick={() => navigate(item.path)}
                    variant="ghost"
                    className={cn(
                      "relative group px-5 py-6 font-cinzel text-sm transition-all duration-300 overflow-hidden",
                      isScrolled
                        ? isActive(item.path)
                          ? "text-primary font-semibold"
                          : "text-primary/70 hover:text-primary"
                        : isActive(item.path)
                          ? "text-card font-semibold"
                          : "text-card/80 hover:text-card"
                    )}
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                    
                    {/* Border on Hover */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300" />
                    
                    <span className="flex items-center gap-2.5 relative z-10">
                      <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-lg">
                        {item.glyph}
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                        {item.label}
                      </span>
                    </span>
                    
                    {/* Enhanced Active Indicator */}
                    {isActive(item.path) && (
                      <>
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full blur-sm" />
                      </>
                    )}
                  </Button>
                  
                  {/* Decorative Corner Elements */}
                  {isActive(item.path) && (
                    <>
                      <span className="absolute -top-1 -left-1 text-xs text-primary/40">𓄹</span>
                      <span className="absolute -top-1 -right-1 text-xs text-primary/40">𓄺</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden relative p-3 rounded-xl transition-all duration-300 border-2 group",
                isScrolled
                  ? "text-primary hover:bg-primary/20 border-primary/30 hover:border-primary"
                  : "text-card hover:bg-card/20 border-card/30 hover:border-card"
              )}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Bottom Border with Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
        </div>
        
        {/* Decorative Bottom Hieroglyphs */}
        <div className={cn(
          "absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-8 text-xs transition-colors duration-700",
          isScrolled ? "text-primary/30" : "text-card/40"
        )}>
          <span>𓋹</span>
          <span>𓆣</span>
          <span>𓋹</span>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Enhanced Backdrop with Blur */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Floating Background Hieroglyphs */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <span className="absolute top-20 left-[5%] text-5xl text-primary animate-float-hieroglyph" style={{ animationDelay: "0s" }}>
              𓀀
            </span>
            <span className="absolute top-40 right-[10%] text-6xl text-primary animate-float-hieroglyph" style={{ animationDelay: "1s" }}>
              𓁹
            </span>
            <span className="absolute bottom-32 left-[15%] text-7xl text-primary animate-float-hieroglyph" style={{ animationDelay: "3s" }}>
              𓋹
            </span>
            <span className="absolute top-64 right-[20%] text-4xl text-primary animate-float-hieroglyph" style={{ animationDelay: "2s" }}>
              𓆣
            </span>
          </div>
        </div>

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-24 left-0 right-0 transition-all duration-500",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}
        >
          <div className="max-w-md mx-auto px-6 py-8">
            {/* Menu Items */}
            <div className="grid gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "group relative flex items-center gap-5 p-5 rounded-2xl font-cinzel transition-all duration-300 overflow-hidden",
                    isActive(item.path)
                      ? "bg-gradient-gold text-card shadow-temple scale-105"
                      : "bg-card/80 backdrop-blur-sm text-primary/70 hover:bg-card hover:text-primary border-2 border-primary/20 hover:border-primary/40 hover:scale-105 hover:shadow-xl"
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMobileMenuOpen ? 'fade-in-up 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hieroglyph Icon */}
                  <div className="relative">
                    <span className="text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 drop-shadow-lg">
                      {item.glyph}
                    </span>
                    {isActive(item.path) && (
                      <div className="absolute inset-0 text-5xl opacity-50 animate-glow-pulse">
                        {item.glyph}
                      </div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <span className="text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                    {item.label}
                  </span>
                  
                  {/* Active Badge */}
                  {isActive(item.path) && (
                    <div className="ml-auto">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                  
                  {/* Corner Decorations */}
                  {isActive(item.path) && (
                    <>
                      <span className="absolute top-1 left-1 text-xs opacity-50">𓄹</span>
                      <span className="absolute top-1 right-1 text-xs opacity-50">𓄺</span>
                      <span className="absolute bottom-1 left-1 text-xs opacity-50">𓄻</span>
                      <span className="absolute bottom-1 right-1 text-xs opacity-50">𓄼</span>
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-primary/30" />
              </div>
              <div className="relative flex justify-center">
                <div className="bg-background px-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl text-primary animate-glow-pulse">𓋹</span>
                    <span className="text-2xl text-primary/60">𓆣</span>
                    <span className="text-3xl text-primary animate-glow-pulse">𓋹</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-muted/50 hover:bg-muted border-2 border-primary/20 hover:border-primary/40 text-primary/70 hover:text-primary font-cinzel font-semibold transition-all duration-300 hover:scale-105"
            >
              Close Menu
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
