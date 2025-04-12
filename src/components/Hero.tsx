
import React from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-wrapper">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-teal font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Manpreet Singh Vedi
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate mb-6">
              Senior Cloud Engineer
            </h2>
            <p className="text-slate max-w-lg mb-8">
              Experienced Cloud Engineer with expertise in Google Cloud Platform, AWS, and Kubernetes. Currently working as a Senior Cloud Engineer at Jones Lang LaSalle (JLL), focused on designing and implementing scalable and resilient infrastructure solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Contact Me <ArrowDownCircle size={18} />
              </button>
              <a href="https://www.linkedin.com/in/manpreetsinghvedi150196" target="_blank" rel="noopener noreferrer" className="btn-primary bg-transparent">
                View LinkedIn Profile
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/manpreetSinghVedi" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-teal transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manpreetsinghvedi150196" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-teal transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:manpreetsinghnanda15@gmail.com" className="text-navy hover:text-teal transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-teal rounded-full absolute -top-4 -right-4 opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-teal rounded-full relative overflow-hidden">
                <div className="w-full h-full bg-navy text-teal flex items-center justify-center text-6xl font-bold">
                  MSV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
