export const runtime = 'edge'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  if (!body?.email || !body?.name) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 })
  }
  return Response.json({ ok: true })
}
