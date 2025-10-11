import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-primary/20 shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold glow-text">HackXios</h1>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("themes")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sponsors
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </div>

          <Button className="btn-glow text-background font-semibold px-6 py-2 rounded-full">
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
