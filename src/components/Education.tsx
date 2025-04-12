
import React from 'react';
import { Award, Calendar, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container-wrapper">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold text-navy flex items-center mb-6">
              <GraduationCap size={24} className="mr-3 text-teal" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-lg font-semibold text-navy">Bachelor of Engineering in Computer Science</h4>
                <p className="text-slate">Chitkara University, Punjab</p>
                <div className="flex items-center text-slate my-2">
                  <Calendar size={16} className="mr-2" />
                  <span>2015 - 2019</span>
                </div>
                <p className="text-slate">
                  Studied core computer science subjects including data structures, algorithms, 
                  operating systems, and software engineering principles with a focus on cloud computing.
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-xl font-semibold text-navy flex items-center mb-6">
              <Award size={24} className="mr-3 text-teal" />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-semibold text-navy">Google Cloud Professional DevOps Engineer</h4>
                <div className="flex items-center text-slate my-2">
                  <Calendar size={16} className="mr-2" />
                  <span>2023</span>
                </div>
                <p className="text-slate">
                  Expertise in implementing SRE principles and DevOps practices on Google Cloud Platform.
                </p>
              </div>
              
              <div className="card animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <h4 className="text-lg font-semibold text-navy">Certified Kubernetes Administrator (CKA)</h4>
                <div className="flex items-center text-slate my-2">
                  <Calendar size={16} className="mr-2" />
                  <span>2022</span>
                </div>
                <p className="text-slate">
                  Deep knowledge of Kubernetes architecture, administration, and troubleshooting.
                </p>
              </div>
              
              <div className="card animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <h4 className="text-lg font-semibold text-navy">AWS Certified Solutions Architect - Associate</h4>
                <div className="flex items-center text-slate my-2">
                  <Calendar size={16} className="mr-2" />
                  <span>2021</span>
                </div>
                <p className="text-slate">
                  Proficiency in designing and deploying scalable systems on AWS infrastructure.
                </p>
              </div>
              
              <div className="card animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <h4 className="text-lg font-semibold text-navy">Cisco Certified Network Associate (CCNA)</h4>
                <div className="flex items-center text-slate my-2">
                  <Calendar size={16} className="mr-2" />
                  <span>2020</span>
                </div>
                <p className="text-slate">
                  Expertise in network fundamentals, network access, IP connectivity, and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
