import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, Compass } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'events', 'experience', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/90 backdrop-blur-xl border-b border-cyber-cyan/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="group flex items-center gap-3 focus:outline-none"
            >
              {/* Geometric Futuristic Techfest Emblem */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/30 to-cyber-purple/40 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative w-10 h-10 rounded-xl border border-cyber-cyan/50 bg-space-900/90 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:border-cyber-cyan group-hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] transition-all">
                  <svg className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                    TECHFEST
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-slate-300 transition-colors uppercase">
                  IIT BOMBAY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-space-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-space-950 font-bold bg-cyber-cyan shadow-[0_0_15px_rgba(0,242,254,0.5)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#events"
                onClick={(e) => handleScrollTo(e, '#events')}
                className="relative inline-flex items-center gap-2 px-5 py-2 text-xs lg:text-sm font-bold text-space-950 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyan-300 rounded-xl hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-space-950" />
                <span>Explore Events</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-space-900/90 border border-cyber-cyan/30 text-slate-200 hover:text-cyber-cyan hover:border-cyber-cyan focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-cyber-cyan" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-space-950/98 backdrop-blur-2xl border-b border-cyber-cyan/20 px-5 pt-4 pb-7 shadow-2xl transition-all">
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-cyber-cyan bg-cyber-cyan/15 border border-cyber-cyan/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyber-cyan' : 'text-slate-500'}`} />
                  </a>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <a
                href="#events"
                onClick={(e) => handleScrollTo(e, '#events')}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-center font-bold text-space-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.4)]"
              >
                <Compass className="w-4 h-4 text-space-950" />
                <span>Explore All Competitions</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
