export type PageView = 'home' | 'services' | 'portfolio' | 'about' | 'process' | 'contact' | 'privacy' | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
  techStack: string[];
  turnaroundTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Corporate' | 'E-commerce' | 'SaaS' | 'Service' | 'Restaurant' | 'Local Business';
  typeBadge: 'Concept Project' | 'Demo Project';
  description: string;
  clientNeed: string;
  solution: string;
  servicesProvided: string[];
  techStack: string[];
  previewType: 'corporate' | 'ecommerce' | 'saas' | 'restaurant' | 'service' | 'local';
  accentColor: string;
  highlights: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  activities: string[];
  deliverables: string[];
}

export interface IndustryItem {
  name: string;
  description: string;
  iconName: string;
  keyFeature: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryFormData {
  fullName: string;
  businessName: string;
  email: string;
  phoneOrWhatsApp: string;
  service: string;
  estimatedBudget: string;
  projectDetails: string;
  honeypot: string; // anti-spam field
}

export interface StoredInquiry extends InquiryFormData {
  id: string;
  submittedAt: string;
  status: 'Received' | 'In Review' | 'Responded';
  supabaseSynced?: boolean;
}
