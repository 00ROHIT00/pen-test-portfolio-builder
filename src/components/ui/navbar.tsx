import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Special case for hero section
      const heroSection = document.getElementById('hero');
      if (heroSection && scrollPosition < heroSection.offsetTop + heroSection.offsetHeight) {
        setActiveSection('hero');
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-sm font-medium">
          <li>
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-gray-300 hover:text-green-400 transition-all duration-200 px-4 py-2 rounded-lg
                ${activeSection === 'hero' ? 'text-green-400 border-2 border-green-400/50 bg-green-400/10' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-gray-300 hover:text-green-400 transition-all duration-200 px-4 py-2 rounded-lg
                ${activeSection === 'about' ? 'text-green-400 border-2 border-green-400/50 bg-green-400/10' : ''}`}
            >
              About Us
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`text-gray-300 hover:text-green-400 transition-all duration-200 px-4 py-2 rounded-lg
                ${activeSection === 'skills' ? 'text-green-400 border-2 border-green-400/50 bg-green-400/10' : ''}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('education')}
              className={`text-gray-300 hover:text-green-400 transition-all duration-200 px-4 py-2 rounded-lg
                ${activeSection === 'education' ? 'text-green-400 border-2 border-green-400/50 bg-green-400/10' : ''}`}
            >
              Certifications
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-gray-300 hover:text-green-400 transition-all duration-200 px-4 py-2 rounded-lg
                ${activeSection === 'contact' ? 'text-green-400 border-2 border-green-400/50 bg-green-400/10' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 