# AirTouch Landing Page Schema Documentation

## Overview

This schema implements a complete content management system for AirTouch landing pages with A/B/C testing capabilities. Built with Sanity v3, TypeScript, and Next.js 15.

## Architecture

### Directory Structure

```
/sanity/schemas/
├── index.ts                     # Central export
├── documents/
│   └── landingPage.ts          # Main document (variant-aware)
├── objects/
│   ├── seo.ts                  # SEO metadata
│   ├── cta.ts                  # Call-to-action object
│   └── link.ts                 # Smart link object
└── modules/
    ├── hero.ts                 # Hero section
    ├── painPoints.ts           # 4-item pain/solution grid
    ├── methodology.ts          # Training process (4 phases)
    ├── benefits.ts             # Stylist + Client benefits
    ├── testimonials.ts         # Testimonial array
    ├── faqs.ts                 # FAQ accordion
    └── ctaSection.ts           # Final CTA section
```

## Schema Types

### Documents (type: 'document')

Standalone content with revision history and unique IDs.

#### Landing Page
- **File**: `documents/landingPage.ts`
- **Name**: `landingPage`
- **Purpose**: Main landing page document with A/B/C variant support
- **Required Fields**:
  - `title` - Internal name for the page
  - `slug` - URL slug (auto-generated from title, lowercase enforced)
  - `variant` - A/B/C variant selector (enum: 'A', 'B', 'C')
  - `seo` - SEO metadata object
  - All module fields (hero, painPoints, methodology, etc.)

### Objects (type: 'object')

Reusable embedded components without standalone IDs.

#### SEO Object
- **File**: `objects/seo.ts`
- **Name**: `seo`
- **Fields**:
  - `metaTitle` (required, max 60 chars)
  - `metaDescription` (max 160 chars)
  - `ogImage` (image with hotspot)
  - `canonical` (URL)

#### CTA Object
- **File**: `objects/cta.ts`
- **Name**: `cta`
- **Fields**:
  - `text` (required, max 50 chars)
  - `url` (required, validated for relative/absolute URLs)
  - `style` (enum: 'primary', 'secondary', 'text')

#### Link Object
- **File**: `objects/link.ts`
- **Name**: `link`
- **Fields**:
  - `text` (required)
  - `url` (required, validated)
  - `openInNewTab` (boolean, default: false)

### Modules (Page Sections)

#### Hero Module
- **File**: `modules/hero.ts`
- **Name**: `heroModule`
- **Fields**:
  - `headline` (required, max 100 chars) - Main H1 headline
  - `subheadline` (required, max 200 chars) - Supporting text
  - `ctaPrimary` (required, CTA object) - Primary action button
  - `ctaSecondary` (optional, CTA object) - Secondary button

#### Pain Points Module
- **File**: `modules/painPoints.ts`
- **Name**: `painPointsModule`
- **Structure**: Array of exactly 4 items (validated)
- **Item Fields**:
  - `problem` (required, max 100 chars)
  - `costImpact` (required, max 150 chars)
  - `solution` (required, max 150 chars)

#### Methodology Module
- **File**: `modules/methodology.ts`
- **Name**: `methodologyModule`
- **Fields**: All use Portable Text with basic formatting (bold, italic, lists)
  - `preTraining` (optional) - Pre-training preparation
  - `day1` (required) - Day 1 program
  - `day2` (required) - Day 2 program
  - `postTraining` (optional) - Post-training support

#### Benefits Module
- **File**: `modules/benefits.ts`
- **Name**: `benefitsModule`
- **Fields**:
  - `forStylist` (array of strings, 3-7 items required)
  - `forClient` (array of strings, 3-7 items required)

#### Testimonials Module
- **File**: `modules/testimonials.ts`
- **Name**: `testimonialsModule`
- **Structure**: Array of 3-6 items (validated)
- **Item Fields**:
  - `quote` (required, text, max 500 chars)
  - `author` (required, string)
  - `role` (required, string) - e.g., "Stylistka"
  - `location` (optional, string)
  - `photo` (optional, image with hotspot)

#### FAQs Module
- **File**: `modules/faqs.ts`
- **Name**: `faqsModule`
- **Structure**: Array of 5-10 items (validated)
- **Item Fields**:
  - `question` (required, max 200 chars)
  - `answer` (required, Portable Text with full formatting, links allowed)

#### CTA Section Module
- **File**: `modules/ctaSection.ts`
- **Name**: `ctaSectionModule`
- **Fields**:
  - `headline` (required, max 100 chars)
  - `subheadline` (optional, max 200 chars)
  - `urgencyMessage` (optional, max 150 chars)
  - `cta` (required, CTA object)
  - `variant` (enum: 'scarcity', 'low-risk', 'value-stack', 'fomo')

## Variant Management System

### Variant Field
Each landing page has a `variant` field with three options:
- **A** - First variant (typically control)
- **B** - Second variant
- **C** - Third variant

### Experiment Metadata
Optional object for advanced experiment tracking:
- `experimentId` - External experiment ID (e.g., from analytics platform)
- `variantId` - External variant ID
- `isControl` - Boolean flag for control variant
- `notes` - Internal notes about the experiment

