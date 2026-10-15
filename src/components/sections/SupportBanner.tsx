import { useState, type FormEvent } from 'react'
import { supabase } from '../../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function SupportBanner() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.functions.invoke('send-contact-message', {
      body: { name: name.trim(), email: email.trim(), message: message.trim() },
    })

    if (error) {
      setStatus('error')
      setErrorMsg('No pudimos enviar tu mensaje. Intenta de nuevo.')
      return
    }
    setStatus('success')
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="rounded-2xl bg-trive-tint px-6 py-5">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-trive-primary sm:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
                <path d="M8 9h8M8 13h5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-text-primary">¿Tienes otra duda?</p>
              <p className="text-xs text-text-secondary">Escríbenos directamente y te respondemos lo antes posible.</p>
            </div>
          </div>

          {!open && status !== 'success' && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-xs font-bold text-trive-primary shadow-sm transition-colors duration-200 hover:bg-trive-primary hover:text-white"
            >
              Escríbenos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>

        {open && status !== 'success' && (
          <form onSubmit={handleSubmit} className="mt-5 grid gap-3 border-t border-trive-primary/10 pt-5 sm:grid-cols-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="rounded-xl border border-trive-primary/15 bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="rounded-xl border border-trive-primary/15 bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cuéntanos tu duda"
              rows={3}
              className="rounded-xl border border-trive-primary/15 bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary sm:col-span-2"
            />
            <div className="flex items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 rounded-xl bg-trive-primary px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark disabled:opacity-60"
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
              </button>
              {status === 'error' && <p className="text-xs font-semibold text-red-600">{errorMsg}</p>}
            </div>
          </form>
        )}

        {status === 'success' && (
          <p className="mt-5 border-t border-trive-primary/10 pt-5 text-sm font-bold text-trive-primary">
            ¡Listo! Recibimos tu mensaje y te responderemos lo antes posible.
          </p>
        )}
      </div>
    </section>
  )
}
