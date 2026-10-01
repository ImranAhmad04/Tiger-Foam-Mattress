import { ProductItem, ReviewItem, StepItem } from '../types';

export const WHATSAPP_NUMBER = '8801700000000'; // Default placeholder, easily customizable
export const WHATSAPP_DISPLAY = '+880 1700-000000';

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // Category 1: Industrial & Commercial Foam
  {
    id: 'foam-high-density-hd',
    name: 'HD Super Resilience Foam',
    category: 'foam',
    tagline: 'High-density polyurethane core for heavy-duty sofa sets and luxury upholstery',
    description: 'Engineered for exceptional elastic recovery, zero sagging, and long-lasting commercial durability. Perfect for furniture manufacturers, luxury seating, and acoustic insulation projects.',
    specs: [
      { label: 'Density Range', value: '28 kg/m³ – 45 kg/m³' },
      { label: 'Indentation Hardness', value: 'Medium-Firm to Hard' },
      { label: 'Thickness Options', value: '0.5 inch to 8 inches custom cut' },
      { label: 'Standard Sheet Size', value: '72" x 36", 75" x 36", 78" x 72"' }
    ],
    applications: ['Sofa & Couch Cushioning', 'Acoustic Wall Panels', 'Commercial Auto Upholstery', 'Packaging Shock Absorption'],
    image: '/src/assets/images/product_high_density_foam_1790842698672.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress team, I am interested in HD Super Resilience Foam. Could you please share wholesale pricing and sheet size availability?'
  },
  {
    id: 'foam-rebonded-bonded',
    name: 'Ultra-Bonded Ortho Core Foam',
    category: 'foam',
    tagline: 'High-compression bonded polyurethane foam for spine orthopaedic bases',
    description: 'Formulated with cross-linked compression technology. Delivers extreme firmness required for medical-grade orthopaedic mattresses, gym flooring underlays, and sound deadening.',
    specs: [
      { label: 'Density Range', value: '70 kg/m³ – 100 kg/m³' },
      { label: 'Firmness Rating', value: 'Extra Firm / Spine Support' },
      { label: 'Durability', value: '10+ Year Anti-Deformation' },
      { label: 'Eco Feature', value: 'Recycled Polyurethane Bond' }
    ],
    applications: ['Orthopaedic Mattress Cores', 'Gym & Martial Arts Mats', 'Heavy Equipment Padding', 'Studio Soundproofing'],
    image: '/src/assets/images/product_high_density_foam_1790842698672.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress team, I want to inquire about Ultra-Bonded Ortho Core Foam for bulk order/manufacturing.'
  },
  {
    id: 'foam-soft-comfort-sheet',
    name: 'Soft Touch Comfort Foam',
    category: 'foam',
    tagline: 'Plush open-cell foam for mattress toppers, headboards, and soft padding',
    description: 'Ultra-breathable micro-pore polyurethane that ensures immediate pressure dissipation and airflow ventilation. Prevents heat trap in sleeping solutions and provides cloud-like tactile comfort.',
    specs: [
      { label: 'Density Range', value: '20 kg/m³ – 26 kg/m³' },
      { label: 'Cell Structure', value: 'Open-Cell Breathable' },
      { label: 'Color Options', value: 'White / Charcoal Grey / Sky Blue' },
      { label: 'Fire Retardant', value: 'Available on OEM Request' }
    ],
    applications: ['Mattress Pillow-Tops', 'Office Chair Padding', 'Decorative Headboards', 'Pillows & Bolsters'],
    image: '/src/assets/images/product_high_density_foam_1790842698672.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress team, I would like to learn more about the Soft Touch Comfort Foam specifications and sample sheets.'
  },

  // Category 2: Mattresses
  {
    id: 'mattress-ortho-spine-master',
    name: 'Tiger Orthopaedic SpineMaster',
    category: 'mattress',
    tagline: 'Doctor-recommended dual-firmness orthopaedic spine alignment mattress',
    description: 'Features a high-density bonded foam foundation topped with ergonomic pressure-relief foam and breathable jacquard quilted fabric. Corrects spinal curvature while relieving lumbar stress during sleep.',
    specs: [
      { label: 'Support Core', value: 'High-Density Bonded Ortho Core' },
      { label: 'Comfort Layer', value: '2-inch Ergonomic Transition Foam' },
      { label: 'Fabric Cover', value: 'Anti-Bacterial Breathable Knitted Jacquard' },
      { label: 'Standard Dimensions', value: 'King (6x7 ft), Queen (5x7 ft), Semi-Double, Single' }
    ],
    applications: ['Chronic Back Pain Relief', 'Postural Spine Correction', 'Senior Living Comfort', 'Master Bedroom Luxury'],
    image: '/src/assets/images/product_orthopaedic_mattress_1790842718370.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress, I am inquiring about the Tiger Orthopaedic SpineMaster mattress. Please provide standard sizes and prices.'
  },
  {
    id: 'mattress-hotel-royal-cloud',
    name: 'Royal Comfort Hotel Series',
    category: 'mattress',
    tagline: '5-Star hospitality standard hybrid mattress with euro-top plush cushioning',
    description: 'Specially engineered for boutique hotels, resorts, and premium homeowners. Combines independent motion isolation with a plush euro-top that contours to every body contour.',
    specs: [
      { label: 'Construction', value: 'Hybrid Dual-Zone Comfort System' },
      { label: 'Euro-Top Layer', value: 'High-Resilience Super Soft Quilted Foam' },
      { label: 'Edge Support', value: 'Reinforced 360° Anti-Roll Perimeter' },
      { label: 'Warranty', value: '7-Year Factory Guarantee' }
    ],
    applications: ['Boutique Hotels & Resorts', 'Luxury Guest Suites', 'Premium Residential Homes', 'Commercial Bulk Orders'],
    image: '/src/assets/images/product_orthopaedic_mattress_1790842718370.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress, I would like to learn more about the Royal Comfort Hotel Series mattress for hotel/bulk purchase.'
  },
  {
    id: 'mattress-dual-firm-reversible',
    name: 'Tiger Dual-Sense Reversible Mattress',
    category: 'mattress',
    tagline: 'Two firmness feels in one mattress: firm ortho support on one side, plush comfort on the other',
    description: 'Designed for versatile sleeping preferences. Flip between a firm therapeutic side for spine alignment and a medium-soft plush surface for gentle cradling.',
    specs: [
      { label: 'Dual Surface', value: 'Side A: Medium-Soft | Side B: Firm Ortho' },
      { label: 'Core Thickness', value: '6 inches / 8 inches options' },
      { label: 'Outer Shell', value: 'Zippered Removable Washable Organic Cover' },
      { label: 'Air Circulation', value: '3D Border Mesh Ventilation' }
    ],
    applications: ['Family Bedrooms', 'Guest Rooms', 'Custom Built-in Bed Frames', 'Rental Apartments'],
    image: '/src/assets/images/product_orthopaedic_mattress_1790842718370.jpg',
    whatsappMessage: 'Hello Tiger Foam & Mattress, I want to inquire about the Tiger Dual-Sense Reversible Mattress and custom size options.'
  }
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Mahmudur Rahman',
    role: 'Managing Director',
    company: 'Apex Living Furniture Ltd.',
    rating: 5,
    review: 'We have sourced over 4,000 high-density foam sheets from Tiger Foam & Mattress for our premium living room sofa lines. Density consistency across batches is flawless with zero sag complaints from our showroom clients.',
    date: 'August 2026',
    projectType: 'Commercial Foam Wholesale'
  },
  {
    id: 'rev-2',
    name: 'Syed Tanvir Ahmed',
    role: 'Procurement Head',
    company: 'Grand Horizon Resort & Suites',
    rating: 5,
    review: 'Fitted 85 luxury suites with Tiger Hotel Series mattresses. Guests routinely praise sleep quality in reviews. Their team coordinated factory dispatch on short notice and handled delivery without a single snag.',
    date: 'July 2026',
    projectType: 'Hospitality Mattress Supply'
  },
  {
    id: 'rev-3',
    name: 'Farhana Hossain',
    role: 'Principal Interior Architect',
    company: 'Studio Form & Space',
    rating: 5,
    review: 'The WhatsApp inquiry process is remarkably fast. I sent custom cushion dimensions for a penthouse banquette and had precision-cut samples in 48 hours. Tiger Foam is my go-to manufacturing partner.',
    date: 'September 2026',
    projectType: 'Custom Foam Specification'
  },
  {
    id: 'rev-4',
    name: 'Dr. Anisul Karim',
    role: 'Orthopaedic Surgeon',
    company: 'Central Health Clinic',
    rating: 5,
    review: 'I personally tested the Tiger SpineMaster mattress for 6 months before recommending it to patients with lumbar disc issues. The bonded foam core provides genuine pelvic stability without unnecessary pressure points.',
    date: 'June 2026',
    projectType: 'Personal & Clinical Testing'
  }
];

export const HOW_TO_START_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Consult on WhatsApp',
    subtitle: 'Immediate Direct Dialogue',
    description: 'Tap any product or the WhatsApp button to chat directly with our factory sales engineer. Share your dimensions, foam density, or mattress quantity requirements.',
    actionText: 'Message Sales Team'
  },
  {
    number: '02',
    title: 'Custom Sizing & Sample',
    subtitle: 'Precision Specification',
    description: 'Whether you need custom sofa foam blocks cut to CNC tolerances or custom mattress dimensions (King, Queen, or custom length), we verify exact millimeter specs.',
    actionText: 'Send Measurements'
  },
  {
    number: '03',
    title: 'Factory Direct Production',
    subtitle: 'Zero Middleman Markups',
    description: 'Your order goes straight to our high-capacity curing chambers and computerized cutting lines. You receive wholesale factory pricing with guaranteed quality inspection.',
    actionText: 'Inspect Production'
  },
  {
    number: '04',
    title: 'Doorstep / Depot Delivery',
    subtitle: 'Safe Dispatch',
    description: 'Finished products are packaged in heavy-gauge protective transit covers and dispatched promptly to your factory, showroom, hotel, or home doorstep.',
    actionText: 'Track Order'
  }
];
