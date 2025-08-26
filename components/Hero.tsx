'use client'
import { motion } from 'framer-motion'
import { dlPush } from '@/lib/analytics'

export default function Hero() {
  return (
    <section id="hero" className="container-xl pt-16 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand">
            Techniki fryzjerskie, których w Polsce jeszcze nie ma
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-700">
            Nie wyprzedzaj konkurencji. Spraw, by przestała mieć znaczenie.
          </p>
          <p className="mt-3 text-neutral-600">
            Szkolenie prosto od mistrzów ze Wschodu. Bez podróży. Bez barier.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              id="cta-hero"
              className="btn-primary"
              onClick={() =>
                dlPush({
                  event: 'cta_click',
                  position: 'hero',
                  cta_id: 'cta-hero',
                  cta_text: 'Rezerwuję miejsce'
                })
              }
            >
              Rezerwuję miejsce — nie 20 000 zł, tylko 2 500 zł lokalnie
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="aspect-video rounded-2xl bg-neutral-100 shadow-soft"
        />
      </div>
    </section>
  )
}
