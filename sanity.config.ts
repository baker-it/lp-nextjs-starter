// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import schemas from './sanity/schemas'

// ✅ Dwa źródła prawdy: najpierw SANITY_STUDIO_*, inaczej wpiszemy domyślne:
const PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID ?? 'nfon9ew1'
const DATASET    = process.env.SANITY_STUDIO_DATASET    ?? 'production'

export default defineConfig({
  name: 'default',
  title: 'Airtouch CMS',
  projectId: PROJECT_ID,
  dataset: DATASET,
  // basePath: '/studio', // ← zostaw jeśli osadzasz Studio w Next.js; dla sanity.studio zbędne
  plugins: [deskTool(), visionTool(), media()],
  schema: { types: schemas },
})
