import { groq } from 'next-sanity'

/**
 * GROQ Queries for Landing Pages
 * 
 * Pattern: Fetch all fields needed for rendering, including nested objects.
 * These queries are used with sanityFetch() which automatically adds cache tags.
 */

// Fetch single landing page by slug (for dynamic routes like /[variant])
export const landingPageBySlugQuery = groq`*[_type == "landingPage" && slug.current == $slug][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  ab,
  heroA,
  heroB,
  usps,
  socialProof,
  pricing,
  faq,
  seo
}`

// Fetch all landing pages (for sitemap, variant list, etc.)
export const allLandingPagesQuery = groq`*[_type == "landingPage"] | order(_createdAt desc) {
  _id,
  _type,
  title,
  slug,
  ab,
  _createdAt,
  _updatedAt
}`

// Legacy alias for backward compatibility
export const landingPageBySlug = landingPageBySlugQuery

// Fetch first landing page (fallback for homepage)
export const firstLandingPage = groq`*[_type == "landingPage"] | order(_createdAt asc)[0]{
  _id,
  _type,
  title,
  slug,
  ab,
  heroA,
  heroB,
  usps,
  socialProof,
  pricing,
  faq,
  seo
}`

// New query for updated schema (A/B/C variant system)
export const newLandingPageQuery = groq`*[_type == "landingPage" && slug.current == $slug && isActive == true][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  variant,
  slug,
  seo {
    metaTitle,
    metaDescription,
    ogImage,
    canonical
  },
  hero {
    headline,
    subheadline,
    ctaPrimary { text, url, style },
    ctaSecondary { text, url, style }
  },
  painPoints {
    items[] {
      problem,
      costImpact,
      solution
    }
  },
  methodology {
    preTraining,
    day1,
    day2,
    postTraining
  },
  benefits {
    forStylist,
    forClient
  },
  testimonials {
    items[] {
      quote,
      author,
      role,
      location,
      photo
    }
  },
  faqs {
    items[] {
      question,
      answer
    }
  },
  ctaSection {
    headline,
    subheadline,
    urgencyMessage,
    cta { text, url, style },
    variant
  }
}`

// TypeScript types for query results
export interface HeroData {
  headline?: string
  subtitle?: string
  cta?: {
    text?: string
    url?: string
  }
}

export interface SEOData {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
}

export interface LandingPageData {
  _id: string
  _type: 'landingPage'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  ab?: {
    active: 'A' | 'B'
    allowUrlOverride?: boolean
    experimentKey?: string
  }
  heroA?: HeroData
  heroB?: HeroData
  usps?: Array<Record<string, any>>
  socialProof?: Array<Record<string, any>>
  pricing?: Array<Record<string, any>>
  faq?: Array<Record<string, any>>
  seo?: SEOData
}
