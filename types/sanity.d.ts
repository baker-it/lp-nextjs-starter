/**
 * TypeScript Type Definitions for Sanity Content
 * 
 * These types ensure type safety when working with Sanity data
 * throughout the application.
 */

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
}

export interface Hero {
  headline: string
  subtitle?: string
  cta?: {
    text: string
    url: string
  }
  image?: SanityImage
}

export interface USP {
  title: string
  description?: string
  icon?: string
}

export interface Testimonial {
  name: string
  text: string
  role?: string
  avatar?: SanityImage
}

export interface PricePlan {
  name: string
  price: number
  currency?: string
  features?: string[]
  cta?: {
    text: string
    url: string
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export interface SEO {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: SanityImage
  noindex?: boolean
}

export interface LandingPage extends SanityDocument {
  _type: 'landingPage'
  title: string
  slug: SanitySlug
  ab?: {
    active: 'A' | 'B'
    allowUrlOverride?: boolean
    experimentKey?: string
  }
  heroA?: Hero
  heroB?: Hero
  usps?: USP[]
  socialProof?: Testimonial[]
  pricing?: PricePlan[]
  faq?: FAQItem[]
  seo?: SEO
}

// Webhook payload types
export interface SanityWebhookPayload {
  _type: string
  _id: string
  slug?: SanitySlug
}

// Export for convenience
export type { LandingPageData } from '@/lib/sanity.queries'

