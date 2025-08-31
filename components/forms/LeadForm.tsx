'use client'
import { useState } from 'react'
import { pushEvent } from '@/lib/analytics'
type Props = { action?: string; redirectUrl?: string }
export default function LeadForm({ action = '/api/lead', redirectUrl }: Props) {
  const [loading, setLoading] = useState(false); const [ok, setOk] = useState(false); const [error, setError] = useState<string | null>(null)
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(null); setLoading(true)
    const form = e.currentTarget; const data = Object.fromEntries(new FormData(form).entries()) as Record<string, any>
    if (data.company) { setLoading(false); return }
    if (!data.name || !data.email) { setError('Uzupełnij imię i email.'); setLoading(false); return }
    pushEvent('Lead', { source: 'lp_form', step: 'submit_click' })
    try {
      const res = await fetch(action, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone || null, message: data.message || null, consent: !!data.consent, ts: Date.now() }) })
      if (!res.ok) throw new Error('Błąd serwera')
      pushEvent('Lead', { source: 'lp_form', step: 'submitted' }); setOk(true)
      if (redirectUrl) { window.location.href = redirectUrl; return } form.reset()
    } catch (err: any) { setError(err.message || 'Coś poszło nie tak. Spróbuj ponownie.'); pushEvent('Lead', { source: 'lp_form', step: 'error', message: err?.message }) }
    finally { setLoading(false) }
  }
  if (ok && !redirectUrl) return (<div className="rounded-2xl border p-6 text-center"><h3 className="text-xl font-semibold">Dziękujemy! 🎉</h3><p className="mt-2 opacity-80">Skontaktujemy się wkrótce.</p></div>)
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-2"><label className="text-sm font-medium">Imię *</label><input name="name" required placeholder="Twoje imię" className="rounded-xl border p-3" /></div>
      <div className="grid gap-2"><label className="text-sm font-medium">Email *</label><input type="email" name="email" required placeholder="adres@e-mail.pl" className="rounded-xl border p-3" /></div>
      <div className="grid gap-2"><label className="text-sm font-medium">Telefon</label><input name="phone" placeholder="+48 600 000 000" className="rounded-xl border p-3" /></div>
      <div className="grid gap-2"><label className="text-sm font-medium">Wiadomość</label><textarea name="message" rows={4} placeholder="W czym możemy pomóc?" className="rounded-xl border p-3" /></div>
      <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="consent" className="mt-1" /><span>Wyrażam zgodę na kontakt zgodnie z polityką prywatności.</span></label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button disabled={loading} className="rounded-2xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50">{loading ? 'Wysyłanie...' : 'Wyślij'}</button>
    </form>
  )
}
