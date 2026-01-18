import type {
  NavItem,
  Service,
  Technology,
  Testimonial,
  FAQ,
  ValueProposition,
  ProcessStep,
  SocialLink,
  SEOData,
} from "@/types";

// Site Configuration
export const SITE_CONFIG = {
  name: "James Gabbitus",
  title: "James Gabbitus | Next.js Developer",
  description:
    "Professional Next.js developer specializing in AI chatbot integration, e-commerce solutions, web applications, and high-converting landing pages. Transform your business with modern web technology.",
  url: "https://jamesgabbitus.dev",
  email: "jamesgabbitus@gmail.com",
  phone: "+447519247007",
  whatsapp: "https://wa.me/447519247007",
  github: "https://github.com/jamesgabby",
  linkedin: "https://www.linkedin.com/in/jamesgabbitus/",
  calendly: "https://calendly.com/jamesgabbitus",
  chatbotDemo: "https://www.loom.com/share/219b3812ac7b41cf8b7d3fdab25b6427",
} as const;

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Me", href: "/#why-me" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

// Services
export const SERVICES: Service[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Integration",
    description:
      "Supercharge your customer support and engagement with intelligent AI chatbots. Reduce response times by 90% and handle unlimited conversations 24/7.",
    icon: "Bot",
    features: [
      "Custom-trained on your business data",
      "Natural language understanding",
      "Seamless website integration",
      "Analytics dashboard",
      "Multi-language support",
      "Lead capture automation",
    ],
    href: "#contact",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Build high-converting online stores that drive sales. From product catalogs to checkout optimization, create seamless shopping experiences.",
    icon: "ShoppingCart",
    features: [
      "Headless commerce architecture",
      "Payment gateway integration",
      "Inventory management",
      "SEO-optimized product pages",
      "Mobile-first design",
      "Analytics & conversion tracking",
    ],
    href: "#contact",
  },
  {
    id: "nextjs-migration",
    title: "Next.js Migration",
    description:
      "Migrate your legacy website to Next.js for dramatically improved performance, SEO, and developer experience. Future-proof your web presence.",
    icon: "RefreshCw",
    features: [
      "Zero-downtime migration",
      "Performance optimization",
      "SEO preservation & improvement",
      "Modern architecture setup",
      "CI/CD pipeline configuration",
      "Team training & documentation",
    ],
    href: "#contact",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive action. Optimized for speed, SEO, and maximum conversions.",
    icon: "Rocket",
    features: [
      "Conversion-optimized design",
      "A/B testing ready",
      "Lightning-fast load times",
      "SEO optimization",
      "Analytics integration",
      "Mobile responsive",
    ],
    href: "#contact",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern technologies. From SaaS platforms to internal tools, bring your ideas to life.",
    icon: "Layout",
    features: [
      "Custom functionality",
      "Scalable architecture",
      "Real-time features",
      "User authentication",
      "Database design",
      "API development",
    ],
    href: "#contact",
  },
];

// Technologies
export const TECHNOLOGIES: Technology[] = [
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for production. Next.js gives you the best developer experience with all the features you need for production.",
    icon: "Layers",
    benefits: [
      "Server-side rendering for better SEO",
      "Automatic code splitting for faster loads",
      "Built-in image optimization",
      "API routes for backend functionality",
      "Static site generation options",
      "Incremental static regeneration",
    ],
    url: "https://nextjs.org",
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "The open-source Firebase alternative. Build secure and scalable applications with a PostgreSQL database, authentication, and real-time subscriptions.",
    icon: "Database",
    benefits: [
      "PostgreSQL database power",
      "Built-in authentication",
      "Real-time subscriptions",
      "Auto-generated APIs",
      "Row-level security",
      "Generous free tier",
    ],
    url: "https://supabase.com",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.",
    icon: "Paintbrush",
    benefits: [
      "Rapid UI development",
      "Consistent design system",
      "Tiny production bundles",
      "Dark mode support",
      "Fully customizable",
      "Great developer experience",
    ],
    url: "https://tailwindcss.com",
  },
  {
    id: "vercel",
    name: "Vercel",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    icon: "Cloud",
    benefits: [
      "Global edge network",
      "Automatic HTTPS",
      "Instant rollbacks",
      "Preview deployments",
      "Analytics built-in",
      "Serverless functions",
    ],
    url: "https://vercel.com",
  },
];

