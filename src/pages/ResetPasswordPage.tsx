import { useEffect, useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { getSupabase } from '../lib/supabase'

type Stage = 'checking' | 'ready' | 'invalid' | 'saving' | 'success' | 'error'

export function ResetPasswordPage() {
  const [stage, setStage] = useState<Stage>('checking')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let active = true

    getSupabase().then((supabase) => {
      const { data: sub } = supabase.auth.onAuthStateChange((event) => {
        if (!active) return
        if (event === 'PASSWORD_RECOVERY') setStage('ready')
      })

      supabase.auth.getSession().then(({ data }) => {
        if (!active) return
        if (data.session) setStage((s) => (s === 'checking' ? 'ready' : s))
        else setTimeout(() => setStage((s) => (s === 'checking' ? 'invalid' : s)), 2500)
      })

      return () => sub.subscription.unsubscribe()
    })

    return () => {
      active = false
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.')
      return
    }

    setStage('saving')
    const supabase = await getSupabase()
    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setErrorMessage(error.message)
      setStage('ready')
      return
    }
    setStage('success')
  }

  return (
    <>
      <Seo
        title="Restablecer contraseña — Trive"
        description="Crea una nueva contraseña para tu cuenta de Trive."
        path="/restablecer-contrasena"
      />
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-14 sm:px-8">
        <div className="text-center">
          <img src="/trive-icon.png" alt="" width={56} height={56} className="mx-auto rounded-2xl" />
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-text-primary">Nueva contraseña</h1>
        </div>

        <div className="mt-8 rounded-2xl border border-border-subtle bg-surface p-6">
          {stage === 'checking' && (
            <p className="text-center text-sm text-text-secondary">Verificando tu enlace…</p>
          )}

          {stage === 'invalid' && (
            <div className="text-center">
              <p className="text-sm font-semibold text-text-primary">Este enlace no es válido o ya expiró.</p>
              <p className="mt-2 text-sm text-text-secondary">
                Vuelve a la app y pide un nuevo enlace desde "¿Olvidaste tu contraseña?".
              </p>
            </div>
          )}

          {stage === 'success' && (
            <div className="text-center">
              <p className="text-sm font-semibold text-text-primary">Listo, tu contraseña fue actualizada.</p>
              <p className="mt-2 text-sm text-text-secondary">Ya puedes volver a la app e iniciar sesión con tu nueva contraseña.</p>
            </div>
          )}

          {(stage === 'ready' || stage === 'saving') && (
            <form onSubmit={handleSubmit} className="grid gap-3">
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nueva contraseña"
                className="rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
              />
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirma la contraseña"
                className="rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
              />
              {errorMessage && <p className="text-xs font-semibold text-red-600">{errorMessage}</p>}
              <button
                type="submit"
                disabled={stage === 'saving'}
                className="rounded-xl bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark disabled:opacity-60"
              >
                {stage === 'saving' ? 'Guardando…' : 'Guardar contraseña'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
