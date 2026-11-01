import React, { useState } from 'react';
import { experiencesData } from '../data/experiencesData';
import { Sparkles, Radio, CheckCircle, ChevronRight, Compass, Shield, Flame } from 'lucide-react';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = experiencesData[activeIdx];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-space-950 overflow-hidden border-t border-white/5">
      {/* Background radial glows matching Hero */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-cyber-purple/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyber-electric/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-cyber-purple/40 text-xs font-mono text-cyber-purple tracking-wider uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-cyber-purple" />
            <span>CAMPUS EXTRAVAGANZA & SHOWCASES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            The Techfest <span className="bg-gradient-to-r from-cyber-purple via-blue-400 to-cyber-cyan bg-clip-text text-transparent">Experience</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Beyond the intense arenas lies a celebration of science, art, music, and imagination. Experience electrifying EDM night shows, bionic humanoid displays, and world-leader keynote summits.
          </p>
        </div>

        {/* Interactive Experience Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Tab Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {experiencesData.map((exp, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative flex items-center justify-between group ${
                    isActive
                      ? 'bg-space-900 border-2 border-cyber-cyan shadow-[0_0_25px_rgba(0,242,254,0.3)] scale-[1.01]'
                      : 'bg-space-900/40 border border-white/5 hover:border-white/20 hover:bg-space-900/70'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cyber-cyan mb-1 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyber-cyan animate-pulse' : 'bg-slate-600'}`}></span>
                      <span>{exp.tag}</span>
                    </span>
                    <h3 className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {exp.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono mt-1 line-clamp-1">
                      {exp.subtitle}
                    </span>
                  </div>

                  <div className={`p-2 rounded-xl transition-all ${
                    isActive ? 'bg-cyber-cyan text-space-950 font-bold scale-110' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Featured Experience Spotlight Preview (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-space-900/90 border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl relative group">
              
              {/* Media Banner with Overlay */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-space-950">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                
                {/* Gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/35 to-transparent"></div>

                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-950/80 backdrop-blur-md border border-cyber-cyan/40 text-xs font-mono font-semibold text-cyber-cyan">
                  <Radio className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
                  <span>{current.stats}</span>
                </div>

                {/* Venue tag top right */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-space-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                  IIT Bombay Campus
                </div>
              </div>

              {/* Text & Content Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/40">
                      {current.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Powai, Mumbai</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {current.description}
                  </p>
                </div>

                {/* Feature Highlights Grid */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>Experience Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-cyber-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
