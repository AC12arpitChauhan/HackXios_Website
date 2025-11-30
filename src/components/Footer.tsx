import { Mail, Instagram, Linkedin, Github, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/axios.iiitbhopal/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/axios-iiit-bhopal/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/axios-iiitbhopal", label: "GitHub" },
  ];

  const partners = [
    { name: "AWS", logo: "/aws.png", href: "https://aws.amazon.com" },
    { name: "Devfolio", logo: "/devfo.png", href: "https://devfolio.co" },
    { name: "EthIndia", logo: "/ethind.png", href: "https://ethindia.co" },
  ];

  const contacts = [
    { name: "Dhruv Sarin", number: "+91 80817 94225" },
    { name: "Arpit Chauhan", number: "+91 74706 04598" },
    { name: "Ashmit Rajput", number: "+91 81188 60799" },
  ];

  return (
    <motion.footer id="footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-12 px-6 border-t border-border/30 bg-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="pointer-events-none absolute left-6 top-6 w-36 h-36 opacity-25">
        <ThreeScene mode="sphere" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Main Grid: Contact & Socials */}
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Left Column - Contact Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary tracking-wide uppercase">Contact Us</h3>

            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone className="w-5 h-5 text-primary/80 group-hover:text-primary" />
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-foreground/80">{contact.name}</span>
                    <span className="hidden sm:block text-border">|</span>
                    <a href={`tel:${contact.number.replace(/\s/g, '')}`} className="hover:underline">{contact.number}</a>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group mt-2">
                <Mail className="w-5 h-5 text-primary/80 group-hover:text-primary" />
                <a href="mailto:axios.iiitbhopal@gmail.com" className="hover:underline">axios.iiitbhopal@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary tracking-wide uppercase">Social Links</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group w-fit">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-lg group-hover:translate-x-1 transition-transform">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <a href="https://devfolio.co/code-of-conduct" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            Code of Conduct
            <ExternalLink className="w-3 h-3" />
          </a>

          <p className="text-center md:text-right">© 2025 Hackxios. All rights reserved.</p>
        </div>

        {/* Partner logos section (inline, responsive) */}
        <div className="mt-8 border-t border-border/10 pt-6">
          <div className="flex items-center justify-center gap-8 flex-wrap collaborators">
            {partners.map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity p-2 hover-pop">
                <img src={p.logo} alt={p.name} className="h-8 md:h-12 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;