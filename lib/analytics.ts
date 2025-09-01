// lib/analytics.ts
// Minimalny, bezpieczny shim pod dataLayer + proste helpery.
// Działa w komponentach klienckich; na serwerze nic nie robi.

export type DlPayload = Record<string, unknown>;

function getDL(): any[] | null {
  if (typeof window === 'undefined') return null;
  const w = window as any;
  if (!w.dataLayer) w.dataLayer = [];
  return w.dataLayer;
}

/**
 * ZGODNOŚĆ WSTECZNA:
 * Używaj w kodzie istniejącym: dlPush('event_name', { ...payload })
 * albo dlPush({ event: 'event_name', ...payload })
 */
export function dlPush(eventOrObj: string | DlPayload, payload?: DlPayload) {
  const dl = getDL();
  if (!dl) return;
  const entry =
    typeof eventOrObj === 'string'
      ? { event: eventOrObj, ...(payload || {}) }
      : (eventOrObj || {});
  dl.push(entry);
}

// Dodatkowe helpery (opcjonalne; zgodne z v9)
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
