import type { ReactNode } from 'react'

export function LegalLayout({ title, subtitle, date, children }: { title: string; subtitle?: string; date: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <div className="text-center">
        <img src="/trive-icon.png" alt="" width={56} height={56} className="mx-auto rounded-2xl" />
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm font-bold text-trive-primary">Trive Technologies SAS</p>
        {subtitle && <p className="text-xs text-text-muted">{subtitle}</p>}
        <p className="text-xs text-text-muted">Última actualización: {date}</p>
      </div>

      <div className="mt-10 space-y-5">{children}</div>

      <div className="mt-8 flex items-center gap-3 rounded-2xl bg-trive-tint px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-trive-primary" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
        <div>
          <p className="text-xs font-bold text-text-secondary">Contacto</p>
          <a href="mailto:privacy@trive.co" className="text-sm font-bold text-trive-primary">privacy@trive.co</a>
        </div>
      </div>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-border-subtle bg-surface p-5">
      <h2 className="text-xs font-extrabold uppercase tracking-wide text-trive-primary">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-text-secondary">{children}</div>
    </section>
  )
}
