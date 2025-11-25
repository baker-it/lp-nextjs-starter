'use client'
import Link from 'next/link'
import { pushEvent } from '@/lib/analytics'
import { useExperiment } from '@/lib/experiment'

function buildHref(cta:any){
  const { type='internal', href='', utm } = cta || {}
  const addUtm = (url:string) => {
    if(!utm) return url
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.com'
    const u = new URL(url, origin)
    Object.entries(utm).forEach(([k,v])=>{ if(v) u.searchParams.set(`utm_${k}`, String(v)) })
    return u.pathname + u.search + u.hash
  }
  if(type==='internal') return addUtm(href.startsWith('/') ? href : `/${href}`)
  if(type==='external') return addUtm(href)
  if(type==='anchor') return href.startsWith('#') ? href : `#${href}`
  if(type==='tel') return `tel:${href.replace(/\s/g,'')}`
  if(type==='mailto') return `mailto:${href}`
  if(type==='whatsapp') return `https://wa.me/${href.replace(/\D/g,'')}`
  if(type==='redirect') return `/r/${href}`
  return href
}

export function CTA({ cta }: { cta:any }) {
  const { key, variant } = useExperiment()
  if (!cta?.label) return null
  const url = buildHref(cta)
  const isExternal = cta.type==='external' || cta.openInNewTab
  const onClick = () => {
    let extra:any = {}
    try { if (cta.payload) extra = JSON.parse(cta.payload) } catch(_){}
    if (key && variant) { extra.experiment_key = key; extra.experiment_variant = variant }
    pushEvent('cta_click', { key: cta.eventKey || 'cta', ...extra })
  }
  const common = "inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-md transition hover:shadow-lg bg-black text-white"
  if (isExternal) return <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick} className={common}>{cta.label}</a>
  if (cta.type==='internal' || cta.type==='redirect') return <Link href={url} onClick={onClick} className={common}>{cta.label}</Link>
  return <a href={url} onClick={onClick} className={common}>{cta.label}</a>
}
