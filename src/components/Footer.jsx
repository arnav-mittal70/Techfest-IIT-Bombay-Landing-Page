import React from 'react';
import { ArrowUp, ExternalLink, Globe, Shield, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/techfest_iitbombay/', handle: '@techfest_iitbombay' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/techfest/', handle: 'Techfest, IIT Bombay' },
    { name: 'X / Twitter', href: 'https://x.com/Techfest_IITB', handle: '@Techfest_IITB' },
    { name: 'YouTube', href: 'https://www.youtube.com/@TechfestIITB', handle: '@TechfestIITB' },
    { name: 'Facebook', href: 'https://www.facebook.com/iitbombaytechfest/', handle: 'Techfest IIT Bombay' },
    { name: 'Linktree Hub', href: 'https://linktr.ee/techfest_iitbombay', handle: 'linktr.ee/techfest_iitbombay' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Techfest', href: '#about' },
    { name: 'Official Competitions', href: '#events' },
    { name: 'Technoholix & Experiences', href: '#experience' },
    { name: 'Visual Archives', href: '#gallery' },
    { name: 'Contact & Campus', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Official Techfest Portal', href: 'https://techfest.org/' },
    { name: 'IIT Bombay Official Portal', href: 'https://www.iitb.ac.in/' },
    { name: 'Rules & Code of Conduct', href: '#events' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="relative bg-space-950 border-t border-cyber-cyan/20 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyber-cyan/5 rounded-t-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-cyber-cyan/50 bg-space-900 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <svg className="w-5 h-5 text-cyber-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider">
                  TECHFEST
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  IIT BOMBAY
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Asia’s Largest Science and Technology Festival. A non-profit student initiative inspiring scientific inquiry and technological advancement since 1998 at the Indian Institute of Technology Bombay.
            </p>

            {/* Official Website Button */}
            <div className="pt-2">
              <a
                href="https://techfest.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-space-900/90 border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:text-white hover:bg-cyber-cyan/15 text-xs font-mono font-semibold transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Official techfest.org</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyber-cyan transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portals & Legal (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Affiliations
            </h4>
            <ul className="space-y-2 text-xs">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-slate-400 hover:text-cyber-cyan transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                    {item.href.startsWith('http') && <ExternalLink className="w-2.5 h-2.5 text-slate-500" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Official Channels
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-space-900/60 hover:bg-space-850 border border-white/5 hover:border-cyber-cyan/40 text-slate-300 hover:text-white transition-all group"
                >
                  <span className="group-hover:text-cyber-cyan transition-colors">{s.name}</span>
                  <span className="text-[10px] text-slate-500 font-sans">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Techfest, IIT Bombay. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-cyber-cyan/70">THINK. CREATE. INNOVATE.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900 border border-white/10 hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
