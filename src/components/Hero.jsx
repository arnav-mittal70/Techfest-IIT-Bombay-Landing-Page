import React from 'react';
import { ArrowRight, Compass, Shield, Cpu, Terminal, Award } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-space-950">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Subtle floating ambient particles */}
      <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 rounded-full bg-cyber-cyan anim-float-p1 pointer-events-none"></div>
      <div className="absolute top-3/5 left-1/3 w-2 h-2 rounded-full bg-cyber-purple anim-float-p2 pointer-events-none"></div>
      <div className="absolute top-1/5 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-400 anim-float-p3 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/6 w-2 h-2 rounded-full bg-cyber-cyan anim-float-p2 pointer-events-none"></div>

      {/* Atmospheric radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyber-electric/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/5 w-[420px] h-[420px] bg-cyber-purple/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-cyber-cyan/12 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Decorative Horizontal Alignment Guidelines */}
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7">
            
            {/* Status / Edition Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-900/90 border border-cyber-cyan/30 text-xs sm:text-sm font-mono tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
              </span>
              <span className="text-cyber-cyan font-bold tracking-wider">TECHFEST 2026</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">IIT BOMBAY</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline text-slate-400">ASIA'S LARGEST SCI-TECH FESTIVAL</span>
            </div>

            {/* Main Headline: THINK. CREATE. INNOVATE. */}
            <div className="space-y-1">
              <h1 className="font-display font-black tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04]">
                <span className="block text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  THINK.
                </span>
                <span className="block bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-purple bg-clip-text text-transparent text-glow-cyan">
                  CREATE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyber-cyan">
                  INNOVATE.
                </span>
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="max-w-xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              Welcome to the benchmark of student-driven technology and scientific exploration. Uniting over 1,75,000 innovators, global combat robotics, autonomous challenges, and visionary keynotes at the Indian Institute of Technology Bombay.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 font-mono text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900/80 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>UNESCO & UNICEF Patronages</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900/80 border border-white/10">
                <Cpu className="w-3.5 h-3.5 text-cyber-purple" />
                <span>International Robowars Arena</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900/80 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Powai Campus · Mumbai</span>
              </div>
            </div>

            {/* Two Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#events"
                onClick={(e) => handleScrollTo(e, '#events')}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 text-base font-bold text-space-950 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyan-300 rounded-xl shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:shadow-[0_0_45px_rgba(0,242,254,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Competitions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#experience"
                onClick={(e) => handleScrollTo(e, '#experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-space-900/80 hover:bg-space-850 border border-slate-700/60 hover:border-cyber-cyan/50 rounded-xl transition-all duration-200 shadow-sm"
              >
                <Compass className="w-4 h-4 text-cyber-cyan" />
                <span>The Techfest Experience</span>
              </a>
            </div>

          </div>

          {/* Right Futuristic Visual: Pure CSS & SVG Quantum Astrolabe & Orbital Hologram */}
          <div className="lg:col-span-5 flex items-center justify-center relative select-none">
            
            {/* Visual Frame */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
              
              {/* SVG Astrolabe Reticles & Degree Notches */}
              <svg className="absolute inset-0 w-full h-full anim-spin-cw-slow" viewBox="0 0 500 500" fill="none">
                {/* Outermost Segmented Dial */}
                <circle cx="250" cy="250" r="235" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="250" cy="250" r="215" stroke="rgba(79, 172, 254, 0.3)" strokeWidth="1.5" strokeDasharray="30 15 5 15" />
                
                {/* Cardinal Degree Markers */}
                <text x="250" y="30" fill="rgba(0, 242, 254, 0.7)" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">000° // NORTH</text>
                <text x="470" y="254" fill="rgba(0, 242, 254, 0.7)" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">090°</text>
                <text x="250" y="480" fill="rgba(0, 242, 254, 0.7)" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">180° // SOUTH</text>
                <text x="30" y="254" fill="rgba(0, 242, 254, 0.7)" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">270°</text>

                {/* Corner Tick Marks */}
                <line x1="250" y1="12" x2="250" y2="24" stroke="#00f2fe" strokeWidth="2" />
                <line x1="250" y1="476" x2="250" y2="488" stroke="#00f2fe" strokeWidth="2" />
                <line x1="12" y1="250" x2="24" y2="250" stroke="#00f2fe" strokeWidth="2" />
                <line x1="476" y1="250" x2="488" y2="250" stroke="#00f2fe" strokeWidth="2" />
              </svg>

              {/* Counter-Clockwise Intermediate Gyro Ring */}
              <svg className="absolute inset-0 w-full h-full anim-spin-ccw-slow" viewBox="0 0 500 500" fill="none">
                <circle cx="250" cy="250" r="185" stroke="rgba(157, 78, 221, 0.35)" strokeWidth="2" strokeDasharray="60 30" />
                <circle cx="250" cy="250" r="150" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1" strokeDasharray="6 6" />
                
                {/* Concentric telemetry text along ring */}
                <path id="ringTextPath" d="M 120,250 A 130,130 0 1,1 380,250" fill="none" stroke="transparent" />
                <text fill="rgba(0, 242, 254, 0.5)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="4">
                  <textPath href="#ringTextPath">TECHFEST IIT BOMBAY · ASIAN SCI-TECH APEX</textPath>
                </text>
              </svg>

              {/* Fast Rotating Inner Reticle */}
              <svg className="absolute inset-0 w-full h-full anim-spin-cw-fast" viewBox="0 0 500 500" fill="none">
                <circle cx="250" cy="250" r="115" stroke="rgba(0, 242, 254, 0.6)" strokeWidth="1.5" strokeDasharray="15 35 15 35" />
                <polygon points="250,140 260,155 240,155" fill="rgba(0, 242, 254, 0.8)" />
                <polygon points="250,360 260,345 240,345" fill="rgba(0, 242, 254, 0.8)" />
                <polygon points="140,250 155,260 155,240" fill="rgba(0, 242, 254, 0.8)" />
                <polygon points="360,250 345,260 345,240" fill="rgba(0, 242, 254, 0.8)" />
              </svg>

              {/* Orbiting Particle Beacons along concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="anim-orbit-1 absolute flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyber-cyan shadow-[0_0_15px_#00f2fe]"></div>
                </div>
                <div className="anim-orbit-2 absolute flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-cyber-purple shadow-[0_0_18px_#9d4edd]"></div>
                </div>
                <div className="anim-orbit-3 absolute flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]"></div>
                </div>
              </div>

              {/* Central Glowing Quantum Singularity Core */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full anim-pulse-glow flex items-center justify-center">
                {/* Radial gradient backing */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-cyan/40 via-cyber-electric/30 to-cyber-purple/40 blur-md"></div>
                
                {/* Inner void disc */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-space-950/95 border-2 border-cyber-cyan/70 shadow-[inset_0_0_30px_rgba(0,242,254,0.6)] flex flex-col items-center justify-center text-center">
                  
                  {/* Central Geometric Atom / Core Glyph */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-cyber-cyan/40 animate-ping absolute"></div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyber-cyan to-blue-500 shadow-[0_0_20px_#00f2fe] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <span className="font-display font-black text-xs sm:text-sm text-white tracking-widest mt-2">
                    TF CORE
                  </span>
                  <span className="font-mono text-[9px] text-cyber-cyan tracking-wider">
                    IIT BOMBAY
                  </span>
                </div>
              </div>

              {/* Integrated Futuristic Vector Callout Telemetry Lines (No boxy screenshots!) */}
              {/* Top-Right Telemetry Callout */}
              <div className="hidden sm:flex absolute -top-4 -right-2 items-center gap-2 font-mono text-[11px] text-cyber-cyan">
                <div className="h-[1px] w-8 bg-cyber-cyan/60"></div>
                <div className="flex flex-col text-left">
                  <span className="text-slate-400 text-[9px]">COORDINATES</span>
                  <span className="font-bold text-white tracking-wider">19.1334° N, 72.9133° E</span>
                  <span className="text-[9px] text-emerald-400">● POWAI CAMPUS</span>
                </div>
              </div>

              {/* Bottom-Left Telemetry Callout */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 font-mono text-[11px] text-cyber-purple">
                <div className="flex flex-col text-right">
                  <span className="text-slate-400 text-[9px]">SYSTEM ARCHITECTURE</span>
                  <span className="font-bold text-white tracking-wider">28th EDITION · 2026</span>
                  <span className="text-[9px] text-cyber-cyan">PATRONAGE: UNESCO</span>
                </div>
                <div className="h-[1px] w-8 bg-cyber-purple/60"></div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
