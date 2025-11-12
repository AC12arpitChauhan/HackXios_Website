import { useEffect, useRef, useState } from "react";

const events = [
  { time: "Now Open", title: "Registrations Open", description: "Register now to secure your spot" },
  { time: "December 15, 2025", title: "Registration Closes", description: "Last date to register - 11:59 PM" },
  { time: "December 23, 2025", title: "Stage-I PPT Submission", description: "Submit ideation PPT for shortlisting - 11:59 PM" },
  { time: "December 25, 2025", title: "Shortlisting Released", description: "Check if your team is selected" },
  { time: "December 29, 2025", title: "Hackathon Begins", description: "Start building your projects" },
  { time: "11:00 AM, Dec 29", title: "Opening Ceremony", description: "Welcome address and kickoff" },
  { time: "5:00 PM, Dec 30", title: "Evening Break & Interaction", description: "Network and relax with the community" },
  { time: "11:00 PM, Dec 30", title: "Hackathon Ends", description: "Submit your final projects" },
  { time: "After Submissions", title: "Projects Evaluation", description: "Judges review and score projects" },
  { time: "TBA", title: "Results Announced", description: "Winners revealed as soon as possible!" },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          Event Timeline
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Glowing line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-muted to-transparent" />
          <div
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary transition-all duration-500 ease-out"
            style={{ height: `${(activeIndex / events.length) * 100}%` }}
          />

          <div className="space-y-2">
            {events.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-[52%]" : "md:pl-[52%]"
                }`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full -ml-[7px] transition-all duration-300 ${
                    index <= activeIndex
                      ? "bg-primary shadow-lg shadow-primary/50 scale-125"
                      : "bg-muted"
                  }`}
                >
                  {index <= activeIndex && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`glass-card rounded-xl p-6 transition-all duration-500 ${
                    index <= activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-50 translate-y-4"
                  }`}
                >
                  <div className="text-sm font-bold text-primary mb-2">{event.time}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;