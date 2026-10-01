import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Layers, BedDouble, Info } from 'lucide-react';
import { PRODUCTS_DATA, getWhatsAppUrl } from '../data/products';
import { ProductItem } from '../types';

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'foam' | 'mattress'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Product Catalog</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Direct Wholesale & Custom Sizing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Two Specialized Production Lines: Commercial Foam & Orthopaedic Mattresses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We operate separate precision divisions for bulk polyurethane raw foam sheets and finished orthopaedic sleeping mattresses. There is no complicated web cart—simply click <strong className="text-slate-800 dark:text-slate-100">Learn More</strong> to discuss thickness, custom sizes, and volume pricing directly on WhatsApp.
          </p>
        </div>

        {/* Filter Segmented Control (Interactive buttons conforming to skill Section 1.A) */}
        <div className="mt-8 flex items-center gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            All Products (6)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('foam')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'foam'
                ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Foam Sheets (3)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('mattress')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'mattress'
                ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <BedDouble className="w-3.5 h-3.5" />
            <span>Finished Mattresses (3)</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: ProductItem) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 4:3 Product Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Unboxed Category Identifier */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {product.category === 'foam' ? 'Industrial Polyurethane Foam' : 'Finished Sleep Mattress'}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {product.name}
                  </h3>
                  
                  <p className="mt-1 text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                    {product.tagline}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Technical Specifications Table */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Technical Specifications
                    </p>
                    <div className="space-y-1.5 text-xs">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-baseline gap-2 py-0.5 border-b border-slate-50 dark:border-slate-800/80 last:border-none">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">{spec.label}</span>
                          <span className="text-slate-900 dark:text-slate-200 font-semibold tabular-nums text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Ideal Applications
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app, i) => (
                        <span key={i} className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Action Footer: Under every product a button learn more -> WhatsApp */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all shadow-xs group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Learn More on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                  No online payment needed · Direct factory price quote
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Specification Banner */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Need custom cut foam dimensions or OEM mattress labeling?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              We operate automated contour slicing machinery to produce custom shapes, round foam bolsters, density-laminated blocks, and hotel branded mattresses with bespoke dimensions.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Tiger Foam, I have a custom sizing / OEM requirement. Here are my dimensions and requirements:')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Send Custom Blueprint</span>
          </a>
        </div>

      </div>
    </section>
  );
};
