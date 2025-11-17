'use client'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'
import { AnimWrap } from '@/components/cms/Anim'

export default function FAQ({ data }: { data: any }) {
  if (!data?.items?.length) return null
  return (
    <section className="py-16">
      <div className="container max-w-3xl">
        {data.items.map((q: any, i: number) => (
          <AnimWrap key={i} anim={q.animation} className="border-b py-4">
            <details>
              <summary className="cursor-pointer text-lg font-medium">{q.question}</summary>
              <div className="mt-2 opacity-80">
                <PortableText value={q.answer} components={portableTextComponents} />
              </div>
            </details>
          </AnimWrap>
        ))}
      </div>
    </section>
  )
}
