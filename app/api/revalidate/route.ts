import { revalidateTag } from 'next/cache'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const secret = process.env.SANITY_REVALIDATE_SECRET
  const reqSecret = body?.secret
  const tag = body?.tag || 'landing'

  if (!secret || reqSecret !== secret) {
    return new Response('Invalid secret', { status: 401 })
  }

  revalidateTag(tag)
  return Response.json({ revalidated: true, tag, now: Date.now() })
}
