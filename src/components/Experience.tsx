
import React from 'react';
import { Building, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-wrapper">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-12">
          {/* Current Role */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Site Reliability Engineer</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>JLL (Jones Lang LaSalle) Technologies - Google Cloud</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>July 2022 - Present</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Leading cloud infrastructure management for Google's critical systems, ensuring 99.9% uptime and optimizing performance.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Led migration of legacy services to Google Cloud Platform, reducing infrastructure costs by 30% and improving system reliability
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Designed and implemented robust monitoring solutions using Prometheus and Grafana, improving incident response time by 40%
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Created automated CI/CD pipelines with Jenkins and GitHub Actions, reducing deployment time from hours to minutes
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Collaborated with development teams to implement SRE best practices, reducing production incidents by 45%
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented infrastructure as code using Terraform and Ansible, enabling consistent deployments across environments
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Prometheus</span>
                <span className="skill-tag">Grafana</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">GitHub Actions</span>
              </div>
            </div>
          </div>
          
          {/* Previous Role - Cognizant */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Associate - Projects</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>Cognizant</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>January 2020 - July 2022</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Managed cloud infrastructure and implemented DevOps practices for enterprise clients, focusing on AWS solutions.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented and maintained AWS infrastructure for multiple client applications, ensuring high availability and security
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Designed microservices architecture using Docker containers and orchestrated with Kubernetes
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Created automated CI/CD pipelines using Jenkins, reducing deployment failures by 60%
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Collaborated with cross-functional teams to troubleshoot and resolve production issues
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
          </div>

          {/* Internship - FoggyBee */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Software Engineer (Intern)</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>FoggyBee</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>July 2019 - December 2019</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Contributed to the development of cloud-based applications, focusing on backend services and infrastructure.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Assisted in developing RESTful APIs using Node.js and Express.js
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Contributed to AWS infrastructure setup and deployment automation
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Learned containerization techniques using Docker
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
