# v4_airtouch_replica - Design & Implementation Notes

## 🧠 AI Context: Key Insights & Design Principles
*Use these principles when iterating on this page to maintain the "Premium/Luxury" aesthetic.*

### 1. "Premium Breathing Room" (Vertical Rhythm)
*   **Principle:** Luxury requires space. Avoid tightly packing elements.
*   **Implementation:** The Hero section uses aggressive top padding (`pt-52` Mobile, `lg:pt-96` Desktop) to push content down to the lower third of the initial viewport. This creates a cinematic, "magazine cover" feel immediately upon load.
*   **Rule:** When in doubt, **double the whitespace**.

### 2. Magazine-Style Typography
*   **Principle:** Headlines are not just text; they are graphical elements.
*   **Implementation:** The H1 is broken into distinct visual blocks with generous margins (`mb-6` Mobile) between lines.
*   **Hierarchy:**
    *   **White Text:** Acts as the "frame" or "anchor". Unified sizing: `text-2xl` (Mobile) / `md:text-7xl` (Desktop), `font-bold`.
    *   **Gold Text (Scramble):** The "star" of the show. Same size but visually distinct via gradient and animation.

### 3. Mobile-First Polish
*   **Principle:** The mobile experience must feel as designed as the desktop one, not just "stacked".
*   **Implementation:** Specific mobile overrides (e.g., `mb-6` vs `md:mb-4`) are used to ensure touch targets and visual separation are perfect on vertical screens.

---

## 📝 Changelog: Recent Refinements (Hero Section)

### Visuals & Layout
*   **Vertical Spacing Boost:**
    *   Increased Hero container top padding to `pt-52` (from `pt-32`) on mobile and `lg:pt-96` (from `lg:pt-40`) on desktop.
    *   *Result:* Content sits much lower, detaching visually from the navbar.
*   **H1 Typography Unification:**
    *   **Standardization:** "TO" and "OPANUJ" spans updated to match "TO NIE SZTUKA" styling (`text-2xl md:text-7xl font-bold`). Removed `font-medium` to ensure weight consistency.
    *   **Line Separation:** Increased vertical margins between H1 lines to separate the message into distinct beats.
*   **CTA Area Decompression:**
    *   **Subheadline -> CTA:** Gap increased to `mb-20`.
    *   **CTA -> Trust Icons:** Gap increased to `gap-16`.
    *   *Result:* The Gold CTA button stands out more effectively in its own space.
*   **Clean-up:** Removed the "Hero Section" development label.

### Components
*   **`ScrambleText.tsx`:**
    *   **Fix:** Updated the "ghost" element to inherit `className` props.
    *   **Why:** Ensures the reserved space matches the animated text size, preventing layout shifts and text cut-off (especially for descenders like 'j', 'g', 'y').
*   **`BorderBeam.tsx`:**
    *   **Feature:** Added holographic double-beam effect to the main CTA button.
