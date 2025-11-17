export default function Benefits({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Co zyskujesz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dla Stylisty</h3>
            <ul className="space-y-3">
              {data.forStylist?.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dla Klientki</h3>
            <ul className="space-y-3">
              {data.forClient?.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

