'use client'
import { createContext, useContext, useEffect, useMemo } from 'react'
import { pushEvent } from '@/lib/analytics'

type Ctx = { key?: string; variant?: 'A' | 'B' }
const ExperimentContext = createContext<Ctx>({})

function storageKey(key?: string, variant?: string){
  return key ? `exp_viewed:${key}:${variant || ''}` : ''
}

export function ExperimentProvider({ keyName, variant, children }:{ keyName?: string; variant?: 'A'|'B'; children: React.ReactNode }){
  const value = useMemo<Ctx>(()=>({ key: keyName, variant }), [keyName, variant])

  useEffect(()=>{
    if(!keyName || !variant) return
    const sk = storageKey(keyName, variant)
    try{
      if (typeof window !== 'undefined') {
        const seen = sessionStorage.getItem(sk)
        if(!seen){
          pushEvent('experiment_view', { key: keyName, variant })
          sessionStorage.setItem(sk, '1')
        }
      }
    }catch(_e){ /* ignore */}
  }, [keyName, variant])

  // @ts-ignore
  return <ExperimentContext.Provider value={value}>{children}</ExperimentContext.Provider>
}

export function useExperiment(){
  return useContext(ExperimentContext)
}
