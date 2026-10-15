import { useState, type FormEvent } from 'react'
import { getSupabase } from '../../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'duplicate' | 'error'

export function DownloadCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const supabase = await getSupabase()
    const { error } = await supabase.from('launch_notify_subscribers').insert({ email: email.trim() })

    if (!error) {
      setStatus('success')
      return
    }
    setStatus(error.code === '23505' ? 'duplicate' : 'error')
  }

  return (
    <section id="descarga" className="relative overflow-hidden bg-trive-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-trive-light/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-trive-darkest/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_32px_64px_-12px_rgba(8,45,102,0.45)] lg:order-1">
          <img src="/illustrations/maker-launch.svg" alt="" className="block w-full" />
        </div>

        <div className="text-center lg:order-2 lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M12 18h.01" />
            </svg>
            Muy pronto en Google Play
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.25)] sm:text-4xl">No te quedes por fuera del lanzamiento</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 sm:mx-0 sm:text-lg mx-auto">
            Estamos en la etapa final de pruebas. Déjanos tu correo y te avisamos apenas la app esté disponible para descargar.
          </p>

          <div className="mt-7 rounded-2xl bg-white p-2 shadow-[0_24px_48px_-16px_rgba(8,45,102,0.45)] sm:max-w-md">
            {status === 'success' || status === 'duplicate' ? (
              <p className="px-4 py-3 text-sm font-bold text-trive-primary">
                {status === 'success' ? '¡Listo! Te avisaremos apenas esté disponible.' : 'Ese correo ya está en la lista — te avisaremos.'}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl px-4 py-3 text-sm text-text-primary outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="shrink-0 rounded-xl bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark disabled:opacity-60"
                >
                  {status === 'loading' ? 'Enviando…' : 'Avísame'}
                </button>
              </form>
            )}
          </div>
          {status === 'error' && <p className="mt-3 text-xs font-semibold text-red-200">No pudimos guardar tu correo. Intenta de nuevo.</p>}
        </div>
      </div>
    </section>
  )
}
