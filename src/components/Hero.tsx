import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/50 z-0"></div>
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 z-0"
          style={{
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            <span className="text-2xl md:text-3xl text-gray-300 font-normal block mb-2">Hey! I'm</span>
            <span className="text-green-400">Rohith R</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-400 font-mono">[Student • Ethical Hacker • Security Analyst]</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 text-lg 
                  transition-all duration-300 hover:scale-105 border-2 border-green-500
                  active:scale-95 active:translate-y-0.5 active:shadow-inner
                  shadow-lg shadow-green-900/20 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-400 font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for Internships</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
              <span>Open to Collaborate</span>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 animate-slow-bounce
          hover:text-green-300 cursor-pointer transition-colors duration-300
          p-2 rounded-full hover:bg-green-400/10"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;