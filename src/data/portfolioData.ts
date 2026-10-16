import { Project, SkillCategory, ExperienceItem, ServiceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Bikila',
  brandName: 'Bikila Web',
  title: 'Full-Stack Web Developer & Computer Science',
  tagline: 'Building High-Performance Web Applications That Scale',
  bio: 'Specializing in robust full-stack Computer Science & Web developer, modern reactive user interfaces, and reliable cloud-deployed systems. Experienced in architecting production platforms from idea to deployment with modern TypeScript, React, and backend infrastructure.',
  email: 'dnbi1221@gmail.com',
  location: 'Addis Ababa / Remote Worldwide',
  availability: 'Available for freelance, contract, & full-time roles',
  responseTime: 'Within 24 hours',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  heroWorkspace: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    telegram: 'https://t.me',
    twitter: 'https://twitter.com',
    email: 'mailto:dnbi1221@gmail.com'
  }
};

export const KPI_METRICS = [
  { label: 'Production Deployed', value: '100%', detail: 'Real cloud services on Render' },
  { label: 'Live Flagship Projects', value: '2+', detail: 'Active client & web systems' },
  { label: 'Code Quality Standard', value: 'TypeScript', detail: 'Strict typed architecture' },
  { label: 'Client Response Rate', value: '< 24h', detail: 'Dedicated communication' },
];

