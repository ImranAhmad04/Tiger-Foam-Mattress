import React from 'react';
import { MessageCircle, CreditCard, ShieldCheck, Factory, Award } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

interface HeroProps {
  onOpenVisitingCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitingCard }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle / Trust Indicator (Unboxed, no pills) */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 tracking-wider uppercase">
          <span>Industrial Polyurethane Foam</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Ergonomic Orthopaedic Mattresses</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Direct Factory Supply</span>
        </div>

        {/* 2-Column Responsive Hero: Headline & CTAs on left, 16:9 Industrial Imagery on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-[1.08]">
              Engineered Foam & Orthopaedic Sleep Mattresses Direct from the Factory.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              We manufacture commercial-grade high-density polyurethane foam blocks for furniture makers and medical-grade orthopaedic mattresses for hotels and homes. Fast, zero-middleman ordering directly through WhatsApp.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl('Hello Tiger Foam & Mattress! I saw your website and would like to speak with a sales engineer about foam and mattress requirements.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk with Us on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenVisitingCard}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-500 rounded-lg transition-all cursor-pointer"
              >
                <CreditCard className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <span>Save Digital Visiting Card</span>
              </button>
            </div>

            {/* Micro Trust Proof Markers (Clean unboxed line items) */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
              <div className="space-y-0.5">
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">28–100</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">kg/m³ Density Range</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sag-Resistant Core</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">48hr</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sample Dispatch</p>
              </div>
            </div>
          </div>

          {/* Focal Anchor: 16:9 Industrial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 aspect-16/9 lg:aspect-4/3">
              <img
                src="/src/assets/images/hero_factory_mattress_1790842683743.jpg"
                alt="Tiger Foam and Mattress Automated Factory Production Line"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                  <Factory className="w-3.5 h-3.5" />
                  <span>Gazipur Manufacturing Facility</span>
                </div>
                <p className="text-sm font-semibold text-white mt-0.5">
                  High-capacity continuous block foam curing & computerized contour slicing
                </p>
              </div>
            </div>

            {/* Floating Factory Guarantee Stamp */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white">Direct Factory Warranted</p>
                <p className="text-slate-500 dark:text-slate-400">Zero middleman markup</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
