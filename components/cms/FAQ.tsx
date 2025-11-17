'use client'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'

export default function FAQ({ data }: { data: any }) {
  if (!data?.items?.length) return null
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-6">
          {data.items.map((faq: any, i: number) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <div className="text-base text-gray-700 prose prose-base max-w-none">
                <PortableText value={faq.answer} components={portableTextComponents} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
