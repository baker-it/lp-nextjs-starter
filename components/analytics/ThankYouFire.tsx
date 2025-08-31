'use client'
import { useEffect } from 'react'
import { pushEvent } from '@/lib/analytics'
export default function ThankYouFire({ payload }: { payload?: Record<string, any> }) {
  useEffect(() => { pushEvent('Lead', { step: 'confirmed', source: 'lp_form', ...(payload || {}) }) }, [])
  return null
}
