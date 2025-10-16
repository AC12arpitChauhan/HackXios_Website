const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      amount: "$200",
      perks: ["AWS Credits", "Mentorship Program", "Job Referrals"],
      size: "large",
    },
    {
      position: "2nd Place",
      amount: "$135",
      perks: ["AWS Credits", "Swag Pack", "Club Merchandise"],
      size: "medium",
    },
    {
      position: "3rd Place",
      amount: "$90",
      perks: ["Swag Pack", "Club Merchandise"],
      size: "medium",
    },
    {
      position: "Best AI Project",
      perks: ["AWS Credits", "Special Recognition", "Swag Pack", "Club Merchandise"],
      size: "small",
    }
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
          Compete for over $500 in prizes and exclusive opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden group ${
                prize.size === "large" ? "md:col-span-3 md:row-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-sm font-bold text-primary mb-2">
                  {prize.position}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-4 glow-text">
                  {prize.amount}
                </div>
                <div className="space-y-2">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {perk}
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
