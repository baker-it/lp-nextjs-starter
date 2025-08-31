'use client'
import { AnimWrap } from '@/components/cms/Anim'
export default function USPList({ items=[] }: { items:any[] }){
  if(!items?.length) return null
  return (
    <section className="py-12">
      <div className="container grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <AnimWrap key={i} anim={it.animation} className="rounded-2xl border p-6 shadow-sm">
            <div className="text-xl font-semibold">{it.title}</div>
            {it.description && <p className="mt-2 opacity-80">{it.description}</p>}
          </AnimWrap>
        ))}
      </div>
    </section>
  )
}
