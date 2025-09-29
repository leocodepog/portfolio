import React from 'react';
import { ExternalLink, Github, Zap, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully-featured e-commerce platform with real-time inventory, payment processing, and analytics dashboard. Built with React, Node.js, and AWS.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "A high-performance analytics dashboard processing millions of events per day with real-time visualizations and automated reporting.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "Redis", "Docker", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Management System",
      description: "Enterprise-grade security management platform with threat detection, vulnerability assessment, and compliance reporting.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of innovative solutions and technical excellence across various domains.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-sm rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;