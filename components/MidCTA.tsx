'use client'
import { dlPush } from '@/lib/analytics'

export default function MidCTA() {
  return (
    <section id="mid-cta" className="container-xl py-16">
      <div className="rounded-2xl bg-black text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Twórz trendy, zamiast za nimi biec.</h3>
          <p className="text-neutral-200">
            Każdy fryzjer może kopiować YouTube. Tylko nieliczni dostają wiedzę, która zmienia grę.
          </p>
        </div>
        <button
          id="cta-mid"
          className="btn-primary bg-white text-black"
          onClick={() =>
            dlPush({
              event: 'cta_click',
              position: 'mid_page',
              cta_id: 'cta-mid',
              cta_text: 'Zapisuję się – liczba miejsc ograniczona'
            })
          }
        >
          Zapisuję się — liczba miejsc ograniczona
        </button>
      </div>
    </section>
  )
}
