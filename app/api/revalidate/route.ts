import { revalidateTag } from 'next/cache'
import { createHmac } from 'crypto'

/**
 * Sanity Webhook Handler for Tag-Based Revalidation
 * 
 * Flow:
 * 1. Sanity publishes/updates a landingPage document
 * 2. Webhook POST is sent to this endpoint
 * 3. Validate HMAC signature (security)
 * 4. Extract slug from payload
 * 5. Revalidate both global tag ('landing-page') and specific variant tag ('variant:{slug}')
 * 6. Next.js invalidates cache → fresh content in ~5-10 seconds
 */

interface SanityWebhookPayload {
  _type: string
  _id: string
  slug?: {
    current: string
  }
}

export async function POST(req: Request) {
  try {
    // 1. Read raw body for HMAC validation
    const body = await req.text()
    const signature = req.headers.get('sanity-webhook-signature')
    
    // 2. Validate HMAC signature
    const secret = process.env.SANITY_WEBHOOK_SECRET
    
    if (!secret) {
      console.error('[Webhook] SANITY_WEBHOOK_SECRET not configured')
      return Response.json(
        { error: 'Webhook secret not configured', revalidated: false },
        { status: 500 }
      )
    }

    if (!signature) {
      console.error('[Webhook] Missing sanity-webhook-signature header')
      return Response.json(
        { error: 'Missing signature', revalidated: false },
        { status: 401 }
      )
    }

    // Verify HMAC signature
    const hmac = createHmac('sha256', secret)
    hmac.update(body)
    const expectedSignature = hmac.digest('hex')

    if (signature !== expectedSignature) {
      console.error('[Webhook] Invalid signature')
      return Response.json(
        { error: 'Invalid signature', revalidated: false },
        { status: 401 }
      )
    }

    // 3. Parse webhook payload
    let payload: SanityWebhookPayload
    try {
      payload = JSON.parse(body)
    } catch (parseError) {
      console.error('[Webhook] Invalid JSON payload:', body)
      return Response.json(
        { error: 'Invalid JSON payload', revalidated: false },
        { status: 400 }
      )
    }

    console.log('[Webhook] Received validated payload:', JSON.stringify(payload, null, 2))

    // 4. Extract slug for dynamic tag generation
    const slug = payload.slug?.current

    if (!slug) {
      console.warn('[Webhook] No slug found in payload, revalidating global tag only')
      revalidateTag('landing-page')
      return Response.json({
        revalidated: true,
        tags: ['landing-page'],
        timestamp: Date.now(),
      })
    }

    // 5. Revalidate both global and variant-specific tags
    const tags = ['landing-page', `variant:${slug}`]
    
    tags.forEach(tag => {
      console.log(`[Webhook] Revalidating tag: ${tag}`)
      revalidateTag(tag)
    })

    // 6. Return success response
    return Response.json({
      revalidated: true,
      tags,
      slug,
      timestamp: Date.now(),
    })

  } catch (error) {
    console.error('[Webhook] Unexpected error:', error)
    return Response.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
        revalidated: false,
      },
      { status: 500 }
    )
  }
}
