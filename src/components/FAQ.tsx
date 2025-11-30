import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in Hackxios?",
    answer: "All teams with 3-6 members from different colleges, branches and courses are welcome to participate and show off their coding and deployment skills. (Industry experts and developers are not allowed to participate)",
  },
  {
    question: "What is the aim of this hackathon?",
    answer: "Hackxios 2k25 aims at motivating students to solve real life problems with unique ideation using new technologies, it also emphasizes on cloud and devops skills required to make scalable and future proof solutions.",
  },
  {
    question: "What is Hackxios 2k25?",
    answer: "It is a 36-hour long hackathon organized by Axios - Development Club of IIIT Bhopal, in collaboration with devfolio and other industry leaders, and it aims at making hackers ready for industry grade development!",
  },
  {
    question: "Is Hackxios 2k25 Online?",
    answer: "Yes! The whole event is completely online and can be attended from your own homes with your own laptops! We will be available online for any queries and questions during the hackathon.",
  },
  {
    question: "Will there be a participation certificate for students who are not shortlisted in Stage-I i.e. PPT submission?",
    answer: "Yes! All students who register and submit a PPT for evaluation will receive a participation certificate and winners will receive a winners certificate.",
  },
  {
    question: "Cost for Hackathon Participation?",
    answer: "Nada! It's completely free",
  },
  {
    question: "What is the selection process for stage-I?",
    answer: "A form for PPT submission of Stage-I will be sent to team leaders on their e-mail, PPT will be evaluated on the basis of Ideation, UI/UX, Technical complexity, Business value and Impact / Usefulness.",
  },
  {
    question: "What is the criteria of scoring for projects?",
    answer: "Best Ideation Project criteria: Innovation (10), Technical complexity (10), UI/UX (10), Usefulness/Impact (10), Business Value (10). Best DevOps Project criteria: Innovation & Ideation (10), Infrastructure as Code - IaC tools like Terraform, CloudFormation, Ansible (10), CI/CD tools - GitHub Actions, GitLab CI, Jenkins (10), System Architecture & deployment - microservices, containers, Docker/Kubernetes, scalability & fault tolerance (10), Documentation & Reproducibility - setup instructions, README, architecture diagrams (10). For more details, visit: https://hackxios-website.vercel.app/",
  },
  {
    question: "How to submit our projects?",
    answer: "All the details about submission will be given to teams shortlisted in Stage-I on mail / meet!",
  },
  {
    question: "How would I know if I am selected?",
    answer: "We will mail you and let you know!",
  },
];

const FAQ = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Frequently Asked Questions
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Everything you need to know about Hackxios</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <AccordionItem value={`item-${index}`} className="glass-card glass-card-hover rounded-xl border-none px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20 transition-all">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions? Mail us at <a href="mailto:axios.iiitbhopal@gmail.com" className="text-primary hover:underline">axios.iiitbhopal@gmail.com</a></p>
          <motion.button onClick={scrollToFooter} whileHover={{ y: -3 }} className="bg-primary text-background font-semibold px-8 py-3 rounded-full shadow-sm">Contact Us</motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;