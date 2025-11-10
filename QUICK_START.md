# Quick Start: Sanity Webhook Setup

## 🚀 5-Minute Setup Guide

### Step 1: Environment Variables (2 min)

```bash
# Copy template
cp .env.example .env.local

# Generate webhook secret (Windows PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))

# OR (Linux/macOS)
openssl rand -hex 32
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz    # From Sanity dashboard
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skAbCdEf...               # Create in Sanity → API → Tokens
SANITY_WEBHOOK_SECRET=your_generated_secret # Paste from above command
```

### Step 2: Deploy (1 min)

```bash
vercel --prod
```

Add same env vars in Vercel dashboard: **Settings → Environment Variables**

### Step 3: Configure Webhook (2 min)

1. Go to: https://sanity.io/manage → Your Project → **API** → **Webhooks**
2. Click **Create webhook**
3. Fill in:

| Field | Value |
|-------|-------|
| **Name** | `Vercel Revalidation` |
| **URL** | `https://your-domain.vercel.app/api/revalidate` |
| **Dataset** | `production` |
| **Trigger on** | ✅ Create, ✅ Update, ✅ Delete |
| **Filter** | `_type == "landingPage"` |
| **Projection** | `{"_type": _type, "_id": _id, "slug": slug}` |
| **Secret** | Paste your `SANITY_WEBHOOK_SECRET` |
| **HTTP method** | `POST` |

4. **Save** → **Test webhook** (should return 200 OK)

### Step 4: Verify (30 sec)

1. Edit any landing page in Sanity Studio
2. Click **Publish**
3. Wait 5-10 seconds
4. Refresh `https://your-domain.vercel.app/[slug]` → Changes should be live!

---

## 🔍 Quick Debug

### Webhook not working?

```bash
# Check Vercel logs
vercel logs --follow

# Look for:
# ✅ [Webhook] Received validated payload
# ✅ [Webhook] Revalidating tag: variant:your-slug

# ❌ [Webhook] Invalid signature
#    → Check SANITY_WEBHOOK_SECRET matches in both Sanity and Vercel
```

### Check webhook delivery in Sanity:
**Sanity Studio → API → Webhooks → Delivery logs** (should show 200 OK)

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/api/revalidate/route.ts` | Webhook handler |
| `app/[variant]/page.tsx` | Dynamic landing page |
| `lib/sanity.fetch.ts` | Fetch with cache tags |
| `.env.local` | Your secrets (create from `.env.example`) |

---

## 🎯 What's Next?

1. **Build full layout** - Replace minimal UI in `app/[variant]/page.tsx`
2. **Add A/B testing** - Use `ab.active` field to switch variants
3. **Implement forms** - Add lead capture with hidden variant fields
4. **Configure analytics** - Set `NEXT_PUBLIC_GTM_ID` for tracking

See `WEBHOOK_IMPLEMENTATION.md` for complete documentation.

---

**Status:** ✅ Ready for production!

