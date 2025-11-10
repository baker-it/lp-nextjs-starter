import { client } from './sanity.client'

/**
 * Sanity Fetch Wrapper with Automatic Cache Tags
 * 
 * This wrapper adds Next.js cache tags to all Sanity queries, enabling
 * granular cache invalidation via webhooks.
 * 
 * Usage:
 * ```ts
 * const data = await sanityFetch(
 *   landingPageBySlugQuery,
 *   { slug: 'my-page' },
 *   ['landing-page', 'variant:my-page']
 * )
 * ```
 * 
 * When webhook calls revalidateTag('variant:my-page'), only this specific
 * page's cache is invalidated, not the entire site.
 */

interface SanityFetchOptions<T = unknown> {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}

export async function sanityFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {},
  customTags: string[] = []
): Promise<T> {
  // Always include global landing-page tag + any custom tags
  const tags = ['landing-page', ...customTags]

  try {
    const result = await client.fetch<T>(query, params, {
      cache: 'force-cache', // Use Next.js cache
      next: {
        tags, // Attach cache tags for revalidation
      },
    })

    return result
  } catch (error) {
    console.error('[sanityFetch] Error fetching data:', {
      query,
      params,
      tags,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
    throw error
  }
}

// Alternative signature for better DX
export async function fetchWithTags<T = unknown>(
  options: SanityFetchOptions<T>
): Promise<T> {
  return sanityFetch<T>(options.query, options.params, options.tags)
}

