'use client'
import { CTA } from '@/components/cms/CTA'
import { AnimWrap } from '@/components/cms/Anim'
export default function Pricing({ plans=[] }: { plans:any[] }){
  if(!plans?.length) return null
  return (
    <section className="py-16">
      <div className="container grid gap-6 md:grid-cols-3">
        {plans.map((p:any, i:number) => (
          <AnimWrap key={i} anim={p.animation} className={"rounded-2xl border p-6 shadow-sm " + (p.highlighted ? "ring-2 ring-black" : "")}>
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="mt-2 text-3xl font-bold">{p.price}<span className="text-base font-medium opacity-70"> {p.period}</span></div>
            <ul className="mt-4 space-y-1 text-sm opacity-90">{(p.features||[]).map((f:string, idx:number)=>(<li key={idx}>• {f}</li>))}</ul>
            {p.cta && <div className="mt-6"><CTA cta={p.cta} /></div>}
          </AnimWrap>
        ))}
      </div>
    </section>
  )
}
