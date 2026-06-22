import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Award, Settings, Folder, MessageSquare, Terminal } from 'lucide-react';
import { Magnet } from './Magnet';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Compass },
    { label: 'About', href: '#about', icon: Terminal },
    { label: 'Milestones', href: '#milestones', icon: Award },
    { label: 'Services', href: '#services', icon: Settings },
    { label: 'Projects', href: '#projects', icon: Folder },
    { label: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0C0C0CB3] backdrop-blur-md border-b border-white/[0.04]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Magnet range={50} strength={0.3}>
          <a
            href="#home"
            className="flex items-center gap-2 group text-white font-kanit font-bold text-xl tracking-wider"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center text-black font-extrabold text-sm transition-transform duration-300 group-hover:rotate-12">
              SD
            </span>
            DEEPAK<span className="text-accent-blue">.</span>
          </a>
        </Magnet>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-[#161616]/40 p-1.5 rounded-full border border-white/[0.03]">
          {navItems.map((item) => (
            <Magnet key={item.label} range={35} strength={0.25}>
              <a
                href={item.href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-primary-light/75 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                <item.icon className="w-3.5 h-3.5 opacity-60" />
                {item.label}
              </a>
            </Magnet>
          ))}
        </div>

        {/* Contact/Resume CTA */}
        <div className="hidden md:block">
          <Magnet range={40} strength={0.3}>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-accent-purple via-accent-blue to-accent-emerald text-black hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </Magnet>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-primary-light hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-b border-white/[0.06] md:hidden py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-primary-light/80 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              <item.icon className="w-4 h-4 opacity-75" />
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center py-3.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-opacity-90 transition-all"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
