'use client'
import { useEffect, useRef } from 'react'
import { dlPush } from '@/lib/analytics'

export default function USP() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        dlPush({ event: 'section_view', section: 'usp' })
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="usp" ref={ref} className="container-xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
        Dlaczego to szkolenie jest inne?
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 text-neutral-700">
        <li>Techniki niedostępne jeszcze w Polsce.</li>
        <li>Jedno szkolenie u mistrza = <strong>20 000 zł</strong> + podróże.</li>
        <li>Nie każdy był wpuszczany na drugi etap — <strong>elitarnie</strong>.</li>
        <li>Tutaj: lokalnie, w małej grupie, po polsku.</li>
        <li>Certyfikat + workbook + dostęp do nagrania.</li>
      </ul>
      <div className="mt-8">
        <button
          id="cta-usp"
          className="btn-secondary"
          onClick={() =>
            dlPush({
              event: 'cta_click',
              position: 'usp',
              cta_id: 'cta-usp',
              cta_text: 'Chcę wejść na poziom mistrzów'
            })
          }
        >
          Chcę wejść na poziom mistrzów
        </button>
      </div>
    </section>
  )
}
