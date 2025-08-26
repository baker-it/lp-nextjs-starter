'use client'
import { dlPush } from '@/lib/analytics'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="container-xl py-16">
      <div className="rounded-2xl bg-neutral-100 p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Ostatnie miejsca dostępne teraz.
        </h3>
        <p className="text-neutral-700 mb-6">
          Nie 20 000 zł, tylko 2 500 zł lokalnie.
        </p>
        <button
          id="cta-final"
          className="btn-primary"
          onClick={() =>
            dlPush({
              event: 'cta_click',
              position: 'final',
              cta_id: 'cta-final',
              cta_text: 'Rezerwuję miejsce'
            })
          }
        >
          Rezerwuję miejsce
        </button>
      </div>
    </section>
  )
}
