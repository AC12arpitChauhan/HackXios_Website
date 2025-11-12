import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef(null);
  const fullText = "Welcome to Hackxios 2k25";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Added pt-20 to push the optical center down slightly
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Added mt-10 to nudge content down further */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 mt-10">
        
        {/* Changed items-start to items-center to align image with text vertically */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Trust Badge */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Be Industry Ready!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-black glow-text animate-glow leading-tight">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-light text-foreground/90">
              Innovate. Collaborate. Dominate.
            </p>

            {/* Description */}
            <p className="text-base text-muted-foreground max-w-xl">
              Enter the arena where bugs fall, and coders rise!
            </p>

            {/* CTA Button */}
            <div>
              <a 
                href="https://hackxios2k25.devfolio.co/overview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="btn-glow text-background font-bold text-lg px-10 py-6 rounded-full">
                  Apply with Devfolio →
                </button>
              </a>
            </div>

            {/* Sponsor Section */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-semibold">
                In Collaboration With
              </p>
              <div className="grid grid-cols-2 gap-6 items-center max-w-xl">
                <div className="flex items-center justify-center p-6 rounded-lg bg-background/5 hover:bg-background/10 transition-all h-32 md:h-40">
                  <img 
                    src="/devfo.png" 
                    alt="Devfolio" 
                    className="max-h-full w-full object-contain rounded-md opacity-90 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="flex items-center justify-center p-6 rounded-lg bg-background/5 hover:bg-background/10 transition-all h-32 md:h-40">
                  <img 
                    src="/ethind.png" 
                    alt="EthIndia" 
                    className="max-h-full w-full object-contain rounded-md opacity-90 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Group Photo */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              ref={imgRef}
              className={`relative w-full max-w-[550px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-transparent transition-all duration-700 ease-out transform ${
                imgVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              }}
            >
              {/* Decorative gradient glow */}
              <div
                className="absolute -inset-2 rounded-2xl blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(closest-side at 20% 10%, rgba(99,102,241,0.18), transparent 20%), radial-gradient(closest-side at 80% 90%, rgba(16,185,129,0.12), transparent 18%)",
                  zIndex: 0,
                }}
              />
              
              {/* Image */}
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
              
              {/* Overlay */}
              <div
                className="absolute inset-0 z-10 flex items-end p-6"
                style={{
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(2,6,23,0.55) 100%)",
                }}
              >
                <div className="text-white">
                  <h3 className="text-lg font-semibold leading-tight">
                    Teams that build the future
                  </h3>
                  <p className="text-xs text-white/80 mt-2 max-w-[18rem]">
                    A snapshot of last year's teams.
                  </p>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/85 to-secondary/85 text-background text-xs font-medium shadow-md backdrop-blur-sm">
                  Featured
                </div>
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