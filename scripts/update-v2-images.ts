/**
 * Skrypt do automatycznego pobierania URL-i obrazów z Sanity i aktualizacji playground v2
 * 
 * Uruchom: npm run update-v2-images
 * 
 * Wymaga:
 * - Media assets z tagiem 'airtouch-v2' w Sanity Studio
 * - Obrazy muszą być już wgrane do Sanity
 * - Alt text powinien być wypełniony w Sanity Studio (opcjonalnie)
 */

import { config } from 'dotenv'
import { resolve } from 'node:path'
import { readFileSync, existsSync, writeFileSync } from 'node:fs'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Załaduj zmienne z .env.local
const envPath = resolve(process.cwd(), '.env.local')
if (existsSync(envPath)) {
  config({ path: envPath, override: true })
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nfon9ew1'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder({
  projectId,
  dataset,
})

interface MediaAsset {
  _id: string
  title: string
  category: 'hero' | 'benefits' | 'social-proof' | 'instructor' | 'before-after' | 'other'
  tags: string[]
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
}

interface ImageMapping {
  hero?: { url: string; alt: string }
  benefit1?: { url: string; alt: string }
  benefit2?: { url: string; alt: string }
  benefit3?: { url: string; alt: string }
  benefit4?: { url: string; alt: string }
  before?: { url: string; alt: string }
  after?: { url: string; alt: string }
  instructor?: { url: string; alt: string }
}

async function fetchMediaAssets(): Promise<MediaAsset[]> {
  console.log('🔍 Pobieranie media assets z tagiem "airtouch-v2"...\n')
  
  // Poprawione zapytanie - asset w image nie wymaga dereferencji
  const query = `*[_type == "mediaAsset" && "airtouch-v2" in tags] {
    _id,
    title,
    category,
    tags,
    image {
      asset {
        _ref,
        _type
      },
      alt
    }
  }`
  
  const assets = await client.fetch<MediaAsset[]>(query)
  console.log(`✅ Znaleziono ${assets.length} media assets\n`)
  
  // DEBUG: Pokaż strukturę pierwszego assetu
  if (assets.length > 0) {
    console.log('🔍 DEBUG - Struktura pierwszego assetu:')
    console.log(JSON.stringify(assets[0], null, 2))
    console.log('')
  }
  
  return assets
}

function mapAssetsToImages(assets: MediaAsset[]): ImageMapping {
  const mapping: ImageMapping = {}
  
  for (const asset of assets) {
    // DEBUG: Sprawdź strukturę image
    if (!asset.image) {
      console.warn(`⚠️  ${asset.title} - brak pola 'image'`)
      console.log(`   Struktura assetu:`, JSON.stringify(asset, null, 2))
      continue
    }
    
    if (!asset.image.asset) {
      console.warn(`⚠️  ${asset.title} - brak pola 'image.asset'`)
      console.log(`   Struktura image:`, JSON.stringify(asset.image, null, 2))
      continue
    }
    
    if (!asset.image.asset._ref) {
      console.warn(`⚠️  ${asset.title} - brak 'image.asset._ref'`)
      console.log(`   Struktura asset:`, JSON.stringify(asset.image.asset, null, 2))
      continue
    }
    
    // Generuj URL CDN
    const imageUrl = builder
      .image(asset.image.asset)
      .width(1600)
      .height(900)
      .fit('crop')
      .quality(85)
      .url()
    
    // Pobierz alt text z Sanity lub użyj tytułu jako fallback
    const altText = asset.image.alt || asset.title || 'Obraz'
    
    // Mapowanie na podstawie kategorii i tagów
    if (asset.category === 'hero') {
      mapping.hero = { url: imageUrl, alt: altText }
      console.log(`✅ Hero: ${asset.title} (alt: "${altText}")`)
    } else if (asset.category === 'benefits') {
      if (asset.tags.includes('benefit-1')) {
        mapping.benefit1 = { url: imageUrl, alt: altText }
        console.log(`✅ Benefit 1: ${asset.title} (alt: "${altText}")`)
      } else if (asset.tags.includes('benefit-2')) {
        mapping.benefit2 = { url: imageUrl, alt: altText }
        console.log(`✅ Benefit 2: ${asset.title} (alt: "${altText}")`)
      } else if (asset.tags.includes('benefit-3')) {
        mapping.benefit3 = { url: imageUrl, alt: altText }
        console.log(`✅ Benefit 3: ${asset.title} (alt: "${altText}")`)
      } else if (asset.tags.includes('benefit-4')) {
        mapping.benefit4 = { url: imageUrl, alt: altText }
        console.log(`✅ Benefit 4: ${asset.title} (alt: "${altText}")`)
      }
    } else if (asset.category === 'before-after') {
      if (asset.tags.includes('before')) {
        mapping.before = { url: imageUrl, alt: altText }
        console.log(`✅ Before: ${asset.title} (alt: "${altText}")`)
      } else if (asset.tags.includes('after')) {
        mapping.after = { url: imageUrl, alt: altText }
        console.log(`✅ After: ${asset.title} (alt: "${altText}")`)
      }
    } else if (asset.category === 'instructor') {
      mapping.instructor = { url: imageUrl, alt: altText }
      console.log(`✅ Instructor: ${asset.title} (alt: "${altText}")`)
    }
  }
  
  return mapping
}

