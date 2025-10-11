import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold glow-text mb-2">Hackxios 2025</h3>
            <p className="text-muted-foreground">Organized by Axios Club</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all group"
            >
              <Instagram className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Hackxios. All rights reserved. Built with 💙 by Axios Club.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
