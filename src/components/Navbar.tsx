import React, { useState } from 'react';
import { MessageCircle, CreditCard, Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenVisitingCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitingCard }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-neutral-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single Brand Wordmark in display face */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Tiger Foam & Mattress
            </span>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-slate-950 dark:hover:text-white transition-colors">Home</a>
            <a href="#products" className="hover:text-slate-950 dark:hover:text-white transition-colors">Products</a>
            <a href="#factory" className="hover:text-slate-950 dark:hover:text-white transition-colors">Factory & Video</a>
            <a href="#how-to-start" className="hover:text-slate-950 dark:hover:text-white transition-colors">How to Start</a>
            <a href="#reviews" className="hover:text-slate-950 dark:hover:text-white transition-colors">Client Reviews</a>
            <a href="#about" className="hover:text-slate-950 dark:hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Zone 3: Primary Actions + Dark Mode Toggler */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Functional Dark Mode Toggler */}
            <ThemeToggle />

            <button
              onClick={onOpenVisitingCard}
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-500 rounded-md transition-all whitespace-nowrap cursor-pointer"
            >
              <CreditCard className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
              <span>Save Digital Visiting Card</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Tiger Foam & Mattress, I am contacting you from your website to inquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile hamburger & quick theme toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={onOpenVisitingCard}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              aria-label="Save Digital Visiting Card"
            >
              <CreditCard className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Products (Foam & Mattresses)
            </a>
            <a
              href="#factory"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Factory Tour & Machinery Video
            </a>
            <a
              href="#how-to-start"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              How & When to Start
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Client Reviews
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitingCard();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-md"
            >
              <CreditCard className="w-4 h-4" />
              <span>Save Digital Visiting Card</span>
            </button>
            <a
              href={getWhatsAppUrl('Hello Tiger Foam & Mattress, I am contacting you to inquire about wholesale/retail products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
