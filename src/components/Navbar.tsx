"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const NavLink = ({ link, mobile = false, onClick }: { link: typeof navLinks[0], mobile?: boolean, onClick?: () => void }) => {
  return (
    <li>
      <Link
        href={link.href}
        onClick={onClick}
        className={cn(
          "relative transition-colors group",
          mobile
            ? "text-lg text-text-muted hover:text-text-primary py-2 block"
            : "text-sm text-text-muted hover:text-text-primary"
        )}
      >
        {link.name}
        {!mobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass-panel" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-400">
            Denis Murithi
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="primary" size="sm" href="#contact" as="a">
                Contact Me
              </Button>
            </div>
          </div>

          <button
            className="md:hidden text-text-primary hover:text-accent-electric transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="md:hidden absolute top-16 left-0 w-full glass-panel p-4 flex flex-col gap-4 transition-all duration-300"
            aria-hidden={!isOpen}
          >
            <div className="flex justify-end mb-2">
              <ThemeToggle />
            </div>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  mobile
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
