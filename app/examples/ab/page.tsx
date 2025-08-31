import { client } from '@/lib/sanity.client'
import { firstLandingPage } from '@/lib/sanity.queries'
import { resolveVariant, variantKey } from '@/lib/ab'
import HeroCMS from '@/components/cms/HeroCMS'
import USPList from '@/components/cms/USPList'
import Testimonials from '@/components/cms/Testimonials'
import Pricing from '@/components/cms/Pricing'
import FAQ from '@/components/cms/FAQ'
import { ExperimentProvider } from '@/lib/experiment'

export default async function ABExample({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const data = await client.fetch(firstLandingPage, {}, { next: { tags: ['landing'] } })
  const sp = new URLSearchParams(Object.entries(searchParams).flatMap(([k,v]) => v === undefined ? [] : Array.isArray(v) ? v.map(val => [k, val]) : [[k, v]]))
  const chosen = resolveVariant(data?.ab, sp)
  const key = variantKey(data?.ab, chosen)
  const hero = chosen === 'B' && data?.heroB ? data.heroB : data?.heroA

  return (
    <ExperimentProvider keyName={key} variant={chosen}>
      <main>
        <HeroCMS hero={hero} />
        <USPList items={data?.usps} />
        <Testimonials items={data?.socialProof} />
        <Pricing plans={data?.pricing} />
        <FAQ items={data?.faq} />
      </main>
    </ExperimentProvider>
  )
}
