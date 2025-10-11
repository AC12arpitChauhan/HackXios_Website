import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import BackgroundFlow from "@/components/BackgroundFlow";

const Index = () => {
  return (
    <div className="relative">
      <BackgroundFlow/>
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Sponsors />
        <Prizes />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
