export default function Benefits({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-16 bg-blue-50">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Korzyści dla Stylisty</h3>
            <ul className="space-y-2">
              {data.forStylist?.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Korzyści dla Klienta</h3>
            <ul className="space-y-2">
              {data.forClient?.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

