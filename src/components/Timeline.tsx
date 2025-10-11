import { useEffect, useRef, useState } from "react";

const events = [
  { time: "9:00 AM", title: "Registration & Check-in", description: "Get your badge and meet the team" },
  { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address and theme reveal" },
  { time: "11:00 AM", title: "Hacking Begins", description: "Start building your projects" },
  { time: "2:00 PM", title: "Workshop: AI Fundamentals", description: "Learn from industry experts" },
  { time: "6:00 PM", title: "Dinner Break", description: "Refuel and network" },
  { time: "12:00 AM", title: "Midnight Checkpoint", description: "Mid-hack progress review" },
  { time: "9:00 AM", title: "Final Sprint", description: "Last hours to polish your project" },
  { time: "2:00 PM", title: "Submissions Close", description: "Submit your final project" },
  { time: "4:00 PM", title: "Judging & Demos", description: "Present to the judges" },
  { time: "6:00 PM", title: "Closing Ceremony", description: "Awards and celebrations" },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

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
