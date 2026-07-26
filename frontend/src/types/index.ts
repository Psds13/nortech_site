import type { LucideIcon } from 'lucide-react';

// src/types/index.ts

export type EcosystemCategory = 
  | 'infra-cloud'
  | 'ai-data'
  | 'industry-agro'
  | 'specialized-solutions';

export interface Ecosystem {
  id: string;
  name: string;
  category: EcosystemCategory;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  href: string;
  tagline: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  isFeatured?: boolean;
}

export interface NetworkServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  specs: { label: string; detail: string }[];
  badge?: string;
}

export interface NavRoute {
  name: string;
  href: string;
  badge?: string;
  children?: { name: string; href: string; description?: string }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'network' | 'contracting' | 'support';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  ecosystem: string;
  category: string;
  summary: string;
  results: string[];
  image: string;
  tags: string[];
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface UnitStat {
  value: string;
  label: string;
}

export interface UnitSpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface UnitDeliverable {
  title: string;
  desc: string;
}

export interface UnitPillar {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface UnitPageContent {
  name: string;
  eyebrow: string;
  eyebrowIcon: LucideIcon;
  description: string;
  stats: UnitStat[];
  cta: { label: string; href: string };
  spec: { icon: LucideIcon; title: string; items: UnitSpecItem[] };
  deliverables: { eyebrow: string; title: string; items: UnitDeliverable[] };
  pillars?: UnitPillar[];
}
