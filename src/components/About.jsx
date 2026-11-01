import React from 'react';
import { BookOpen, Trophy, Lightbulb, ArrowUpRight, Cpu, Sparkles, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      number: '01',
      id: 'learn',
      title: 'LEARN',
      subtitle: 'Knowledge from Frontier Minds',
      icon: BookOpen,
      gradient: 'from-cyan-400 to-blue-600',
      badgeColor: 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10',
      description: 'Engage directly with Nobel Laureates, astronauts, industry pioneers, and leading researchers. Dive into hands-on advanced workshops covering Quantum Computing, Generative AI Agentic Systems, Autonomous Robotics, and Aerospace Engineering.',
      metrics: [
        '50+ World-Class Keynotes Delivered',
        'Certified Hands-On Workshops in Deep-Tech',
        'Global Tech Policy & Research Summits'
      ]
    },
    {
      number: '02',
      id: 'compete',
      title: 'COMPETE',
      subtitle: 'Arena of Engineering Titans',
      icon: Trophy,
      gradient: 'from-blue-500 to-indigo-600',
      badgeColor: 'border-blue-400 text-blue-400 bg-blue-500/10',
      description: 'Step into intense competitive proving grounds where student engineers construct combat robots, autonomous maze micro-rovers, high-speed algorithmic solvers, and aeromodels. Test your hardware and logic against elite global delegations.',
      metrics: [
        'Asia’s Flagship Robowars Enclosure (60kg & 15kg)',
        'ICPC Styled Algorithmic Code Sprints',
        'Over INR 50,00,000 in Prizes & Grants'
      ]
    },
    {
      number: '03',
      id: 'innovate',
      title: 'INNOVATE',
      subtitle: 'Living Prototypes of Tomorrow',
      icon: Lightbulb,
      gradient: 'from-purple-400 to-pink-500',
      badgeColor: 'border-cyber-purple text-cyber-purple bg-cyber-purple/10',
      description: 'Witness groundbreaking hardware prototypes addressing global challenges in sustainability, renewable energy, defense systems, and clean mobility. TechConnect exhibits direct lab breakthroughs from IIT Bombay research centers to world industry partners.',
      metrics: [
        'IIT Bombay TechConnect R&D Showcases',
        'Incubation Grants & Seed Investment Access',
        'Patented Clean-Tech & Medical Prototypes'
      ]
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-space-950 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyber-purple/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute inset-0 cyber-dots-bg opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Narrative Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>THE TECHFEST LEGACY · EST. 1998</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Engineering the Future at <span className="bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-purple bg-clip-text text-transparent">IIT Bombay</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              Conceived in 1998 by a dedicated group of IIT Bombay students to nurture engineering ingenuity, Techfest has evolved over 27 continuous editions into 
              <span className="text-white font-semibold"> Asia’s Largest Science and Technology Festival</span>. Every winter, the Powai campus transforms into an electrifying epicentre of international combat robotics, living research exhibitions, and intellectual discourse.
            </p>
          </div>

          <div className="lg:col-span-5 bg-space-900/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">Global Accreditation & Trust</h4>
                <p className="text-xs font-mono text-slate-400">Honored by Premier Global Bodies</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Techfest has earned prestigious patronages from international organizations including <strong>UNESCO</strong> and <strong>UNICEF</strong>, alongside endorsements from national initiatives like <strong>Make in India</strong> and <strong>Digital India</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-space-950 border border-cyber-cyan/30 text-cyber-cyan">UNESCO Patronage</span>
              <span className="px-2.5 py-1 rounded bg-space-950 border border-cyber-purple/30 text-cyber-purple">UNICEF Recognition</span>
              <span className="px-2.5 py-1 rounded bg-space-950 border border-blue-400/30 text-blue-400">Make In India</span>
            </div>
          </div>

        </div>

        {/* Three Editorial Feature Pillars: Learn, Compete, Innovate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl p-8 bg-space-900/60 backdrop-blur-xl border border-white/10 hover:border-cyber-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,242,254,0.25)] flex flex-col justify-between"
              >
                {/* Glowing Top Line Accent */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-slate-700 group-hover:text-cyber-cyan/60 transition-colors">
                      {pillar.number}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${pillar.badgeColor}`}>
                      {pillar.title}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-14 h-14 rounded-2xl bg-space-950 border border-white/10 flex items-center justify-center mb-5 group-hover:border-cyber-cyan/40 shadow-inner group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7 text-cyber-cyan group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {pillar.subtitle}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Metrics / Highlights List */}
                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  {pillar.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1 shrink-0"></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Ribbon */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-space-900/90 via-space-850/80 to-space-900/90 border border-cyber-cyan/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">Join Asia's Most Prestigious Gathering of Innovators</h4>
              <p className="text-sm text-slate-400">From school prodigies to university researchers, compete on the national stage.</p>
            </div>
          </div>
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-space-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all shrink-0 hover:scale-[1.02]"
          >
            <span>Explore Arenas</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
