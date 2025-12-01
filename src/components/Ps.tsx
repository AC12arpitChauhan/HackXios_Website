"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe, BrainCircuit, Layers } from "lucide-react";

const problems = [
  {
    icon: Lightbulb,
    title: "Open Innovation Challenge",
    description:
      "Build anything that solves a real-world problem using creativity, strong engineering fundamentals, and modern tech stacks. Your project must be impactful, feasible, and user-centric.",
  },
  {
    icon: Globe,
    title: "Sustainability & Social Impact",
    description:
      "Design solutions that tackle challenges in healthcare, education, environment, or civic systems. Think scalable systems, transparent workflows, and inclusive design.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation Track",
    description:
      "Solve domain-specific issues using ML/AI models, analytics pipelines, or automation frameworks. Focus on model efficiency, reliability, and industry-grade deployment.",
  },
  {
    icon: Layers,
    title: "DevOps & Cloud Innovation",
    description:
      "Demonstrate cloud architecture, infrastructure-as-code, CI/CD workflows, and containerization. Show production-ready workflows that match industry practices.",
  },
];

const Ps = () => {
  return (
    <section id="ps" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Problem Statements
        </motion.h2>

        <p className="text-center text-muted-foreground mb-16 text-lg">
          Choose a domain and build a solution that stands out in innovation, execution, and scalability.
        </p>

        <div className="space-y-10">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8 border-none shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="flex items-start gap-5">
                
                {/* Icon Bubble */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0"
                     style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }}>
                  <item.icon className="w-7 h-7 text-background" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ps;
