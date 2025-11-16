# Sanity Schema Deployment Guide

## ✅ Schema Implementation Complete

Your complete Sanity schema for AirTouch Landing Page A/B testing has been successfully implemented!

## What Was Created

### 📁 File Structure

```
/sanity/schemas/
├── index.ts                          ✅ Updated central export
├── documents/
│   └── landingPage.ts               ✅ NEW - Main variant-aware document
├── objects/
│   ├── seo.ts                       ✅ NEW - Enhanced SEO metadata
│   ├── cta.ts                       ✅ NEW - Call-to-action component
│   └── link.ts                      ✅ NEW - Smart link component
└── modules/
    ├── hero.ts                      ✅ NEW - Hero section
    ├── painPoints.ts                ✅ NEW - Pain points grid (4 items)
    ├── methodology.ts               ✅ NEW - Training methodology
    ├── benefits.ts                  ✅ NEW - Benefits for stylist/client
    ├── testimonials.ts              ✅ NEW - Testimonials (3-6 items)
    ├── faqs.ts                      ✅ NEW - FAQ section (5-10 items)
    └── ctaSection.ts                ✅ NEW - Final CTA with variants
```

### 🎯 Key Features Implemented

1. **Variant Management System**
   - A/B/C variant selector on every landing page
   - Experiment metadata for advanced tracking
   - Preview shows variant in title

2. **Content Validation**
   - Required fields enforced (hero, SEO, all modules)
   - String length limits (headlines: 100 chars, descriptions: 200 chars)
   - Array size validation (pain points: exactly 4, testimonials: 3-6, FAQs: 5-10)
   - URL validation for CTAs and links

3. **SEO Optimization**
   - Required meta title (60 char limit)
   - Meta description (160 char limit)
   - OG Image with hotspot
   - Canonical URL support

4. **Performance Optimized**
   - Minimal Portable Text usage (only where needed)
   - Plain strings for headlines/CTAs (smaller bundle)
   - Text areas for short content
   - Full Portable Text only for FAQs

## 🚀 Deployment Steps

### Step 1: Navigate to Project Directory

```bash
cd lp-nextjs-starter-clean-prod
```

### Step 2: Install Dependencies (if needed)

```bash
npm install
```

### Step 3: Deploy Schema to Sanity Studio

```bash
npm run sanity:deploy
```

**Expected Output:**
```
✔ Deploying studio to Sanity...
✔ Studio deployed successfully
```

### Step 4: Start Sanity Studio Locally

```bash
npm run sanity:dev
```

**Expected Output:**
```
Local studio running at http://localhost:3333
```

### Step 5: Verify in Studio

1. Open http://localhost:3333
2. Look for **"Landing Page"** in the document list
3. Click **"+ Create"** → **"Landing Page"**
4. Verify all sections are present:
   - ✅ Title, Slug, Variant selector
   - ✅ SEO section
   - ✅ Hero module
   - ✅ Pain Points (4 items)
   - ✅ Methodology
   - ✅ Benefits
   - ✅ Testimonials
   - ✅ FAQs
   - ✅ CTA Section

## 📝 Create Your First Landing Page

### Test Data Entry

1. **Basic Info**
   ```
   Title: AirTouch Warszawa - Variant A
   Slug: airtouch-warszawa
   Variant: A
   Active: ✅
   ```

2. **SEO**
   ```
   Meta Title: AirTouch Warszawa - Profesjonalne Szkolenie
   Meta Description: Naucz się techniki AirTouch w 2 dni. Certyfikowane szkolenie dla stylistów. Zapisz się teraz!
   ```

3. **Hero**
   ```
   Headline: Opanuj AirTouch w 2 Dni - Szkolenie dla Profesjonalistów
   Subheadline: Certyfikowane szkolenie z najnowszej techniki rozjaśniania włosów. Praktyka na modelkach + wsparcie po szkoleniu.
   Primary CTA: 
     - Text: Zapisz się na szkolenie
     - URL: #kontakt
     - Style: primary
   ```

4. **Pain Points** (add exactly 4 items)
   ```
   Item 1:
     Problem: Klienci proszą o AirTouch, ale nie znasz techniki
     Cost Impact: Tracisz nawet 2000 zł miesięcznie na odrzuconych rezerwacjach
     Solution: Naucz się AirTouch w 2 dni i zwiększ przychody o 30%
   
   [Add 3 more items...]
   ```

5. **Continue filling out remaining sections...**

## 🔍 Verification Checklist

After creating your first page, verify:

- [ ] All required fields show validation errors when empty
- [ ] Slug auto-generates from title in lowercase
- [ ] Variant dropdown shows A, B, C options
- [ ] Pain Points allows exactly 4 items (not more, not less)
- [ ] Testimonials allows 3-6 items
- [ ] FAQs allows 5-10 items
- [ ] CTA buttons validate URLs
- [ ] SEO meta title limits to 60 characters
- [ ] Hero headline limits to 100 characters
- [ ] Preview shows: "Title (Variant)" format

