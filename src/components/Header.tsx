import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#confianza', label: 'Confianza' },
  { href: '#preguntas', label: 'Preguntas frecuentes' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/trive-icon.png" alt="" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-extrabold tracking-tight text-text-primary">Trive</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={navHref(link.href)} className="text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-trive-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={navHref('#descarga')}
          className="hidden rounded-full bg-trive-primary px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark md:inline-block"
        >
          Descargar app
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border-subtle bg-surface px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href)}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-semibold text-text-secondary hover:bg-surface-alt hover:text-trive-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navHref('#descarga')}
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-trive-primary px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Descargar app
          </a>
        </nav>
      )}
    </header>
  )
}
