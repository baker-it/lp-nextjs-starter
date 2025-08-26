// Lightweight helper for pushing to dataLayer
export const dlPush = (payload: Record<string, any>) => {
  if (typeof window === 'undefined') return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push(payload)
}
