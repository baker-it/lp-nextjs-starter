import { sanityFetch } from '@/lib/sanity.fetch'
import { homePageQuery } from '@/lib/sanity.queries'

// CMS Components
import HeroCMS from '@/components/cms/HeroCMS'
import PainPoints from '@/components/cms/PainPoints'
import Methodology from '@/components/cms/Methodology'
import Benefits from '@/components/cms/Benefits'
import Testimonials from '@/components/cms/Testimonials'
import FAQ from '@/components/cms/FAQ'
import CTASection from '@/components/cms/CTASection'

// Fallback Components (legacy)
import Hero from '@/components/Hero'
import USP from '@/components/USP'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import MidCTA from '@/components/MidCTA'
import FAQFallback from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const revalidate = false

export default async function Page() {
  // Fetch the active landing page with new schema
  const data = await sanityFetch<any>(
    homePageQuery,
    {},
    ['landing-page', 'home']
  )

  // If no data from Sanity, show fallback hardcoded content
  if (!data) {
    return (
      <main>
        <Hero />
        <USP />
        <SocialProof />
        <Pricing />
        <MidCTA />
        <FAQFallback />
        <FinalCTA />
      </main>
    )
  }

  // Render with new Sanity data and professional styling
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
