'use client'
import { useState } from 'react'
import { dlPush } from '@/lib/analytics'

const QA = [
  { q: 'Czy to szkolenie wyróżni mnie na tle innych?',
    a: 'Tak – uczysz się technik, które sprawiają, że konkurencja przestaje mieć znaczenie.' },
  { q: 'Czy dostanę certyfikat?',
    a: 'Tak – oficjalny certyfikat + workbook.' },
  { q: 'Czy muszę znać język obcy?',
    a: 'Nie – całość prowadzona jest lokalnie, po polsku.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="container-xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">FAQ</h2>
      <div className="space-y-3">
        {QA.map((item, idx) => (
          <details
            key={idx}
            open={open === idx}
            onToggle={(e) => {
              const isOpen = (e.target as HTMLDetailsElement).open
              setOpen(isOpen ? idx : null)
              dlPush({ event: 'faq_toggle', question_id: idx, open: isOpen })
            }}
            className="rounded-2xl border p-4"
          >
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2 text-neutral-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
