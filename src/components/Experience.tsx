
import React from 'react';
import { Building, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-wrapper">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-12">
          {/* Current Role - JLL */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Cloud Infrastructure Engineer</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>Jones Lang LaSalle (JLL)</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>June 2022 - Present</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Leading cloud infrastructure initiatives and implementing DevOps practices to optimize system reliability and performance.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Designed and implemented infrastructure solutions on Google Cloud Platform, ensuring high availability and scalability
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Managed Kubernetes clusters and containerized applications to improve deployment efficiency and system reliability
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented CI/CD pipelines using Jenkins and GitHub Actions, enhancing development workflows and reducing deployment time
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Collaborated with cross-functional teams to establish and enforce cloud best practices and security standards
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Utilized Infrastructure as Code (IaC) with Terraform to manage cloud resources efficiently
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Bash</span>
              </div>
            </div>
          </div>
          
          {/* Previous Role - Cognizant */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Cloud Infrastructure Engineer</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>Cognizant</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>February 2020 - May 2022</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Managed cloud infrastructure and implemented DevOps practices for enterprise clients, focusing on AWS and cloud migration projects.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Designed and maintained AWS infrastructure for mission-critical applications ensuring high availability and security
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented containerization strategies using Docker and orchestrated with Kubernetes for improved scalability
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Developed and maintained CI/CD pipelines using Jenkins, reducing deployment time and increasing reliability
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Participated in on-call rotations, providing production support and incident management for critical systems
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Bash</span>
              </div>
            </div>
          </div>

          {/* Internship - Intern */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Software Engineering Intern</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>Amdocs</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>January 2019 - July 2019</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Contributed to backend development of cloud-based applications and learned about enterprise software engineering practices.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Assisted in developing and testing RESTful APIs for telecommunications service platforms
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Gained experience with Agile development methodologies and collaborative software development
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Learned about cloud infrastructure and containerization technologies
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
