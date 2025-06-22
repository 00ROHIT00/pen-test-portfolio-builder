
import { Shield, Network, Bug, Search, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Assessment Lab",
      description: "Built a comprehensive home lab environment for practicing vulnerability assessments using Nessus, OpenVAS, and custom Python scripts. Documented findings and remediation strategies.",
      icon: Bug,
      technologies: ["Nessus", "OpenVAS", "Python", "Metasploit", "VirtualBox"],
      status: "Completed",
      highlights: ["Identified 50+ vulnerabilities", "Created detailed reports", "Automated scanning workflows"]
    },
    {
      title: "Network Security Monitoring",
      description: "Implemented a network monitoring solution using pfSense, Suricata IDS, and ELK stack for real-time threat detection and log analysis in a simulated enterprise environment.",
      icon: Network,
      technologies: ["pfSense", "Suricata", "ELK Stack", "Wireshark", "Splunk"],
      status: "Ongoing",
      highlights: ["Real-time alerting", "Custom detection rules", "Threat hunting dashboards"]
    },
    {
      title: "Web Application Penetration Testing",
      description: "Conducted security assessments on intentionally vulnerable web applications (DVWA, WebGoat) using manual testing techniques and automated tools.",
      icon: Search,
      technologies: ["Burp Suite", "OWASP ZAP", "SQLmap", "Nikto", "Custom Scripts"],
      status: "Completed",
      highlights: ["SQL injection exploitation", "XSS payload development", "Authentication bypass"]
    },
    {
      title: "Incident Response Simulation",
      description: "Designed and executed tabletop exercises simulating various cyber incidents, including malware infections, data breaches, and DDoS attacks.",
      icon: Shield,
      technologies: ["NIST Framework", "Volatility", "Autopsy", "YARA Rules"],
      status: "Completed",
      highlights: ["Forensic analysis", "Timeline reconstruction", "IOC identification"]
    },
    {
      title: "Secure Coding Analysis",
      description: "Developed static and dynamic analysis tools to identify security vulnerabilities in source code, focusing on OWASP Top 10 vulnerabilities.",
      icon: Terminal,
      technologies: ["Python", "SonarQube", "Bandit", "SAST Tools", "Git Hooks"],
      status: "In Progress",
      highlights: ["Automated code scanning", "Custom rule development", "CI/CD integration"]
    },
    {
      title: "Password Security Research",
      description: "Conducted research on password security practices, implementing hash cracking techniques and analyzing password strength metrics using various tools.",
      icon: Lock,
      technologies: ["Hashcat", "John the Ripper", "Python", "Rainbow Tables"],
      status: "Completed",
      highlights: ["Hash analysis algorithms", "Dictionary optimization", "Strength metrics"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on cybersecurity projects demonstrating practical skills in penetration testing, 
            vulnerability assessment, and security analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-400 text-black' 
                        : project.status === 'Ongoing'
                        ? 'bg-blue-400 text-black'
                        : 'bg-yellow-400 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                >
                  View Details
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700"
                >
                  Documentation
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            View Full Portfolio on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
