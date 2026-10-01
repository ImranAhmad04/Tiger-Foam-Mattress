export interface ArchitectureSection {
  title: string;
  role: string;
  conversionGoal: string;
  keyElements: string[];
  psychology: string;
}

export const SITE_PLAN_METRICS = {
  brandName: 'Tiger Foam & Mattress',
  domain: 'tigerfoamandmattress.com',
  businessModel: 'Direct Manufacturer to B2B (Furniture makers, Hotels, Interior Designers) & Direct Consumers',
  conversionFunnel: 'Single-action WhatsApp conversation gateway (No checkout drop-off, frictionless personal consultation)',
  currentStack: 'Vercel (React + Vite + Tailwind CSS for ultra-fast TTFB and 100/100 Lighthouse score)',
  futureStack: 'WordPress (Headless REST API / Custom Theme / ACF blocks with preserved WhatsApp conversion architecture)'
};

export const SITE_PLAN_SECTIONS: ArchitectureSection[] = [
  {
    title: '1. Top Bar & Executive Visiting Card Bar',
    role: 'One-Row, 3-Zone Anti-Slop Navigation',
    conversionGoal: 'Instant brand recall, direct phone/WhatsApp shortcut, and digital visiting card vCard download.',
    keyElements: [
      'Wordmark: Tiger Foam & Mattress',
      'Minimal text links: Products, Factory Tour, Reviews, About Us, Contact',
      'Primary CTA: Green WhatsApp Direct Connect button + Digital Visiting Card trigger',
      'Zero-pill discipline: No clutter, no distracting promotional ribbons'
    ],
    psychology: 'Establishes industrial legitimacy immediately. The user recognizes a direct factory rather than a dropshipping website within 1.5 seconds.'
  },
  {
    title: '2. High-Impact Factory & Product Hero',
    role: 'Visual Anchor & Single-Sentence Value Proposition',
    conversionGoal: 'Achieve immediate visitor buy-in by showcasing real manufacturing scale.',
    keyElements: [
      'Headline: Premium High-Density Foam & Orthopaedic Mattresses Direct from the Factory',
      'Subheadline: Supplying furniture manufacturers, luxury hotels, and health-conscious families with engineered polyurethane comfort since 2012.',
      'Primary CTA: "Chat on WhatsApp for Wholesale & Retail Inquiries"',
      'Secondary CTA: "View Digital Visiting Card" (vCard / QR Code / Phone)',
      'Trust markers: ISO 9001 standard curing, 100% pure high-density foam, 0% sagging guarantee'
    ],
    psychology: 'B2B buyers and homeowners buy foam/mattresses based on density and durability. Seeing real industrial equipment destroys supplier hesitation.'
  },
  {
    title: '3. Digital Visiting Card Module (Interactive)',
    role: 'Mobile-First Quick Utility for Business Cards',
    conversionGoal: 'Turn casual business card recipients into phone contacts within one tap.',
    keyElements: [
      'Instant "Save Contact to Phone" (.vcf vCard download)',
      'High-contrast QR code for instant camera scanning at trade fairs or factory visits',
      'Direct WhatsApp chat button with pre-written introductory greeting',
      'Direct tap-to-call phone number and Google Maps pinned location',
      'Shareable link copy button for quick sharing across chat apps'
    ],
    psychology: 'Replaces lost paper cards. When handing out a physical card, prospective clients can load the URL and save phone contacts instantly without typing.'
  },
  {
    title: '4. Products Showcase (The Two Core Pillars)',
    role: 'Categorized Catalog without Checkout Friction',
    conversionGoal: 'Every single product features a contextual "Learn More via WhatsApp" button pre-configured with the exact product title.',
    keyElements: [
      'Category 1: Industrial & Commercial Foam (HD Super Resilience, Ultra-Bonded Ortho Core, Soft Touch Comfort Sheet)',
      'Category 2: Mattresses (Tiger Orthopaedic SpineMaster, Royal Comfort Hotel Series, Dual-Sense Reversible)',
      'Specification cards detailing density (kg/m³), thickness, resilience, and applications',
      'Conversion mechanism: NO cart or checkout buttons. Clicking "Learn More" deep-links directly to WhatsApp with prefilled message'
    ],
    psychology: 'Custom foam and mattresses are high-consideration purchases with varied custom dimensions. WhatsApp removes checkout cart abandonment and allows instant custom sizing quotes.'
  },
  {
    title: '5. Factory Tour, Pictures & Video Simulation',
    role: 'Authenticity & Manufacturing Verification',
    conversionGoal: 'Differentiate Tiger Foam from brokers or traders by proving owned manufacturing facilities.',
    keyElements: [
      'Pristine imagery of CNC contour foam cutters and automated conveyor quilting lines',
      'Interactive Factory Video Player modal with high-definition tour clips and inspection details',
      'Key technical milestones: Automated slicing tolerance, temperature-regulated foam curing, vacuum compression line'
    ],
    psychology: 'Wholesale buyers need reassurance that the factory can deliver 500+ sheets or 100 mattresses on tight delivery schedules.'
  },
  {
    title: '6. When & How to Start (Client Onboarding Guide)',
    role: 'Objection-Handling & Clear Engagement Steps',
    conversionGoal: 'Demystify the transaction process for first-time buyers.',
    keyElements: [
      'Step 01: Consult on WhatsApp (Direct chat with factory engineer)',
      'Step 02: Custom Sizing & Density Specification',
      'Step 03: Direct Factory Production (Zero middleman markup)',
      'Step 04: Doorstep / Depot Safe Delivery'
    ],
    psychology: 'Eliminates friction. Visitors know exactly what happens next when they click the WhatsApp button.'
  },
  {
    title: '7. Social Proof & Attributable Reviews',
    role: 'Quantitative & Qualitative Trust Verification',
    conversionGoal: 'Demonstrate real-world satisfaction across furniture makers, hotel operators, and doctors.',
    keyElements: [
      'Verified corporate testimonials with full names, company roles, and project categories',
      'Zero fake generic reviews: specific mentions of sheet counts (4,000 sheets), hotel suite fits (85 suites), and spine clinic recommendations'
    ],
    psychology: 'Peer recommendations from respected industry leaders trigger social proof and lower procurement risk.'
  },
  {
    title: '8. Contact Us & WhatsApp Conversion Command Center',
    role: 'Final Decision Anchor',
    conversionGoal: 'Capture lingering questions through multiple channels (WhatsApp, Phone, Location Visit, Quick Message).',
    keyElements: [
      'Direct factory address and warehouse operating hours',
      'Quick interactive WhatsApp message builder (choose inquiry type: Wholesale, Custom Sizing, Price List, Factory Tour)',
      'Clean interactive contact form that forwards directly into a pre-filled WhatsApp thread'
    ],
    psychology: 'Ensures no visitor leaves without a clear avenue to ask their specific question.'
  }
];

export const WORDPRESS_MIGRATION_ROADMAP = [
  {
    step: 'Phase 1: Vercel Static/SPA Launch (Current Phase)',
    details: 'Fastest time-to-market. Zero database maintenance, instant load speed (<0.8s), global CDN edge delivery, 100/100 Mobile SEO performance.'
  },
  {
    step: 'Phase 2: WordPress Theme / Custom Gutenberg Block Architecture',
    details: 'When transitioning to WordPress, convert the 8 landing page sections into reusable ACF (Advanced Custom Fields) or Gutenberg blocks. Keep the WhatsApp direct deep-link buttons untouched.'
  },
  {
    step: 'Phase 3: SEO & URL Permanence',
    details: 'Preserve clean URLs, 301 redirects, Schema.org LocalBusiness and Product JSON-LD, OpenGraph images, and fast caching (WP Rocket/LiteSpeed) to maintain search rank.'
  }
];
