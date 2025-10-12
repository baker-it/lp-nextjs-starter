import { createClient } from 'next-sanity'

// Fallback to a valid projectId if not configured (for build purposes)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // Ignore errors if using dummy project (for build)
  ignoreBrowserTokenWarning: true,
})
