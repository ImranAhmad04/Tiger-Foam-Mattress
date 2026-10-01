import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { FactoryShowcase } from './components/FactoryShowcase';
import { HowToStart } from './components/HowToStart';
import { ClientReviews } from './components/ClientReviews';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VisitingCardModal } from './components/VisitingCardModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainApp() {
  const [isVisitingCardOpen, setIsVisitingCardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Main Top Navigation */}
      <Navbar onOpenVisitingCard={() => setIsVisitingCardOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenVisitingCard={() => setIsVisitingCardOpen(true)} />

        {/* Products Showcase (Two core types: High-Density Foam & Orthopaedic Mattresses) */}
        <ProductsSection />

        {/* Factory Showcase & Interactive Video Machinery Tour */}
        <FactoryShowcase />

        {/* When & How to Start Client Guide */}
        <HowToStart />

        {/* Client Reviews & Attributable Social Proof */}
        <ClientReviews />

        {/* About Us (Mission, Pure Polyurethane Chemical Purity, Zero Chalk) */}
        <AboutSection />

        {/* Contact Us (Direct Factory Desk & WhatsApp Message Builder) */}
        <ContactSection onOpenVisitingCard={() => setIsVisitingCardOpen(true)} />
      </main>

      {/* Footer with Social Media Channels */}
      <Footer onOpenVisitingCard={() => setIsVisitingCardOpen(true)} />

      {/* Floating WhatsApp Action & Drawer */}
      <FloatingWhatsApp />

      {/* Online Visiting Card Modal */}
      <VisitingCardModal
        isOpen={isVisitingCardOpen}
        onClose={() => setIsVisitingCardOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
