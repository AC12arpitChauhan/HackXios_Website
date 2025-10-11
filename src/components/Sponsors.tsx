const Sponsors = () => {
  const sponsors = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Devfolio",
      logo: "/image.png",
    },
  ];

  return (
    <section id="sponsors" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
          Our Partners
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Powered by industry leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 "
              />
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Want to Sponsor?</h3>
          <p className="text-muted-foreground mb-6">
            Join us in empowering the next generation of innovators
          </p>
          <button className="btn-glow text-background font-semibold px-8 py-3 rounded-full">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
