
import React from 'react';
import { GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-teal">M</span>anpreet Vedi
            </h2>
            <p className="text-slate-300">
              Site Reliability Engineer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-slate-300 hover:text-teal transition-colors duration-300">
              <GitHub size={20} />
            </a>
            <a href="#" className="text-slate-300 hover:text-teal transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-300 hover:text-teal transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            &copy; {new Date().getFullYear()} Manpreet Singh Vedi. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-teal bg-opacity-10 p-2 rounded-full text-teal hover:bg-opacity-20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
