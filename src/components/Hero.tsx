import { Shield, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating icons */}
      <div className="absolute top-20 left-20 animate-bounce">
        <Shield className="w-6 h-6 text-green-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-bounce delay-100">
        <Terminal className="w-8 h-8 text-green-400 opacity-40" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-200">
        <Code className="w-7 h-7 text-green-400 opacity-50" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            <span className="text-2xl md:text-3xl text-gray-300 font-normal block mb-2">Hey! I'm</span>
            <span className="text-green-400">Rohith R</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring Penetration Tester & Security Professional
            <br />
            <span className="text-green-400 font-mono">[Student • Ethical Hacker • Problem Solver]</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Download Resume
            </Button>
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
    </section>;
};
export default Hero;