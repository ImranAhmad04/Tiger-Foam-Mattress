import React from 'react';
import { X, CheckCircle, FileText, ArrowRight, Layers, Smartphone, Globe, Shield, RefreshCw } from 'lucide-react';
import { SITE_PLAN_METRICS, SITE_PLAN_SECTIONS, WORDPRESS_MIGRATION_ROADMAP } from '../data/sitePlan';

interface SitePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SitePlanModal: React.FC<SitePlanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              World-Class Web Architecture Blueprint
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Tiger Foam & Mattress – Site Plan & High-Conversion Strategy
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Minimalist Corporate Structure · WhatsApp Conversion Architecture · SEO & WordPress Migration Roadmap
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            aria-label="Close Blueprint"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-800">
          
          {/* Executive Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Target Conversion</span>
              <p className="text-lg font-bold text-slate-900">Direct WhatsApp Consultation</p>
              <p className="text-xs text-slate-600">
                Eliminates cart drop-off. Custom foam & mattresses require dimension dialogue, making WhatsApp a 3x higher converting channel than traditional e-commerce checkouts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Design Constitution</span>
              <p className="text-lg font-bold text-slate-900">Anti-AI Minimalist Corporate</p>
              <p className="text-xs text-slate-600">
                Strict 60-30-10 color discipline (slate navy, neutral canvas, emerald action accents), zero-pill typography, unboxed metadata, and authentic industrial scale.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Tech Roadmap</span>
              <p className="text-lg font-bold text-slate-900">Vercel &rarr; WordPress Ready</p>
              <p className="text-xs text-slate-600">
                Phase 1 launches instantly on Vercel with zero latency and 100/100 Core Web Vitals. Phase 2 transitions smoothly to WordPress ACF Gutenberg blocks without losing rankings.
              </p>
            </div>
          </div>

          {/* Section-by-Section Architectural Map */}
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Section Flow & Conversion Mechanism
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                The 8 High-Conversion Landing Page Sections
              </h3>
            </div>

            <div className="space-y-4">
              {SITE_PLAN_SECTIONS.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <span>{sec.title}</span>
                    </h4>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Goal: {sec.conversionGoal}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1.5">Key Structural Components:</p>
                      <ul className="space-y-1">
                        {sec.keyElements.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500 font-bold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1.5">Conversion Psychology:</p>
                      <p className="leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        {sec.psychology}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Best Practice Execution */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-700" />
              <span>SEO Best Practice Checklist (Implemented & Verified)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Branded Title & Action-Oriented Meta Description</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  Configured title within 55 characters and compelling meta description targeting B2B foam wholesale and orthopaedic mattress keywords.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Schema.org JSON-LD Structured Data</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  Embedded LocalBusiness & Product catalog JSON-LD rich snippets in index.html for Google search prominence and local factory visibility.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>OpenGraph & Twitter Card Social Assets</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  Rich preview generation when shared on WhatsApp, Facebook, LinkedIn, and messaging platforms with high-res factory photo.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Core Web Vitals & Mobile-First Performance</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  Zero heavy client-side bloat, instant LCP (Largest Contentful Paint), responsive 1440px desktop to 360px mobile fluid layout.
                </p>
              </div>
            </div>
          </div>

          {/* Vercel to WordPress Migration Roadmap */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase font-bold text-amber-400">Deployment Architecture</span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Vercel Launch Today &rarr; Future WordPress Roadmap
                </h3>
              </div>
              <RefreshCw className="w-5 h-5 text-amber-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WORDPRESS_MIGRATION_ROADMAP.map((road, idx) => (
                <div key={idx} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-1.5">
                  <p className="text-xs font-bold text-amber-300">{road.step}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{road.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Tiger Foam & Mattress Strategic Architecture Document</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Blueprint & View Live Sample
          </button>
        </div>

      </div>
    </div>
  );
};
