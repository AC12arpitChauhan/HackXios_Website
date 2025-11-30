import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-primary/20 shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{letterSpacing: '-0.5px'}}>HackXios</h1>
          
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: "about", label: "About" },
              { id: "themes", label: "Themes" },
              { id: "timeline", label: "Timeline" },
              { id: "sponsors", label: "Sponsors" },
              { id: "faq", label: "FAQ" },
            ].map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -3, scale: 1.02 }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* <Button className="btn-glow text-background font-semibold px-6 py-2 rounded-full">
            Register Now
          </Button> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