// Value Propositions
export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: "performance",
    title: "Lightning Fast Performance",
    description:
      "Next.js delivers exceptional performance out of the box. Your website will load in milliseconds, keeping visitors engaged and improving conversions.",
    icon: "Zap",
    stat: "< 1s",
    statLabel: "Load Time",
  },
  {
    id: "seo",
    title: "SEO That Actually Works",
    description:
      "Server-side rendering means search engines see your full content. Rank higher, get found easier, and drive organic traffic to your business.",
    icon: "Search",
    stat: "100%",
    statLabel: "SEO Score",
  },
  {
    id: "scalability",
    title: "Built to Scale",
    description:
      "From startup to enterprise, your website grows with your business. Handle traffic spikes effortlessly with modern cloud infrastructure.",
    icon: "TrendingUp",
    stat: "∞",
    statLabel: "Scalability",
  },
  {
    id: "experience",
    title: "5+ Years Experience",
    description:
      "Benefit from years of experience building production applications. Avoid common pitfalls and get it right the first time.",
    icon: "Award",
    stat: "5+",
    statLabel: "Years",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "Regular updates, transparent processes, and always available for questions. You'll never be left wondering about project status.",
    icon: "MessageCircle",
    stat: "24h",
    statLabel: "Response Time",
  },
  {
    id: "results",
    title: "Results-Driven",
    description:
      "Every decision is made with your business goals in mind. From design to development, everything is optimized for conversions.",
    icon: "Target",
    stat: "50+",
    statLabel: "Projects Delivered",
  },
];

// Process Steps
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business, goals, and requirements. No obligations, just a conversation about how I can help.",
    icon: "Phone",
  },
  {
    id: "proposal",
    step: 2,
    title: "Proposal & Planning",
    description:
      "You'll receive a detailed proposal with timeline, milestones, and transparent pricing. We'll refine the plan together until it's perfect.",
    icon: "FileText",
  },
  {
    id: "development",
    step: 3,
    title: "Design & Development",
    description:
      "I'll build your project with regular updates and feedback sessions. You'll have visibility into progress every step of the way.",
    icon: "Code",
  },
  {
    id: "launch",
    step: 4,
    title: "Launch & Support",
    description:
      "After thorough testing, we launch your project. I provide ongoing support and maintenance to ensure continued success.",
    icon: "Rocket",
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechStart UK",
    content:
      "James transformed our outdated website into a modern, high-performing platform. Our conversion rate increased by 150% within the first month. Absolutely brilliant work!",
    rating: 5,
  },
  {
    id: "2",
    name: "David Chen",
    role: "Founder",
    company: "EcoShop",
    content:
      "The e-commerce solution James built exceeded our expectations. Fast, beautiful, and our customers love it. Sales have doubled since launch.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Marketing Director",
    company: "FinanceFlow",
    content:
      "The AI chatbot integration was a game-changer for our customer support. We've reduced response times by 95% and our satisfaction scores are at an all-time high.",
    rating: 5,
  },
];

// FAQs
export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, while a full web application can take 4-8 weeks. During our discovery call, I'll provide a detailed timeline specific to your project.",
  },
  {
    id: "2",
    question: "What is your pricing structure?",
    answer:
      "I offer both fixed-price projects and hourly rates depending on the scope. Landing pages start from £2,000, web applications from £5,000, and AI chatbot integrations from £3,000. Every project gets a detailed quote after our initial consultation.",
  },
  {
    id: "3",
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Absolutely! I offer maintenance packages that include security updates, performance monitoring, content updates, and priority support. Most clients opt for ongoing support to ensure their investment continues to perform.",
  },
  {
    id: "4",
    question: "What makes Next.js better than other frameworks?",
    answer:
      "Next.js offers the perfect balance of performance, SEO, and developer experience. With features like server-side rendering, automatic code splitting, and image optimization, your site loads faster and ranks higher than traditional React applications.",
  },
  {
    id: "5",
    question: "Can you work with my existing team?",
    answer:
      "Yes! I frequently collaborate with in-house teams, designers, and other developers. I'm flexible and can adapt to your existing workflows and communication preferences.",
  },
  {
    id: "6",
    question: "What information do you need to get started?",
    answer:
      "To provide an accurate quote, I'll need to understand your goals, target audience, required features, design preferences, and timeline. The discovery call covers all of this, but feel free to include details in your initial message.",
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    url: SITE_CONFIG.github,
    icon: "Github",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: SITE_CONFIG.linkedin,
    icon: "Linkedin",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    url: SITE_CONFIG.whatsapp,
    icon: "MessageCircle",
  },
];

