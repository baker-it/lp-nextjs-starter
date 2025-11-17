import { CTA } from './CTA'

export default function CTASection({ data }: { data: any }) {
  if (!data) return null
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">{data.headline}</h2>
        {data.subheadline && <p className="text-xl mb-2 opacity-90">{data.subheadline}</p>}
        {data.urgencyMessage && <p className="text-lg mb-6 font-semibold">{data.urgencyMessage}</p>}
        <div className="flex justify-center">
          {data.cta && <CTA cta={data.cta} />}
        </div>
      </div>
    </section>
  )
}

