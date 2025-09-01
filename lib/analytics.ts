// lib/analytics.ts
// Bezpieczny shim pod dataLayer + aliasy zgodne z Twoim kodem i v9.

export type DlPayload = Record<string, unknown>;

function getDL(): any[] | null {
  if (typeof window === 'undefined') return null;
  const w = window as any;
  if (!w.dataLayer) w.dataLayer = [];
  return w.dataLayer;
}

/** Legacy i v9: oba działają tak samo */
export function dlPush(eventOrObj: string | DlPayload, payload?: DlPayload) {
  const dl = getDL();
  if (!dl) return;
  const entry =
    typeof eventOrObj === 'string'
      ? { event: eventOrObj, ...(payload || {}) }
      : (eventOrObj || {});
  dl.push(entry);
}

/** Alias używany w v9 */
export const pushEvent = dlPush;

/** Helpery (opcjonalne w Twoim kodzie, używane w v9) */
export function sectionView(section_key: string, extra?: DlPayload) {
  dlPush('section_view', { section_key, ...(extra || {}) });
}
export function ctaClick(key: string, extra?: DlPayload) {
  dlPush('cta_click', { key, ...(extra || {}) });
}
export function experimentView(keyName: string, variant: string, extra?: DlPayload) {
  dlPush('experiment_view', {
    experiment_key: keyName,
    experiment_variant: variant,
    ...(extra || {}),
  });
}
export function leadEvent(stage: 'submit_click' | 'submitted' | 'confirmed', extra?: DlPayload) {
  dlPush('Lead', { stage, ...(extra || {}) });
}
