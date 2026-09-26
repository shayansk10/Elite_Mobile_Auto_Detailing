import {
  ServiceItem,
  BeforeAfterComparison,
  ReviewItem,
  FaqItem
} from '../types';

export const BUSINESS_INFO = {
  name: 'Elite Mobile Auto Detailing',
  tagline: 'Your vehicle deserves showroom-level treatment, wherever you are.',
  subheadline: 'Professional mobile auto detailing delivered directly to your location. We bring the shine, protection, and convenience to you.',
  trustLine: 'Mobile Service • Professional Products • Attention to Detail',
  phone: '+18322840769',
  rawPhone: '8322840769',
  displayPhone: '(832) 284-0769',
  telLink: 'tel:+18322840769',
  smsLink: 'sms:+18322840769',
  email: 'elitemobileautodetailing8@gmail.com',
  primaryCity: '[PRIMARY CITY]',
  serviceAreas: [
    '[PRIMARY CITY]',
    '[SERVICE AREA 1]',
    '[SERVICE AREA 2]',
    '[SERVICE AREA 3]',
    '[SERVICE AREA 4]'
  ],
  workingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM | Sunday: By Appointment'
};

// 10 Detailed Services requested by user
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'full-interior-exterior',
    name: 'Full Interior + Exterior Detail',
    tagline: 'Complete comprehensive transformation inside and out',
    category: 'interior',
    description: 'Our most comprehensive dual-care package. Thorough exterior decontamination, gentle hand foam wash, wheels and arches, combined with meticulous interior steam cleaning, leather restoration, and surface protection.',
    benefits: [
      'Showroom-level exterior paint gloss & protective sealant',
      'Deep steam extraction of carpet fibers and seat fabric',
      'Leather conditioned with matte factory finish (non-greasy)',
      'Door jambs, boot shuts, and emblems meticulously detailed'
    ],
    duration: '3.5 – 5 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Sparkles',
    image: '/assets/hero_car_detailing_1790092891302.jpg',
    popular: true
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    tagline: 'Multi-stage machine compounding to remove swirls & scratches',
    category: 'paint',
    description: 'Precision dual-action machine polishing designed to eliminate wash marring, swirl marks, light scratches, water spots, and paint oxidation to reveal authentic, deep mirror-like optical clarity.',
    benefits: [
      'Eliminates 75%–90%+ of visible paint swirls and defects',
      'Restores true deep color depth and crystalline reflection',
      'Essential foundational preparation prior to ceramic coatings',
      'Performed with digital paint depth gauges and specialized lighting'
    ],
    duration: '5 – 8+ Hours',
    startingPrice: 'Starting at $___',
    icon: 'Disc',
    image: '/assets/paint_correction_1790092931775.jpg',
    popular: true
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    tagline: 'Long-lasting nano-quartz hydrophobic armor & deep wet gloss',
    category: 'coatings',
    description: 'Professional-grade nano-ceramic quartz coating that bonds directly with your vehicle clear coat. Delivers intense chemical resistance, self-cleaning hydrophobic water beading, and UV oxidation protection.',
    benefits: [
      'Semi-permanent ceramic bonding for extended durability',
      'Hyper-hydrophobic surface makes regular maintenance effortless',
      'Guards against bird droppings, road salt, bug splatter, and UV rays',
      'Deep, liquid-wet gloss finish that outlasts standard waxes by years'
    ],
    duration: '1 – 2 Days (Cure time included)',
    startingPrice: 'Starting at $___',
    icon: 'ShieldCheck',
    image: '/assets/ceramic_water_bead_1790092905799.jpg',
    popular: true
  },
  {
    id: 'full-interior-detailing',
    name: 'Full Interior Detailing',
    tagline: 'Deep sanitization, steam extraction & leather rejuvenation',
    category: 'interior',
    description: 'An exhaustive top-to-bottom reset of your cabin. Every vent, cup holder, button, seam, and footwell is purged of grime, followed by hot water extraction and protective UV conditioning.',
    benefits: [
      'High-temperature steam sanitization kills bacteria and odors',
      'Pet hair and embedded allergen removal from carpets',
      'UV protective matte dressing on dashboard and door cards',
      'Streak-free interior crystal window and touchscreen cleaning'
    ],
    duration: '2.5 – 4 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Layers',
    image: '/assets/interior_detail_1790092918124.jpg'
  },
  {
    id: 'exterior-detailing',
    name: 'Exterior Hand Detailing',
    tagline: 'Two-bucket hand wash, decontamination & hydrophobic seal',
    category: 'exterior',
    description: 'Safe, scratch-free hand wash process utilizing a dense snow foam pre-soak, pH-neutral car wash shampoo, iron fallout chemical decontamination, wheel deep-clean, and synthetic spray sealant.',
    benefits: [
      'Two-bucket scratch-prevention wash method with grit guards',
      'Wheel barrels, calipers, and tire dress treatment',
      'Iron chemical decontamination removes brake dust particles',
      'Glass cleaned inside and out with hydrophobic windshield treatment'
    ],
    duration: '1.5 – 2.5 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Droplets',
    image: '/assets/foam_cannon_wash_1790092990155.jpg'
  },
  {
    id: 'paint-enhancement',
    name: 'Paint Enhancement (Single-Stage Polish)',
    tagline: 'Fast gloss boost and light oxidation removal',
    category: 'paint',
    description: 'A 1-step machine polish designed for vehicles with mild paint dullness that need a tremendous gloss boost and light swirl reduction without the cost or time of full multi-stage correction.',
    benefits: [
      'Significantly amplifies gloss and surface slickness',
      'Removes minor haze and light superficial wash marks',
      'Finished with a 6-month protective hydrophobic sealant',
      'Cost-effective option for lease returns and pre-sale prep'
    ],
    duration: '3 – 4.5 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Zap',
    image: '/assets/paint_correction_1790092931775.jpg'
  },
  {
    id: 'maintenance-details',
    name: 'Maintenance Details',
    tagline: 'Recurring scheduled upkeep for previously detailed vehicles',
    category: 'exterior',
    description: 'Exclusive recurring service tailored for vehicles that have undergone our primary details or ceramic coatings. Keeps your vehicle consistently spotless, protected, and feeling fresh.',
    benefits: [
      'Maintains ceramic coating longevity and water-beading performance',
      'Gentle maintenance wash and interior touch-up vacuum',
      'Flexible weekly, bi-weekly, or monthly mobile visit schedules',
      'Priority scheduling for registered regular clients'
    ],
    duration: '1.5 – 2 Hours',
    startingPrice: 'Starting at $___',
    icon: 'RefreshCw',
    image: '/assets/hero_car_detailing_1790092891302.jpg'
  },
  {
    id: 'deep-interior-cleaning',
    name: 'Deep Interior Cleaning',
    tagline: 'Focused target cleaning for high-traffic cabins and stains',
    category: 'interior',
    description: 'Specialized intensive treatment targeting heavily soiled floor mats, spilled drinks, food residue, and stubborn upholstery stains using commercial carpet extraction machines and enzyme formulas.',
    benefits: [
      'Deep stain breakdown with pH-optimized enzyme cleaners',
      'Hot water extraction leaves upholstery clean and quick-drying',
      'Eliminates smoke and organic odors at the source',
      'Sanitizes seat belt webbing and high-touch contact points'
    ],
    duration: '2 – 3.5 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Flame',
    image: '/assets/interior_detail_1790092918124.jpg'
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight Restoration',
    tagline: 'Restore clouded, yellowed headlights to crystal clarity',
    category: 'exterior',
    description: 'Professional multi-step wet sanding, compound polishing, and UV ceramic clear coat sealing to restore oxidized, cloudy headlight lenses back to optical factory clarity and nighttime safety.',
    benefits: [
      'Dramatically improves nighttime road visibility and beam throw',
      'Restores the clean modern aesthetic of your front end',
      'Sealed with permanent UV ceramic barrier to prevent yellowing',
      'Fraction of the cost of replacing full headlight assemblies'
    ],
    duration: '1 – 1.5 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Eye',
    image: '/assets/headlight_restore_1790093002153.jpg'
  },
  {
    id: 'pet-hair-removal',
    name: 'Pet Hair Removal',
    tagline: 'Specialized rubber blades and static extraction tools',
    category: 'interior',
    description: 'Dedicated add-on or standalone service for animal lovers. We utilize specialized mechanical tools, pumice stone rubbers, and air purges to dislodge deeply woven dog and cat hairs from carpets and fabric.',
    benefits: [
      'Removes stubborn embedded pet hair from woven automotive carpet',
      'Neutralizes pet dander and lingering animal odors',
      'Gentle on factory fabric weaves and seat stitching',
      'Leaves your vehicle allergen-reduced and passenger-ready'
    ],
    duration: '1 – 2 Hours',
    startingPrice: 'Starting at $___',
    icon: 'Smile',
    image: '/assets/interior_detail_1790092918124.jpg'
  }
];

