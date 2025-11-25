'use client'

import { useState, useEffect } from 'react'

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('consent-preferences')
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      updateGTMConsent(savedPreferences)
    }
  }, [])

  const updateGTMConsent = (consent: ConsentPreferences) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied'
      })
    }
  }

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(newPreferences)
    localStorage.setItem('consent-preferences', JSON.stringify(newPreferences))
    updateGTMConsent(newPreferences)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(newPreferences)
    localStorage.setItem('consent-preferences', JSON.stringify(newPreferences))
    updateGTMConsent(newPreferences)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Używamy plików cookie</h3>
            <p className="text-sm text-gray-600">
              Używamy plików cookie do analizy ruchu i personalizacji treści. 
              Możesz zaakceptować wszystkie lub dostosować ustawienia.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Odrzuć
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}






