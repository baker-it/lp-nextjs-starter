import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'

export default function Methodology({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Jak to działa?
        </h2>
        <div className="space-y-8">
          {data.preTraining && (
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Przed szkoleniem</h3>
              <div className="text-lg text-gray-700 prose prose-lg max-w-none">
                <PortableText value={data.preTraining} components={portableTextComponents} />
              </div>
            </div>
          )}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dzień 1 - Teoria i podstawy</h3>
            <div className="text-lg text-gray-700 prose prose-lg max-w-none">
              <PortableText value={data.day1} components={portableTextComponents} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dzień 2 - Praktyka</h3>
            <div className="text-lg text-gray-700 prose prose-lg max-w-none">
              <PortableText value={data.day2} components={portableTextComponents} />
            </div>
          </div>
          {data.postTraining && (
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Po szkoleniu</h3>
              <div className="text-lg text-gray-700 prose prose-lg max-w-none">
                <PortableText value={data.postTraining} components={portableTextComponents} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

