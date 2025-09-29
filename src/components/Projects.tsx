import React from 'react';
import { ExternalLink, Github, Globe, Shield, Zap, Heart, Star, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kawaii E-Commerce 🛍️",
      description: "A magical shopping platform with real-time inventory, payment processing, and analytics dashboard. Built with the power of friendship and React! ✨",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Globe className="w-6 h-6" />,
      color: "from-pink-400 to-purple-400",
      emoji: "🌸"
    },
    {
      title: "Lightning Analytics ⚡",
      description: "A super-fast analytics dashboard processing millions of events per day with real-time visualizations. Faster than Sonic the Hedgehog! 💨",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "Redis", "Docker", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      emoji: "⚡"
    },
    {
      title: "Guardian Security 🛡️",
      description: "Enterprise-grade security management platform with threat detection and compliance reporting. Protecting the digital world like a superhero! 🦸‍♂️",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-400 to-teal-400",
      emoji: "🛡️"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-8xl text-pink-300 anime-float">🎨</div>
        <div className="absolute top-40 right-20 text-6xl text-blue-300 anime-float" style={{animationDelay: '1s'}}>🚀</div>
        <div className="absolute bottom-40 left-20 text-7xl text-yellow-300 anime-float" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-20 right-10 text-5xl text-green-300 anime-float" style={{animationDelay: '0.5s'}}>💫</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block anime-card p-6 rounded-3xl mb-6 sketch-decoration">
              <h2 className="text-5xl md:text-6xl font-bold anime-text font-['Caveat']">
                My Epic Creations! 🎨
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full sketch-wiggle mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Caveat']">
              Like masterpieces from Studio Ghibli, each project tells a unique story of innovation and creativity! 🌟
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="anime-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 sketch-border group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Project image with overlay */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                  
                  {/* Project icon */}
                  <div className="absolute top-4 left-4 anime-card p-3 rounded-full">
                    {project.icon}
                  </div>
                  
                  {/* Project emoji */}
                  <div className="absolute top-4 right-4 text-3xl anime-float">
                    {project.emoji}
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-['Caveat'] flex items-center gap-2">
                    {project.title}
                    <Sparkles className="w-5 h-5 text-yellow-400 sketch-wiggle" />
                  </h3>
                  
                  <p className="text-white opacity-90 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 anime-card text-sm rounded-full text-white font-['Caveat'] border-2 border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors duration-200 anime-glow rounded-full px-4 py-2"
                    >
                      <Github size={20} />
                      <span className="font-['Caveat']">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors duration-200 anime-glow rounded-full px-4 py-2"
                    >
                      <ExternalLink size={20} />
                      <span className="font-['Caveat']">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="anime-card p-8 rounded-3xl mb-8">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4 sketch-wiggle" />
              <h3 className="text-3xl font-bold text-white mb-4 font-['Caveat']">
                Want to see more magical creations? ✨
              </h3>
              <p className="text-white opacity-90 mb-6 font-['Caveat'] text-lg">
                Check out my GitHub for more epic adventures in code!
              </p>
            </div>
            
            <a 
              href="https://github.com"
              className="sketch-button px-8 py-4 font-bold text-white text-lg font-['Caveat'] inline-flex items-center gap-3"
            >
              <Github size={24} />
              <span>Explore All Projects</span>
              <Heart className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;