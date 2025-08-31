'use client'
import { AnimWrap } from '@/components/cms/Anim'
export default function FAQ({ items=[] }: { items:any[] }){
  if(!items?.length) return null
  return (
    <section className="py-16">
      <div className="container max-w-3xl">
        {items.map((q:any, i:number)=>(
          <AnimWrap key={i} anim={q.animation} className="border-b py-4">
            <details><summary className="cursor-pointer text-lg font-medium">{q.question}</summary><p className="mt-2 opacity-80">{q.answer}</p></details>
          </AnimWrap>
        ))}
      </div>
    </section>
  )
}
