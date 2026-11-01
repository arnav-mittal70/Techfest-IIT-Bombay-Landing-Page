import React, { useState } from 'react';
import { X, Trophy, Users, Calendar, MapPin, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function EventModal({ event, onClose }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName && email) {
      setIsRegistered(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-space-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-space-900 border border-cyber-cyan/40 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.25)] p-6 sm:p-8 z-10 my-8 overflow-hidden text-left">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-space-850 border border-white/10 text-slate-400 hover:text-white hover:border-cyber-cyan/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
            {event.categoryLabel}
          </span>
          <span className="px-3 py-0.5 rounded-full text-xs font-mono text-slate-300 bg-space-850 border border-white/10">
            {event.badge}
          </span>
          <span className="px-3 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
            ● Status: {event.registrationStatus}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
          {event.title}
        </h3>
        <p className="text-sm font-mono text-cyber-cyan mb-4">
          {event.tagline}
        </p>

        {/* Event Key Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-space-950/70 border border-white/5 mb-6 text-xs">
          <div>
            <span className="text-slate-400 font-mono block">Prize Pool</span>
            <span className="font-bold text-white text-sm">{event.prizePool}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block">Team Size</span>
            <span className="font-bold text-white text-sm">{event.teamSize}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block">Schedule</span>
            <span className="font-bold text-white text-sm">{event.date}</span>
          </div>
          <div>
            <span className="text-slate-400 font-mono block">Campus Venue</span>
            <span className="font-bold text-white text-sm truncate block">{event.venue}</span>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyber-cyan" />
            <span>Event Overview & Technical Scope</span>
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {event.fullDesc}
          </p>
        </div>

        {/* Rules & Guidelines */}
        <div className="space-y-3 mb-6 p-4 rounded-xl bg-space-950/50 border border-white/5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-cyber-purple" />
            <span>Key Competition Guidelines</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyber-cyan mt-0.5">▹</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Area / Quick Registration Demo */}
        <div className="pt-4 border-t border-white/10">
          {!isRegistered ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Team Name / Leader Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="Official Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <span className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
                  *Official rules & accommodation details are provided via email.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-space-950 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all text-sm shrink-0"
                >
                  <span>Submit Pre-Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <div>
                  <h5 className="font-bold text-white text-sm">Registration Confirmed for {teamName}!</h5>
                  <p className="text-xs text-slate-300">Confirmation dispatch sent to {email}. See you at IIT Bombay!</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded bg-space-850 text-xs font-semibold text-slate-200 hover:text-white border border-white/10"
              >
                Close
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
