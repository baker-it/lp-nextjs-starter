// app/page.tsx
import { client } from '@/lib/sanity.client'
import HeroCMS from '@/components/cms/HeroCMS'
import PainPoints from '@/components/cms/PainPoints'
import Methodology from '@/components/cms/Methodology'
import Benefits from '@/components/cms/Benefits'
import Testimonials from '@/components/cms/Testimonials'
import FAQ from '@/components/cms/FAQ'
import CTASection from '@/components/cms/CTASection'

// Fallback components if no Sanity data
import Hero from '@/components/Hero'
import USP from '@/components/USP'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import MidCTA from '@/components/MidCTA'
import FAQFallback from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const dynamic = 'force-dynamic'

export default async function Page() {
  // Fetch the active landing page with new schema
  const data = await client
    .fetch(
      `*[_type == "landingPage" && isActive == true] | order(_createdAt desc)[0]{
        hero { 
          headline, 
          subheadline, 
          ctaPrimary { text, url, style }, 
          ctaSecondary { text, url, style },
          heroImage
        },
        painPoints { 
          items[] { 
            problem, 
            costImpact, 
            solution 
          } 
        },
        methodology { 
          preTraining, 
          day1, 
          day2, 
          postTraining 
        },
        benefits { 
          forStylist, 
          forClient 
        },
        testimonials { 
          items[] { 
            quote, 
            author, 
            role, 
            location, 
            photo 
          } 
        },
        faqs { 
          items[] { 
            question, 
            answer 
          } 
        },
        ctaSection { 
          headline, 
          subheadline, 
          urgencyMessage, 
          cta { text, url, style },
          variant
        }
      }`,
      {},
      { next: { tags: ['landing'] } }
    )
    .catch(() => null)

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
