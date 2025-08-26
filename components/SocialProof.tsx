'use client'
import { useEffect, useRef } from 'react'
import { dlPush } from '@/lib/analytics'

export default function SocialProof() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        dlPush({ event: 'section_view', section: 'social_proof' })
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="social-proof" ref={ref} className="container-xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">Opinie</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <blockquote className="p-6 rounded-2xl bg-neutral-50 shadow-soft">
          „To szkolenie otworzyło mi oczy – inni fryzjerzy dopiero za tym gonią.”
        </blockquote>
        <blockquote className="p-6 rounded-2xl bg-neutral-50 shadow-soft">
          „Na Wschodzie płaci się fortunę. Tutaj dostałam to lokalnie.”
        </blockquote>
      </div>
    </section>
  )
}
