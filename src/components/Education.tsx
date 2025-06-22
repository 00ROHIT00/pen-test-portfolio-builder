
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-gray-800" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-green-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Education - Masters */}
          <div className="bg-gray-700 p-8 rounded-lg border border-gray-600 mb-8 hover:border-green-400 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-green-400 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Masters of Computer Applications
                </h3>
                <p className="text-green-400 font-semibold mb-3">Your University Name</p>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Advanced coursework in computer applications, cybersecurity, and software development. 
                  Focusing on practical skills through hands-on projects and research.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Advanced Programming</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Network Security</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Digital Forensics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelor's Education */}
          <div className="bg-gray-700 p-8 rounded-lg border border-gray-600 mb-8 hover:border-green-400 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-green-400 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-green-400 font-semibold mb-3">Your University Name</p>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Completed: 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Foundational coursework in computer science, programming, and information technology. 
                  Built strong technical foundation while developing problem-solving skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Programming</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Database Management</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">System Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">CompTIA Security+</h3>
                  <p className="text-gray-400 text-sm">In Progress</p>
                </div>
              </div>
              <p className="text-gray-300">
                Foundational certification covering security concepts, threats, and risk management.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Redhat RHCSA</h3>
                  <p className="text-gray-400 text-sm">Undergoing</p>
                </div>
              </div>
              <p className="text-gray-300">
                Red Hat Certified System Administrator certification for Linux system administration skills.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Hacking Essentials</h3>
                  <p className="text-gray-400 text-sm">Completed 2023</p>
                </div>
              </div>
              <p className="text-gray-300">
                Learning the basics from TryHackMe, HackTheBox, and other platforms.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Google Cybersecurity</h3>
                  <p className="text-gray-400 text-sm">Planned</p>
                </div>
              </div>
              <p className="text-gray-300">
                Professional certificate covering cybersecurity fundamentals and hands-on skills.
              </p>
            </div>
          </div>

          {/* Additional Training */}
          <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg border border-gray-600">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Additional Training & Learning
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Online Platforms</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>TryHackMe</li>
                  <li>HackTheBox</li>
                  <li>Cybrary</li>
                  <li>SANS Cyber Aces</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-400 mb-2">CTF Competitions</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>PicoCTF</li>
                  <li>OverTheWire</li>
                  <li>Local University CTFs</li>
                  <li>SANS Holiday Hack</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Lab Environments</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>Home Lab Setup</li>
                  <li>Virtual Machines</li>
                  <li>Network Simulation</li>
                  <li>Vulnerability Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
