import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CreditCard, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/products';

interface ContactSectionProps {
  onOpenVisitingCard: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenVisitingCard }) => {
  const [inquiryType, setInquiryType] = useState('Bulk Industrial Foam Sheets');
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Tiger Foam & Mattress!
*Inquiry Type:* ${inquiryType}
*Name:* ${customerName || 'Prospective Client'}
*Company/Location:* ${companyName || 'Not specified'}
*Details/Requirements:* ${message || 'I would like to inquire about specifications and pricing.'}`;
    
    window.open(getWhatsAppUrl(formatted), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Direct Commercial Desk</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Contact & Factory Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
            Talk Directly with Tiger Foam & Mattress Sales Engineers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We don't use complicated checkouts or automated call queues. Pick up your phone, send a WhatsApp message, or visit our factory floor in person.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, WhatsApp Message Builder on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Factory Contacts & Online Visiting Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Factory & Sales Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">Instant WhatsApp Line</p>
                    <a
                      href={getWhatsAppUrl('Hello Tiger Foam! I would like to chat with a sales engineer.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <span className="block text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">Replies within 5–15 minutes</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">Direct Telephone</p>
                    <a href="tel:+8801700000000" className="font-semibold text-slate-900 dark:text-white hover:underline">
                      +880 1700-000000
                    </a>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Corporate & Dispatch Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">Email Inquiries</p>
                    <a href="mailto:sales@tigerfoamandmattress.com" className="font-semibold text-slate-900 dark:text-white hover:underline">
                      sales@tigerfoamandmattress.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">Factory Address</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-xs leading-relaxed">
                      Plot 42-45 Industrial Growth Zone, Masterbari, Gazipur, Dhaka Division, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">Operating Hours</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-xs">
                      Saturday – Thursday: 8:30 AM – 7:00 PM
                    </p>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">WhatsApp inquiries monitored 7 days a week</span>
                  </div>
                </div>
              </div>

              {/* Online Visiting Card Trigger */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={onOpenVisitingCard}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-500 text-slate-900 dark:text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>Save Digital Visiting Card</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: WhatsApp Direct Message Builder */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400">
                Frictionless Communication
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Compose WhatsApp Inquiry
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Select your product interest below, type your details, and click send. It opens your WhatsApp application with your inquiry already formatted.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              {/* Inquiry Type Radio / Segment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Select Product / Requirement:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Bulk Industrial Foam Sheets',
                    'Custom Foam Contour Slicing',
                    'Tiger Orthopaedic Mattresses',
                    'Hotel Series Mattresses (Bulk)',
                    'General Price List & Catalog',
                    'Schedule Factory Floor Visit'
                  ].map((type) => (
                    <label
                      key={type}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                        inquiryType === type
                          ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-300 font-semibold'
                          : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        checked={inquiryType === type}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name & Company inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Asif Mahmud"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-slate-400 focus:bg-white dark:focus:bg-slate-850 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Location (Optional):
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Furniture, Dhaka"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-slate-400 focus:bg-white dark:focus:bg-slate-850 transition-colors"
                  />
                </div>
              </div>

              {/* Details & Dimensions */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Dimensions, Quantity, or Custom Question:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Need 100 sheets of 32 density foam, 4 inches thick (72x36 inches). Please provide wholesale quotation and lead time."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-slate-400 focus:bg-white dark:focus:bg-slate-850 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Launch Chat on WhatsApp Now</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Direct Factory Engineer
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  No Spam or Bot Menus
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  100% Free Consultation
                </span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
