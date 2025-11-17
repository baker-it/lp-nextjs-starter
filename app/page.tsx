// app/page.tsx
import Hero from '@/components/Hero'
import USP from '@/components/USP'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import MidCTA from '@/components/MidCTA'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

import { client } from '@/lib/sanity.client'
import { firstLandingPage } from '@/lib/sanity.queries'
import { resolveVariant, variantKey } from '@/lib/ab'
import { ExperimentProvider } from '@/lib/experiment'

// CMS-owe wersje sekcji (z paczki v9)
import HeroCMS from '@/components/cms/HeroCMS'
import USPList from '@/components/cms/USPList'
import Testimonials from '@/components/cms/Testimonials'
import PricingCMS from '@/components/cms/Pricing'
import FAQCMS from '@/components/cms/FAQ'

type SP = Record<string, string | string[] | undefined>

function toSearchParams(sp: SP) {
  return new URLSearchParams(
    Object.entries(sp).flatMap(([k, v]) =>
      v === undefined ? [] : Array.isArray(v) ? v.map(val => [k, val]) : [[k, v]]
    )
  )
}

export const dynamic = 'force-dynamic'

export default async function Page({ searchParams }: { searchParams: Promise<SP> }) {
  // Resolve searchParams promise (Next.js 15 requirement)
  const resolvedSearchParams = await searchParams
  
  // 1) Pobierz dane z Sanity; jak cokolwiek pójdzie nie tak → null
  const data = await client
    .fetch(firstLandingPage, {}, { next: { tags: ['landing'] } })
    .catch(() => null)

  // 2) Jeśli NIE ma danych → render B (Twój dotychczasowy layout)
  if (!data) {
    return (
      <main>
        <Hero />
        <USP />
        <SocialProof />
        <Pricing />
        <MidCTA />
        <FAQ />
        <FinalCTA />
      </main>
    )
  }

  // 3) Jeśli są dane → render A (CMS) + A/B + tracking wariantu
  const chosen = resolveVariant(data?.ab, toSearchParams(resolvedSearchParams))
  const key = variantKey(data?.ab, chosen as 'A' | 'B')
  const hero = chosen === 'B' && data?.heroB ? data.heroB : data?.heroA

  return (
    <ExperimentProvider keyName={key} variant={chosen as 'A' | 'B'}>
      <main>
        <HeroCMS hero={hero} />
        <USPList items={data?.usps} />
        <Testimonials data={{ items: data?.socialProof }} />
        <PricingCMS plans={data?.pricing} />
        <FAQCMS data={{ items: data?.faq }} />
      </main>
    </ExperimentProvider>
  )
}
