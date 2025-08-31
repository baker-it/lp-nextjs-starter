import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

const query = groq`*[_type=="redirect" && slug.current==$slug && enabled==true][0]{toUrl, status, appendUtm, utm}`

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data = await client.fetch(query, { slug: params.slug }, { next: { revalidate: 60, tags: ['redirects'] } })
  if (!data?.toUrl) return new Response('Not found', { status: 404 })

  const base = data.toUrl
  let target: URL
  try { target = new URL(base) } catch { target = new URL(base, 'https://example.com') }
  if (data.appendUtm && data.utm) {
    Object.entries(data.utm).forEach(([k,v]: any)=>{ if(v) target.searchParams.set(`utm_${k}`, String(v)) })
  }
  return Response.redirect(target.toString(), data.status || 308)
}
