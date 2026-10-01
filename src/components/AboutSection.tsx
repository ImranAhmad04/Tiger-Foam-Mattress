import React from 'react';
import { ShieldCheck, Award, Microscope, HeartHandshake, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Corporate Heritage & Mission</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>About Tiger Foam & Mattress</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Setting the Benchmark for Polyurethane Resilience & Therapeutic Sleep
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tiger Foam & Mattress was founded with a singular conviction: too many furniture makers and families suffer from low-density foam filled with chalk powder and cheap extenders that sags within months. We built a modern industrial facility focused strictly on 100% pure virgin polymers and clinical spinal ergonomics.
          </p>
        </div>

        {/* 2-Column Story & Standards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Standards */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Our Zero-Compromise Manufacturing Standards
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zero Chalk / Zero Heavy Fillers</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Cheap market foam uses calcium carbonate fillers to artificially fake weight. Tiger Foam utilizes strictly pure virgin polyols and isocyanates, guaranteeing authentic density that rebounds indefinitely.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sub-Millimeter CNC Contour Accuracy</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Our high-speed CNC contour oscillating wire slicing system cuts complex curves, bolster radii, and multi-layer mattress cores with clean edge finishes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Physician-Tested Spine Alignment</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Tiger Orthopaedic Mattresses are engineered with progressive resistance: yielding to delicate shoulders and hips while giving firm support beneath the lumbar spine.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Factory Principle */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <p>
                Registered Trade License & Factory Accreditation: Gazipur Industrial Area · Direct Sales & Support through Official WhatsApp Hotline.
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                <Microscope className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>In-House Laboratory Batch Testing</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Every chemical pour is logged. We measure tensility, elongation, tear resistance, and hysteresis recovery in our lab before clearing blocks for customer dispatch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Reliable Wholesale Partnerships</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We work side-by-side with commercial furniture brands and hotel procurement directors, offering flexible batch scheduling, custom color codes, and volume rebates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-900 text-white space-y-3 border border-transparent dark:border-slate-800">
              <p className="text-xs font-semibold uppercase text-amber-400">Direct Factory Access</p>
              <h4 className="text-base font-bold text-white">
                Speak directly with our technical founder or production director
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No bureaucratic ticketing or automated voice robots. Click WhatsApp to discuss bulk orders with a factory decision-maker.
              </p>
              <a
                href={getWhatsAppUrl('Hello Tiger Foam Leadership! I would like to introduce my company and discuss a potential manufacturing partnership.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Initiate Executive Discussion →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
