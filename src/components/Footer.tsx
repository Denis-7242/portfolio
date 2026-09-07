import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-bg-deep border-t border-glass-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/Denis-7242" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-surface/80 transition-all border border-glass-border">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/denis-murithi-39070639a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-surface/80 transition-all border border-glass-border">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-text-muted text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Denis Murithi. made with <span className="text-red-500 animate-pulse">♥️</span> by Denis
        </p>
      </div>
    </footer>
  );
};

export default Footer;
