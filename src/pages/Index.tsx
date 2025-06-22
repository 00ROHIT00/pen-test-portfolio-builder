
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
