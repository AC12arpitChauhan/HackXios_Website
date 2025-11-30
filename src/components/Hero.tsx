import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const words = ["Welcome", "to", "Hackxios", "2k25"];

  // Intersection observer for right image/card
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImgVisible(true);
      },
      { threshold: 0.25 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Subtle decorative blobs (kept but toned down) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.12), transparent 30%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(139,92,246,0.10), transparent 30%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 mt-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background transition-transform transform hover:scale-110" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Be Industry Ready</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold leading-tight" style={{ letterSpacing: '-1px' }}>
              {words.map((w, i) => (
                <motion.span key={w} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className={`inline-block mr-3 ${i >= 2 ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold' : ''}`}>
                  {w}
                </motion.span>
              ))}
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="ml-1 text-primary">|</motion.span>
            </motion.h1>

            <p className="text-2xl md:text-3xl font-light text-foreground/90">Innovate. Collaborate. Dominate.</p>

            <p className="text-base text-muted-foreground max-w-xl">Enter the arena where bugs fall, and coders rise.</p>

            <div>
              <a href="https://hackxios2k25.devfolio.co/overview" target="_blank" rel="noopener noreferrer" className="inline-block">
                <motion.button
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-primary text-background font-bold text-lg px-8 py-3 rounded-full shadow-sm"
                >
                  Apply with Devfolio →
                </motion.button>
              </a>
            </div>

            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-semibold">In Collaboration With</p>
              <div className="collaborators max-w-xl mx-auto">
                {["/devfo.png", "/ethind.png", "/aws.png"].map((src, i) => (
                  <div key={i} className="flex items-center justify-center rounded-lg bg-background/5 p-3 hover-pop" style={{ width: 220, height: 88 }}>
                    <img src={src} alt={`partner-${i}`} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 3D accent + image */}
          <div className="flex items-center justify-center lg:justify-end">

            <div ref={imgRef} className={`relative w-full max-w-[550px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-transparent transition-all duration-700 ease-out transform ${imgVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}>

              {/* Three.js accent behind the image */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
                <ThreeScene mode="knot" interactive />
              </div>

              {/* Background video (replace /hero-bg.mp4 in public/) */}
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform"
                poster="/grpImg.png"
                autoPlay
                muted
                loop
                playsInline
                style={{ transform: imgVisible ? 'scale(1.02)' : 'scale(0.99)', filter: 'saturate(105%)', zIndex: 1 }}
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
                {/* Fallback image for browsers that don't support video */}
                <img src="/grpImg.png" alt="Community group" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 z-10 flex items-end p-6" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(2,6,23,0.55) 100%)' }}>
                <div className="text-white">
                  <h3 className="text-lg font-semibold leading-tight">Teams that build the future</h3>
                  <p className="text-xs text-white/80 mt-2 max-w-[18rem]">A snapshot of last year's teams.</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/85 to-secondary/85 text-background text-xs font-medium shadow-md">Featured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (subtle) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-80">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;