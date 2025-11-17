export default function PainPoints({ data }: { data: any }) {
  if (!data?.items?.length) return null
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Dlaczego to szkolenie jest inne?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item: any, i: number) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.problem}</h3>
              <p className="text-sm text-red-600 mb-3 font-semibold">{item.costImpact}</p>
              <p className="text-base text-gray-700">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

