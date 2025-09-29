import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Leo Lin
            </h1>
            <div className="text-2xl md:text-3xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              10x Developer & Tech Innovator
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Building exceptional digital experiences through clean code, innovative solutions, 
              and cutting-edge technologies. Transforming ideas into scalable, high-performance applications.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={32} />
            </a>
            <a href="mailto:leo@example.com" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Mail size={32} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;