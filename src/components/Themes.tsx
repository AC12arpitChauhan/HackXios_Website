import { Cloud, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const themes = [
  {
    icon: Cloud,
    title: "Best Devops Project",
    description: "The project idea, the challenge it solves and the tech stack used definitely matters but the idea with the best implementation of cloud resources, databases, load balancing and security to make their idea the most scalable and future proof wins this track!",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Lightbulb,
    title: "Best Ideation Project",
    description: "The project that solves a real life problem with a unique ideation and in the most creative, resourceful, and feasible way wins this track!",
    gradient: "from-accent to-primary",
  },
];

const Themes = () => {
  return (
    <section id="themes" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Choose Your Track
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Pick a track that ignites your passion and start building
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, rotateX: 2 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-2xl p-8 group cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-4 bottom-4 w-36 h-36 opacity-25 pointer-events-none">
                  <ThreeScene mode={index % 2 === 0 ? "knot" : "particles"} interactive />
                </div>
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${theme.gradient} mb-6 flex items-center justify-center transition-shadow`}
                  style={{ boxShadow: '0 8px 22px rgba(0,0,0,0.16)' }}
                >
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{theme.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{theme.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Themes;