import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "HackXios 2025";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // image reveal on scroll
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImgVisible(true);
            // keep visible once observed
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" /> */}
      
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="text-center lg:text-left w-full lg:w-1/2 px-4">
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Trusted By 1000+ Students</span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 glow-text animate-glow">
              {displayText}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="text-xl md:text-3xl font-light mb-4 text-foreground/90">
              Innovate. Collaborate. Dominate.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Enter the arena where bugs fall, and coders rise! Where every error fuels your next breakthrough!
            </p>
            <Button className="btn-glow text-background font-bold text-lg px-12 py-6 rounded-full mb-8">
              Apply with Devfolio →
            </Button>
            
            {/* Sponsor logos - prominently displayed */}
            <div className="mt-12 mb-8 lg:mb-0">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Powered By</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 flex-wrap">
                <img
                  src="/aws.png"
                  alt="AWS"
                  className="h-16 md:h-20 lg:h-24 object-contain"
                />
                <img 
                  src="/image.png" 
                  alt="Devfolio" 
                  className="h-16 md:h-20 lg:h-24 object-contain rounded-md" 
                />
                <img 
                  src="/ethindia.png" 
                  alt="EthIndia" 
                  className="h-20 md:h-28 lg:h-30 object-contain rounded-md" 
                />
              </div>
            </div>
          </div>
          
          {/* Group photo - positioned to not overlap sponsors */}
          <div
            ref={imgRef}
            aria-hidden={false}
            className={`relative flex-shrink-0 w-full lg:w-1/2 max-w-[600px] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-transparent transition-all duration-700 ease-out transform ${
              imgVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            }}
          >
            {/* decorative gradient glow behind the image to blend with page language */}
            <div
              className="absolute -inset-2 rounded-2xl blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(closest-side at 20% 10%, rgba(99,102,241,0.18), transparent 20%), radial-gradient(closest-side at 80% 90%, rgba(16,185,129,0.12), transparent 18%)",
                zIndex: 0,
              }}
            />
            {/* actual image */}
            <img
              src="/grpImg.png"
              alt="Community group"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform"
              style={{
                transform: imgVisible ? "scale(1.02)" : "scale(0.99)",
                filter: "blur(0.0px) saturate(110%)",
                zIndex: 1,
              }}
            />
            {/* overlay for readability (blur + gradient) */}
            <div
              className="absolute inset-0 z-10 flex items-end p-6"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(2,6,23,0.55) 100%)",
                backdropFilter: "blur(0px)",
              }}
            >
              <div className="text-left text-background text-white">
                <h3 className="text-xl font-semibold leading-tight mt-1">Teams that build the future</h3>
                <p className="text-xs text-background/80 mt-2 max-w-[18rem] text-white">
                  A snapshot of last year's teams.
                </p>
              </div>
            </div>
            {/* subtle label badge top-left */}
            <div className="absolute top-4 left-4 z-20">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/85 to-secondary/85 text-background text-xs font-medium shadow-md backdrop-blur-sm">
                Featured
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;