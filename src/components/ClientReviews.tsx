import React from 'react';
import { Star, Building2, Quote, MessageCircle } from 'lucide-react';
import { CLIENT_REVIEWS, getWhatsAppUrl } from '../data/products';

export const ClientReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Verified Client Feedback</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Commercial Partners & Homeowners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Trusted by Furniture Manufacturers, Luxury Hotels & Orthopaedic Surgeons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real feedback from commercial partners who rely on our batch-to-batch density consistency and individual customers sleeping on Tiger orthopaedic mattresses.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                {/* Rating & Project Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {review.projectType}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  "{review.review}"
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span>{review.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{review.company}</span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Business Evidence Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">12,000+</p>
            <p className="text-xs text-slate-300">Foam Blocks Supplied Annually</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">140+</p>
            <p className="text-xs text-slate-300">Registered Commercial Clients</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">99.4%</p>
            <p className="text-xs text-slate-300">Batch Inspection Pass Rate</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">0%</p>
            <p className="text-xs text-slate-300">Middleman Trading Markup</p>
          </div>
        </div>

      </div>
    </section>
  );
};
