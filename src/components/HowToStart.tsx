import React from 'react';
import { MessageCircle, ArrowRight, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { HOW_TO_START_STEPS, getWhatsAppUrl } from '../data/products';

export const HowToStart: React.FC = () => {
  return (
    <section id="how-to-start" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Client Onboarding Guide</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            When & How to Start Your Order with Tiger Foam & Mattress
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you are furnishing a new hotel, sourcing 500 foam sheets for furniture production, or buying a single spine-support mattress for your master bedroom—here is the exact roadmap to get started today.
          </p>
        </div>

        {/* 4-Step Editorial Timeline Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_TO_START_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-all"
            >
              <div className="space-y-3">
                {/* Clean Editorial Number */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-amber-600/80 dark:text-amber-500 font-mono tracking-tighter">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={getWhatsAppUrl(`Hello Tiger Foam, I am ready for Step ${step.number}: ${step.title}. Let's discuss details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors group cursor-pointer"
                >
                  <span>{step.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* When Should You Start? Decision Criteria */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>For Furniture & Sofa Manufacturers</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>When to reach out:</strong> 2 to 3 weeks before major production batches. We can cut custom loaf sizes and reserve dedicated density runs in advance to prevent workshop idle time.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>For Hotels, Resorts & Hostels</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>When to reach out:</strong> 30 days before guest suite inaugurations or seasonal refurbishment. We provide mattress sample suites for board approval first.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>For Individual Homeowners</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>When to reach out:</strong> Any day! Standard King and Queen orthopaedic mattresses are ready in warehouse stock for prompt 24-48hr doorstep dispatch.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-base">Unsure which foam density or mattress thickness you need?</p>
            <p className="text-xs text-slate-300">Our senior foam formulation engineer will answer in 5 minutes on WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Tiger Foam! I need consultation to determine the best foam density or mattress for my project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask a Technical Engineer</span>
          </a>
        </div>

      </div>
    </section>
  );
};
