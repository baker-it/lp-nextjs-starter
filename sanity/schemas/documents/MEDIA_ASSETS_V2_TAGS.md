# 📸 Tagi dla Media Assets - AirTouch V2 Playground

## 🎯 **Rekomendowane Tagi**

Używaj tych tagów przy uploadowaniu zdjęć do Sanity Media Library dla `/playground/v2-notion-proto`:

### **Podstawowe Tagi:**
- `airtouch-v2` - **Wymagany** dla wszystkich zdjęć V2
- `playground` - Oznacza, że to zdjęcie dla playground/testów

### **Kategorie (używaj jednego z nich):**
- `hero` - Główne zdjęcie hero section
- `benefits` - Zdjęcia dla sekcji Benefits (4 sztuki)
- `social-proof` - Before/After zdjęcia
- `instructor` - Zdjęcie instruktorki
- `methodology` - Zdjęcia dla sekcji metodologii (opcjonalne)

### **Przykładowe Kombinacje Tagów:**

1. **Hero Image:**
   ```
   airtouch-v2, playground, hero
   ```

2. **Benefits (4 zdjęcia):**
   ```
   airtouch-v2, playground, benefits, benefit-1
   airtouch-v2, playground, benefits, benefit-2
   airtouch-v2, playground, benefits, benefit-3
   airtouch-v2, playground, benefits, benefit-4
   ```

3. **Social Proof (Before/After):**
   ```
   airtouch-v2, playground, social-proof, before
   airtouch-v2, playground, social-proof, after
   ```

4. **Instructor:**
   ```
   airtouch-v2, playground, instructor
   ```

## 📋 **Checklist Uploadu:**

- [ ] Hero image (1 sztuka)
- [ ] Benefits images (4 sztuki)
- [ ] Before image (1 sztuka)
- [ ] After image (1 sztuka)
- [ ] Instructor image (1 sztuka)

**Razem: 8 zdjęć**

## 🔗 **Jak używać:**

1. Wejdź do Sanity Studio → **Media Assets**
2. Kliknij **"Create new"**
3. Uploaduj zdjęcie
4. Wypełnij:
   - **Nazwa:** np. "Hero - AirTouch V2"
   - **Alt Text:** np. "Profesjonalna stylistka wykonująca technikę AirTouch"
   - **Tagi:** Dodaj odpowiednie tagi (patrz wyżej)
   - **Kategoria:** Wybierz z listy (Hero, Benefits, etc.)
5. **Zapisz**
6. Kliknij prawym na obrazek → **"Copy Image URL"**
7. Wklej URL do `app/playground/v2-notion-proto/page.tsx` (szukaj `// TODO: Sanity CDN`)

## 🎨 **Dodatkowe Wskazówki:**

- **Alt Text jest wymagany** - ważne dla SEO i dostępności
- **Używaj hotspot** - możesz ustawić punkt ogniskowy w Sanity Studio (cropowanie)
- **Kategorie pomagają w filtrowaniu** - łatwiej znajdziesz zdjęcia później
- **Tagi są elastyczne** - możesz dodać własne (np. `high-priority`, `needs-review`)

