export function SupportBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-trive-tint px-6 py-5 text-center sm:flex-row sm:text-left">
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
        <a
          href="mailto:privacy@trivesoft.com"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-xs font-bold text-trive-primary shadow-sm transition-colors duration-200 hover:bg-trive-primary hover:text-white"
        >
          Escríbenos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
