'use client'
import { useEffect, useRef } from 'react'
import { pushEvent } from '@/lib/analytics'
export type SectionViewOptions = { threshold?: number; rootMargin?: string; once?: boolean; payload?: Record<string, any>; eventName?: string }
export function useSectionView(key: string, options: SectionViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (!ref.current) return; if (typeof window === 'undefined') return
    const { threshold = 0.4, rootMargin = '0px 0px -20% 0px', once = true, payload = {}, eventName = 'section_view' } = options
    const el = ref.current; let seen = false
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting && (!seen || !once)) { pushEvent(eventName, { key, ...payload }); seen = true } })
    }, { threshold, rootMargin })
    io.observe(el); return () => { io.unobserve(el); io.disconnect() }
  }, [key, options.threshold, options.rootMargin, options.once, options.eventName])
  return ref
}