// Default SEO Data
export const DEFAULT_SEO: SEOData = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Next.js developer",
    "React developer",
    "Web developer UK",
    "AI chatbot integration",
    "E-commerce developer",
    "Freelance web developer",
    "Next.js migration",
    "Landing page developer",
    "Web application developer",
    "Supabase developer",
    "Tailwind CSS",
    "Vercel deployment",
  ],
  ogImage: "/og-image.png",
  canonicalUrl: SITE_CONFIG.url,
};

// Project Types for Contact Form
export const PROJECT_TYPES = [
  "AI Chatbot Integration",
  "E-Commerce Solution",
  "Next.js Migration",
  "Landing Page",
  "Web Application",
  "Other",
] as const;

// Budget Ranges for Contact Form
export const BUDGET_RANGES = [
  "£1,000 - £3,000",
  "£3,000 - £5,000",
  "£5,000 - £10,000",
  "£10,000 - £20,000",
  "£20,000+",
  "Not sure yet",
] as const;

import type { Project, ProjectFilter } from "@/types";

// Project Filters
export const PROJECT_FILTERS: ProjectFilter[] = [
  { id: "all", label: "All Projects" },
  { id: "ai-chatbot", label: "AI Chatbots" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "web-app", label: "Web Apps" },
  { id: "landing-page", label: "Landing Pages" },
  { id: "migration", label: "Migrations" },
  { id: "ai-saas", label: "AI SaaS" },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Lessonly",
    slug: "lessonly-ai-saas",
    description:
      "AI-powered SaaS platform for UK teachers and tutors, featuring intelligent lesson planning, student progress tracking, and personalized learning recommendations.",
    longDescription:
      "Developed a comprehensive AI SaaS platform designed specifically for UK teachers and tutors. Lessonly leverages artificial intelligence to streamline lesson planning, automate administrative tasks, track student progress, and provide personalized learning recommendations based on individual student needs and curriculum requirements.",
    image: "/projects/less.png",
    images: [
      "/projects/lessonly-analytics-2.png",
    ],
    category: "ai-saas",
    tags: ["AI", "SaaS", "Education", "EdTech", "UK Teachers", "Tutoring"],
    technologies: ["Next.js", "OpenAI", "Supabase", "Tailwind CSS", "Vercel", "Stripe"],
    liveUrl: "https://lessonly.co.uk",
    featured: true,
    results: [
      { metric: "Time Saved", value: "10hrs", description: "Weekly hours saved per teacher" },
      { metric: "Teachers", value: "2K+", description: "Active UK teachers using platform" },
      { metric: "Lessons Created", value: "50K+", description: "AI-assisted lessons generated" },
      { metric: "Satisfaction", value: "96%", description: "Teacher satisfaction rate" },
    ],
    testimonial: {
      quote: "Lessonly has revolutionised how I plan my lessons. The AI suggestions are spot-on for the UK curriculum and I've gained back hours of my week.",
      author: "Rebecca Hughes",
      role: "Year 6 Teacher, London Primary School",
    },
    completedAt: "2024-04",
  },
  {
    id: "2",
    title: "Gym Booking System",
    slug: "gym-booking-system",
    description:
      "Complete gym management solution with admin dashboard, class scheduling, member management, and real-time booking capabilities.",
    longDescription:
      "Built a full-featured gym booking and management system featuring a comprehensive admin dashboard for gym owners, real-time class scheduling, member management, payment processing, attendance tracking, and analytics. The platform enables gyms to streamline operations and provide members with an easy booking experience.",
    image: "/projects/booking.png",
    images: [
    ],
    category: "web-app",
    tags: ["Booking System", "Admin Dashboard", "Fitness", "Management", "SaaS"],
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Vercel", "React Query"],
    liveUrl: "https://example-gym.com",
    featured: true,
    results: [
      { metric: "Bookings", value: "+180%", description: "Increase in class bookings" },
      { metric: "No-shows", value: "-65%", description: "Reduction in missed appointments" },
      { metric: "Admin Time", value: "-70%", description: "Time saved on administration" },
      { metric: "Members", value: "15K+", description: "Active gym members managed" },
    ],
    testimonial: {
      quote: "The admin dashboard gives us complete visibility over our operations. Managing classes and members has never been easier, and our members love the booking app.",
      author: "Mark Stevens",
      role: "Owner, FitLife Gyms",
    },
    completedAt: "2024-03",
  },
  {
    id: "3",
    title: "AI Customer Support Bot",
    slug: "ai-customer-support-bot",
    description:
      "Intelligent chatbot that reduced support tickets by 70% and handles 10,000+ conversations monthly for a SaaS company.",
    longDescription:
      "Built a custom AI-powered customer support chatbot that integrates with the client's knowledge base, CRM, and ticketing system. The bot uses natural language processing to understand customer intent and provide accurate responses 24/7.",
    image: "/projects/chatbot.png",
    images: [
      
    ],
    category: "ai-chatbot",
    tags: ["AI", "Chatbot", "Customer Support", "SaaS"],
    technologies: ["Next.js", "OpenAI", "Supabase", "Tailwind CSS", "Vercel"],
    liveUrl: "https://techgear-9531.myshopify.com/",
    featured: true,
    results: [
      { metric: "Support Tickets", value: "-70%", description: "Reduction in support tickets" },
      { metric: "Response Time", value: "<1s", description: "Average response time" },
      { metric: "Conversations", value: "10K+", description: "Monthly conversations handled" },
      { metric: "Satisfaction", value: "94%", description: "Customer satisfaction rate" },
    ],
    testimonial: {
      quote: "The chatbot transformed our customer support. We've saved countless hours and our customers love the instant responses.",
      author: "Sarah Mitchell",
      role: "CEO, TechStart UK",
    },
    completedAt: "2024-01",
  },
  {
    id: "4",
    title: "SaaS Landing Page",
    slug: "saas-landing-page",
    description:
      "High-converting landing page for a B2B SaaS product that achieved a 12% conversion rate and 40% reduction in bounce rate.",
    longDescription:
      "Designed and developed a conversion-optimized landing page for a B2B SaaS company, featuring compelling copywriting, social proof elements, interactive demos, and A/B tested CTAs.",
    image: "/projects/repurpose-preview.png",
    category: "landing-page",
    tags: ["Landing Page", "SaaS", "B2B", "Conversion"],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    featured: true,
    results: [
      { metric: "Conversion Rate", value: "12%", description: "Visitor to lead conversion" },
      { metric: "Bounce Rate", value: "-40%", description: "Reduction in bounce rate" },
      { metric: "Load Time", value: "0.8s", description: "Page load speed" },
      { metric: "SEO Score", value: "100", description: "Perfect SEO score" },
    ],
    completedAt: "2024-01",
  },
  {
    id: "5",
    title: "FinTech Dashboard",
    slug: "fintech-dashboard",
    description:
      "Real-time financial analytics dashboard with live data streaming, interactive charts, and customizable widgets.",
    longDescription:
      "Created a comprehensive financial dashboard for a fintech startup, featuring real-time data visualization, portfolio tracking, market analysis tools, and AI-powered investment insights.",
    image: "/projects/acevent.png",
    category: "web-app",
    tags: ["Dashboard", "FinTech", "Analytics", "Real-time"],
    technologies: ["Next.js", "Supabase", "D3.js", "WebSocket", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jamesgabby",
    featured: true,
    results: [
      { metric: "Data Points", value: "1M+", description: "Daily data points processed" },
      { metric: "Latency", value: "<50ms", description: "Real-time update latency" },
      { metric: "Users", value: "5K+", description: "Active daily users" },
      { metric: "Uptime", value: "99.9%", description: "Platform reliability" },
    ],
    completedAt: "2023-12",
  },
  // {
  //   id: "6",
  //   title: "Luxury Fashion E-Commerce",
  //   slug: "luxury-fashion-ecommerce",
  //   description:
  //     "High-end fashion store with 3D product views, AR try-on, and seamless checkout that increased conversions by 150%.",
  //   longDescription:
  //     "Developed a premium e-commerce platform for a luxury fashion brand featuring immersive 3D product visualization, AR-powered virtual try-on, and a streamlined checkout process optimized for mobile users.",
  //   image: "/projects/ecommerce-preview.jpg",
  //   category: "ecommerce",
  //   tags: ["E-Commerce", "Fashion", "3D", "AR"],
  //   technologies: ["Next.js", "Shopify", "Three.js", "Stripe", "Tailwind CSS"],
  //   liveUrl: "https://example.com",
  //   results: [
  //     { metric: "Conversion Rate", value: "+150%", description: "Increase in conversions" },
  //     { metric: "Avg. Order Value", value: "+35%", description: "Higher average orders" },
  //     { metric: "Page Speed", value: "98", description: "Lighthouse performance score" },
  //     { metric: "Mobile Sales", value: "+200%", description: "Mobile revenue increase" },
  //   ],
  //   completedAt: "2024-02",
  // },
  // {
  //   id: "7",
  //   title: "Healthcare Platform Migration",
  //   slug: "healthcare-platform-migration",
  //   description:
  //     "Migrated a legacy PHP healthcare platform to Next.js, improving performance by 300% and reducing hosting costs by 60%.",
  //   longDescription:
  //     "Led the complete migration of a healthcare management platform from a legacy PHP monolith to a modern Next.js application with improved security, performance, and maintainability.",
  //   image: "/projects/migration-preview.jpg",
  //   category: "migration",
  //   tags: ["Migration", "Healthcare", "Performance", "Legacy"],
  //   technologies: ["Next.js", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"],
  //   results: [
  //     { metric: "Performance", value: "+300%", description: "Speed improvement" },
  //     { metric: "Hosting Costs", value: "-60%", description: "Cost reduction" },
  //     { metric: "Downtime", value: "0", description: "Zero downtime migration" },
  //     { metric: "Code Base", value: "-50%", description: "Codebase reduction" },
  //   ],
  //   completedAt: "2023-11",
  // },
  // {
  //   id: "8",
  //   title: "Restaurant Ordering System",
  //   slug: "restaurant-ordering-system",
  //   description:
  //     "Mobile-first ordering system with real-time kitchen display, table management, and integrated payments.",
  //   longDescription:
  //     "Built a complete restaurant management solution including customer-facing ordering app, kitchen display system, table management, inventory tracking, and analytics dashboard.",
  //   image: "/projects/restaurant-preview.jpg",
  //   category: "web-app",
  //   tags: ["Restaurant", "Ordering", "Real-time", "Mobile"],
  //   technologies: ["Next.js", "Supabase", "Stripe", "PWA", "Tailwind CSS"],
  //   liveUrl: "https://example.com",
  //   results: [
  //     { metric: "Order Time", value: "-45%", description: "Faster order processing" },
  //     { metric: "Revenue", value: "+25%", description: "Revenue increase" },
  //     { metric: "Errors", value: "-90%", description: "Order error reduction" },
  //     { metric: "Tables", value: "+30%", description: "Table turnover improvement" },
  //   ],
  //   completedAt: "2023-10",
  // },
  // {
  //   id: "9",
  //   title: "AI Content Generator",
  //   slug: "ai-content-generator",
  //   description:
  //     "AI-powered content generation platform for marketers with templates, brand voice training, and team collaboration.",
  //   longDescription:
  //     "Developed an AI content generation SaaS platform that helps marketing teams create on-brand content at scale, featuring custom AI model training, content templates, and collaborative workflows.",
  //   image: "/projects/ai-content-preview.jpg",
  //   category: "ai-chatbot",
  //   tags: ["AI", "Content", "Marketing", "SaaS"],
  //   technologies: ["Next.js", "OpenAI", "Supabase", "Redis", "Tailwind CSS"],
  //   liveUrl: "https://example.com",
  //   results: [
  //     { metric: "Content Output", value: "10x", description: "Increase in content production" },
  //     { metric: "Time Saved", value: "15hrs", description: "Weekly hours saved per user" },
  //     { metric: "Users", value: "2K+", description: "Active users" },
  //     { metric: "Accuracy", value: "95%", description: "Brand voice accuracy" },
  //   ],
  //   completedAt: "2024-03",
  // },
  // {
  //   id: "10",
  //   title: "Fitness E-Commerce",
  //   slug: "fitness-ecommerce",
  //   description:
  //     "Subscription-based fitness equipment store with workout integration and personalized product recommendations.",
  //   longDescription:
  //     "Created an innovative e-commerce platform for fitness equipment that combines online shopping with personalized workout plans and AI-powered product recommendations based on fitness goals.",
  //   image: "/projects/fitness-preview.jpg",
  //   category: "ecommerce",
  //   tags: ["E-Commerce", "Fitness", "Subscription", "AI"],
  //   technologies: ["Next.js", "Stripe", "Supabase", "Tailwind CSS", "Vercel"],
  //   liveUrl: "https://example.com",
  //   results: [
  //     { metric: "Subscriptions", value: "500+", description: "Monthly subscribers" },
  //     { metric: "Retention", value: "85%", description: "Subscriber retention rate" },
  //     { metric: "AOV", value: "+45%", description: "Average order value increase" },
  //     { metric: "Reviews", value: "4.9★", description: "Average product rating" },
  //   ],
  //   completedAt: "2023-09",
  // },
];