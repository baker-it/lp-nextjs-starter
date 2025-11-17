import { sanityFetch } from '@/lib/sanity.fetch'
import { newLandingPageQuery } from '@/lib/sanity.queries'
import { notFound } from 'next/navigation'

import HeroCMS from '@/components/cms/HeroCMS'
import PainPoints from '@/components/cms/PainPoints'
import Methodology from '@/components/cms/Methodology'
import Benefits from '@/components/cms/Benefits'
import Testimonials from '@/components/cms/Testimonials'
import FAQ from '@/components/cms/FAQ'
import CTASection from '@/components/cms/CTASection'

interface PageProps {
  params: Promise<{ variant: string }>
}

export const revalidate = false

export default async function VariantPage({ params }: PageProps) {
  const { variant } = await params
  
  const data = await sanityFetch<any>(
    newLandingPageQuery,
    { slug: variant },
    ['landing-page', `variant:${variant}`]
  )

  if (!data) {
    notFound()
  }

  return (
    <main>
      <HeroCMS hero={data.hero} />
      <PainPoints data={data.painPoints} />
      <Methodology data={data.methodology} />
      <Benefits data={data.benefits} />
      <Testimonials data={data.testimonials} />
      <FAQ data={data.faqs} />
      <CTASection data={data.ctaSection} />
    </main>
  )
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps) {
  const { variant } = await params
  const data = await sanityFetch<any>(newLandingPageQuery, { slug: variant }, ['landing-page'])

  if (!data?.seo) {
    return { title: 'Page Not Found' }
  }

  return {
    title: data.seo.metaTitle || data.title,
    description: data.seo.metaDescription || '',
    openGraph: {
      title: data.seo.metaTitle || data.title,
      description: data.seo.metaDescription || '',
      images: data.seo.ogImage ? [{ url: data.seo.ogImage }] : [],
    },
  }
}
