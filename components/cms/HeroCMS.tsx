'use client'
import Link from 'next/link'

export default function HeroCMS({ hero }: { hero: any }) {
  if (!hero) return null
  
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {hero.headline}
        </h1>
        {hero.subheadline && (
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            {hero.subheadline}
          </p>
        )}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {hero.ctaPrimary && (
            <Link 
              href={hero.ctaPrimary.url || '#'} 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              {hero.ctaPrimary.text}
            </Link>
          )}
          {hero.ctaSecondary && (
            <Link 
              href={hero.ctaSecondary.url || '#'} 
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              {hero.ctaSecondary.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
