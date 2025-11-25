import Link from 'next/link'

export default function CTASection({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {data.headline}
        </h2>
        {data.subheadline && (
          <p className="text-xl text-gray-700 mb-4">{data.subheadline}</p>
        )}
        {data.urgencyMessage && (
          <p className="text-lg text-red-600 font-semibold mb-8">{data.urgencyMessage}</p>
        )}
        {data.cta && (
          <Link 
            href={data.cta.url || '#'} 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-5 px-10 rounded-lg text-xl transition-colors shadow-lg"
          >
            {data.cta.text}
          </Link>
        )}
      </div>
    </section>
  )
}

