'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import SanityImage from '@/components/cms/SanityImage'
import { CTA } from '@/components/cms/CTA'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
const variantsMap: any = {
  none: {}, fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  slideUp: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  reveal: { hidden: { clipPath: 'inset(0 0 100% 0)' }, show: { clipPath: 'inset(0 0 0% 0)' } },
}
export default function HeroCMS({ hero }: { hero: any }) {
  if (!hero) return null
  const anim = hero.animation || {}
  const v = variantsMap[anim.variant || 'fade'] || variantsMap.fade
  const transition: any = { delay: anim.delay ?? 0, duration: anim.duration ?? 0.6 }
  if (anim.easing) transition.ease = anim.easing
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10%' }}
        variants={v} transition={transition} className="container mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          {hero.eyebrow && <p className="text-sm uppercase tracking-wide text-muted-foreground">{hero.eyebrow}</p>}
          {hero.headline && <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">{hero.headline}</h1>}
          {hero.subheading && <p className="mt-4 text-base opacity-80 md:text-lg">{hero.subheading}</p>}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {hero.ctaPrimary && <CTA cta={hero.ctaPrimary} />}
            {hero.ctaSecondary && <CTA cta={hero.ctaSecondary} />}
          </div>
        </div>
        <div className="relative">{hero.image && (<div className="rounded-2xl shadow-xl"><SanityImage image={hero.image} alt={hero.headline || 'Hero image'} /></div>)}</div>
      </motion.div>
      {hero?.animation?.lottie && (
        <div className={hero.animation.lottieClass || 'pointer-events-none absolute -bottom-6 right-4 w-64 opacity-80'}>
          {/* @ts-ignore */}
          <Lottie animationData={hero.animation.lottie} loop={!!hero.animation.lottieLoop} />
        </div>
      )}
    </section>
  )
}
