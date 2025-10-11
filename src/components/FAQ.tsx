import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Hackxios?",
    answer: "Hackxios is open to all students, professionals, and tech enthusiasts! Whether you're a seasoned developer or just starting out, you're welcome to join and learn.",
  },
  {
    question: "Do I need a team to participate?",
    answer: "You can participate solo or in teams of up to 4 members. We'll also have team formation sessions during registration if you're looking for teammates!",
  },
  {
    question: "Is there a registration fee?",
    answer: "No! Hackxios is completely free to attend. We provide meals, swag, and all the resources you need to build your project.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, and your creativity! We'll provide everything else including WiFi, food, and energy drinks to keep you going.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! We'll have industry experts and mentors available throughout the event to help with technical challenges, ideation, and project guidance.",
  },
  {
    question: "How are projects judged?",
    answer: "Projects are judged on innovation, technical complexity, design, and real-world impact. Our panel of judges includes tech leaders and investors.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Everything you need to know about Hackxios
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-xl border-none px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="btn-glow text-background font-semibold px-8 py-3 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
