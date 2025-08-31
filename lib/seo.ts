import type { Metadata } from 'next'
import { urlFor } from '@/lib/sanity.image'

type SEO = { title?: string; description?: string; ogImage?: any }
type Defaults = {
  title: string; description?: string; url?: string; locale?: string; siteName?: string;
  twitter?: { site?: string; creator?: string }
}

export function seoToMetadata(seo: SEO | undefined, defaults: Defaults): Metadata {
  const title = seo?.title || defaults.title
  const description = seo?.description || defaults.description
  const ogImageUrl = seo?.ogImage ? urlFor(seo.ogImage).width(1200).height(630).fit('crop').url() : undefined
  const baseUrl = defaults.url ? new URL(defaults.url) : undefined
  return {
    title,
    description,
    metadataBase: baseUrl,
    alternates: { canonical: defaults.url || '/' },
    openGraph: {
      title, description: description || undefined, url: defaults.url,
      siteName: defaults.siteName || defaults.title, locale: defaults.locale || 'pl_PL', type: 'website',
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      site: defaults.twitter?.site, creator: defaults.twitter?.creator,
      title, description: description || undefined, images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    robots: { index: true, follow: true },
  }
}
