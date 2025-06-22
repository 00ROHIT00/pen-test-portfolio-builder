
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
