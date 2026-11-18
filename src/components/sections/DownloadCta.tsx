const STORES = [
  {
    name: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.trivesoft.app',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 2.5c-.4.3-.6.8-.6 1.4v16.2c0 .6.2 1.1.6 1.4l9.2-9.5-9.2-9.5Z" fill="#00D9FF" />
        <path d="M17 9.3 13.7 12l3.3 2.7 4-2.3c.7-.4.7-1.2 0-1.6l-4-2.5Z" fill="#FFD400" />
        <path d="M4.5 2.5 13.7 12l3.3-2.7-11.2-7Z" fill="#00F076" />
        <path d="M4.5 21.5 13.7 12l3.3 2.7-11.2 7Z" fill="#FF3A44" />
      </svg>
    ),
  },
  {
    name: 'AppGallery',
    href: 'https://appgallery.huawei.com/app/C119651811',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="3" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
]

export function DownloadCta() {
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
        <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-[0_32px_64px_-12px_rgba(8,45,102,0.45)] lg:order-1">
          <div className="grid h-full grid-cols-2">
            <img src="/photos/download-left.jpg" alt="" className="h-full w-full object-cover" />
            <img src="/photos/download-right.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="text-center lg:order-2 lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Ya disponible
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.25)] sm:text-4xl">Descarga Trive y empieza a viajar</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 sm:mx-0 sm:text-lg mx-auto">
            Disponible para Android en Google Play y Huawei AppGallery. Busca tu ruta o publica la tuya en minutos.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            {STORES.map((store) => (
              <a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 shadow-[0_24px_48px_-16px_rgba(8,45,102,0.45)] transition-transform duration-200 hover:scale-[1.03]"
              >
                <span className="text-trive-primary">{store.icon}</span>
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-semibold text-text-secondary">Disponible en</span>
                  <span className="text-sm font-extrabold text-text-primary">{store.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
