const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          About Hackxios
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card glass-card-hover rounded-2xl p-8 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-6 flex items-center justify-center glow-border">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HackXios 2k25 emphasizes on hackers to implement devops and cloud services and create the project you always wished to, showing innovation and creativity implemented with impressive coding and deployment skills. Make your idea production ready, deploy it using cloud services and databases, ready to be future proof and scalable.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent mb-6 flex items-center justify-center glow-border">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Compete for Glory
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Compete for incredible Cash Prize, Goodies, Merchandise and Certificates. Get the chance to showcase your idea to industry experts, this is the opportunity you have been waiting for!
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary mb-6 flex items-center justify-center glow-border">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Collaborate & Network
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with fellow developers, students, and entrepreneurs. Build lasting relationships, find co-founders, and become part of a thriving tech community.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center glow-border">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Learn & Grow
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Access workshops, mentorship sessions, and resources from industry experts through Axios. Whether you're a beginner or a pro, you'll level up your skills at Hackxios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;