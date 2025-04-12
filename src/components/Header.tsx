
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-navy font-bold text-2xl">
          <span className="text-teal">M</span>anpreet
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <a href="#" className="btn-primary ml-4">Resume</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-navy hover:text-teal py-2">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-navy hover:text-teal py-2">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-navy hover:text-teal py-2">Skills</button>
            <button onClick={() => scrollToSection('education')} className="text-navy hover:text-teal py-2">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-navy hover:text-teal py-2">Contact</button>
            <a href="#" className="btn-primary text-center">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
