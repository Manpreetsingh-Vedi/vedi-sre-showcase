
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
                  <span>JLL (Jones Lang LaSalle) - Google Project</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>2022 - Present</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Working as an SRE for Google projects at JLL, focusing on infrastructure stability, 
              performance optimization, and automation to ensure high availability and reliability.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented infrastructure as code using Terraform and Ansible to automate deployment processes
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Designed and maintained monitoring and alerting systems using Prometheus and Grafana
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Developed CI/CD pipelines to streamline development workflows and ensure consistent deployments
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Conducted incident response and post-mortem analysis to prevent future service disruptions
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Collaborated with development teams to implement SRE best practices and improve system reliability
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
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
          </div>
          
          {/* Previous Role - Example */}
          <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">DevOps Engineer</h3>
                <div className="flex items-center text-slate mb-2">
                  <Building size={18} className="mr-2" />
                  <span>Previous Company</span>
                </div>
              </div>
              <div className="flex items-center text-slate mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>2019 - 2022</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Worked on implementing DevOps practices, automating infrastructure deployment, and managing cloud resources.
            </p>
            <ul className="space-y-2 text-slate">
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Managed AWS cloud infrastructure and implemented cost optimization strategies
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Created automated deployment pipelines using Jenkins and GitLab CI
              </li>
              <li className="flex">
                <span className="text-teal mr-2">▹</span>
                Implemented container orchestration using Docker and Kubernetes
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">GitLab CI</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Ansible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
