import React from 'react';
import { Code2, Rocket, Users, Award, Heart, Star, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Magic ✨",
      description: "Weaving spells with React, Node.js, and cloud architectures to create digital wonders!"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Ninja 🥷",
      description: "Optimizing apps faster than anime fight scenes - lightning speed guaranteed!"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Sensei 👨‍🏫",
      description: "Leading dev squads and mentoring junior ninjas on their coding journey!"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Otaku 🎌",
      description: "Always exploring new tech like discovering rare anime - passion-driven development!"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-8xl text-pink-300 anime-float">♡</div>
        <div className="absolute top-20 right-20 text-6xl text-blue-300 anime-float" style={{animationDelay: '1s'}}>◇</div>
        <div className="absolute bottom-20 left-20 text-7xl text-yellow-300 anime-float" style={{animationDelay: '2s'}}>☆</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block anime-card p-6 rounded-3xl mb-6 sketch-decoration">
              <h2 className="text-5xl md:text-6xl font-bold anime-text font-['Caveat']">
                About This Coding Otaku! 🎌
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full sketch-wiggle"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left column - Story */}
            <div className="anime-card p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-pink-400 sketch-wiggle" />
                <h3 className="text-3xl md:text-4xl font-bold text-white font-['Caveat']">
                  My Coding Adventure! ⚡
                </h3>
              </div>
              
              <p className="text-lg text-white mb-6 leading-relaxed">
                Konnichiwa! 👋 With 8+ years of coding adventures, I'm like the main character 
                in a tech anime - always leveling up and facing new challenges! My superpower? 
                Building scalable web applications that are as beautiful as Studio Ghibli films! ✨
              </p>
              
              <p className="text-lg text-white mb-8 leading-relaxed">
                I thrive in fast-paced environments where innovation meets kawaii design, 
                consistently delivering projects that make clients go "SUGOI!" 🌟
              </p>

              {/* Stats with anime styling */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center anime-card p-4 rounded-2xl">
                  <div className="text-3xl font-bold anime-text font-['Caveat']">50+</div>
                  <div className="text-white text-sm">Epic Projects</div>
                  <div className="text-2xl">🎨</div>
                </div>
                <div className="text-center anime-card p-4 rounded-2xl">
                  <div className="text-3xl font-bold anime-text font-['Caveat']">8+</div>
                  <div className="text-white text-sm">Years of Magic</div>
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="text-center anime-card p-4 rounded-2xl">
                  <div className="text-3xl font-bold anime-text font-['Caveat']">15+</div>
                  <div className="text-white text-sm">Team Members</div>
                  <div className="text-2xl">👥</div>
                </div>
              </div>
            </div>
            
            {/* Right column - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="anime-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 sketch-border"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-pink-400 mr-4 anime-float">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white font-['Caveat']">{item.title}</h4>
                  </div>
                  <p className="text-white opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fun quote section */}
          <div className="text-center anime-card p-8 rounded-3xl">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 sketch-wiggle" />
            <blockquote className="text-2xl md:text-3xl font-['Caveat'] text-white mb-4">
              "Code is poetry, bugs are plot twists, and every deployment is a season finale!" 
            </blockquote>
            <cite className="text-pink-300 font-['Caveat'] text-xl">- Leo Lin, Code Otaku 🎌</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;