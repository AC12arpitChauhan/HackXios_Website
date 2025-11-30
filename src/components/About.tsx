import { Rocket, Lightbulb, Trophy, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const About = () => {
  const cards = [
    { Icon: Rocket, title: "Innovation", body: "HackXios 2k25 emphasizes on hackers to implement devops and cloud services and create the project you always wished to, showing innovation and creativity implemented with impressive coding and deployment skills." },
    { Icon: Trophy, title: "Compete for Glory", body: "Compete for incredible Cash Prize, Goodies, Merchandise and Certificates. Get the chance to showcase your idea to industry experts." },
    { Icon: Handshake, title: "Collaborate & Network", body: "Connect with fellow developers, students, and entrepreneurs. Build lasting relationships and become part of a thriving tech community." },
    { Icon: Lightbulb, title: "Learn & Grow", body: "Access workshops, mentorship sessions, and resources from industry experts through Axios." },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          About Hackxios
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map(({ Icon, title, body }, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 14 }} viewport={{ once: true }} className="glass-card glass-card-hover rounded-2xl p-8 group relative overflow-hidden">
              <div className="absolute right-4 top-4 w-36 h-36 opacity-30 pointer-events-none">
                <ThreeScene mode={i % 2 === 0 ? "sphere" : "particles"} interactive />
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-6 flex items-center justify-center" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.18)' }}>
                <Icon />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;