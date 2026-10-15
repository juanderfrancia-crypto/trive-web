import { useState, type FormEvent } from 'react'
import { supabase } from '../../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'duplicate' | 'error'

export function DownloadCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase.from('launch_notify_subscribers').insert({ email: email.trim() })

    if (!error) {
      setStatus('success')
      return
    }
    setStatus(error.code === '23505' ? 'duplicate' : 'error')
  }

  return (
    <section id="descarga" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-xl rounded-3xl border border-border-subtle bg-surface p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-trive-tint text-trive-primary">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">Muy pronto en Google Play</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Estamos en la etapa final de pruebas. Déjanos tu correo y te avisamos apenas la app esté disponible para descargar.
        </p>

        {status === 'success' || status === 'duplicate' ? (
          <p className="mt-6 rounded-2xl bg-trive-tint px-4 py-3 text-sm font-bold text-trive-primary">
            {status === 'success' ? '¡Listo! Te avisaremos apenas esté disponible.' : 'Ese correo ya está en la lista — te avisaremos.'}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full rounded-full border border-border-subtle px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 focus-visible:border-trive-primary"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="shrink-0 rounded-full bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark disabled:opacity-60"
            >
              {status === 'loading' ? 'Enviando…' : 'Avísame'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="mt-3 text-xs font-semibold text-red-600">No pudimos guardar tu correo. Intenta de nuevo.</p>}
      </div>
    </section>
  )
}
