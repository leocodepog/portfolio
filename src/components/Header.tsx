import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About Me', emoji: '🌟' },
    { href: '#skills', label: 'Skills', emoji: '⚡' },
    { href: '#projects', label: 'Projects', emoji: '🎨' },
    { href: '#contact', label: 'Contact', emoji: '💌' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'anime-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with anime styling */}
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 text-pink-400 sketch-wiggle" />
            <div className="text-2xl font-bold anime-text font-['Caveat']">
              Leo Lin ✨
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-pink-300 transition-all duration-300 font-medium font-['Caveat'] text-lg flex items-center gap-1 anime-glow rounded-full px-4 py-2"
              >
                <span>{item.emoji}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white anime-card p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 anime-card rounded-lg p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-white hover:text-pink-300 transition-colors duration-200 font-['Caveat'] text-lg flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.emoji}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;