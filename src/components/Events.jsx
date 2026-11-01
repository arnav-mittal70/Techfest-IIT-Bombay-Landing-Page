import React, { useState } from 'react';
import { eventCategories, eventsList } from '../data/eventsData';
import EventModal from './EventModal';
import { 
  Trophy, Users, Calendar, ArrowRight, Bot, Cpu, Zap, 
  Brain, Terminal, Plane, Lightbulb, Layers, Search, Sparkles 
} from 'lucide-react';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Icon map for dynamic icons
  const iconMap = {
    Bot, Cpu, Zap, Brain, Terminal, Plane, Lightbulb, Layers
  };

  const filteredEvents = eventsList.filter((event) => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="relative py-24 sm:py-32 bg-space-950 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan tracking-wider uppercase mb-4">
            <Trophy className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>COMPETITIVE ARENAS & HACKATHONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Official <span className="bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-purple bg-clip-text text-transparent">Competitions</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Experience high-stakes combat robotics, autonomous maze navigation, generative AI hackathons, and extreme algorithmic challenges inspired by official Techfest IIT Bombay tracks.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {eventCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-space-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-[1.02]'
                    : 'bg-space-900/80 text-slate-300 hover:text-white hover:bg-space-850 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search event, prize, rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-space-900/90 border border-white/10 focus:border-cyber-cyan text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event) => {
            const IconComponent = iconMap[event.icon] || Trophy;
            return (
              <div
                key={event.id}
                className="group relative rounded-2xl bg-space-900/70 backdrop-blur-xl border border-white/10 hover:border-cyber-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,242,254,0.3)] flex flex-col justify-between overflow-hidden"
              >
                {/* Event Image Banner with Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-space-950">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Cyber Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-space-950 bg-cyber-cyan shadow-md">
                      {event.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-space-950/80 backdrop-blur-md border border-white/10">
                      {event.badge}
                    </span>
                  </div>

                  {/* Prize Tag on Image Bottom */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-space-950/80 backdrop-blur-md border border-cyber-cyan/40 text-xs font-mono font-bold text-cyber-cyan">
                    <Trophy className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>{event.prizePool}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-2.5">
                      <div className="p-2 rounded-xl bg-space-950 border border-white/10 text-cyber-cyan group-hover:border-cyber-cyan/40 group-hover:scale-105 transition-all shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyber-cyan transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 line-clamp-1">
                          {event.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-normal">
                      {event.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Quick Specs Bar */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-space-950/70 border border-white/5 text-xs font-mono mb-4">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Users className="w-3.5 h-3.5 text-cyber-purple shrink-0" />
                        <span className="truncate">{event.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{event.date}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-space-850 hover:bg-space-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyber-cyan/60 text-xs font-semibold tracking-wide transition-all group/btn hover:shadow-[0_0_15px_rgba(0,242,254,0.25)]"
                    >
                      <span>View Guidelines & Register</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 text-cyber-cyan transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-space-900/40 rounded-2xl border border-white/5">
            <p className="text-slate-400 text-sm">No competitions matched your search query.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono text-cyber-cyan underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Details & Registration Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}
