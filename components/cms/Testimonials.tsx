export default function Testimonials({ data }: { data: any }) {
  if (!data?.items?.length) return null
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Co mówią uczestniczki?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((testimonial: any, i: number) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
              <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                {testimonial.photo?.asset?.url && (
                  <img 
                    src={testimonial.photo.asset.url} 
                    alt={testimonial.author || ''}
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                )}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  {testimonial.role && <p className="text-sm text-gray-600">{testimonial.role}</p>}
                  {testimonial.location && <p className="text-sm text-gray-600">{testimonial.location}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
