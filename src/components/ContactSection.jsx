import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, Compass, ExternalLink, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Competitions', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-space-950 overflow-hidden border-t border-white/5">
      {/* Background radial atmosphere */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>CONTACT & VISIT</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Get in Touch with <span className="bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">Techfest</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Have questions regarding competitions, accommodation on campus, media relations, or partnerships? Reach out to the student core committee at IIT Bombay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Campus Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="p-6 rounded-2xl bg-space-900/80 border border-white/10 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">
                    Festival Grounds & Venue
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    Indian Institute of Technology Bombay
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Techfest Office, Students Activity Centre (SAC),<br />
                    IIT Bombay, Powai, Mumbai - 400076, Maharashtra, India.
                  </p>
                  <a
                    href="https://maps.google.com/?q=IIT+Bombay+Powai+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Department Inquiries List */}
            <div className="p-6 rounded-2xl bg-space-900/80 border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Official Department Portals & Contacts
              </h4>

              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-cyber-cyan shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-mono">General Inquiries</span>
                  <a href="mailto:info@techfest.org" className="text-slate-200 hover:text-cyber-cyan font-mono text-xs">
                    info@techfest.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-cyber-purple shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Competitions & Robowars</span>
                  <a href="mailto:competitions@techfest.org" className="text-slate-200 hover:text-cyber-cyan font-mono text-xs">
                    competitions@techfest.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Hospitality & Accommodation</span>
                  <a href="mailto:hospitality@techfest.org" className="text-slate-200 hover:text-cyber-cyan font-mono text-xs">
                    hospitality@techfest.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm pt-2 border-t border-white/5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Official Linktree Hub</span>
                  <a 
                    href="https://linktr.ee/techfest_iitbombay" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-200 hover:text-cyber-cyan font-mono text-xs inline-flex items-center gap-1"
                  >
                    <span>linktr.ee/techfest_iitbombay</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-space-900/90 border border-white/10 shadow-2xl relative">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send an Inquiry Dispatch
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                All participant and contingent queries are handled directly by the Techfest IIT Bombay student core team.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. aryan@college.edu"
                        className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    >
                      <option value="Competitions">Competitions & Robowars Inquiry</option>
                      <option value="Workshops">Workshops & Certifications</option>
                      <option value="Hospitality">Campus Stay & Accommodation</option>
                      <option value="Media">Media & Press Relations</option>
                      <option value="Partnership">Sponsorship & Brand Conclave</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Message or Problem Statement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your query, team ID, or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-slate-700 focus:border-cyber-cyan text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-space-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all text-sm hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              ) : (
                <div className="p-8 text-center bg-space-950/80 rounded-xl border border-emerald-500/30 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our student coordinator will review your inquiry regarding {formData.subject} and respond to {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Competitions', message: '' });
                    }}
                    className="text-xs font-mono text-cyber-cyan underline pt-2"
                  >
                    Send another query
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
