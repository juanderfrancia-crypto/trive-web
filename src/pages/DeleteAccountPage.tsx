import { useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { LegalLayout, LegalSection } from '../components/LegalLayout'
import { getSupabase } from '../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function DeleteAccountPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const supabase = await getSupabase()
    const { error } = await supabase.functions.invoke('send-contact-message', {
      body: {
        name: name.trim(),
        email: email.trim(),
        message: `Solicitud de eliminación de cuenta.\nNombre: ${name.trim()}\nTeléfono registrado en Trive: ${phone.trim()}`,
      },
    })

    if (error) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <>
      <Seo
        title="Eliminar tu cuenta — Trive"
        description="Cómo eliminar tu cuenta y tus datos personales de Trive, con o sin la aplicación instalada."
        path="/eliminar-cuenta"
      />
      <LegalLayout title="Eliminar tu cuenta" date="15 de octubre de 2026">
        <LegalSection title="Opción 1 — Desde la app">
          Abre Trive → <strong className="text-text-primary">Perfil</strong> →{' '}
          <strong className="text-text-primary">Configuración</strong> →{' '}
          <strong className="text-text-primary">Privacidad</strong> →{' '}
          <strong className="text-text-primary">Eliminar cuenta</strong>. La eliminación se procesa de inmediato.
        </LegalSection>

        <LegalSection title="Opción 2 — Sin la app instalada">
          <p>Llena este formulario con el teléfono que usaste para registrarte en Trive. Procesamos la solicitud manualmente en un plazo máximo de 5 días hábiles.</p>

          {status === 'success' ? (
            <p className="mt-4 rounded-xl bg-trive-tint px-4 py-3 text-sm font-bold text-trive-primary">
              Listo, recibimos tu solicitud. Te confirmamos por correo cuando quede completada.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre completo"
                className="rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Teléfono registrado en Trive (ej: 3101234567)"
                className="rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo, para confirmarte"
                className="rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-trive-primary"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-xl bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark disabled:opacity-60"
              >
                {status === 'loading' ? 'Enviando…' : 'Solicitar eliminación'}
              </button>
              {status === 'error' && <p className="text-xs font-semibold text-red-600">No pudimos enviar tu solicitud. Intenta de nuevo o escribe a privacy@trivesoft.com.</p>}
            </form>
          )}
        </LegalSection>

        <LegalSection title="Qué se elimina de inmediato">
          Tu nombre, correo, teléfono, fotos de perfil y de vehículo, contacto de emergencia, direcciones guardadas, métodos de pago registrados, preferencias de viaje, notificaciones y sesiones activas. Tus reservas y rutas futuras se cancelan.
        </LegalSection>

        <LegalSection title="Qué se conserva, y por qué">
          Por obligación legal y contable, conservamos el registro de tus movimientos de saldo y el historial de reservas/viajes ya completados, pero sin ningún dato que te identifique — tu perfil queda marcado como "Usuario eliminado", sin nombre, correo ni teléfono asociado.
        </LegalSection>
      </LegalLayout>
    </>
  )
}
