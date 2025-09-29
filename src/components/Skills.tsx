import React from 'react';
import { Zap, Star, Heart, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Magic ✨",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "from-pink-400 to-red-400" },
        { name: "TypeScript", level: 92, color: "from-blue-400 to-cyan-400" },
        { name: "Next.js", level: 88, color: "from-purple-400 to-pink-400" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-blue-400" },
        { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-purple-400" }
      ]
    },
    {
      title: "Backend Jutsu 🥷",
      icon: "⚡",
      skills: [
        { name: "Node.js", level: 93, color: "from-green-400 to-cyan-400" },
        { name: "Python", level: 87, color: "from-yellow-400 to-orange-400" },
        { name: "PostgreSQL", level: 89, color: "from-blue-400 to-purple-400" },
        { name: "MongoDB", level: 86, color: "from-green-400 to-teal-400" },
        { name: "Redis", level: 82, color: "from-red-400 to-pink-400" }
      ]
    },
    {
      title: "Cloud Sorcery ☁️",
      icon: "🌟",
      skills: [
        { name: "AWS", level: 90, color: "from-orange-400 to-red-400" },
        { name: "Docker", level: 88, color: "from-blue-400 to-cyan-400" },
        { name: "Kubernetes", level: 85, color: "from-purple-400 to-blue-400" },
        { name: "CI/CD", level: 91, color: "from-green-400 to-blue-400" },
        { name: "Terraform", level: 83, color: "from-purple-400 to-pink-400" }
      ]
    },
    {
      title: "Dev Tools Arsenal 🛠️",
      icon: "💎",
      skills: [
        { name: "Git", level: 95, color: "from-orange-400 to-red-400" },
        { name: "Jest", level: 89, color: "from-green-400 to-cyan-400" },
        { name: "GraphQL", level: 86, color: "from-pink-400 to-purple-400" },
        { name: "Microservices", level: 88, color: "from-blue-400 to-purple-400" },
        { name: "System Design", level: 92, color: "from-cyan-400 to-blue-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-9xl text-pink-300 anime-float">⚡</div>
        <div className="absolute top-40 right-20 text-7xl text-blue-300 anime-float" style={{animationDelay: '1s'}}>🌟</div>
        <div className="absolute bottom-40 left-20 text-8xl text-yellow-300 anime-float" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-20 right-10 text-6xl text-green-300 anime-float" style={{animationDelay: '0.5s'}}>💫</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block anime-card p-6 rounded-3xl mb-6 sketch-decoration">
              <h2 className="text-5xl md:text-6xl font-bold anime-text font-['Caveat']">
                My Coding Superpowers! ⚡
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full sketch-wiggle mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Caveat']">
              Like collecting rare cards in an anime, I've mastered these tech skills through epic coding battles! 🎌
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="anime-card p-6 rounded-3xl hover:scale-105 transition-all duration-300 sketch-border"
                style={{animationDelay: `${categoryIndex * 0.2}s`}}
              >
                {/* Category header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2 anime-float">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white font-['Caveat']">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white font-['Caveat']">
                          {skill.name}
                        </span>
                        <span className="text-sm text-pink-300 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Animated skill bar */}
                      <div className="sketch-skill-bar h-3">
                        <div 
                          className={`sketch-skill-fill bg-gradient-to-r ${skill.color} rounded-lg relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Sparkle effect */}
                          <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                            <Sparkles className="w-3 h-3 text-white opacity-80 sketch-wiggle" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun stats section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="anime-card p-6 rounded-3xl text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 sketch-wiggle" />
              <div className="text-3xl font-bold anime-text font-['Caveat'] mb-2">100+</div>
              <div className="text-white font-['Caveat']">Technologies Mastered</div>
            </div>
            
            <div className="anime-card p-6 rounded-3xl text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4 sketch-wiggle" />
              <div className="text-3xl font-bold anime-text font-['Caveat'] mb-2">∞</div>
              <div className="text-white font-['Caveat']">Lines of Code Written</div>
            </div>
            
            <div className="anime-card p-6 rounded-3xl text-center">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 sketch-wiggle" />
              <div className="text-3xl font-bold anime-text font-['Caveat'] mb-2">24/7</div>
              <div className="text-white font-['Caveat']">Passion for Coding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;