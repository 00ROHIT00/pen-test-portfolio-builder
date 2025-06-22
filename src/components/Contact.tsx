
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start my cybersecurity career. Let's connect and discuss opportunities 
            in penetration testing, security analysis, or internship programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">your.email@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Your City, State</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
                <p className="text-gray-300 mb-4">
                  Download my resume to learn more about my background, skills, and experience.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                    placeholder="Internship Opportunity"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none resize-none"
                    placeholder="Tell me about the opportunity or how we can work together..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg border border-gray-600">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Secure Your Organization?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship opportunities and entry-level positions in cybersecurity. 
              Let's discuss how I can contribute to your security team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Schedule a Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
