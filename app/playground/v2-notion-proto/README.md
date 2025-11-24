# 🎨 AirTouch V2 Playground - Media Assets Guide

## 📸 **Jak dodać zdjęcia do Sanity**

### **Krok 1: Uruchom Sanity Studio**
```bash
npm run sanity:dev
```
Otwórz `http://localhost:3333`

### **Krok 2: Utwórz Media Assets**

1. Wejdź do **"Media Assets"** (nowa zakładka w lewym menu)
2. Kliknij **"Create new"**
3. Wypełnij formularz dla każdego zdjęcia:

#### **📋 Lista wymaganych zdjęć (8 sztuk):**

| # | Nazwa | Kategoria | Tagi | Gdzie w kodzie |
|---|-------|----------|------|----------------|
| 1 | Hero - AirTouch V2 | Hero | `airtouch-v2`, `playground`, `hero` | `MOCK_DATA.hero.image` |
| 2 | Benefit 1 - Integralność | Benefits | `airtouch-v2`, `playground`, `benefits`, `benefit-1` | `MOCK_DATA.benefits.items[0].image` |
| 3 | Benefit 2 - Odrost | Benefits | `airtouch-v2`, `playground`, `benefits`, `benefit-2` | `MOCK_DATA.benefits.items[1].image` |
| 4 | Benefit 3 - Precyzja | Benefits | `airtouch-v2`, `playground`, `benefits`, `benefit-3` | `MOCK_DATA.benefits.items[2].image` |
| 5 | Benefit 4 - Premium | Benefits | `airtouch-v2`, `playground`, `benefits`, `benefit-4` | `MOCK_DATA.benefits.items[3].image` |
| 6 | Before - Przed | Before/After | `airtouch-v2`, `playground`, `social-proof`, `before` | `MOCK_DATA.socialProof.beforeImage` |
| 7 | After - Po | Before/After | `airtouch-v2`, `playground`, `social-proof`, `after` | `MOCK_DATA.socialProof.afterImage` |
| 8 | Instructor - Anya | Instructor | `airtouch-v2`, `playground`, `instructor` | `MOCK_DATA.instructor.image` |

### **Krok 3: Skopiuj Image URLs**

1. W Sanity Studio, kliknij prawym na każdy obrazek
2. Wybierz **"Copy Image URL"**
3. URL będzie wyglądał tak:
   ```
   https://cdn.sanity.io/images/nfon9ew1/production/[asset-id]-[dimensions].jpg
   ```

### **Krok 4: Wklej do kodu**

1. Otwórz `app/playground/v2-notion-proto/page.tsx`
2. Znajdź komentarze `// TODO: Sanity CDN - [nazwa]`
3. Zamień linki Unsplash na Sanity CDN URLs
4. Zapisz i push:

```bash
git add app/playground/v2-notion-proto/page.tsx
git commit -m "feat: Replace placeholder images with Sanity CDN URLs"
git push
```

## 🏷️ **Rekomendowane Tagi**

### **Podstawowe (wymagane):**
- `airtouch-v2` - Oznacza, że to dla V2 playground
- `playground` - Oznacza, że to test/brudnopis

### **Kategorie:**
- `hero` - Główne zdjęcie
- `benefits` - Zdjęcia korzyści
- `social-proof` - Before/After
- `instructor` - Zdjęcie instruktorki

### **Dodatkowe:**
- `benefit-1`, `benefit-2`, etc. - Numeracja dla benefits
- `before`, `after` - Dla social proof

## ✅ **Checklist**

- [ ] Wszystkie 8 zdjęć wgrane do Sanity
- [ ] Każde zdjęcie ma odpowiednie tagi
- [ ] Alt text wypełniony (SEO + dostępność)
- [ ] Image URLs skopiowane
- [ ] Linki podmienione w `page.tsx`
- [ ] Commit i push wykonany
- [ ] Sprawdzone na mobile (obrazy ładują się szybko)

## 🎯 **Dlaczego Sanity CDN?**

- ✅ **Automatyczna optymalizacja** (WebP, AVIF, progressive JPEG)
- ✅ **Responsive images** (różne rozmiary dla mobile/desktop)
- ✅ **Globalny CDN** (szybkie ładowanie wszędzie)
- ✅ **Hotspot/crop** (inteligentne kadrowanie w Studio)
- ✅ **Działa na mobile** (w przeciwieństwie do Unsplash placeholders)






