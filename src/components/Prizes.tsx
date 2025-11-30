import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

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
      {/* three.js accents behind section */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-6 bottom-6 w-44 h-44 opacity-30">
          <ThreeScene mode="particles" />
        </div>
        <div className="absolute right-6 top-6 w-48 h-48 opacity-25">
          <ThreeScene mode="knot" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Prizes & Perks
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Compete for $250 in prizes and exclusive perks</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card glass-card-hover rounded-2xl p-10 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">{prize.position}</div>
                <div className="text-5xl md:text-6xl font-black mb-6">{prize.amount}</div>
                <div className="space-y-3">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground text-lg">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-6 bottom-6 w-44 h-44 opacity-30">
        <ThreeScene mode="particles" />
      </div>
    </section>
  );
};

export default Prizes;