export type Variant = 'A' | 'B'

export function resolveVariant(ab:any, searchParams?: URLSearchParams): Variant {
  if (!ab) return 'A'
  const allowUrl = ab.allowUrlOverride !== false
  const active = (ab.active || 'A') as Variant
  if (allowUrl && searchParams) {
    const v = (searchParams.get('v') || '').toUpperCase()
    if (v === 'A' || v === 'B') return v as Variant
  }
  return active
}

export function variantKey(ab:any, chosen: Variant): string {
  return ab?.experimentKey ? `${ab.experimentKey}:${chosen}` : `experiment:${chosen}`
}
