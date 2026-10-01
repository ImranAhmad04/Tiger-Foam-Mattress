import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: 'Wholesale Foam Pricing', text: 'Hello Tiger Foam! I would like to request your wholesale price sheet for bulk foam sheets.' },
    { label: 'Orthopaedic Mattress Inquiry', text: 'Hello Tiger Foam! I would like details and pricing on your Orthopaedic SpineMaster mattresses.' },
    { label: 'Custom Dimension Slicing', text: 'Hello! I need custom foam cuts with specific dimensions and density. Can we discuss?' },
    { label: 'Schedule Factory Visit', text: 'Hello Tiger Foam team! I would like to schedule an in-person visit to your manufacturing plant in Gazipur.' }
  ];

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Inquiries Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">Tiger Foam Sales Desk</p>
                <p className="text-[11px] text-emerald-100">Usually replies in &lt;10 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-emerald-800 cursor-pointer"
              aria-label="Close WhatsApp Drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Questions List */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950 space-y-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Select a quick inquiry to start chat:</p>
            <div className="space-y-1.5">
              {quickPrompts.map((prompt, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppUrl(prompt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left p-2.5 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-850 hover:border-emerald-200 dark:hover:border-slate-700 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span>{prompt.label}</span>
                    <Send className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Custom Launch */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
            <a
              href={getWhatsAppUrl('Hello Tiger Foam & Mattress! I would like to chat directly with a sales representative.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Open Custom Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:scale-103"
        aria-label="Chat with Tiger Foam on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold tracking-wide pr-1">Talk on WhatsApp</span>
      </button>
    </aside>
  );
};
