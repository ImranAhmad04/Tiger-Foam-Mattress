import React from 'react';
import { CreditCard, MessageCircle, Phone, Mail } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/products';
import { SocialIcons } from './SocialIcons';

interface FooterProps {
  onOpenVisitingCard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitingCard }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Tiger Foam & Mattress
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Industrial polyurethane foam blocks and doctor-tested orthopaedic mattresses manufactured in Gazipur, Bangladesh. Direct factory supply for furniture brands, hotels, and homeowners.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={onOpenVisitingCard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-white text-xs border border-slate-800 transition-colors cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Save Digital Visiting Card</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <p className="font-bold text-white text-xs uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products (Foam & Mattresses)</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">Factory Tour & Machinery Video</a></li>
              <li><a href="#how-to-start" className="hover:text-white transition-colors">When & How to Start</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact & Socials */}
          <div className="space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider">
              Sales & WhatsApp
            </p>
            <p className="text-xs text-slate-400">
              Official Hotline: <strong className="text-white">{WHATSAPP_DISPLAY}</strong>
            </p>
            <p className="text-xs text-slate-400">
              Email: sales@tigerfoamandmattress.com
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Factory: Masterbari, Gazipur, Dhaka Division, Bangladesh
            </p>
            <div className="pt-0.5">
              <a
                href={getWhatsAppUrl('Hello Tiger Foam! I would like to make an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Direct WhatsApp Chat &rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Social Media Section at last: Facebook, TikTok, WhatsApp, Instagram */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-xs font-semibold text-slate-300">Connect with us on social media:</span>
            <SocialIcons />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span>Facebook</span>
            <span aria-hidden="true">·</span>
            <span>TikTok</span>
            <span aria-hidden="true">·</span>
            <span>WhatsApp</span>
            <span aria-hidden="true">·</span>
            <span>Instagram</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Tiger Foam & Mattress Industries Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>High-Density Resilience Foam</span>
            <span aria-hidden="true">·</span>
            <span>Orthopaedic Sleep Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Sag Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
