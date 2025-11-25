'use client'
import { useEffect, useRef } from 'react'
import { dlPush } from '@/lib/analytics'

export default function Pricing() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        dlPush({ event: 'section_view', section: 'pricing' })
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="pricing" ref={ref} className="container-xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
        Ile naprawdę kosztuje taka wiedza?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-red-50 border border-red-100">
          <h3 className="font-bold mb-2">Na Wschodzie</h3>
          <ul className="space-y-1">
            <li>❌ 20 000 zł za moduł</li>
            <li>❌ + 5–7 tys. zł podróże</li>
            <li>❌ Bariera językowa</li>
            <li>❌ Brak gwarancji kolejnego etapu</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 bg-green-50 border border-green-100">
          <h3 className="font-bold mb-2">Tutaj, lokalnie</h3>
          <ul className="space-y-1">
            <li>✅ 2 500 zł za pełne szkolenie</li>
            <li>✅ Zero kosztów podróży i noclegów</li>
            <li>✅ Język polski, mała grupa</li>
            <li>✅ Certyfikat + bonusy</li>
          </ul>
          <button
            id="cta-pricing"
            className="btn-primary mt-4"
            onClick={() =>
              dlPush({
                event: 'cta_click',
                position: 'pricing',
                cta_id: 'cta-pricing',
                cta_text: 'Rezerwuję miejsce za 2 500 zł'
              })
            }
          >
            Rezerwuję miejsce za 2 500 zł — zamiast 20 000 zł
          </button>
        </div>
      </div>
    </section>
  )
}
