
import { User, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <User className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated cybersecurity student with a passion for ethical hacking and digital forensics. 
                Currently pursuing my degree while building hands-on experience through labs, CTF competitions, 
                and personal projects that strengthen my technical skills.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <Target className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">My Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                To become a skilled penetration tester who helps organizations identify and remediate security 
                vulnerabilities. I'm committed to continuous learning and staying ahead of emerging threats 
                in the ever-evolving cybersecurity landscape.
              </p>
            </div>
          </div>

          <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
            <BookOpen className="w-8 h-8 text-green-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-6">Core Values</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Ethical hacking and responsible disclosure</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Continuous learning and skill development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Collaborative problem-solving approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Attention to detail and thoroughness</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Strong communication and documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
