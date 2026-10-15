import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/trive-icon.png" alt="" width={28} height={28} className="rounded-lg" />
              <span className="text-base font-extrabold text-text-primary">Trive</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Publica tu ruta. Reserva tu cupo.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">Plataforma</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#como-funciona" className="text-text-secondary hover:text-trive-primary">Cómo funciona</a></li>
              <li><a href="#confianza" className="text-text-secondary hover:text-trive-primary">Confianza y seguridad</a></li>
              <li><a href="#preguntas" className="text-text-secondary hover:text-trive-primary">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/terminos" className="text-text-secondary hover:text-trive-primary">Términos de uso</Link></li>
              <li><Link to="/privacidad" className="text-text-secondary hover:text-trive-primary">Política de privacidad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:privacy@trivesoft.com" className="text-text-secondary hover:text-trive-primary">privacy@trivesoft.com</a></li>
              <li className="text-text-secondary">Cali, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-subtle pt-6 text-xs text-text-muted">
          © {new Date().getFullYear()} Jormelia Soft. Trive es un producto de{' '}
          <a href="https://jormeliasoft.com" target="_blank" rel="noreferrer" className="font-semibold text-text-secondary hover:text-trive-primary">
            Jormelia Soft
          </a>{' '}
          y es una plataforma de reserva de cupos que conecta conductores y pasajeros para compartir trayectos y gastos de viaje.
        </div>
      </div>
    </footer>
  )
}
