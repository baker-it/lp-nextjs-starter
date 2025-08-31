import { client } from '@/lib/sanity.client'
import { firstLandingPage } from '@/lib/sanity.queries'
import { seoToMetadata } from '@/lib/seo'

export async function generateMetadata() {
  const data = await client.fetch(firstLandingPage, {}, { next: { tags: ['landing'] } })
  return seoToMetadata(data?.seo, {
    title: 'Airtouch — szkolenia i warsztaty',
    description: 'Szkolenia Airtouch: terminy, program, zapisy.',
    url: 'https://example.com/',
    siteName: 'Airtouch',
    locale: 'pl_PL',
    twitter: { site: '@twojprofil', creator: '@twojprofil' },
  })
}

export default async function Page() {
  const data = await client.fetch(firstLandingPage, {}, { next: { tags: ['landing'] } })
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">SEO z CMS</h1>
      <pre className="mt-6 rounded bg-neutral-100 p-4 text-sm">{JSON.stringify(data?.seo, null, 2)}</pre>
    </main>
  )
}
