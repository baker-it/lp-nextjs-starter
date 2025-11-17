export default function PainPoints({ data }: { data: any }) {
  if (!data?.items?.length) return null
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item: any, i: number) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">{item.problem}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.costImpact}</p>
              <p className="text-sm text-blue-600">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

