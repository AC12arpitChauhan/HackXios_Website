import React from "react";

const BackgroundFlow: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-20 top-1/4 w-[40rem] h-[40rem] rounded-full opacity-30"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,70,229,0.85), rgba(6,182,212,0.6), rgba(139,92,246,0.7))",
            filter: "blur(80px)",
            transform: "translateZ(0)",
            animation: "blob 10s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute right-[-10rem] bottom-[-10rem] w-[36rem] h-[36rem] rounded-full opacity-25"
          style={{
            background:
              "linear-gradient(45deg, rgba(255,107,107,0.8), rgba(255,209,102,0.6), rgba(255,213,229,0.6))",
            filter: "blur(72px)",
            transform: "translateZ(0)",
            animation: "blob 12s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute left-1/2 top-[-8rem] w-[28rem] h-[28rem] rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, rgba(96,165,250,0.7), rgba(124,58,237,0.6))",
            filter: "blur(48px)",
            transform: "translateZ(0)",
            animation: "blob 9s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate3d(0px,0px,0) scale(1); }
          33% { transform: translate3d(20px,-30px,0) scale(1.05); }
          66% { transform: translate3d(-25px,15px,0) scale(0.95); }
          100% { transform: translate3d(0px,0px,0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default BackgroundFlow;