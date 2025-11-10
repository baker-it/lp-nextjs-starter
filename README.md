# LP Next.js Starter (Vercel)

Modern landing page starter with **Next.js 15**, **Sanity CMS**, and **webhook-based revalidation** for instant content updates.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Sanity CMS (required)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token
SANITY_WEBHOOK_SECRET=generate_random_string_min_32_chars

# Analytics (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Generate webhook secret:**
```bash
# On Linux/macOS:
openssl rand -hex 32

# On Windows (PowerShell):
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

## 📋 Sanity Webhook Setup

### 1. Create Webhook in Sanity Studio

Go to: https://sanity.io/manage → Select your project → **API** → **Webhooks** → **Create webhook**

Configure:
- **Name:** `Vercel Revalidation`
- **URL:** `https://[your-domain].vercel.app/api/revalidate`
- **Dataset:** `production`
- **Trigger on:** `Create`, `Update`, `Delete`
- **Filter:** `_type == "landingPage"`
- **Projection:** `{"_type": _type, "_id": _id, "slug": slug}`
- **HTTP method:** `POST`
- **Secret:** Paste your `SANITY_WEBHOOK_SECRET` value
- **API version:** `v2021-03-25`

Click **Save** → **Test webhook** to verify setup.

### 2. Webhook Flow

```
User edits in Sanity Studio
         ↓
    Click "Publish"
         ↓
Sanity sends POST to /api/revalidate
         ↓
Route handler validates HMAC signature
         ↓
Extracts slug from payload
         ↓
Calls revalidateTag('landing-page')
Calls revalidateTag('variant:{slug}')
         ↓
Next.js invalidates cache
         ↓
Fresh content live in ~5-10 seconds
```

### 3. Verification Steps

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Edit a landing page in Sanity Studio:**
   - Change title or headline
   - Click **Publish**

3. **Check webhook delivery:**
   - Go to Sanity Studio → API → Webhooks → Your webhook
   - Click **Delivery logs**
   - Look for 200 OK response

4. **Verify content update:**
   - Visit your page: `https://[domain]/[variant-slug]`
   - Refresh after 5-10 seconds
   - Changes should be live!

5. **Debug issues:**
   - Check Vercel logs: `vercel logs [deployment-url]`
   - Look for: `[Webhook] Received validated payload`
   - If 401 error: verify `SANITY_WEBHOOK_SECRET` matches

## 🏗️ Architecture

### Tag-Based Revalidation Pattern

This project uses **tag-based revalidation** (NOT time-based or path-based):

```typescript
// In app/[variant]/page.tsx
export const revalidate = false // ← Disable time-based

const data = await sanityFetch(
  query,
  { slug: variant },
  ['landing-page', `variant:${variant}`] // ← Cache tags
)
```

**Benefits:**
- ✅ Instant updates (~5-10 seconds)
- ✅ Granular control (only changed pages invalidate)
- ✅ No full site rebuilds
- ✅ Production-proven pattern (Puma, AT&T use this)

### File Structure

```
├── app/
│   ├── [variant]/
│   │   └── page.tsx          # Dynamic landing page route
│   ├── api/
│   │   └── revalidate/
│   │       └── route.ts      # Webhook handler
│   └── layout.tsx
├── lib/
│   ├── sanity.client.ts      # Sanity client (useCdn: false)
│   ├── sanity.fetch.ts       # Fetch wrapper with cache tags
│   └── sanity.queries.ts     # GROQ queries
├── sanity/
│   └── schemas/
│       └── landingPage.ts    # Content model
└── .env.example
```

## 🧭 Tracking (GTM/dataLayer)

Built-in event tracking via `lib/analytics.ts`:
- `page_view` (injected in layout)
- `section_view` (USP, Social Proof, Pricing)
- `cta_click` (hero, usp, pricing, mid_page, final)
- `faq_toggle`
- `form_start`, `form_submit_*` (when form added)

## 📦 Scripts

```bash
# Development
npm run dev              # Start Next.js dev server
npm run sanity:dev       # Start Sanity Studio

# Production
npm run build            # Build Next.js app
npm run start            # Start production server
npm run sanity:deploy    # Deploy Sanity Studio

# Utilities
npm run lint             # Run ESLint
```

## 🚀 Deployment Checklist

- [ ] Set all environment variables in Vercel
- [ ] Deploy: `vercel --prod`
- [ ] Configure webhook in Sanity Studio (use production URL)
- [ ] Test webhook delivery (Sanity Studio → API → Webhooks → Delivery logs)
- [ ] Verify revalidation works (edit → publish → refresh page)
- [ ] Connect custom domain (if needed)
- [ ] Configure GTM container ID

## 🔍 Troubleshooting

### Webhook Returns 401 Unauthorized
- Verify `SANITY_WEBHOOK_SECRET` in Vercel matches Sanity webhook config
- Check Vercel logs for: `[Webhook] Invalid signature`

### Content Not Updating After Publish
- Check webhook delivery logs in Sanity Studio
- Verify webhook URL points to production domain (not preview)
- Confirm `useCdn: false` in `lib/sanity.client.ts`
- Check cache tags match in `page.tsx` and `route.ts`

### Build Fails
- Ensure all env vars are set (use dummy values for build if needed)
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is configured

### Page Shows 404
- Verify landing page exists in Sanity with matching slug
- Check GROQ query in `lib/sanity.queries.ts`
- Test query in Sanity Vision: `*[_type == "landingPage" && slug.current == "your-slug"][0]`

## 📚 Key Concepts

### Why `useCdn: false`?
CDN caching would bypass Next.js cache invalidation. We need direct API access for ISR to work.

### Why `revalidate: false`?
We rely 100% on webhook-triggered tag invalidation, not time-based revalidation.

### Why Two Cache Tags?
- `landing-page` → Invalidate all landing pages at once (global)
- `variant:{slug}` → Invalidate specific page only (granular)

### HMAC Signature Validation?
Security measure to ensure webhooks actually come from Sanity, not malicious actors.

## 📄 License

MIT

## 🤝 Support

Issues? Check:
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Sanity Webhooks Guide](https://www.sanity.io/docs/webhooks)
- [Vercel Deployment Docs](https://vercel.com/docs)
