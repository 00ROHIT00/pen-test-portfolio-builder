
import { Shield, Terminal, Network, Database, Bug, Lock, Search, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"]
    },
    {
      title: "Operating Systems",
      icon: Terminal,
      skills: ["Kali Linux", "Ubuntu", "Windows", "VirtualBox"]
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "Bash", "PowerShell"]
    },
    {
      title: "Networking",
      icon: Network,
      skills: ["TCP/IP", "DNS", "Network Analysis", "Firewalls"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building expertise across cybersecurity tools, programming languages, and security frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group">
              <div className="text-center mb-6">
                <category.icon className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 3 + Math.floor(Math.random() * 2) 
                              ? 'bg-green-400' 
                              : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Currently Learning & Pursuing
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-700 p-4 rounded-lg">
              <Bug className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Ethical Hacking Fundamentals</h4>
              <p className="text-gray-300 text-sm">Building a strong base with TryHackMe, focusing on networking, Linux, and Windows</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Pentesting Skills</h4>
              <p className="text-gray-300 text-sm">Practicing hands-on techniques using tools like Nmap, Metasploit, and Burp Suite in a custom virtual lab</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Wireshark & Network Analysis</h4>
              <p className="text-gray-300 text-sm">Exploring how data moves across networks, analyzing packets, and identifying suspicious activity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
