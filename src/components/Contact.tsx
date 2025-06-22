import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        title: formData.subject,
        name: formData.name,
        time: new Date().toLocaleString(),
        email: formData.email,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Time: ${new Date().toLocaleString()}

Subject: ${formData.subject}

Message:
${formData.message}
`
      };

      await emailjs.send(
        'service_zmexmtl', // Replace with your EmailJS service ID
        'template_wxt8qf9', // Replace with your EmailJS template ID
        templateParams,
        'chVAedNR_gDO4bV29' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        className: "bg-green-500 text-white",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return <section className="py-20 bg-gray-800" id="contact">
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
                      <p className="text-white">rohithrajesh003@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">(91) 8129843775</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-400 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Kottayam, Kerala, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/rohith-rajesh0/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </a>
                  <a 
                    href="https://github.com/00ROHIT00" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </a>
                  <a 
                    href="mailto:rohithrajesh003@gmail.com" 
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
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <Download className="w-4 h-4" />
                    Download Resume (PDF)
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none" 
                    placeholder="Your Name"
                    required 
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none" 
                    placeholder="your.email@example.com"
                    required 
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none" 
                    placeholder="Internship Opportunity"
                    required 
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none resize-none" 
                    placeholder="Tell me about the opportunity or how we can work together..."
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;