### Content Strategy
Create 3 separate landing page documents for A/B/C testing:
1. **Page A** (Control) - Variant: A, slug: `airtouch-warszawa`
2. **Page B** (Test) - Variant: B, slug: `airtouch-warszawa-b`
3. **Page C** (Test) - Variant: C, slug: `airtouch-warszawa-c`

## Field Type Strategy

### Performance Optimization

**Plain Text (`string`)** - Used for:
- Headlines (hero, CTA sections)
- Short descriptions
- Button text
- Minimal bundle size impact

**Text Area (`text`)** - Used for:
- Testimonial quotes
- Short descriptions (100-500 chars)
- Meta descriptions

**Basic Portable Text** - Used for:
- Methodology phases
- Limited formatting (bold, italic, lists only)
- Medium bundle impact

**Full Portable Text** - Used sparingly for:
- FAQ answers (links allowed)
- Rich content requiring complex formatting

### Validation Rules

Implemented validations:
- **Required fields**: Hero headline, primary CTAs, all module sections
- **String length limits**: Enforced via `maxLength()`
- **Array size limits**: Pain points (exactly 4), testimonials (3-6), FAQs (5-10)
- **URL validation**: Custom validators for CTA and link URLs
- **Slug validation**: Lowercase enforcement, uniqueness recommended

## TypeScript Integration

### Auto-generated Types
Run the following to generate TypeScript types:

```bash
npm run sanity:deploy
```

This will:
1. Deploy schema to Sanity Studio
2. Generate `sanity.types.ts` (if codegen is configured)
3. Enable full TypeScript autocomplete in queries

### Type Usage Example

```typescript
import { LandingPage } from './types/sanity'

const query = groq`*[_type == "landingPage" && variant == "A"][0]`
const page: LandingPage = await client.fetch(query)
```

## Content Entry Workflow

### Creating a New Landing Page

1. **Open Sanity Studio**: `npm run sanity:dev`
2. **Create New Landing Page**:
   - Set internal title: "AirTouch Warszawa - Variant A"
   - Generate slug: `airtouch-warszawa`
   - Select variant: A
   - Set as active: ✅
3. **Fill SEO Fields**:
   - Meta title (required)
   - Meta description
   - OG Image
4. **Configure Hero**:
   - Headline (max 100 chars)
   - Subheadline (max 200 chars)
   - Primary CTA (required)
   - Secondary CTA (optional)
5. **Add Pain Points** (exactly 4):
   - Problem, Cost Impact, Solution for each
6. **Fill Remaining Modules**:
   - Methodology (4 phases)
   - Benefits (for stylist + client)
   - Testimonials (3-6 items)
   - FAQs (5-10 items)
   - CTA Section

### A/B Testing Setup

**Option 1: Separate Pages**
- Create 3 documents with variants A/B/C
- Use different slugs for each
- Route users via your A/B testing system

**Option 2: Hybrid (Future)**
- Single page document
- Use `experimentMetadata` for per-section testing
- Implement variant selection in frontend

## Querying the Schema

### Basic Query - Get Single Variant

```groq
*[_type == "landingPage" && slug.current == $slug && isActive == true][0] {
  _id,
  title,
  variant,
  seo,
  hero,
  painPoints,
  methodology,
  benefits,
  testimonials,
  faqs,
  ctaSection
}
```

### Get All Active Pages

```groq
*[_type == "landingPage" && isActive == true] | order(variant asc) {
  _id,
  title,
  variant,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription
  }
}
```

### Get Specific Variant

```groq
*[_type == "landingPage" && variant == "A" && isActive == true][0]
```

## Migration Notes

### Legacy Schema Compatibility
Old schema files are preserved for backward compatibility:
- `redirect.ts` - URL redirect document
- `objects/anim.ts` - Animation object
- `objects/hero.ts`, `objects/testimonial.ts`, etc. (old structure)

These are still exported in `index.ts` but not used in new landing pages.

### Deprecation Plan
1. ✅ New schema created (documents/landingPage.ts)
2. ⏳ Migrate existing content to new structure
3. ⏳ Update frontend queries to use new schema
4. ⏳ Remove old schema files after migration

## Deployment Checklist

Before deploying:
- [ ] All schema files created
- [ ] No linter errors: `npm run lint`
- [ ] Schema deployed: `npm run sanity:deploy`
- [ ] TypeScript types generated
- [ ] Test in Sanity Studio (create sample page)
- [ ] Verify all required fields enforced
- [ ] Test Portable Text rendering
- [ ] Verify preview functionality

## Performance Considerations

### Bundle Size
- **Minimal Portable Text**: ~20KB
- **Full Portable Text**: ~50KB
- **Strategy**: Use plain text/strings wherever possible

### Query Optimization
- Always filter by `isActive == true`
- Use projection to select only needed fields
- Consider caching via Next.js ISR

### Image Optimization
- All images use Sanity's built-in hotspot
- Use `@sanity/image-url` for responsive images
- Implement blur placeholders in frontend

## Support & Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **Schema Types**: https://www.sanity.io/docs/schema-types
- **Portable Text**: https://www.sanity.io/docs/block-content
- **TypeScript**: https://www.sanity.io/docs/sanity-typegen

---

**Schema Version**: 1.0.0  
**Last Updated**: 2025-11-16  
**Author**: AI Assistant (Cursor)


