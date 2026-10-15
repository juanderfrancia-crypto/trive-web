export function Hero() {
  return (
    <section className="relative overflow-hidden bg-trive-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-trive-light/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-trive-darkest/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-28 pt-20 sm:px-8 sm:pb-36 sm:pt-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Puerto Tejada ↔ Cali
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Comparte tu ruta.
            <br />
            Comparte el gasto.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Trive conecta a personas que ya van a hacer un trayecto con otras que quieren ir al mismo lugar, para repartir entre todos el costo del viaje.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#descarga"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-trive-primary transition-transform duration-200 hover:scale-[1.03]"
            >
              Descargar app
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <img src="/illustrations/order-ride.svg" alt="" className="w-full" />
          <div className="absolute -bottom-6 left-1/2 w-full max-w-[280px] -translate-x-1/2 sm:-bottom-10 sm:left-0 sm:translate-x-0">
            <RouteCardMock />
          </div>
        </div>
      </div>
    </section>
  )
}

function RouteCardMock() {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-[0_32px_64px_-12px_rgba(8,45,102,0.45)]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-trive-tint px-2.5 py-1 text-[11px] font-bold text-trive-primary">Hoy · 6:30 a.m.</span>
        <span className="text-[11px] font-semibold text-text-muted">3 puestos</span>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="flex flex-col items-center pt-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-trive-primary" />
          <span className="my-1 h-10 w-px bg-border-subtle" />
          <span className="h-2.5 w-2.5 rounded-full border-2 border-trive-primary bg-white" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-sm font-bold text-text-primary">Puerto Tejada</p>
            <p className="text-xs text-text-muted">Punto de encuentro acordado</p>
          </div>
          <div className="mt-3">
            <p className="text-sm font-bold text-text-primary">Cali</p>
            <p className="text-xs text-text-muted">Terminal · Centro</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-surface-alt px-3.5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-trive-primary text-xs font-bold text-white">JD</span>
          <div>
            <p className="text-xs font-bold text-text-primary">Juan D.</p>
            <p className="flex items-center gap-1 text-[11px] text-text-muted">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6L12 2Z" />
              </svg>
              4.9 · Verificado
            </p>
          </div>
        </div>
        <span className="text-sm font-extrabold text-trive-primary">$18.000</span>
      </div>
    </div>
  )
}
