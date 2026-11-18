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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
        <path d="M6.734 0C1.804 0 0 1.803 0 6.733v10.535C0 22.198 1.803 24 6.734 24h10.529C22.193 24 24 22.197 24 17.268V6.733C24 1.803 22.197 0 17.266 0zM8 4h.565A3.439 3.439 0 0 0 12 7.435 3.439 3.439 0 0 0 15.435 4H16c0 2.206-1.794 4-4 4S8 6.206 8 4zm6.468 8h.52l.713 2.16.696-2.158h.66l-1.092 3.14h-.532l-.714-2.063-.714 2.063h-.528l-1.095-3.14h.678l.694 2.158zm6.236 0h.629v3.138h-.629zM2.666 12h.638v1.267h1.439V12h.637v3.142h-.637v-1.276h-1.44v1.276h-.637zm5.668 0h.637v1.772c0 .9-.496 1.417-1.36 1.417-.856 0-1.347-.507-1.347-1.39v-1.797H6.9v1.775c0 .524.255.805.719.805.46 0 .714-.273.714-.784zm2.344 0h.563l1.378 3.14H10.23l-.286.654h-.651zm6.893.002h2.312v.572H18.2v.643h1.16v.573H18.2v.777h1.744v.573H17.57zm-6.623.793-.48 1.124h.964z" />
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

            <div
              aria-disabled="true"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-6 py-3.5"
            >
              <span className="text-white/60">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.45-3.63c.84-1.013 1.401-2.428 1.245-3.834-1.207.052-2.662.805-3.53 1.818-.78.896-1.465 2.336-1.283 3.714 1.336.104 2.713-.676 3.566-1.698z" />
                </svg>
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-semibold text-white/60">Próximamente en</span>
                <span className="text-sm font-extrabold text-white/80">iOS</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