function updatePlaygroundFile(mapping: ImageMapping): void {
  const filePath = resolve(process.cwd(), 'app/playground/v2-notion-proto/page.tsx')
  
  if (!existsSync(filePath)) {
    console.error(`❌ Plik nie istnieje: ${filePath}`)
    process.exit(1)
  }
  
  let content = readFileSync(filePath, 'utf-8')
  
  // Aktualizuj hero image i alt text
  if (mapping.hero) {
    // Aktualizuj URL w MOCK_DATA.hero
    content = content.replace(
      /image:\s*"[^"]*"\s*\/\/\s*TODO:\s*Replace with Sanity CDN URL/g,
      `image: "${mapping.hero.url}"`
    )
    // Jeśli już jest jakiś URL, zamień go
    content = content.replace(
      /hero:\s*\{[^}]*image:\s*"https:\/\/images\.unsplash\.com[^"]*"/,
      `hero: {
    headline: "OPANUJ SZTUKĘ AIRTOUCH. ZDEFINIUJ SWOJĄ PRZYSZŁOŚĆ.",
    subheadline: "Definitywne szkolenie dla profesjonalnych stylistów poszukujących precyzji, naturalnych efektów i znacząco wyższych przychodów z usług koloryzacji.",
    cta: "ZAPISZ SIĘ NA SZKOLENIE",
    image: "${mapping.hero.url}"`
    )
    // Aktualizuj alt text w komponencie Image
    content = content.replace(
      /<Image\s+src=\{MOCK_DATA\.hero\.image\}\s+alt="[^"]*"/g,
      `<Image src={MOCK_DATA.hero.image} alt="${mapping.hero.alt}"`
    )
  }
  
  // Aktualizuj benefit images
  const benefitReplacements = [
    { key: 'benefit1', index: 0 },
    { key: 'benefit2', index: 1 },
    { key: 'benefit3', index: 2 },
    { key: 'benefit4', index: 3 },
  ]
  
  for (const { key, index } of benefitReplacements) {
    const data = mapping[key as keyof ImageMapping] as { url: string; alt: string } | undefined
    if (data) {
      // Zamień URL w benefit item (szukaj TODO komentarza)
      const benefitUrlRegex = new RegExp(
        `(image:\\s*")[^"]*("\\s*\/\/\\s*TODO:\\s*Sanity CDN - Benefit ${index + 1})`,
        'g'
      )
      content = content.replace(benefitUrlRegex, `$1${data.url}$2`)
      
      // Jeśli już jest URL (bez TODO), zamień go
      const benefitUrlRegex2 = new RegExp(
        `(benefits:\\s*\\{[^}]*items:\\s*\\[[^\\]]*\\{[^}]*title:[^}]*description:[^}]*image:\\s*")https://images\\.unsplash\\.com[^"]*"`,
        's'
      )
      // To jest bardziej skomplikowane - znajdźmy konkretny benefit item
      const benefitItemPattern = new RegExp(
        `(\\{[^}]*title:\\s*"[^"]*"[^}]*description:\\s*"[^"]*"[^}]*image:\\s*")https://images\\.unsplash\\.com[^"]*"([^}]*\\})`,
        's'
      )
      // Dla każdego benefit item, sprawdź czy to ten właściwy (na podstawie kolejności)
      // Użyjmy prostszego podejścia - zamień wszystkie unsplash URLs w benefits.items
      if (index === 0) {
        // Benefit 1 - pierwszy item w tablicy
        content = content.replace(
          /(benefits:\s*\{\s*headline:[^}]*items:\s*\[\s*\{[^}]*title:[^}]*description:[^}]*image:\s*")https:\/\/images\.unsplash\.com[^"]*"/,
          `$1${data.url}"`
        )
      } else {
        // Dla pozostałych - znajdź odpowiedni item po kolei
        const items = content.match(/benefits:\s*\{\s*headline:[^}]*items:\s*\[([^\]]*)\]/s)?.[1]
        if (items) {
          const itemMatches = items.matchAll(/\{[^}]*title:[^}]*description:[^}]*image:\s*"([^"]*)"/g)
          let itemIndex = 0
          for (const match of itemMatches) {
            if (itemIndex === index && match[1].includes('unsplash.com')) {
              content = content.replace(match[1], data.url)
              break
            }
            itemIndex++
          }
        }
      }
      
      // Dodaj alt text do struktury benefit item jeśli nie istnieje
      // Najpierw znajdź benefit item z tym URL
      const benefitWithUrl = new RegExp(
        `(\\{[^}]*title:\\s*"[^"]*"[^}]*description:\\s*"[^"]*"[^}]*image:\\s*"${data.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")([^}]*\\})`,
        's'
      )
      const match = content.match(benefitWithUrl)
      if (match && !match[0].includes('alt:')) {
        // Dodaj alt przed zamykającym nawiasem
        content = content.replace(benefitWithUrl, `$1,\n        alt: "${data.alt}"$2`)
      }
    }
  }
  
  // Aktualizuj before/after images
  if (mapping.before) {
    content = content.replace(
      /beforeImage:\s*"[^"]*"\s*\/\/\s*TODO:\s*Sanity CDN - Before/g,
      `beforeImage: "${mapping.before.url}"`
    )
    // Jeśli już jest URL, zamień go
    content = content.replace(
      /beforeImage:\s*"https:\/\/images\.unsplash\.com[^"]*"/g,
      `beforeImage: "${mapping.before.url}"`
    )
    // Aktualizuj alt text
    content = content.replace(
      /<Image\s+src=\{MOCK_DATA\.socialProof\.beforeImage\}\s+alt="[^"]*"/g,
      `<Image src={MOCK_DATA.socialProof.beforeImage} alt="${mapping.before.alt}"`
    )
  }
  
  if (mapping.after) {
    content = content.replace(
      /afterImage:\s*"[^"]*"\s*\/\/\s*TODO:\s*Sanity CDN - After/g,
      `afterImage: "${mapping.after.url}"`
    )
    // Jeśli już jest URL, zamień go
    content = content.replace(
      /afterImage:\s*"https:\/\/images\.unsplash\.com[^"]*"/g,
      `afterImage: "${mapping.after.url}"`
    )
    // Aktualizuj alt text
    content = content.replace(
      /<Image\s+src=\{MOCK_DATA\.socialProof\.afterImage\}\s+alt="[^"]*"/g,
      `<Image src={MOCK_DATA.socialProof.afterImage} alt="${mapping.after.alt}"`
    )
  }
  
  // Aktualizuj instructor image
  if (mapping.instructor) {
    content = content.replace(
      /image:\s*"[^"]*"\s*\/\/\s*TODO:\s*Sanity CDN - Instructor/g,
      `image: "${mapping.instructor.url}"`
    )
    // Jeśli już jest URL, zamień go
    content = content.replace(
      /instructor:\s*\{[^}]*image:\s*"https:\/\/images\.unsplash\.com[^"]*"/,
      `instructor: {
    headline: "INSTRUKTORKA",
    name: "Anya Petrova",
    title: "Certified AirTouch Master Educator",
    image: "${mapping.instructor.url}"`
    )
    // Aktualizuj alt text (zmień z MOCK_DATA.instructor.name na alt z Sanity)
    content = content.replace(
      /<Image\s+src=\{MOCK_DATA\.instructor\.image\}\s+alt=\{MOCK_DATA\.instructor\.name\}/g,
      `<Image src={MOCK_DATA.instructor.image} alt="${mapping.instructor.alt}"`
    )
  }
  
  // Aktualizuj alt text w komponentach Image dla benefits (zmień z item.title na item.alt jeśli istnieje)
  content = content.replace(
    /<Image\s+src=\{item\.image\}\s+alt=\{item\.title\}/g,
    `<Image src={item.image} alt={item.alt || item.title}`
  )
  
  writeFileSync(filePath, content, 'utf-8')
  console.log('\n✅ Plik playground v2 zaktualizowany z URL-ami i alt text!')
}

