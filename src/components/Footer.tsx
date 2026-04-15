import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/Denis-7242" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/denis-murithi-39070639a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Denis Murithi. made with <span className="text-red-500 animate-pulse">♥️</span> by Denis
        </p>
      </div>
    </footer>
  );
};

export default Footer;
