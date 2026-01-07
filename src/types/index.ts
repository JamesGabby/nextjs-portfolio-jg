// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

// Tech Stack Types
export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
  url: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Social Link Types
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// Value Proposition Types
export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

// Process Step Types
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Animation Variants
export interface AnimationVariant {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      staggerChildren?: number;
    };
  };
}