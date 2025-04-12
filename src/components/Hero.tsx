
import React from 'react';
import { ArrowDownCircle, GitHub, Linkedin, Mail } from 'lucide-react';

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
              Site Reliability Engineer
            </h2>
            <p className="text-slate max-w-lg mb-8">
              I'm a skilled SRE currently working on Google projects at JLL, 
              focused on ensuring system reliability, scalability, and performance. 
              With expertise in cloud infrastructure, automation, and DevOps practices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Contact Me <ArrowDownCircle size={18} />
              </button>
              <a href="#" className="btn-primary bg-transparent">
                Download CV
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-navy hover:text-teal transition-colors">
                <GitHub size={24} />
              </a>
              <a href="#" className="text-navy hover:text-teal transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-navy hover:text-teal transition-colors">
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
