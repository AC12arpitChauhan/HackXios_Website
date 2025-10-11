import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-1), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-50"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: 1 - index / 20,
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
        </div>
      ))}
      <div
        className="pointer-events-none fixed z-50 w-8 h-8 border-2 border-primary/50 rounded-full"
        style={{
          left: particles[particles.length - 1]?.x || 0,
          top: particles[particles.length - 1]?.y || 0,
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease-out",
        }}
      />
    </>
  );
};

export default CursorTrail;
