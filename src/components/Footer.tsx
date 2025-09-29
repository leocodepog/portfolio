import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Leo Lin</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Leo Lin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;