// Why Elite Key Points
export const WHY_ELITE_POINTS = [
  {
    id: 'we-come-to-you',
    title: 'We Come To You',
    subtitle: 'Mobile Convenience',
    description: 'Skip the line, traffic, and dealership waiting rooms. We arrive directly at your home driveway, executive office parking, or private garage with full equipment.',
    icon: 'MapPin'
  },
  {
    id: 'professional-results',
    title: 'Professional-Level Results',
    subtitle: 'Commercial Machinery',
    description: 'We utilize industrial steam extractors, dual-action rotary polishers, and digital paint depth inspection gauges that standard car washes simply do not possess.',
    icon: 'Award'
  },
  {
    id: 'attention-to-detail',
    title: 'Attention To Detail',
    subtitle: 'Meticulous Care',
    description: 'We treat every vehicle like our own. From intricate air vent fins to wheel lug nut crevices and door jamb channels, no corner is ever rushed or overlooked.',
    icon: 'Crosshair'
  },
  {
    id: 'premium-products',
    title: 'Premium Products',
    subtitle: 'Gentle & Protective',
    description: 'We only apply pH-neutral soaps, non-acidic wheel cleaners, genuine leather conditioners, and pro-grade ceramic nano-coatings that protect your investment.',
    icon: 'Shield'
  },
  {
    id: 'interior-exterior',
    title: 'Interior & Exterior Expertise',
    subtitle: 'Holistic Craftsmanship',
    description: 'Whether dealing with stubborn carpet stains and delicate leather or correcting scratch swirls on soft clear coats, we have the technical experience to execute safely.',
    icon: 'Layers'
  },
  {
    id: 'personalized-service',
    title: 'Personalized Service',
    subtitle: 'Tailored Solutions',
    description: 'No two vehicles have the same history. We assess your car paint condition, lifestyle needs, and budget to recommend the exact right detailing program.',
    icon: 'UserCheck'
  }
];

