# Sanity Schema Quick Reference

## 🚀 Quick Start Commands

```bash
# Deploy schema to Sanity
npm run sanity:deploy

# Start local Studio
npm run sanity:dev

# Build Next.js app
npm run build
```

## 📋 Schema Types Overview

### Main Document

| Type | Name | Purpose |
|------|------|---------|
| `landingPage` | Landing Page | Main document with A/B/C variants |

### Objects (Reusable Components)

| Type | Name | Required Fields |
|------|------|-----------------|
| `seo` | SEO | metaTitle |
| `cta` | Call-to-Action | text, url, style |
| `link` | Link | text, url |

### Modules (Page Sections)

| Type | Name | Validation |
|------|------|------------|
| `heroModule` | Hero | headline, subheadline, ctaPrimary required |
| `painPointsModule` | Pain Points | Exactly 4 items |
| `methodologyModule` | Methodology | day1, day2 required |
| `benefitsModule` | Benefits | 3-7 items per array |
| `testimonialsModule` | Testimonials | 3-6 items |
| `faqsModule` | FAQs | 5-10 items |
| `ctaSectionModule` | CTA Section | headline, cta required |

## 🎯 Field Limits Cheat Sheet

| Field | Type | Max Length | Required |
|-------|------|------------|----------|
| Hero headline | string | 100 | ✅ |
| Hero subheadline | string | 200 | ✅ |
| CTA text | string | 50 | ✅ |
| SEO meta title | string | 60 | ✅ |
| SEO meta description | text | 160 | ❌ |
| Testimonial quote | text | 500 | ✅ |
| FAQ question | string | 200 | ✅ |
| Pain point problem | string | 100 | ✅ |
| Pain point impact | string | 150 | ✅ |
| Pain point solution | string | 150 | ✅ |

## 🔢 Array Size Rules

| Module | Min | Max | Exact |
|--------|-----|-----|-------|
| Pain Points items | - | - | 4 |
| Benefits forStylist | 3 | 7 | - |
| Benefits forClient | 3 | 7 | - |
| Testimonials items | 3 | 6 | - |
| FAQs items | 5 | 10 | - |

## 📝 Portable Text Usage

| Field | Formatting Level |
|-------|------------------|
| Methodology phases | Basic (bold, italic, lists) |
| FAQ answers | Full (headings, bold, italic, lists, links) |

## 🎨 Variant Options

### Landing Page Variant
- **A** - First variant (control)
- **B** - Second variant
- **C** - Third variant

### CTA Section Variant
- **scarcity** - Urgency/scarcity messaging
- **low-risk** - Low-risk guarantee messaging
- **value-stack** - Value proposition stacking
- **fomo** - Fear of missing out messaging

## 🔗 Common Queries

### Get Landing Page by Slug
```groq
*[_type == "landingPage" && slug.current == $slug && isActive == true][0]
```

### Get All Active Pages
```groq
*[_type == "landingPage" && isActive == true] | order(variant asc)
```

### Get Specific Variant
```groq
*[_type == "landingPage" && variant == "A" && isActive == true][0]
```

## 🛠️ Common Tasks

### Create New Landing Page
1. Title: "AirTouch [City] - Variant [A/B/C]"
2. Generate slug from title
3. Select variant (A/B/C)
4. Fill SEO (metaTitle required)
5. Fill all modules (all required)

### Duplicate for A/B Testing
1. Create first page (Variant A)
2. Duplicate in Studio
3. Change title: add " - Variant B"
4. Change slug: add "-b" suffix
5. Change variant: select "B"
6. Modify test content (hero, CTA, etc.)

### Update Existing Page
1. Find page in Studio
2. Edit fields
3. Publish changes
4. Revalidate in Next.js (if using ISR):
   ```typescript
   revalidatePath(`/${page.slug.current}`)
   ```

## ⚠️ Common Pitfalls

1. **Pain Points**: Must have exactly 4 items (not 3, not 5)
2. **Slug**: Must be lowercase, validated automatically
3. **SEO metaTitle**: Required field, max 60 chars
4. **Hero ctaPrimary**: Required, must have text and URL
5. **Array minimums**: Benefits (3 min), Testimonials (3 min), FAQs (5 min)

## 📊 Preview Format

Landing pages show in Studio as:
```
[Title] ([Variant])
[slug] [✅/⚠️ Active status]
```

Example:
```
AirTouch Warszawa (A)
airtouch-warszawa ✅
```

## 🔐 Required Fields Checklist

When creating a new page, these are **required**:
- [x] title
- [x] slug
- [x] variant
- [x] seo.metaTitle
- [x] hero.headline
- [x] hero.subheadline
- [x] hero.ctaPrimary
- [x] painPoints (4 items)
- [x] methodology.day1
- [x] methodology.day2
- [x] benefits.forStylist (3-7 items)
- [x] benefits.forClient (3-7 items)
- [x] testimonials (3-6 items)
- [x] faqs (5-10 items)
- [x] ctaSection.headline
- [x] ctaSection.cta

## 🎯 Content Entry Time Estimate

| Section | Time | Complexity |
|---------|------|------------|
| Basic info + SEO | 5 min | Easy |
| Hero | 5 min | Easy |
| Pain Points | 10 min | Medium |
| Methodology | 15 min | Medium |
| Benefits | 5 min | Easy |
| Testimonials | 10 min | Medium |
| FAQs | 15 min | High |
| CTA Section | 5 min | Easy |
| **Total** | **~70 min** | Per page |

## 💡 Pro Tips

1. **Use Duplicate**: Create Variant A completely, then duplicate for B/C
2. **Preview URLs**: Use format `/[slug]?v=[A/B/C]` for testing
3. **Slug Strategy**: Use city names: `airtouch-warszawa`, `airtouch-krakow`
4. **Experiment Metadata**: Use for tracking in analytics platforms
5. **Image Optimization**: Upload images at 1200x630 for OG images
6. **FAQ Rich Format**: Use Portable Text for formatting in answers
7. **CTA URLs**: Use relative URLs (`/kontakt`) for internal links

## 📞 Need Help?

- **Full Documentation**: `SCHEMA_DOCUMENTATION.md`
- **Deployment Guide**: `../DEPLOYMENT_GUIDE.md`
- **Sanity Support**: https://www.sanity.io/help

---

**Version**: 1.0.0  
**Last Updated**: 2025-11-16


