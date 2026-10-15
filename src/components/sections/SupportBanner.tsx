export function SupportBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid items-center gap-8 rounded-3xl border border-border-subtle bg-surface p-8 sm:p-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">¿Tienes otra duda?</h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Escríbenos directamente y te respondemos lo antes posible.
          </p>
          <a
            href="mailto:privacy@trivesoft.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-trive-primary px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark"
          >
            Escríbenos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <img src="/illustrations/instant-support.svg" alt="" className="mx-auto w-full max-w-xs" />
      </div>
    </section>
  )
}
