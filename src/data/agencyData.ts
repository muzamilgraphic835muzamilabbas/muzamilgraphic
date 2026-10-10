import { ServiceItem, PortfolioItem, ProcessStep, IndustryItem, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: 'Prime Web Works',
  tagline: 'Websites That Turn Your Visitors Into Customers.',
  domain: 'PrimeWebWorks.com',
  email: 'muzamilgraphic@gmail.com',
  whatsappNumber: '+923136898496',
  whatsappDisplay: '+92 313 6898496',
  phoneNumber: '+923136898496',
  phoneDisplay: '+92 313 6898496',
  primaryMarket: 'Pakistan',
  secondaryMarkets: ['Australia', 'United Kingdom', 'United States', 'Canada'],
  heroStatement: 'Custom Websites • WordPress • Shopify • Headless Development',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-website-development',
    title: 'Custom Website Development',
    shortDescription: 'Unique, professionally developed websites aligned with your brand, audience, and business objectives.',
    fullDescription: 'Every business has distinct operational requirements and customer expectations. We engineer bespoke web solutions from clean code foundations, ensuring total control over markup, performance, accessibility, and interactive features without the bloat of pre-made templates.',
    iconName: 'Code2',
    deliverables: [
      'Tailored semantic markup & responsive layouts',
      'Clean modular frontend architecture',
      'Interactive UI components & conversion funnels',
      'Cross-browser and mobile device verification',
      'Fast loading speeds & Core Web Vitals optimization'
    ],
    idealFor: 'Businesses needing a custom brand identity, distinct functional requirements, or high performance.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    turnaroundTime: '2 – 4 weeks depending on scope'
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    shortDescription: 'Flexible, easy-to-manage WordPress websites for businesses, service providers, and growing brands.',
    fullDescription: 'Power your content operations with a structured WordPress build. We build clean, modern WordPress themes with block-based editing or headless architectures, avoiding bloated multi-purpose themes to ensure fast load times and straightforward content management.',
    iconName: 'LayoutTemplate',
    deliverables: [
      'Clean, lightweight theme architecture',
      'Custom block layouts & easy editing workflow',
      'Security hardening & essential spam protection',
      'SEO-friendly hierarchy & XML sitemap setup',
      'Post-launch client content management walkthrough'
    ],
    idealFor: 'Content-driven businesses, service firms, and marketing teams needing frequent in-house publishing.',
    techStack: ['WordPress', 'Gutenberg Blocks', 'PHP', 'Tailwind/CSS', 'MySQL'],
    turnaroundTime: '2 – 3 weeks'
  },
  {
    id: 'shopify-development',
    title: 'Shopify Development',
    shortDescription: 'Modern online stores designed to present products clearly and create a smooth shopping experience.',
    fullDescription: 'Turn store visitors into paying customers. We design and build high-converting Shopify storefronts with intuitive product discovery, fast collection filters, frictionless mobile checkout, and secure payment gateway integrations tailored for both domestic and international sales.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Custom Liquid storefront customization',
      'Mobile-first catalog & product page layouts',
      'Payment gateways & local currency configuration',
      'Cart drawer & streamlined checkout flows',
      'Speed optimization for product imagery & scripts'
    ],
    idealFor: 'Direct-to-consumer (D2C) brands, retailers, and product merchants expanding locally or globally.',
    techStack: ['Shopify Liquid', 'Online Store 2.0', 'HTML5/Tailwind', 'Storefront API'],
    turnaroundTime: '2 – 4 weeks'
  },
  {
    id: 'headless-development',
    title: 'Headless Development',
    shortDescription: 'Modern frontend experiences using suitable headless architectures and content management systems when the project requires them.',
    fullDescription: 'For brands that demand ultimate speed, flexibility, and omnichannel delivery, headless architecture decouples the frontend presentation layer from backend content management. This yields sub-second page transitions, robust security, and seamless API integrations.',
    iconName: 'Cpu',
    deliverables: [
      'Decoupled frontend architecture with instant page loads',
      'Integration with headless CMS (Sanity, Strapi, Contentful)',
      'Edge deployment & serverless API routing',
      'Ultra-secure static/SSR generation',
      'Custom webhooks for instant content rebuilds'
    ],
    idealFor: 'Tech-enabled startups, growing scale-ups, and brands with multichannel distribution requirements.',
    techStack: ['React / Next.js', 'TypeScript', 'Headless CMS', 'GraphQL / REST APIs', 'Vercel / Cloudflare'],
    turnaroundTime: '3 – 5 weeks'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDescription: 'Focused landing pages that communicate your offer clearly and encourage visitors to take action.',
    fullDescription: 'High-intent marketing campaigns require laser-focused landing pages. We build single-purpose pages with high visual impact, concise value messaging, intuitive visual hierarchy, and fast loading speeds to maximize conversion rates from paid search and social campaigns.',
    iconName: 'Target',
    deliverables: [
      'Conversion-centered visual hierarchy & copy arrangement',
      'High-impact hero section & trust proofing',
      'Frictionless lead capture forms & event tracking setup',
      'Sub-second mobile loading speeds',
      'A/B test ready structural foundations'
    ],
    idealFor: 'Product launches, marketing campaigns, service promotions, and lead generation campaigns.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Form Analytics Hooks'],
    turnaroundTime: '4 – 7 business days'
  },
  {
    id: 'business-corporate-websites',
    title: 'Business Websites',
    shortDescription: 'Professional websites that explain your services, establish credibility, and make it easy for customers to contact you.',
    fullDescription: 'Your website is the digital front door of your enterprise. We design credible corporate platforms that communicate your capabilities, outline your team and heritage, showcase your track record, and make inquiry generation effortless for enterprise prospects.',
    iconName: 'Building2',
    deliverables: [
      'Multi-page corporate site architecture',
      'Service breakdowns & interactive case study grids',
      'Executive leadership & company profile sections',
      'Inquiry capture forms with routing logic',
      'Multi-language or multi-region foundation readiness'
    ],
    idealFor: 'Established companies, consultancies, engineering firms, financial services, and institutions.',
    techStack: ['React / TypeScript', 'Tailwind CSS', 'Clean Semantic HTML5', 'Node.js'],
    turnaroundTime: '3 – 4 weeks'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDescription: 'Transform outdated websites into cleaner, more modern, mobile-friendly digital experiences.',
    fullDescription: 'If your existing website looks dated, loads slowly, or fails to generate inquiries, a strategic redesign revives your digital presence. We audit your current structure, preserve search equity, and rebuild your UI with modern aesthetics and responsive precision.',
    iconName: 'RefreshCw',
    deliverables: [
      'Comprehensive UX audit of existing digital assets',
      'Information architecture overhaul & page decluttering',
      'Modern dark/light typography & visual refresh',
      'SEO URL preservation & 301 redirect map planning',
      'Mobile responsiveness overhaul across all viewports'
    ],
    idealFor: 'Businesses with legacy sites, dated visual aesthetics, poor mobile usability, or lagging conversions.',
    techStack: ['Design Systems', 'Modern Web Stack', 'Responsive Breakpoint Framework'],
    turnaroundTime: '2 – 4 weeks'
  },
  {
    id: 'speed-and-optimization',
    title: 'Speed and Optimization',
    shortDescription: 'Improve loading performance, usability, technical structure, and the overall browsing experience.',
    fullDescription: 'Slow websites bleed revenue and rank poorly in search engines. We inspect your assets, scripts, server configurations, and rendering bottlenecks to achieve blistering Core Web Vitals scores and delightful user interactions on cellular networks.',
    iconName: 'Zap',
    deliverables: [
      'Core Web Vitals audit (LCP, FID/INP, CLS)',
      'Asset compression, responsive images & next-gen formats',
      'CSS/JS tree-shaking and minification',
      'Render-blocking script elimination & lazy-loading',
      'Pre- and post-optimization benchmark documentation'
    ],
    idealFor: 'Slow-loading websites, e-commerce stores with drop-offs, and sites failing Core Web Vitals tests.',
    techStack: ['Lighthouse Auditing', 'Image Optimization', 'Bundle Analyzer', 'CDN Caching'],
    turnaroundTime: '3 – 7 business days'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Custom-Built Experiences',
    description: 'Bespoke layouts tailored to your unique market positioning and business objectives.',
    iconName: 'Layers'
  },
  {
    title: 'Responsive by Design',
    description: 'Tested across mobile, tablet, laptop, and ultra-wide screens for flawless rendering.',
    iconName: 'Smartphone'
  },
  {
    title: 'Performance-Focused',
    description: 'Engineered for instant visual readiness, fast Core Web Vitals, and efficient asset delivery.',
    iconName: 'Gauge'
  },
  {
    title: 'Built Around Your Goals',
    description: 'Designed to clarify your offering, build genuine credibility, and prompt user action.',
    iconName: 'Compass'
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: 'Strategy Before Design',
    description: 'We analyze your target market, competitors, and conversion pathways before writing code or choosing aesthetics.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Designed for Every Screen',
    description: 'From budget smartphones on 3G to 4K displays, layouts fluidly adapt with accessible typography and touch targets.',
    iconName: 'MonitorSmartphone'
  },
  {
    title: 'Performance and Usability',
    description: 'Clean codebases without unnecessary plugin bloat guarantee rapid page loads and high user retention.',
    iconName: 'Zap'
  },
  {
    title: 'Built Around Your Brand',
    description: 'Original visual identities and purposeful layout hierarchies that reflect your genuine organizational strengths.',
    iconName: 'Palette'
  },
  {
    title: 'Clear Communication',
    description: 'Transparent timelines, structured review phases, and direct contact with technical leads throughout development.',
    iconName: 'MessageSquareText'
  },
  {
    title: 'Growth-Ready Foundations',
    description: 'Structured, maintainable code that scales smoothly as your services expand, traffic spikes, or new markets open.',
    iconName: 'TrendingUp'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'apex-venture-partners',
    title: 'Apex Capital Partners',
    subtitle: 'Institutional Private Equity & Advisory Platform',
    category: 'Corporate',
    typeBadge: 'Concept Project',
    description: 'A confident, restrained digital presence for an institutional advisory firm. Designed with structured portfolio tables, executive leadership bios, and an encrypted deal-inquiry flow.',
    clientNeed: 'Establish credibility for institutional stakeholders, showcase past investments, and provide private inquiry submission.',
    solution: 'Engineered a lightning-fast static-first architecture with refined typographic hierarchy, dark corporate aesthetic, and clear navigation paths.',
    servicesProvided: ['Custom Web Development', 'Information Architecture', 'Speed Optimization'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    previewType: 'corporate',
    accentColor: '#38BDF8',
    highlights: ['99/100 Lighthouse Performance', 'Strict WCAG AA Color Contrast', '0.4s Largest Contentful Paint']
  },
  {
    id: 'lumina-lifestyle',
    title: 'Lumina Minimal Goods',
    subtitle: 'Direct-to-Consumer Ergonomic Living Brand',
    category: 'E-commerce',
    typeBadge: 'Concept Project',
    description: 'An understated e-commerce experience designed for intentional products. Features sticky image galleries, dynamic variant selection, and a distraction-free checkout funnel.',
    clientNeed: 'Transition an artisanal brand into a high-converting digital storefront with local and international currency support.',
    solution: 'Constructed an Online Store 2.0 template featuring instantaneous collection filtering, micro-animations, and optimized mobile payment gateways.',
    servicesProvided: ['Shopify Development', 'Mobile UI/UX Design', 'Payment Gateway Integration'],
    techStack: ['Shopify Liquid', 'Tailwind CSS', 'JavaScript', 'Storefront API'],
    previewType: 'ecommerce',
    accentColor: '#8B5CF6',
    highlights: ['Frictionless Slide-Out Cart', 'Instant Currency Converter', 'Optimized WebP Image Pipeline']
  },
  {
    id: 'vanguard-legal-advisors',
    title: 'Vanguard Legal Advisors',
    subtitle: 'Commercial Law & Cross-Border Dispute Practice',
    category: 'Service',
    typeBadge: 'Concept Project',
    description: 'A formal, authoritative practice website for legal practitioners. Features interactive practice area guides, case briefs, and direct attorney consultation scheduling.',
    clientNeed: 'Clarify complex service specialties and establish reassuring authority for corporate clients seeking cross-border representation.',
    solution: 'Designed an elegant editorial layout with search-indexed practice articles, lawyer profiles, and direct calendar consultation requests.',
    servicesProvided: ['WordPress Development', 'Content Strategy', 'Accessibility Optimization'],
    techStack: ['WordPress', 'Gutenberg Blocks', 'Tailwind', 'PHP'],
    previewType: 'service',
    accentColor: '#38BDF8',
    highlights: ['Accessible Typography Hierarchy', 'Secure Consultation Form', 'Schema.org LegalService Integration']
  },
  {
    id: 'artisan-hearth-bistro',
    title: 'Artisan Hearth Bistro',
    subtitle: 'Modern Gastronomy & Reserve Table Portal',
    category: 'Restaurant',
    typeBadge: 'Concept Project',
    description: 'An atmospheric culinary showcase highlighting seasonal farm-to-table menus, chef features, curated wine lists, and direct online reservation integration.',
    clientNeed: 'Replace an unreadable PDF menu with an engaging, mobile-friendly digital menu and seamless reservation interface.',
    solution: 'Crafted a rich sensory dark-mode website featuring categorized seasonal dishes with dietary indicators and one-tap table reservation.',
    servicesProvided: ['Custom Web Design', 'Mobile-First Layout', 'Local SEO Architecture'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    previewType: 'restaurant',
    accentColor: '#F59E0B',
    highlights: ['Mobile-Optimized Dynamic Menu', 'Instant Table Reservation CTA', 'Location & Hours Rich Snippets']
  },
  {
    id: 'metricsflow-cloud',
    title: 'MetricsFlow Analytics',
    subtitle: 'Real-Time Telemetry & Data Infrastructure SaaS',
    category: 'SaaS',
    typeBadge: 'Concept Project',
    description: 'A high-converting SaaS landing page built for technical buyers. Showcases live interactive product mockups, transparent pricing tiers, and interactive developer documentation snippets.',
    clientNeed: 'Demonstrate complex technical value proposition within 5 seconds of page arrival to convert paid developer traffic.',
    solution: 'Built an interactive feature playground with tabbed code previews, interactive ROI metrics calculators, and rapid trial signups.',
    servicesProvided: ['Landing Page Design', 'Interactive UI Components', 'Headless Setup'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    previewType: 'saas',
    accentColor: '#10B981',
    highlights: ['Interactive Product Walkthrough', 'Sub-second Load Times', 'Direct Integration Badges']
  },
  {
    id: 'aerocool-climate-systems',
    title: 'AeroCool Engineering',
    subtitle: 'Commercial HVAC & Industrial Air Systems',
    category: 'Local Business',
    typeBadge: 'Concept Project',
    description: 'A high-trust local engineering firm website serving commercial facilities. Features immediate emergency repair dispatch buttons, project case studies, and maintenance booking.',
    clientNeed: 'Capture urgent service calls and win competitive commercial installation contracts in the regional metropolitan area.',
    solution: 'Deployed a responsive, geo-targeted web platform with click-to-call emergency hotlines, quotation calculators, and warranty trust badges.',
    servicesProvided: ['Business Website', 'Local SEO Structure', 'Maintenance Form'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    previewType: 'local',
    accentColor: '#0EA5E9',
    highlights: ['One-Tap WhatsApp & Phone Dialing', 'Commercial Service Area Map', 'Rapid Estimate Request Flow']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    subtitle: 'Understanding Your Business & Requirements',
    description: 'We learn about your business, target audience, objectives, requirements, and project scope before proposing a solution.',
    duration: 'Week 1',
    activities: [
      'Initial requirements workshop & business goal alignment',
      'Target audience profiling (domestic & international)',
      'Competitor & market landscape analysis',
      'Technical architecture scoping (Custom, WordPress, Shopify)'
    ],
    deliverables: [
      'Project scope summary & sitemap document',
      'Technical specification sheet',
      'Milestone schedule & agreed delivery timeline'
    ]
  },
  {
    step: 2,
    title: 'Design',
    subtitle: 'Visual Direction & Interface Prototyping',
    description: 'We develop the visual direction, page structure, user journey, and responsive interface tailored to your audience.',
    duration: 'Week 1 – 2',
    activities: [
      'Information architecture & user pathway mapping',
      'Wireframing primary screens and conversion funnels',
      'Creating visual design system (typography, colors, UI cards)',
      'Interactive prototype review and iterative feedback'
    ],
    deliverables: [
      'Complete desktop & mobile UI design system',
      'Conversion-optimized layout blueprints',
      'Client-approved design direction signoff'
    ]
  },
  {
    step: 3,
    title: 'Develop',
    subtitle: 'Clean Implementation & Responsive Testing',
    description: 'We build the website, implement the required functionality, and test it rigorously across supported devices.',
    duration: 'Week 2 – 4',
    activities: [
      'Writing semantic, accessible frontend and backend code',
      'Integrating content management systems & APIs',
      'Multi-device responsiveness testing (iOS, Android, Windows, Mac)',
      'Core Web Vitals tuning & performance profiling'
    ],
    deliverables: [
      'Staging environment access for live client preview',
      'Verified responsive layouts across all standard viewports',
      'Completed functional integrations & form testing'
    ]
  },
  {
    step: 4,
    title: 'Launch and Support',
    subtitle: 'Pre-flight Verification & Ongoing Care',
    description: 'We complete final checks, assist with deployment, and discuss ongoing maintenance or future improvements.',
    duration: 'Final Phase & Ongoing',
    activities: [
      'DNS configuration, SSL certificate & domain linking',
      'Search engine indexing setup & XML sitemap submission',
      'Client administration training & documentation walkthrough',
      'Post-launch performance monitoring & maintenance arrangements'
    ],
    deliverables: [
      'Live production deployment on your custom domain',
      'Complete handover documentation & backup files',
      'Ongoing technical maintenance support plan'
    ]
  }
];

export const TARGET_INDUSTRIES: IndustryItem[] = [
  {
    name: 'Local Businesses',
    description: 'Clinics, repair specialists, salons, and retail shops looking to capture nearby customer inquiries and calls.',
    iconName: 'MapPin',
    keyFeature: 'Google Business Maps integration, one-tap calling & local SEO'
  },
  {
    name: 'Professional Services',
    description: 'Law firms, accounting practices, consultants, and financial advisors requiring authoritative credibility.',
    iconName: 'Briefcase',
    keyFeature: 'Trust-building partner bios, case studies & consultation booking'
  },
  {
    name: 'Restaurants & Hospitality',
    description: 'Cafes, fine dining bistros, and boutique hotels welcoming diners and guests with mouth-watering layouts.',
    iconName: 'Utensils',
    keyFeature: 'Mobile-friendly interactive menus & online reservation systems'
  },
  {
    name: 'E-commerce Brands',
    description: 'D2C apparel, lifestyle goods, electronics, and specialty product merchants targeting national and global sales.',
    iconName: 'ShoppingBag',
    keyFeature: 'Shopify / WooCommerce storefronts, fast checkout & inventory sync'
  },
  {
    name: 'Real Estate Businesses',
    description: 'Property agencies, commercial brokerages, and developers showcasing developments and residential listings.',
    iconName: 'Building',
    keyFeature: 'Filterable property cards, high-res visual tours & inquiry forms'
  },
  {
    name: 'Construction & Architecture',
    description: 'General contractors, interior designers, and architects displaying completed project portfolios.',
    iconName: 'Hammer',
    keyFeature: 'High-definition project galleries, material specs & quote requests'
  },
  {
    name: 'Solar & Renewable Energy',
    description: 'Solar installers, commercial energy firms, and cleantech providers generating qualified installation leads.',
    iconName: 'Sun',
    keyFeature: 'Solar savings calculators, commercial client case briefs & tier audits'
  },
  {
    name: 'Automotive Businesses',
    description: 'Dealerships, vehicle customizers, auto repair facilities, and parts distributors.',
    iconName: 'Car',
    keyFeature: 'Service menu breakdowns, booking forms & vehicle showcase lists'
  },
  {
    name: 'Startups & SaaS Companies',
    description: 'Software-as-a-service platforms, mobile app developers, and tech ventures launching new products.',
    iconName: 'Rocket',
    keyFeature: 'High-converting landing pages, interactive product demos & API docs'
  },
  {
    name: 'Agencies & Consultants',
    description: 'Marketing agencies, creative studios, and management consultancies presenting client work.',
    iconName: 'Users',
    keyFeature: 'Case study storytelling, service matrices & discovery scheduling'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'types-of-websites',
    question: 'What types of websites do you build?',
    answer: 'We develop business websites, WordPress websites, Shopify stores, landing pages, and custom web experiences based on project requirements. Whether you need a streamlined single-page presentation or a comprehensive corporate platform, our work is customized to your operational goals.'
  },
  {
    id: 'mobile-compatibility',
    question: 'Will my website work on mobile devices?',
    answer: 'Yes. Responsive design is a core requirement, and every website is rigorously tested across common screen sizes and supported browsers—including smartphones, tablets, laptops, and ultra-wide desktop monitors.'
  },
  {
    id: 'redesign-capability',
    question: 'Can you redesign my existing website?',
    answer: 'Yes. Existing websites can be reviewed for visual design, usability, content structure, performance, and functionality before recommending improvements. We ensure your current search engine rankings and content equity are protected during the transition.'
  },
  {
    id: 'ecommerce-support',
    question: 'Do you provide e-commerce development?',
    answer: 'Yes. E-commerce solutions can be built using Shopify or another suitable platform depending on the project\'s requirements, including product catalog setup, secure payment gateway integrations, and mobile checkout optimization.'
  },
  {
    id: 'project-timeline',
    question: 'How long does a website project take?',
    answer: 'Timelines depend on the number of pages, design complexity, functionality, content readiness, and feedback schedule. Most focused landing pages are completed in 1 to 2 weeks, while full business or e-commerce websites typically take 3 to 5 weeks. We provide a project-specific estimate after reviewing requirements.'
  },
  {
    id: 'website-cost',
    question: 'How much does a website cost?',
    answer: 'Pricing depends on project scope, platform, features, content, integrations, and maintenance requirements. We invite visitors to request a tailored quote based on their specific scope rather than inventing fixed prices, ensuring you only pay for what your business genuinely needs.'
  },
  {
    id: 'content-updates',
    question: 'Will I be able to update my website?',
    answer: 'Where the selected platform supports it (such as WordPress, Shopify, or headless CMS), the website will include an appropriate content management system and basic guidance for managing text, images, and blog posts without touching code.'
  },
  {
    id: 'ongoing-maintenance',
    question: 'Do you provide website maintenance?',
    answer: 'Maintenance and support can be offered according to an agreed scope and service arrangement, including core updates, security monitoring, regular backups, and technical support.'
  },
  {
    id: 'how-to-start',
    question: 'How do I get started?',
    answer: 'Complete the project inquiry form with your requirements so the team can review the project and discuss the next steps, or reach out directly via WhatsApp for an initial discussion.'
  }
];
