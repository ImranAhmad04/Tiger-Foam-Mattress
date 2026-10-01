import React, { useState } from 'react';
import { Play, Pause, X, CheckCircle2, Cog, Gauge, Shield, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

export const FactoryShowcase: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const videoChapters = [
    { title: 'Continuous Polyurethane Block Curing', time: '0:00 - 1:15', desc: 'Raw material polymerization and temperature-controlled density curing.' },
    { title: 'CNC Horizontal & Contour Slicing', time: '1:16 - 2:40', desc: 'Sub-millimeter automated foam slicing with zero human dimension error.' },
    { title: 'Multi-Needle Orthopaedic Mattress Quilting', time: '2:41 - 3:50', desc: 'Breathable jacquard fabric bonding over rebonded high-density core.' },
    { title: 'Final Compression & Rigorous Sag Testing', time: '3:51 - 4:45', desc: 'Roller endurance test verifying 10-year anti-sag resilience.' }
  ];

  return (
    <section id="factory" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              <span>Manufacturing Facility & Quality Control</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Gazipur Industrial Zone</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
              Take an Inside Tour of Our Foam Factory & Mattress Production Floor
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We own and operate our primary curing bays, CNC foam cutting machinery, and mattress assembly lines. Prospective commercial buyers and dealers are welcome to schedule in-person or live video tours.
            </p>
          </div>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Factory Video (4m 45s)</span>
          </button>
        </div>

        {/* Video Hero Feature Card */}
        <div className="mt-12 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950 group">
          <div className="aspect-16/9 md:aspect-21/9 relative">
            <img
              src="/src/assets/images/factory_machinery_tour_1790842733024.jpg"
              alt="High-Tech Automated CNC Foam Cutting Machine at Tiger Foam Factory"
              className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 hover:bg-white text-slate-950 flex items-center justify-center pl-1 shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                aria-label="Play Factory Machinery Video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950" />
              </button>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  Featured Machinery Tour
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Computerized CNC Contour Slicing & High-Density Curing Bay
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                  Watch raw polyurethane transform into high-resilience furniture sheets and multi-layer orthopaedic mattress cores.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-xs font-semibold text-slate-200 border border-white/10">
                  4K Ultra-HD Tour
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-600/80 backdrop-blur-xs text-xs font-semibold text-white border border-emerald-400/20">
                  ISO Verified Standards
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Factory Excellence */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold">
              <Cog className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">CNC Precision Slicing</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Automated wire contour cutters ensure every sheet of sofa foam or mattress topper adheres to ±0.5mm tolerance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold">
              <Gauge className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Density Chamber Testing</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every foam loaf is tested for kg/m³ density and indentation hardness (ILD) before warehouse slicing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">10-Year Sag Proofing</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              100,000-cycle mechanical roller test simulation guarantees that orthopaedic cores will never collapse under bodyweight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Hygienic Wrapping</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Vacuum roll-packing and moisture-barrier shrink wrapping for clean, dust-free delivery to retail showrooms.
            </p>
          </div>
        </div>

        {/* Schedule a Factory Visit Callout */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p>
            Are you a furniture factory owner or hotel procurement manager? We offer scheduled in-person factory visits.
          </p>
          <a
            href={getWhatsAppUrl('Hello Tiger Foam & Mattress! I would like to schedule an in-person factory visit to inspect your production line and foam samples.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Factory Visit via WhatsApp →</span>
          </a>
        </div>

      </div>

      {/* Interactive Video Tour Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-bold text-sm tracking-tight text-white">
                  Tiger Foam & Mattress Industrial Tour (Gazipur Plant)
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Window Simulation with High-Res Frame */}
            <div className="relative aspect-16/9 bg-black">
              <img
                src="/src/assets/images/factory_machinery_tour_1790842733024.jpg"
                alt="Factory Machinery In Action"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Playback Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center text-xs text-white">
                  <span className="bg-black/70 px-2.5 py-1 rounded font-mono">
                    LIVE HD STREAM · FEED 01
                  </span>
                  <span className="bg-emerald-600/90 px-2 py-0.5 rounded font-medium">
                    {videoChapters[activeChapter].time}
                  </span>
                </div>

                {/* Center playback toggle */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white pl-1" />}
                  </button>
                </div>

                {/* Bottom Bar Info */}
                <div className="space-y-2">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full transition-all duration-300"
                      style={{ width: `${(activeChapter + 1) * 25}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-200">
                    <div>
                      <p className="font-semibold text-white">{videoChapters[activeChapter].title}</p>
                      <p className="text-slate-400 text-[11px]">{videoChapters[activeChapter].desc}</p>
                    </div>
                    <span className="font-mono text-slate-300">04:45</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters Navigation */}
            <div className="p-4 bg-slate-950 border-t border-slate-800">
              <p className="text-xs uppercase font-semibold text-slate-400 mb-2">
                Factory Tour Chapters
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {videoChapters.map((chapter, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    className={`text-left p-2.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeChapter === idx
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold'
                        : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span className="block text-[10px] text-slate-400 font-mono">{chapter.time}</span>
                    <span className="truncate block">{chapter.title}</span>
                  </button>
                ))}
              </div>

              {/* Inquiry Action Inside Video Modal */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Want to inspect real product density samples?</span>
                <a
                  href={getWhatsAppUrl('Hello Tiger Foam! I just watched your factory tour video and would like to request physical foam/mattress samples.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Physical Samples on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
