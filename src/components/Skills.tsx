
import React from 'react';
import { BarChart3, Cloud, Code, Database, Server, Settings, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: <Cloud size={24} className="text-teal" />,
      skills: ["Google Cloud Platform", "AWS", "Azure", "Infrastructure as Code", "Terraform", "Cloud Migration"]
    },
    {
      title: "Containerization & Orchestration",
      icon: <Server size={24} className="text-teal" />,
      skills: ["Docker", "Kubernetes", "Helm", "Service Mesh", "Container Security", "Microservices"]
    },
    {
      title: "Monitoring & Observability",
      icon: <BarChart3 size={24} className="text-teal" />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Distributed Tracing", "Log Analytics"]
    },
    {
      title: "CI/CD & Automation",
      icon: <Settings size={24} className="text-teal" />,
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Ansible", "Automation Scripting"]
    },
    {
      title: "Programming & Scripting",
      icon: <Code size={24} className="text-teal" />,
      skills: ["Python", "Bash", "JavaScript", "Go", "YAML", "JSON"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield size={24} className="text-teal" />,
      skills: ["Cloud Security", "Compliance Automation", "Secret Management", "Network Security", "IAM", "SAST/DAST"]
    },
    {
      title: "Database Systems",
      icon: <Database size={24} className="text-teal" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB", "Cloud Spanner"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container-wrapper">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-5px] animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-navy ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-navy mb-6">Key Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">Cloud Architecture (GCP, AWS)</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">Kubernetes & Containerization</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">Infrastructure Automation</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">DevOps & CI/CD</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">Cloud Security</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-navy mb-2">Monitoring & Observability</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
