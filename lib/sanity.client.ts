import { createClient, type ClientConfig } from 'next-sanity'

/**
 * Sanity Client Configuration
 * 
 * Key settings for webhook + ISR pattern:
 * - useCdn: false (CRITICAL: ensures fresh data after revalidation)
 * - apiVersion: locked to 2024-01-01 for stable API behavior
 * - token: read token for draft content (optional)
 */

// HARDCODED FIX for local dev issues
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nfon9ew1'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

// IMPORTANT: useCdn MUST be false for tag-based revalidation to work
// CDN would cache responses and bypass Next.js cache invalidation
const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // ← Critical for ISR + webhooks
  token: process.env.SANITY_API_TOKEN, // Optional: for draft content
  perspective: 'published', // Only fetch published content
  ignoreBrowserTokenWarning: true,
}

export const client = createClient(config)

// Type helper for GROQ query results
export type SanityClient = typeof client
