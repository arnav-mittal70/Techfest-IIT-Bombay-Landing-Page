import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Image as ImageIcon, X, Maximize2, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCat === 'all' || item.category === activeCat
  );

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-space-950 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-dots-bg opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan tracking-wider uppercase mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>VISUAL ARCHIVES & LEGACY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Moments of <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent">Innovation</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Glimpse into the energy of Techfest IIT Bombay: roaring combat arenas, illuminated night skies, humanoid exhibits, and global keynotes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeCat === cat.id
                  ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-space-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-[1.02]'
                  : 'bg-space-900/80 text-slate-300 hover:text-white hover:bg-space-850 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            // First item in 'all' view spans 2 cols for editorial interest
            const isFeatured = activeCat === 'all' && (idx === 0 || idx === 7);
            return (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className={`group relative rounded-2xl overflow-hidden bg-space-900 border border-white/10 hover:border-cyber-cyan/60 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,242,254,0.25)] ${
                  isFeatured ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Image Frame */}
                <div className={`relative w-full overflow-hidden bg-space-950 ${isFeatured ? 'h-72 sm:h-80' : 'h-64 sm:h-72'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Cyber Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                  {/* Corner Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-space-950/80 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-cyber-cyan" />
                  </div>

                  {/* Badge Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-space-950/80 backdrop-blur-md text-cyber-cyan border border-cyber-cyan/40">
                    {item.tag}
                  </div>

                  {/* Bottom Caption Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyber-cyan transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/90 backdrop-blur-md"
          onClick={() => setLightboxImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-space-900 rounded-2xl border border-cyber-cyan/50 overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.3)] animate-in fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-space-950/80 border border-white/10 text-white hover:text-cyber-cyan transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-space-900 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40">
                  {lightboxImg.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">Techfest, IIT Bombay Archives</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {lightboxImg.title}
              </h3>
              <p className="text-sm text-slate-300">
                {lightboxImg.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
