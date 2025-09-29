import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Star, Heart, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl text-pink-300 opacity-20 anime-float">✦</div>
        <div className="absolute top-40 right-20 text-4xl text-blue-300 opacity-30 anime-float" style={{animationDelay: '1s'}}>★</div>
        <div className="absolute bottom-40 left-20 text-5xl text-yellow-300 opacity-25 anime-float" style={{animationDelay: '2s'}}>◆</div>
        <div className="absolute bottom-20 right-10 text-3xl text-green-300 opacity-20 anime-float" style={{animationDelay: '0.5s'}}>♦</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with anime styling */}
          <div className="mb-8">
            <div className="inline-block p-4 mb-6 anime-card sketch-decoration">
              <h1 className="text-6xl md:text-8xl font-bold anime-text font-['Caveat'] sketch-wiggle">
                Leo Lin
              </h1>
            </div>
            
            <div className="text-3xl md:text-4xl mb-8 font-['Caveat'] font-semibold text-white sketch-underline inline-block">
              10x Developer & Anime Code Wizard ⚡
            </div>
            
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Crafting digital magic through clean code and kawaii design! 
              Transforming ideas into pixel-perfect adventures with the power of modern tech! 🌟
            </p>
          </div>

          {/* Action buttons with sketch styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="sketch-button px-8 py-4 font-bold text-white text-lg font-['Caveat'] inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Let's Create Magic!
            </a>
            <a
              href="#projects"
              className="sketch-button px-8 py-4 font-bold text-white text-lg font-['Caveat'] inline-flex items-center justify-center gap-2"
              style={{background: 'linear-gradient(135deg, #4ecdc4, #45b7d1)'}}
            >
              <Zap className="w-5 h-5" />
              View My Art
            </a>
          </div>

          {/* Social links with anime styling */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://github.com" 
              className="anime-card p-4 rounded-full text-white hover:text-pink-300 transition-all duration-300 anime-float"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="anime-card p-4 rounded-full text-white hover:text-blue-300 transition-all duration-300 anime-float"
              style={{animationDelay: '0.5s'}}
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:leo@example.com" 
              className="anime-card p-4 rounded-full text-white hover:text-green-300 transition-all duration-300 anime-float"
              style={{animationDelay: '1s'}}
            >
              <Mail size={32} />
            </a>
          </div>

          {/* Animated scroll indicator */}
          <div className="anime-float">
            <ArrowDown size={32} className="mx-auto text-white opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;