// How It Works Steps
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'BOOK',
    tagline: 'Choose your service and request an appointment',
    description: 'Select your preferred detailing service and provide your vehicle details through our simple booking form.'
  },
  {
    step: '02',
    title: 'WE COME TO YOU',
    tagline: 'Our mobile team arrives at your location',
    description: 'Our mobile detailing vehicle arrives fully stocked with professional tools, premium supplies, and expert technicians right to your home or office.'
  },
  {
    step: '03',
    title: 'ENJOY THE FINISH',
    tagline: 'Your vehicle is restored to showroom glory',
    description: 'Inspect your gleaming, fresh, deeply protected vehicle with our team. Enjoy the unmistakable feeling of driving a car you are genuinely proud of.'
  }
];

// Before / After Comparisons
export const BEFORE_AFTER_SHOWCASES: BeforeAfterComparison[] = [
  {
    id: 'elite-transformation',
    title: 'Precision Mobile Detailing Transformation',
    category: 'Detailing',
    description: 'Notice the immediate difference between the swirled, road-worn, dusty finish on the left versus the deep mirror gloss clarity and showroom reflections on the right.',
    beforeLabel: 'BEFORE: NEEDS DETAILING',
    afterLabel: 'AFTER: ELITE FINISH',
    beforeImage: '/assets/audi_before_bmw_style_1790187314024.jpg',
    afterImage: '/assets/hero_car_detailing_1790092891302.jpg'
  }
];

