/**
 * Skrypt do tworzenia przykładowych dokumentów Media Asset z tagami dla V2
 * 
 * Uruchom: npm run create-media-tags
 * 
 * Wymaga: 
 * - SANITY_API_WRITE_TOKEN w .env.local (z uprawnieniami Editor)
 * - Sanity Studio może być uruchomiony (opcjonalnie)
 */

import { config } from 'dotenv'
import { resolve } from 'node:path'
import { readFileSync, existsSync } from 'node:fs'
import { createClient, SanityClient } from '@sanity/client'

// Załaduj zmienne z .env.local - użyj bezpośredniego podejścia
const envPath = resolve(process.cwd(), '.env.local')
if (existsSync(envPath)) {
  // Spróbuj załadować przez dotenv
  const result = config({ path: envPath, override: true })
  
  // Jeśli dotenv nie zadziałał, załaduj ręcznie
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    try {
      const envContent = readFileSync(envPath, 'utf-8')
      const lines = envContent.split(/\r?\n/) // Obsługa Windows (\r\n) i Unix (\n)
      let loadedCount = 0
      
      // DEBUG: Znajdź i pokaż wszystkie linie zawierające "SANITY_API_WRITE_TOKEN"
      console.log('🔍 DEBUG: Szukam linii z SANITY_API_WRITE_TOKEN:')
      lines.forEach((line, index) => {
        if (line.includes('SANITY_API_WRITE_TOKEN')) {
          console.log(`   Linia ${index + 1} (raw): "${line}"`)
          console.log(`   Długość: ${line.length}, Trimmed: "${line.trim()}"`)
          console.log(`   Index "=": ${line.indexOf('=')}`)
        }
      })
      
      for (const line of lines) {
        const trimmed = line.trim()
        
        // DEBUG dla linii z SANITY_API_WRITE_TOKEN
        if (line.includes('SANITY_API_WRITE_TOKEN')) {
          console.log(`\n🔍 DEBUG: Przetwarzam linię z SANITY_API_WRITE_TOKEN:`)
          console.log(`   Raw line: "${line}"`)
          console.log(`   Trimmed: "${trimmed}"`)
          console.log(`   Starts with #: ${trimmed.startsWith('#')}`)
          console.log(`   Index of "=": ${trimmed.indexOf('=')}`)
        }
        
        // Pomiń puste linie i komentarze
        if (!trimmed || trimmed.startsWith('#')) {
          if (line.includes('SANITY_API_WRITE_TOKEN')) {
            console.log(`   ⚠️  POMINIĘTO (komentarz/pusta)`)
          }
          continue
        }
        
        // Podziel na klucz i wartość (uwzględnij = w wartości)
        const equalIndex = trimmed.indexOf('=')
        if (equalIndex === -1) {
          if (line.includes('SANITY_API_WRITE_TOKEN')) {
            console.log(`   ⚠️  POMINIĘTO (brak znaku "=")`)
          }
          continue
        }
        
        const key = trimmed.substring(0, equalIndex).trim()
        const value = trimmed.substring(equalIndex + 1).trim()
        
        if (line.includes('SANITY_API_WRITE_TOKEN')) {
          console.log(`   Key: "${key}"`)
          console.log(`   Value length: ${value.length}`)
          console.log(`   Value first 20: "${value.substring(0, 20)}"`)
          console.log(`   Key && Value: ${!!(key && value)}`)
        }
        
        if (key && value) {
          process.env[key] = value
          loadedCount++
          // Debug dla SANITY_API_WRITE_TOKEN
          if (key === 'SANITY_API_WRITE_TOKEN') {
            console.log(`\n✅ ✅ ✅ ZNALEZIONO I ZAPISANO SANITY_API_WRITE_TOKEN!`)
            console.log(`   Długość wartości: ${value.length}`)
            console.log(`   Pierwsze 20 znaków: ${value.substring(0, 20)}...`)
            console.log(`   Sprawdzam process.env: ${!!process.env.SANITY_API_WRITE_TOKEN}`)
          }
        } else {
          // Debug dla linii, które nie zostały sparsowane
          if (trimmed.includes('SANITY_API_WRITE_TOKEN')) {
            console.log(`\n❌ Linia z SANITY_API_WRITE_TOKEN nie została sparsowana:`)
            console.log(`   key: "${key}", value: "${value ? value.substring(0, 20) : 'BRAK'}"`)
          }
        }
      }
      
      console.log(`📦 Załadowano ${loadedCount} zmiennych z .env.local (ręczne parsowanie)`)
      
      // Debug: pokaż wszystkie załadowane klucze
      const sanityKeys = Object.keys(process.env).filter(k => k.includes('SANITY'))
      console.log(`🔍 Znalezione klucze SANITY: ${sanityKeys.join(', ')}`)
      
      // Sprawdź czy token jest dostępny pod inną nazwą
      if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.log('⚠️  SANITY_API_WRITE_TOKEN nie znaleziony w process.env')
        console.log('🔍 Sprawdzam wszystkie klucze zawierające "WRITE":')
        Object.keys(process.env).filter(k => k.includes('WRITE')).forEach(k => {
          console.log(`   - ${k}`)
        })
      }
    } catch (error) {
      console.error('❌ Błąd ręcznego ładowania .env.local:', error)
      process.exit(1)
    }
  }
  
  // Sprawdź czy token jest teraz dostępny, jeśli nie - zakończ z błędem
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error(`❌ SANITY_API_WRITE_TOKEN nie został załadowany z: ${envPath}`)
    console.log('\n💡 Ustaw token w .env.local:')
    console.log('   SANITY_API_WRITE_TOKEN=your-token-here')
    console.log('\n📖 Jak zdobyć token:')
    console.log('   1. Przejdź do https://sanity.io/manage')
    console.log('   2. Wybierz projekt')
    console.log('   3. API → Tokens → Add API token')
    console.log('   4. Wybierz uprawnienia "Editor" lub "Administrator"')
    console.log('   5. Skopiuj token do .env.local jako SANITY_API_WRITE_TOKEN')
    console.log('\n⚠️  WAŻNE: Token musi mieć uprawnienia "Editor" lub "Administrator"')
    process.exit(1)
  }
} else {
  console.error(`❌ Plik .env.local nie istnieje w: ${envPath}`)
  process.exit(1)
}

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
  
  // Debug: sprawdź czy token jest załadowany
  const token = process.env.SANITY_API_WRITE_TOKEN
  if (token) {
    console.log(`✅ Token załadowany: ${token.substring(0, 10)}...${token.substring(token.length - 10)}\n`)
  }

  if (!token) {
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

  // Test połączenia przed tworzeniem dokumentów
  console.log('🔍 Testowanie połączenia z Sanity...')
  try {
    const testQuery = await client.fetch('*[_type == "mediaAsset"][0...1]')
    console.log('✅ Połączenie z Sanity działa!\n')
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('❌ Błąd połączenia z Sanity:', errorMessage)
    
    if (errorMessage.includes('project user not found') || errorMessage.includes('Invalid token')) {
      console.error('\n💡 Token jest nieprawidłowy lub wygasł!')
      console.log('📖 Jak wygenerować nowy token:')
      console.log('   1. Wejdź do https://sanity.io/manage')
      console.log('   2. Wybierz projekt: nfon9ew1')
      console.log('   3. API → Tokens')
      console.log('   4. Usuń stary token (jeśli istnieje)')
      console.log('   5. Add API token → Editor permissions')
      console.log('   6. Skopiuj nowy token do .env.local jako SANITY_API_WRITE_TOKEN')
      console.log('\n⚠️  WAŻNE: Token musi mieć uprawnienia "Editor" lub "Administrator"')
    }
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
      // Nie dodajemy pola image - użytkownik doda je ręcznie w Sanity Studio
      await client.create(template)

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

