import React from 'react';
import { statsData, patronagesList } from '../data/statsData';
import { Award, Globe, Users, Trophy } from 'lucide-react';

export default function StatsBanner() {
  const icons = [Award, Users, Globe, Trophy];

  return (
    <div className="relative z-20 border-y border-cyber-cyan/15 bg-space-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={stat.label} 
                className="relative p-4 rounded-xl bg-space-950/40 border border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-space-950 transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-cyber-cyan transition-colors">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-200 font-sans tracking-wide">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Patronage Strip */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-purple"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              HONORARY PATRONAGES & ACCREDITATIONS
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {patronagesList.map((p) => (
              <span
                key={p.name}
                className="px-3 py-1 rounded-md text-xs font-medium text-slate-300 bg-space-850/80 border border-slate-700/50 hover:border-cyber-purple/50 transition-colors"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
