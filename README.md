# LP Next.js Starter (Vercel)

Minimalny landing page pod szkolenie fryzjerskie — Next.js 14 (App Router) + Tailwind + Framer Motion + eventy do GTM.

## 🚀 Start
```bash
npm i
npm run dev
```

## 🔧 Wymagane zmienne środowiskowe
Utwórz `.env.local`:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🧭 Tracking (dataLayer)
W projekcie jest helper `lib/analytics.ts`. Eventy:
- `page_view` (wstrzykiwany w layout)
- `section_view` (USP, Social Proof, Pricing)
- `cta_click` (hero, usp, pricing, mid_page, final)
- `faq_toggle`
- (opcjonalnie) `form_start`, `form_submit_*` jeśli dodasz formularz

## 🏗️ Struktura
- `app/layout.tsx` — GTM bootstrap + meta
- `app/page.tsx` — złożenie sekcji
- `components/*` — sekcje LP
- `lib/analytics.ts` — helper do `dataLayer.push`

## ✅ Deploy na Vercel
- Połącz repo → `Import Project` → ustaw `NEXT_PUBLIC_GTM_ID`
- Podłącz domenę → gotowe

## 📌 Uwaga
- CTA buttony aktualnie tylko **pushują eventy**; podłącz swoją logikę (formularz/booking/płatność) wg potrzeb.
