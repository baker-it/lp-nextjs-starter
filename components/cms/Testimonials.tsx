'use client'
import Image from 'next/image'
import { AnimWrap } from '@/components/cms/Anim'
export default function Testimonials({ items=[] }: { items:any[] }){
  if(!items?.length) return null
  return (
    <section className="py-12 bg-muted/20">
      <div className="container grid gap-6 md:grid-cols-3">
        {items.map((t:any, i:number) => (
          <AnimWrap key={i} anim={t.animation} className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-3">
              {t.avatar?.asset?.url && <Image src={`/_next/image?url=${encodeURIComponent(t.avatar.asset.url)}&w=96&q=75`} alt={t.name||''} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />}
              <div><div className="font-semibold">{t.name}</div>{t.role && <div className="text-sm opacity-70">{t.role}</div>}</div>
            </div>
            <p className="mt-4 text-sm opacity-90">“{t.quote}”</p>
          </AnimWrap>
        ))}
      </div>
    </section>
  )
}