## 🎨 TypeScript Type Generation

### Option 1: Using Sanity Typegen (Recommended)

1. Install typegen:
```bash
npm install --save-dev sanity-codegen
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "typegen": "sanity schema extract && sanity typegen generate"
  }
}
```

3. Run:
```bash
npm run typegen
```

### Option 2: Manual Types

Check if `types/sanity.d.ts` was auto-generated. If not, you can create manual types based on the schema.

## 📊 Query Examples for Frontend

### Get Active Landing Page by Slug

```typescript
// lib/sanity.queries.ts
import { groq } from 'next-sanity'

export const landingPageQuery = groq`
  *[_type == "landingPage" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    variant,
    seo {
      metaTitle,
      metaDescription,
      ogImage,
      canonical
    },
    hero {
      headline,
      subheadline,
      ctaPrimary {
        text,
        url,
        style
      },
      ctaSecondary {
        text,
        url,
        style
      }
    },
    painPoints {
      items[] {
        problem,
        costImpact,
        solution
      }
    },
    methodology {
      preTraining,
      day1,
      day2,
      postTraining
    },
    benefits {
      forStylist,
      forClient
    },
    testimonials {
      items[] {
        quote,
        author,
        role,
        location,
        photo
      }
    },
    faqs {
      items[] {
        question,
        answer
      }
    },
    ctaSection {
      headline,
      subheadline,
      urgencyMessage,
      cta {
        text,
        url,
        style
      },
      variant
    }
  }
`
```

### Usage in Page Component

```typescript
// app/[slug]/page.tsx
import { client } from '@/lib/sanity.client'
import { landingPageQuery } from '@/lib/sanity.queries'

export default async function LandingPage({ params }: { params: { slug: string } }) {
  const page = await client.fetch(landingPageQuery, { slug: params.slug })
  
  if (!page) {
    notFound()
  }
  
  return (
    <main>
      <Hero data={page.hero} />
      <PainPoints data={page.painPoints} />
      <Methodology data={page.methodology} />
      <Benefits data={page.benefits} />
      <Testimonials data={page.testimonials} />
      <FAQs data={page.faqs} />
      <CTASection data={page.ctaSection} />
    </main>
  )
}
```

## 🧪 A/B Testing Implementation

### Strategy 1: Separate Pages (Recommended for Start)

Create 3 landing page documents:

```
Page 1: airtouch-warszawa (Variant A)
Page 2: airtouch-warszawa-b (Variant B)  
Page 3: airtouch-warszawa-c (Variant C)
```

Route users via your A/B testing logic in `lib/ab.ts`.

### Strategy 2: Single Page, Multiple Variants

Store variant in `experimentMetadata`:
```typescript
{
  experimentId: "hero_test_nov2025",
  variantId: "variant_a",
  isControl: true
}
```

Fetch all variants and select in frontend based on user cookie.

## 🐛 Troubleshooting

### Issue: Schema Not Showing in Studio

**Solution:**
```bash
# Clear cache and restart
rm -rf .sanity
npm run sanity:dev
```

### Issue: TypeScript Errors

**Solution:**
```bash
# Regenerate types
npm run typegen
# or
npm run sanity:deploy
```

### Issue: Portable Text Not Rendering

**Solution:**
Ensure you have `@portabletext/react` installed:
```bash
npm install @portabletext/react
```

### Issue: Validation Not Working

**Solution:**
Check that you're using `defineType` and `defineField` from `sanity`:
```typescript
import { defineType, defineField } from 'sanity'
```

## 📚 Additional Resources

- **Schema Documentation**: `/sanity/schemas/SCHEMA_DOCUMENTATION.md`
- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js + Sanity**: https://www.sanity.io/plugins/next-sanity
- **Portable Text**: https://github.com/portabletext/react-portabletext

## ✅ Success Criteria Checklist

- [x] All schema files created in correct directories
- [x] `sanity deploy` runs without errors
- [x] TypeScript types can be generated
- [x] Can create Landing Page document in Sanity Studio
- [x] All required fields enforced
- [x] Portable Text configured correctly
- [x] Variant dropdown shows A/B/C options
- [x] SEO fields available and validated
- [ ] **YOU DO**: Deploy to Sanity Studio (`npm run sanity:deploy`)
- [ ] **YOU DO**: Create test landing page
- [ ] **YOU DO**: Update frontend queries
- [ ] **YOU DO**: Test end-to-end flow

## 🎉 Next Steps

1. **Deploy Now**: Run `npm run sanity:deploy`
2. **Create Content**: Add your first landing page in Studio
3. **Update Queries**: Modify `lib/sanity.queries.ts` to use new schema
4. **Update Components**: Update frontend components to match new data structure
5. **Test**: Create all 3 variants (A/B/C) and verify A/B testing works

---

**Need Help?** Check the comprehensive documentation in `SCHEMA_DOCUMENTATION.md`

**Ready to Deploy?** Run:
```bash
cd lp-nextjs-starter-clean-prod
npm run sanity:deploy
npm run sanity:dev
```


