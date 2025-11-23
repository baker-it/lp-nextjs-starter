/**
 * Skrypt do tworzenia przykładowych dokumentów Media Asset z tagami dla V2
 * 
 * Uruchom: npx tsx scripts/create-v2-media-tags.ts
 * (lub: npm install -D tsx && npm run create-media-tags)
 * 
 * Wymaga: Sanity Studio musi być uruchomiony i skonfigurowany
 */

import { createClient, SanityClient } from '@sanity/client'

interface MediaAssetTemplate {
  _type: 'mediaAsset'
  title: string
  category: 'hero' | 'benefits' | 'social-proof' | 'instructor' | 'before-after' | 'other'
  tags: string[]
  notes: string
}

const client: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nfon9ew1',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // Wymagany token z write permissions
})

const mediaAssetTemplates: MediaAssetTemplate[] = [
  {
    _type: 'mediaAsset',
    title: 'Hero - AirTouch V2',
    category: 'hero',
    tags: ['airtouch-v2', 'playground', 'hero'],
    notes: 'Główne zdjęcie hero section dla playground V2. Wymagane: 1600x900px minimum.',
  },
  {
    _type: 'mediaAsset',
    title: 'Benefit 1 - Integralność Włosów',
    category: 'benefits',
    tags: ['airtouch-v2', 'playground', 'benefits', 'benefit-1'],
    notes: 'Zdjęcie dla pierwszego benefitu: Niezrównana Integralność Włosów',
  },
  {
    _type: 'mediaAsset',
    title: 'Benefit 2 - Ultra-Naturalny Odrost',
    category: 'benefits',
    tags: ['airtouch-v2', 'playground', 'benefits', 'benefit-2'],
    notes: 'Zdjęcie dla drugiego benefitu: Ultra-Naturalny Odrost',
  },
  {
    _type: 'mediaAsset',
    title: 'Benefit 3 - Powtarzalna Precyzja',
    category: 'benefits',
    tags: ['airtouch-v2', 'playground', 'benefits', 'benefit-3'],
    notes: 'Zdjęcie dla trzeciego benefitu: Powtarzalna Precyzja',
  },
  {
    _type: 'mediaAsset',
    title: 'Benefit 4 - Premium Ceny',
    category: 'benefits',
    tags: ['airtouch-v2', 'playground', 'benefits', 'benefit-4'],
    notes: 'Zdjęcie dla czwartego benefitu: Premium Ceny Usług',
  },
  {
    _type: 'mediaAsset',
    title: 'Before - Przed AirTouch',
    category: 'before-after',
    tags: ['airtouch-v2', 'playground', 'social-proof', 'before'],
    notes: 'Zdjęcie "przed" dla sekcji Social Proof',
  },
  {
    _type: 'mediaAsset',
    title: 'After - Po AirTouch',
    category: 'before-after',
    tags: ['airtouch-v2', 'playground', 'social-proof', 'after'],
    notes: 'Zdjęcie "po" dla sekcji Social Proof',
  },
  {
    _type: 'mediaAsset',
    title: 'Instructor - Anya Petrova',
    category: 'instructor',
    tags: ['airtouch-v2', 'playground', 'instructor'],
    notes: 'Zdjęcie instruktorki Anya Petrova',
  },
]

async function createMediaAssets(): Promise<void> {
  console.log('🚀 Tworzenie przykładowych Media Assets z tagami...\n')

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('❌ Błąd: SANITY_API_WRITE_TOKEN nie jest ustawiony!')
    console.log('💡 Ustaw token w .env.local:')
    console.log('   SANITY_API_WRITE_TOKEN=your-token-here')
    console.log('\n📖 Jak zdobyć token:')
    console.log('   1. Wejdź do https://sanity.io/manage')
    console.log('   2. Wybierz projekt')
    console.log('   3. API → Tokens → Add API token')
    console.log('   4. Ustaw permissions: Editor')
    process.exit(1)
  }

  let created = 0
  let skipped = 0

  for (const template of mediaAssetTemplates) {
    try {
      // Sprawdź, czy już istnieje dokument z tymi tagami
      const existing = await client.fetch<{ _id: string } | null>(
        `*[_type == "mediaAsset" && title == $title][0]`,
        { title: template.title }
      )

      if (existing) {
        console.log(`⏭️  Pomijam: "${template.title}" (już istnieje)`)
        skipped++
        continue
      }

      // Utwórz dokument (bez obrazu - trzeba go dodać ręcznie w Studio)
      await client.create({
        ...template,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: null, // Placeholder - trzeba dodać obraz w Studio
          },
        },
      })

      console.log(`✅ Utworzono: "${template.title}"`)
      console.log(`   Tagi: ${template.tags.join(', ')}`)
      created++
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error(`❌ Błąd przy tworzeniu "${template.title}":`, errorMessage)
    }
  }

  console.log(`\n📊 Podsumowanie:`)
  console.log(`   ✅ Utworzono: ${created}`)
  console.log(`   ⏭️  Pominięto: ${skipped}`)
  console.log(`\n💡 Następne kroki:`)
  console.log(`   1. Wejdź do Sanity Studio → Media Assets`)
  console.log(`   2. Edytuj każdy dokument i dodaj obraz`)
  console.log(`   3. Skopiuj Image URLs i wklej do v2-notion-proto/page.tsx`)
}

createMediaAssets().catch((error) => {
  console.error('❌ Fatalny błąd:', error)
  process.exit(1)
})

