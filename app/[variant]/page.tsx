import { sanityFetch } from '@/lib/sanity.fetch'
import { landingPageBySlugQuery, type LandingPageData } from '@/lib/sanity.queries'
import { notFound } from 'next/navigation'

/**
 * Dynamic Landing Page Route with Tag-Based Revalidation
 * 
 * This route demonstrates the webhook + ISR pattern:
 * 1. Server Component fetches data with cache tags
 * 2. Data is cached indefinitely (revalidate: false)
 * 3. Webhook calls revalidateTag('variant:{slug}') when content changes
 * 4. Next.js invalidates cache → next request gets fresh data
 * 
 * Result: Instant updates without full site rebuilds
 */

interface PageProps {
  params: Promise<{
    variant: string
  }>
}

// Disable time-based revalidation - rely 100% on tag-based invalidation
export const revalidate = false

export default async function VariantPage({ params }: PageProps): Promise<JSX.Element> {
  const { variant } = await params

  // Fetch landing page with both global and variant-specific cache tags
  const data = await sanityFetch<LandingPageData>(
    landingPageBySlugQuery,
    { slug: variant },
    ['landing-page', `variant:${variant}`]
  )

  // Handle 404 if page doesn't exist
  if (!data) {
    notFound()
  }

  // TODO: Build proper landing page layout after webhook verified
  // For now, render minimal structure to verify webhook + revalidation works

  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          {data?.title || 'No title'}
        </h1>
        
        {data?.heroA?.headline && (
          <p className="text-xl text-gray-600 mt-2">
            {data.heroA.headline}
          </p>
        )}
        
        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p>Variant: <code className="bg-gray-100 px-2 py-1 rounded">{variant}</code></p>
          <p>Last updated: {new Date(data._updatedAt).toLocaleString('pl-PL')}</p>
          {data.ab?.active && (
            <p>A/B Variant: <code className="bg-blue-100 px-2 py-1 rounded">{data.ab.active}</code></p>
          )}
        </div>
      </div>

      {/* Content Preview */}
      {data?.heroA?.subtitle && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-600">
            {data.heroA.subtitle}
          </p>
        </div>
      )}

      {/* Debug Panel */}
      <details className="mt-8 text-sm border border-gray-300 rounded-lg">
        <summary className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 font-medium">
          🔍 Debug: Raw Sanity Data
        </summary>
        <pre className="mt-2 p-4 bg-gray-900 text-green-400 rounded-b-lg overflow-auto text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>

      {/* Revalidation Instructions */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">✅ Testing Webhook Revalidation</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Edit this page in Sanity Studio</li>
          <li>Click "Publish"</li>
          <li>Wait 5-10 seconds</li>
          <li>Refresh this page - changes should appear instantly</li>
          <li>Check Vercel logs for: <code className="bg-blue-100 px-1">POST /api/revalidate</code></li>
        </ol>
      </div>

      {/* Placeholder for future sections */}
      <div className="mt-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
        <p className="font-medium">🚧 Full Landing Page Layout Coming Soon</p>
        <p className="text-sm mt-2">
          Once webhook is verified, add: Hero, USP, Pricing, FAQ, CTA sections
        </p>
      </div>
    </main>
  )
}

// Generate static params for build time (optional - can also be fully dynamic)
export async function generateStaticParams() {
  // For now, return empty array → all routes will be generated on-demand
  // Later: fetch all slugs from Sanity for build-time generation
  return []
}

// Metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { variant } = await params
  
  const data = await sanityFetch<LandingPageData>(
    landingPageBySlugQuery,
    { slug: variant },
    ['landing-page', `variant:${variant}`]
  )

  if (!data) {
    return {
      title: 'Page Not Found',
    }
  }

  const seo = data.seo

  return {
    title: seo?.title || data.title,
    description: seo?.description || data.heroA?.headline || '',
    openGraph: {
      title: seo?.ogTitle || seo?.title || data.title,
      description: seo?.ogDescription || seo?.description || '',
      type: 'website',
    },
  }
}

