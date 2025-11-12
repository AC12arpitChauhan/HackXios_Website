const Prizes = () => {
  const prizes = [
    {
      position: "Best Devops Project",
      amount: "$150",
      perks: ["Goodies", "Axios Swags", "Certificate"],
      size: "large",
    },
    {
      position: "Best Ideation Project",
      amount: "$100",
      perks: ["Goodies", "Axios Swags", "Certificate"],
      size: "large",
    },
  ];

  return (
    <section id="prizes" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-meteor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Prizes & Perks
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Compete for $250 in prizes and exclusive perks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-10 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                  {prize.position}
                </div>
                <div className="text-5xl md:text-6xl font-black mb-6 glow-text">
                  {prize.amount}
                </div>
                <div className="space-y-3">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground text-lg">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;