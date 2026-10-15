export function SupportBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-trive-tint px-6 py-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <img src="/illustrations/instant-support.svg" alt="" className="hidden h-12 w-auto shrink-0 sm:block" />
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
