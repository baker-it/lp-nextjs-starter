import Link from 'next/link'
import ThankYouFire from '@/components/analytics/ThankYouFire'
import { client } from '@/lib/sanity.client'
import { firstLandingPage } from '@/lib/sanity.queries'
import Pricing from '@/components/cms/Pricing'
import FAQ from '@/components/cms/FAQ'
import SectionView from '@/components/cms/SectionView'

export const metadata = {
  title: 'Dziękujemy — Airtouch',
  description: 'Dziękujemy za wysłanie formularza. Skontaktujemy się wkrótce.',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function ThankYouPage() {
  const data = await client.fetch(firstLandingPage, {}, { next: { tags: ['landing'] } })
  return (
    <main className="min-h-screen py-16">
      <ThankYouFire />
      <section className="container max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Dziękujemy! 🎉</h1>
        <p className="mt-3 opacity-80">Twoja wiadomość została wysłana. Odezwiemy się wkrótce.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90">Wróć na stronę główną</Link>
          <a href="#faq" className="rounded-2xl border px-5 py-3 font-semibold hover:bg-neutral-50">Zobacz FAQ</a>
        </div>
      </section>
      {Array.isArray(data?.pricing) && data.pricing.length > 0 && (
        <SectionView keyName="pricing_thanks"><Pricing plans={data.pricing} /></SectionView>
      )}
      {Array.isArray(data?.faq) && data.faq.length > 0 && (
        <SectionView keyName="faq_thanks" as="section" id="faq"><FAQ data={{ items: data.faq }} /></SectionView>
      )}
    </main>
  )
}
