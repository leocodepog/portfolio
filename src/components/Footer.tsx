import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-5 left-10 text-4xl text-pink-300 anime-float">✨</div>
        <div className="absolute top-5 right-20 text-3xl text-blue-300 anime-float" style={{animationDelay: '1s'}}>🌟</div>
        <div className="absolute bottom-5 left-20 text-5xl text-yellow-300 anime-float" style={{animationDelay: '2s'}}>💫</div>
        <div className="absolute bottom-5 right-10 text-2xl text-green-300 anime-float" style={{animationDelay: '0.5s'}}>⭐</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="anime-card p-8 rounded-3xl">
          <div className="text-center">
            {/* Main footer content */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-white font-['Caveat'] text-lg">Made with</span>
              <Heart className="w-6 h-6 text-pink-400 fill-current sketch-wiggle" />
              <span className="text-white font-['Caveat'] text-lg">and lots of</span>
              <Sparkles className="w-6 h-6 text-yellow-400 sketch-wiggle" />
              <span className="text-white font-['Caveat'] text-lg">by</span>
              <span className="anime-text font-bold font-['Caveat'] text-xl">Leo Lin</span>
            </div>

            {/* Anime-style divider */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="w-4 h-4 text-pink-400 anime-float" />
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
              <Star className="w-4 h-4 text-cyan-400 anime-float" style={{animationDelay: '0.5s'}} />
            </div>

            {/* Copyright and fun message */}
            <div className="space-y-2">
              <p className="text-white font-['Caveat'] text-lg">
                © {new Date().getFullYear()} Leo Lin - Code Wizard & Digital Artist ✨
              </p>
              <p className="text-pink-300 font-['Caveat']">
                "Turning coffee into code, one magical line at a time!" ☕
              </p>
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
              <div className="anime-card p-3 rounded-2xl">
                <div className="text-2xl mb-1">🎨</div>
                <div className="text-xs text-white font-['Caveat']">Creative</div>
              </div>
              <div className="anime-card p-3 rounded-2xl">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xs text-white font-['Caveat']">Fast</div>
              </div>
              <div className="anime-card p-3 rounded-2xl">
                <div className="text-2xl mb-1">💖</div>
                <div className="text-xs text-white font-['Caveat']">Passionate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;