export const PROJECTS: Project[] = [
  {
    id: 'march8-primary school',
    title: 'March 8 Pass Management System',
    subtitle: 'Event Pass & Attendee Access Control Platform',
    description: 'A comprehensive digital badge verification, event registration, and attendee pass management platform deployed on Render. Handles instant badge creation, digital validation, and live attendance metrics.',
    longDescription: 'March 8 Pass is a full-featured web solution engineered for high-concurrency event registrations and access validation. Designed to solve chaotic in-person check-in queues, the platform provides automated badge generation with unique scannable credentials, administrative access control levels, and real-time dashboard analytics tracking attendee check-ins.',
    liveUrl: 'https://march8pass2-2.onrender.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    category: 'Full-Stack',
    year: '2024 – 2025',
    featured: true,
    status: 'Live Production',
    hosting: 'Render Cloud Platform',
    metrics: [
      { label: 'Status', value: 'Live on Render' },
      { label: 'Architecture', value: 'Full-Stack Web' },
      { label: 'Performance', value: 'Sub-second Check-in' }
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST API', 'Render Cloud'],
    keyFeatures: [
      'Digital Attendee Badge Generation with unique security identifiers',
      'Real-time Access Point validation and automated check-in registry',
      'Role-based Administrator dashboard with global attendance statistics',
      'Mobile-responsive layout optimized for tablets and scanning devices',
      'Secure credential generation and export capabilities'
    ],
    architecture: [
      'Frontend built with modern reactive state management and instantaneous visual feedback',
      'Backend Node/Express microservice hosted seamlessly on Render with persistent session support',
      'Zero-lag query optimization for high-density check-in periods during live summit events'
    ]
  },
  {
    id: 'endalk-chance',
    title: 'Endalk Chance Opportunity Portal',
    subtitle: 'Interactive Lottery & Reward Chance Drawing Platform',
    description: 'An interactive opportunity and reward drawing web platform deployed on Render. Features dynamic ticket balances, automated lottery draws, transparent winner feeds, and responsive user dashboards.',
    longDescription: 'Endalk Chance was developed to modernize chance-based campaigns and reward opportunities into an engaging, transparent web application. Users can explore open draws, track active tickets, participate in verified lotteries, and view instantaneous winner announcements with cryptographic integrity.',
    liveUrl: 'https://endalk-chance.onrender.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    category: 'Web Apps',
    year: '2024 – 2025',
    featured: true,
    status: 'Live Production',
    hosting: 'Render Cloud Platform',
    metrics: [
      { label: 'Status', value: 'Live on Render' },
      { label: 'Draw Engine', value: 'Automated RNG' },
      { label: 'User Flow', value: 'Zero Friction' }
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'State Engine', 'Render Cloud'],
    keyFeatures: [
      'Interactive Draw Catalog featuring active, upcoming, and completed draws',
      'User Reward Ticket Ledger with real-time balance tracking and status updates',
      'Public verified winner board showing recent prize distributions',
      'Polished UI with luxury gold & midnight accents engineered for high conversion',
      'Seamless mobile navigation with responsive layout adaptivity'
    ],
    architecture: [
      'Component-driven frontend using modular architecture for rapid draw updates',
      'Deterministic state management ensuring reliable ticket allocations and draw tracking',
      'Cloud deployment pipeline configured on Render for automated continuous releases'
    ]
  },
  {
    id: 'apex-cloud-commerce',
    title: 'Apex E-Commerce Engine',
    subtitle: 'High-Velocity Modern Storefront & Inventory System',
    description: 'Computer Science as a headless digital marketplace featuring instant product filtering, server-side data caching, secure checkout architecture, and automated inventory sync.',
    longDescription: 'A modular, high-conversion web storefront built to showcase speed and aesthetic precision. Employs modern caching strategies, optimistic UI updates, and frictionless cart mechanics.',
    liveUrl: 'https://march8pass2-2.onrender.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    category: 'Full-Stack',
    year: '2025',
    featured: false,
    status: 'Active',
    hosting: 'Render / Cloud',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'TTFB', value: '110ms' },
      { label: 'Bundle Size', value: 'Optimized' }
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Render'],
    keyFeatures: [
      'Instant faceted product filtering with client-side indexing',
      'Persistent cart state with optimistic stock updates',
      'Order fulfillment status tracker and invoice generation'
    ],
    architecture: [
      'Clean separation between domain logic and presentation layers',
      'Strict schema validation using Zod and TypeScript types'
    ]
  },
  {
    id: 'pulse-realtime-api',
    title: 'Pulse Dispatcher API & Microservice',
    subtitle: 'High-Throughput Webhook Orchestration Service',
    description: 'A backend microservice built to process incoming webhooks, route event messages, and maintain guaranteed delivery with automated retry queues.',
    longDescription: 'Pulse Dispatcher handles distributed system notifications, telemetry packets, and third-party webhook relays with dead-letter queueing and structured logging.',
    liveUrl: 'https://endalk-chance.onrender.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    category: 'APIs & Services',
    year: '2024',
    featured: false,
    status: 'Active',
    hosting: 'Render Cloud Engine',
    metrics: [
      { label: 'Latency', value: '< 25ms' },
      { label: 'Throughput', value: '1.2k req/s' },
      { label: 'Uptime', value: '99.95%' }
    ],
    techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'Render'],
    keyFeatures: [
      'Guaranteed message delivery with exponential backoff retry cycles',
      'Payload cryptographic signature verification',
      'Health check monitoring endpoint and Prometheus telemetry integration'
    ],
    architecture: [
      'Event-driven Node.js execution loop with asynchronous batching',
      'Isolated Docker container deployment on Render cloud compute'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Computer Science',
    description: 'Crafting responsive, accessible, and ultra-fast web user interfaces.',
    skills: [
      { name: 'React 19 & Next.js', level: 95, experience: '3+ Years' },
      { name: 'TypeScript', level: 92, experience: '3+ Years' },
      { name: 'Tailwind CSS', level: 96, experience: '3+ Years' },
      { name: 'HTML5 & Modern CSS', level: 98, experience: '4+ Years' },
      { name: 'Framer Motion & Animations', level: 88, experience: '2+ Years' },
      { name: 'State Management (Zustand/Redux)', level: 90, experience: '3+ Years' }
    ]
  },
  {
    title: 'Backend & Cloud Infrastructure',
    description: 'Computer Science scalable APIs, databases, and continuous deployment workflows.',
    skills: [
      { name: 'Node.js & Express', level: 92, experience: '3+ Years' },
      { name: 'RESTful API Design', level: 95, experience: '3+ Years' },
      { name: 'Render Cloud Hosting', level: 94, experience: '2+ Years' },
      { name: 'PostgreSQL & MongoDB', level: 88, experience: '2+ Years' },
      { name: 'JWT & Session Security', level: 90, experience: '3+ Years' },
      { name: 'Git & GitHub Workflows', level: 94, experience: '4+ Years' }
    ]
  },
  {
    title: 'Quality & Architectural Practices',
    description: 'Ensuring production stability, cross-device parity, and rapid load speeds.',
    skills: [
      { name: 'Responsive Web Design', level: 98, experience: '4+ Years' },
      { name: 'Web Performance & Core Vitals', level: 90, experience: '3+ Years' },
      { name: 'SEO & Structured Data', level: 92, experience: '3+ Years' },
      { name: 'Cross-Browser Compatibility', level: 94, experience: '4+ Years' },
      { name: 'Clean Code & Refactoring', level: 96, experience: '4+ Years' },
      { name: 'Debugging & DevTools', level: 95, experience: '4+ Years' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2024 – Present',
    role: 'Lead Full-Stack Web Developer',
    company: 'Independent & Production Systems',
    location: 'Remote',
    type: 'Production Deployments',
    description: 'Architecting and deploying production-grade web systems including the March 8 Pass management portal and Endalk Chance platform. Responsible for end-to-end system reliability, UX polish, and cloud hosting.',
    highlights: [
      'Shipped March 8 Pass (https://march8pass2-2.onrender.com) for real-world summit check-ins and attendee badge routing',
      'Built Endalk Chance (https://endalk-chance.onrender.com) delivering transparent lottery drawings and dynamic ticket ledgers',
      'Established zero-downtime deployment pipelines using Render cloud infrastructure',
      'Implemented clean, responsive layouts that maintain 60fps animations across desktop and mobile devices'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Render']
  },
  {
    period: '2023 – 2024',
    role: 'Frontend & Web Applications Computer Science',
    company: 'Freelance & Client Projects',
    location: 'Remote',
    type: 'Contract',
    description: 'Designed and engineered bespoke web interfaces, customer landing pages, and interactive business portals for diverse clients.',
    highlights: [
      'Developed pixel-perfect responsive user interfaces adhering to strict WCAG accessibility guidelines',
      'Optimized client page load speeds by 45% through asset minification, code-splitting, and modern web formats',
      'Integrated third-party APIs, webhooks, and asynchronous payment/verification flows'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    period: '2022 – 2023',
    role: 'Junior Web Developer',
    company: 'Web Technology Labs',
    location: 'Addis Ababa',
    type: 'Full-time',
    description: 'Constructed foundation web components, handled cross-browser testing, and assisted in building dynamic client dashboards.',
    highlights: [
      'Built reusable component libraries reducing frontend iteration cycles by 30%',
      'Mastered Git version control and collaborative software delivery methodologies'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js Basics', 'Git']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web engineering from responsive frontend design to scalable backend APIs and cloud deployment.',
    deliverables: ['Custom Single Page Apps (SPA)', 'RESTful Backend API Services', 'Database Integration & Auth', 'Production Cloud Hosting on Render'],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express']
  },
  {
    number: '02',
    title: 'Responsive UI & Frontend Polish',
    description: 'Transforming designs or requirements into pristine, accessible, and fluid user interfaces with zero visual bugs.',
    deliverables: ['Mobile-First Responsive Layouts', 'Dark Mode & Theme Architecture', 'Accessible WCAG AA Standards', 'Micro-Interactions & Transitions'],
    technologies: ['Tailwind CSS', 'Motion', 'Modern Web Standards']
  },
  {
    number: '03',
    title: 'Cloud Deployment & System Operations',
    description: 'Setting up production environments, continuous deployment pipelines, and custom domain configurations.',
    deliverables: ['Render Cloud App Hosting', 'Environment Configuration', 'Zero-Downtime Builds', 'Uptime & Error Monitoring'],
    technologies: ['Render', 'Docker', 'GitHub Actions', 'Linux']
  },
  {
    number: '04',
    title: 'Speed, Performance & SEO Optimization',
    description: 'Optimizing existing or new web applications for sub-second page loads and maximum search engine discoverability.',
    deliverables: ['Core Web Vitals Audit & Fixes', 'Asset Optimization & Tree-Shaking', 'Meta Tags & OpenGraph Cards', 'Structured JSON-LD Data'],
    technologies: ['Lighthouse', 'Vite', 'Schema.org', 'Web Vitals']
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Bikila delivered our web application ahead of schedule with remarkable code quality. The system ran flawlessly during our peak event check-ins.',
    author: 'Event Operations Lead',
    role: 'Summit Access Management',
    project: 'March 8 Pass System'
  },
  {
    quote: 'The attention to UI detail, speed, and responsiveness on Render made our chance portal an immediate success with our audience.',
    author: 'Product Director',
    role: 'Digital Campaigns',
    project: 'Endalk Chance Platform'
  }
];
