import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'

export default function Methodology({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-16">
      <div className="container max-w-4xl space-y-8">
        {data.preTraining && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Przed szkoleniem</h3>
            <PortableText value={data.preTraining} components={portableTextComponents} />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dzień 1</h3>
          <PortableText value={data.day1} components={portableTextComponents} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Dzień 2</h3>
          <PortableText value={data.day2} components={portableTextComponents} />
        </div>
        {data.postTraining && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Po szkoleniu</h3>
            <PortableText value={data.postTraining} components={portableTextComponents} />
          </div>
        )}
      </div>
    </section>
  )
}

