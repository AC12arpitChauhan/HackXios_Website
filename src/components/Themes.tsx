import { Brain, Leaf, Lock, Lightbulb } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Build intelligent systems that learn, adapt, and transform industries with cutting-edge AI technologies.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Leaf,
    title: "Sustainable Tech",
    description: "Create solutions that combat climate change and promote environmental sustainability for a better future.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Lock,
    title: "Web3 & Blockchain",
    description: "Develop decentralized applications and explore the future of trustless, transparent technology.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Unleash your creativity with no boundaries. Build anything that solves real-world problems.",
    gradient: "from-primary via-accent to-secondary",
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
          Pick a theme that ignites your passion and start building
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                  transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${theme.gradient} mb-6 flex items-center justify-center glow-border group-hover:shadow-xl group-hover:shadow-primary/50 transition-all`}
                >
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {theme.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Themes;