async function main() {
  try {
    const assets = await fetchMediaAssets()
    
    if (assets.length === 0) {
      console.error('❌ Nie znaleziono żadnych media assets z tagiem "airtouch-v2"')
      console.log('💡 Upewnij się, że:')
      console.log('   1. Utworzyłeś media assets w Sanity Studio')
      console.log('   2. Dodałeś tag "airtouch-v2" do każdego assetu')
      console.log('   3. Wgrałeś obrazy do każdego assetu')
      console.log('   4. Wypełniłeś alt text dla każdego obrazu (opcjonalnie)')
      process.exit(1)
    }
    
    const mapping = mapAssetsToImages(assets)
    
    console.log('\n📋 Podsumowanie mapowania:')
    console.log(`   Hero: ${mapping.hero ? '✅' : '❌'} ${mapping.hero ? `(alt: "${mapping.hero.alt}")` : ''}`)
    console.log(`   Benefit 1: ${mapping.benefit1 ? '✅' : '❌'} ${mapping.benefit1 ? `(alt: "${mapping.benefit1.alt}")` : ''}`)
    console.log(`   Benefit 2: ${mapping.benefit2 ? '✅' : '❌'} ${mapping.benefit2 ? `(alt: "${mapping.benefit2.alt}")` : ''}`)
    console.log(`   Benefit 3: ${mapping.benefit3 ? '✅' : '❌'} ${mapping.benefit3 ? `(alt: "${mapping.benefit3.alt}")` : ''}`)
    console.log(`   Benefit 4: ${mapping.benefit4 ? '✅' : '❌'} ${mapping.benefit4 ? `(alt: "${mapping.benefit4.alt}")` : ''}`)
    console.log(`   Before: ${mapping.before ? '✅' : '❌'} ${mapping.before ? `(alt: "${mapping.before.alt}")` : ''}`)
    console.log(`   After: ${mapping.after ? '✅' : '❌'} ${mapping.after ? `(alt: "${mapping.after.alt}")` : ''}`)
    console.log(`   Instructor: ${mapping.instructor ? '✅' : '❌'} ${mapping.instructor ? `(alt: "${mapping.instructor.alt}")` : ''}\n`)
    
    updatePlaygroundFile(mapping)
    
    console.log('\n🎉 Gotowe! Sprawdź app/playground/v2-notion-proto/page.tsx')
    console.log('💡 Pamiętaj, że alt text został zaktualizowany zarówno w MOCK_DATA jak i w komponentach Image')
    
  } catch (error) {
    console.error('❌ Błąd:', error)
    if (error instanceof Error) {
      console.error('   Szczegóły:', error.message)
      console.error('   Stack:', error.stack)
    }
    process.exit(1)
  }
}

main()


