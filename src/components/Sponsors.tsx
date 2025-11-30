import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Devfolio",
      logo: "/devfo.png",
    },
    {
      name: "EthIndia",
      logo: "/ethind.png",
    },
    {
      name: "AWS",
      logo: "/aws.png",
    },
  ];

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sponsors" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Partners
        </motion.h2>
        <p className="text-muted-foreground mb-16 text-lg">In collaboration with industry leaders</p>

        <div className="flex items-center justify-center gap-8 overflow-x-auto py-2 collaborators">
          {sponsors.map((sponsor, index) => (
            <motion.div key={index} whileHover={{ scale: 1.04 }} className="group cursor-pointer flex items-center justify-center p-2 bg-background/5 rounded-md hover-pop" style={{ width: 220, height: 88 }}>
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain opacity-95" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-card rounded-2xl p-12">
          <h3 className="text-2xl font-semibold mb-4">Want to Sponsor?</h3>
          <p className="text-muted-foreground mb-6">Join us in empowering the next generation of innovators</p>
          <motion.button onClick={scrollToFooter} whileHover={{ y: -3 }} className="bg-primary text-background font-semibold px-8 py-3 rounded-full shadow-sm">
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* 3D Accent behind section */}
      <div className="pointer-events-none absolute right-6 top-6 w-48 h-48 opacity-40">
        <ThreeScene mode="sphere" />
      </div>
    </section>
  );
};

export default Sponsors;