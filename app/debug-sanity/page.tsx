import { sanityFetch } from '@/lib/sanity.fetch'
import { groq } from 'next-sanity'

// Proste zapytanie o WSZYSTKIE landing page
const debugQuery = groq`*[_type == "landingPage"]{ 
  title, 
  "slug": slug.current,
  _id,
  variant
}`

export const revalidate = 0

export default async function DebugPage() {
  const data = await sanityFetch<any[]>(debugQuery, {}, ['landing-page'])

  return (
    <div className="p-10 font-mono">
      <h1 className="text-2xl font-bold mb-6">Dostępne strony w Sanity:</h1>
      
      {data && data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((page: any) => (
            <li key={page._id} className="border p-4 rounded bg-gray-50">
              <div><strong>Tytuł:</strong> {page.title}</div>
              <div><strong>Slug (adres):</strong> <span className="text-blue-600 bg-blue-100 px-1 rounded">{page.slug}</span></div>
              <div><strong>ID:</strong> {page._id}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-red-500 text-xl">
          Brak stron typu 'landingPage' w bazie Sanity.
          <br/>
          <span className="text-sm text-gray-600 mt-2 block">
            Musisz wejść do Sanity Studio (http://localhost:3333 lub npx sanity dev) i utworzyć chociaż jedną stronę.
          </span>
        </div>
      )}
    </div>
  )
}







