import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, GraduationCap, Briefcase, MessageSquare, FileText } from 'lucide-react';
import { Magnet } from './Magnet';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Identify active screen section
      const sections = ['contact', 'work', 'background', 'home'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home', icon: Compass },
    { id: 'background', label: 'Background', href: '#background', icon: GraduationCap },
    { id: 'work', label: 'Work & Projects', href: '#work', icon: Briefcase },
    { id: 'contact', label: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#0C0C0CB3] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Magnet range={40} strength={0.25}>
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-white font-kanit font-bold text-lg tracking-wider focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center text-black font-extrabold text-xs transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              SD
            </span>
            <span className="font-outfit text-sm tracking-widest font-semibold uppercase text-primary-light group-hover:text-white transition-colors">
              Deepak Srinivas
            </span>
          </a>
        </Magnet>

        {/* 4 Screens Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-[#141414]/80 backdrop-blur-md p-1.5 rounded-full border border-white/[0.08] shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Magnet key={item.id} range={30} strength={0.2}>
                <a
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.1] shadow-[0_0_12px_rgba(255,255,255,0.08)]'
                      : 'text-primary-light/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent-blue' : 'opacity-60'}`} />
                  {item.label}
                </a>
              </Magnet>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Magnet range={35} strength={0.25}>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.1] transition-all duration-200"
            >
              Let's Talk
            </a>
          </Magnet>
          <Magnet range={35} strength={0.25}>
            <a
              href="mailto:deepakparker222@gmail.com?subject=Resume%20Inquiry%20-%20Deepak%20Srinivas"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-accent-blue to-accent-purple text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume CV
            </a>
          </Magnet>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-primary-light hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-b border-white/[0.08] md:hidden py-6 px-6 flex flex-col gap-3 animate-fadeIn shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-primary-light/90 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <item.icon className="w-4 h-4 text-accent-blue opacity-80" />
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/[0.08] text-white hover:bg-white/[0.14] border border-white/[0.1] transition-all"
            >
              Let's Talk
            </a>
            <a
              href="mailto:deepakparker222@gmail.com?subject=Resume%20Inquiry%20-%20Deepak%20Srinivas"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accent-blue to-accent-purple text-black transition-all"
            >
              Resume CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