// Customer Reviews (Clean, editable real-style customer reviews)
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Adam George',
    initials: 'AG',
    verified: false,
    rating: 5,
    reviewText: 'Excellent service from start to finish. They came directly to my driveway, took their time with the vehicle, and the interior and exterior both came out looking fantastic. Very professional and easy to work with.',
    serviceType: 'Full Interior + Exterior Detail'
  },
  {
    id: 'rev-2',
    name: 'Sarah M.',
    initials: 'SM',
    verified: false,
    rating: 5,
    reviewText: 'Super convenient having them come out to the driveway while I was working from home. The interior had coffee spills and dust on the dash from daily commuting, and they got everything completely clean with no chemical odor.',
    vehicleModel: 'Toyota RAV4',
    serviceType: 'Full Interior Steam Detail'
  },
  {
    id: 'rev-3',
    name: 'Marcus T.',
    initials: 'MT',
    verified: false,
    rating: 5,
    reviewText: 'Booked an exterior detail before a weekend trip. Water spots and road grime were completely gone and the finish was super smooth to the touch. Professional communication and honest, quality service.',
    vehicleModel: 'BMW 3 Series',
    serviceType: 'Exterior Decontamination & Seal'
  }
];

// FAQs requested in prompt
export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a detail take?',
    answer: 'Interior Detailing typically takes approximately 1–1.5 hours, while Exterior Detailing typically takes approximately 1–1.5 hours. Custom Detailing varies depending on the specific services requested.',
    category: 'Duration'
  },
  {
    id: 'faq-2',
    question: 'Do I need to provide water or power?',
    answer: 'Yes. To provide the best possible service at your location, customers are asked to provide access to a standard water source and a standard electrical outlet when available. This helps our team complete your detail efficiently and deliver the best results.',
    category: 'Logistics'
  },
  {
    id: 'faq-3',
    question: 'What is included in an interior detail?',
    answer: 'Our Interior Detailing includes vacuuming all carpets and seats, wiping down all interior surfaces, dressing interior surfaces, leather conditioning, shampooing all stains, pet hair removal, and cleaning all interior windows.',
    category: 'Services'
  },
  {
    id: 'faq-4',
    question: 'What is included in an exterior detail?',
    answer: 'Our Exterior Detailing includes a pressure washer rinse, foam soap hand wash, buffer wax, tire degrease, dressing wheels, tires, and rims, cleaning all door jambs and trunk sealants, and drying with a clean microfiber cloth.',
    category: 'Services'
  },
  {
    id: 'faq-5',
    question: 'How often should I detail my vehicle?',
    answer: 'For optimal preservation of clear coat and interior leather, we recommend a comprehensive detail every 4 to 6 months, complemented by routine maintenance washes every 2 to 4 weeks.',
    category: 'Care'
  },
  {
    id: 'faq-6',
    question: 'What areas do you service?',
    answer: 'Elite Mobile Auto Detailing provides mobile detailing services across the United States. Enter your ZIP code in our service availability checker to see if mobile service is available at your location.',
    category: 'Coverage'
  },
  {
    id: 'faq-7',
    question: 'How do I book an appointment?',
    answer: 'Simply fill out our online quote and booking form with your vehicle details and service preferences. Submit your request and our team will review your information and follow up with the next steps.',
    category: 'Booking'
  }
];
